import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { HERO_DATA } from "../constants";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter State
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Roles to cycle through
  const roles = [
    HERO_DATA.role,
    "Programmer and Problem Solver",

  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      // Dynamic typing speed
      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        // Finished typing word, pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Particle configuration
    const particleColor = "rgba(148, 163, 184, 0.5)"; // slate-400 with opacity
    const lineColor = "rgba(148, 163, 184,"; // prefix for rgba
    const connectionDistance = 150;
    const moveSpeed = 0.5;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * moveSpeed;
        this.vy = (Math.random() - 0.5) * moveSpeed;
        this.size = Math.random() * 2 + 1;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const width = canvas.width;
      const height = canvas.height;
      // Calculate number of particles based on screen area (density)
      const numberOfParticles = Math.floor((width * height) / 15000);

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update(canvas.width, canvas.height);
        p.draw();

        // Check connections
        for (let j = i; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            // Opacity based on distance (closer = more opaque)
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `${lineColor} ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight; // Ensure it covers full viewport height if needed, or container height
      initParticles();
    };

    // Initial setup
    handleResize();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-slate-950 scroll-mt-28"
    >
      {/* Background Canvas for Connected Dots Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Subtle overlay to fade the edges if desired */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80 z-0 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center z-10">
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-primary text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available for hire
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {HERO_DATA.name}
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white tracking-wide h-10 md:h-12 flex items-center justify-center md:justify-start">
            <span className="typing-cursor">I am a {text}</span>
          </h2>

          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
            {HERO_DATA.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-primary to-secondary hover:from-sky-400 hover:to-indigo-400 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-1"
            >
              Contact Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href={HERO_DATA.resumeUrl}
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-base font-medium rounded-xl text-slate-300 bg-slate-900/80 hover:bg-slate-800 backdrop-blur-md transition-all hover:text-white transform hover:-translate-y-1"
            >
              Resume
              <Download className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative perspective-1000">
          {/* Profile Image with modern card styling - Circular and Smaller */}
          <div className="relative w-60 h-60 md:w-80 md:h-80 animate-float">
            {/* Abstract decorative elements behind */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-primary/20 to-secondary/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 bg-blue-500/20 rounded-full blur-2xl -z-10"></div>

            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl bg-slate-800/50 backdrop-blur-sm group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src="/images/Photo.jpg"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Decorative floating elements */}
            <div
              className="absolute bottom-4 -left-4 w-auto px-4 py-2 bg-slate-900/90 backdrop-blur-md rounded-full border border-slate-700/50 flex items-center gap-2 shadow-xl animate-bounce"
              style={{ animationDuration: "4s" }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-bold text-white">Open to Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
