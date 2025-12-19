import React, { useState, useEffect } from 'react';
import { Mail, Send, Github, Linkedin, Twitter, Instagram, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validate form whenever data changes
  useEffect(() => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    
    // Check overall validity
    setIsFormValid(
      !newErrors.name && 
      !newErrors.email && 
      !newErrors.subject && 
      !newErrors.message &&
      formData.name !== '' &&
      formData.email !== '' &&
      formData.subject !== '' &&
      formData.message !== ''
    );
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Reset status when user starts typing again after an error
    if (submitStatus === 'error') setSubmitStatus('idle');
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) {
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using FormSubmit.co AJAX endpoint
      const response = await fetch("https://formsubmit.co/ajax/vishalsureshgaikwad115@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: `Portfolio Contact: ${formData.subject}`
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({ name: false, email: false, subject: false, message: false });
        // Optional: clear success message after a delay
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github': return <Github size={20} />;
      case 'Linkedin': return <Linkedin size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      case 'Instagram': return <Instagram size={20} />;
      default: return null;
    }
  };

  // Helper to render input classes based on error state
  const getInputClasses = (fieldName: keyof typeof errors) => {
    const hasError = touched[fieldName] && errors[fieldName];
    return `w-full px-4 py-3 bg-slate-900/50 border rounded-xl focus:ring-2 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none ${
      hasError 
        ? 'border-red-500/50 focus:ring-red-500/50' 
        : 'border-slate-700 focus:ring-primary'
    }`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden scroll-mt-28">
        {/* Background blobs for subtle effect - Updated colors */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Text & Info */}
          <div className="flex flex-col justify-center pt-8">
            <h3 className="text-primary font-semibold tracking-widest text-sm uppercase mb-6">
              Contact Me
            </h3>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary animate-gradient-x">
                remarkable
              </span>{" "}
              together.
            </h2>
            
            <p className="text-slate-400 text-lg mb-12 max-w-lg leading-relaxed">
              Whether you have an opportunity, a project idea, or would like to discuss how I can contribute to your team, my inbox is always open.
            </p>

            <div className="space-y-8">
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-primary border border-slate-800 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium mb-1">Mail me at</p>
                    <a href="mailto:vishalsureshgaikwad115@gmail.com" className="text-lg md:text-xl font-bold text-slate-200 group-hover:text-primary transition-colors">
                      vishalsureshgaikwad115@gmail.com
                    </a>
                  </div>
               </div>

               <div className="flex gap-4 pt-4">
                  {SOCIALS.map((social) => (
                    <a 
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/80 hover:-translate-y-1 transition-all duration-300 border border-slate-700"
                    >
                      {getSocialIcon(social.icon)}
                    </a>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-[#101423] p-6 md:p-10 rounded-3xl border border-slate-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClasses('name')}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {touched.name && errors.name && (
                    <div className="flex items-center gap-1 mt-2 text-red-500 text-xs">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClasses('email')}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                   {touched.email && errors.email && (
                    <div className="flex items-center gap-1 mt-2 text-red-500 text-xs">
                      <AlertCircle size={12} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses('subject')}
                  placeholder="Project Inquiry"
                  disabled={isSubmitting}
                />
                 {touched.subject && errors.subject && (
                    <div className="flex items-center gap-1 mt-2 text-red-500 text-xs">
                      <AlertCircle size={12} />
                      <span>{errors.subject}</span>
                    </div>
                  )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${getInputClasses('message')} resize-none`}
                  placeholder="Tell me about your vision..."
                  disabled={isSubmitting}
                ></textarea>
                 {touched.message && errors.message && (
                    <div className="flex items-center gap-1 mt-2 text-red-500 text-xs">
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </div>
                  )}
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-400">
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400">
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again or email me directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 px-6 font-bold text-lg rounded-xl transition-all transform flex items-center justify-center shadow-lg 
                  ${isFormValid && !isSubmitting
                    ? 'bg-gradient-to-r from-primary to-secondary hover:from-sky-400 hover:to-indigo-400 text-white hover:scale-[1.02] active:scale-[0.98] shadow-primary/25 cursor-pointer' 
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'}`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className={`mr-2 h-5 w-5 ${isFormValid ? '' : 'opacity-50'}`} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;