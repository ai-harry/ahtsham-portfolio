"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { EMAIL, socials } from "@/src/data/links";

const EMAILJS_SERVICE_ID  = "service_gzc5e2o";
const EMAILJS_TEMPLATE_ID = "template_gg471li";
const EMAILJS_PUBLIC_KEY  = "a4_Kqc_edGvmyDanj";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-item", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
      });

      gsap.from(".reveal-item-right", {
        x: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(formRef.current);
      formData.append("service_id", EMAILJS_SERVICE_ID);
      formData.append("template_id", EMAILJS_TEMPLATE_ID);
      formData.append("user_id", EMAILJS_PUBLIC_KEY);

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div ref={containerRef} className="min-h-[100dvh] bg-[#FAFAFA] text-[#111111] flex flex-col pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 relative overflow-hidden">

      {/* Background ambient lighting */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#FF5C39] opacity-[0.1] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#E64B2C] opacity-[0.08] blur-[80px] pointer-events-none" />

      {/* Main Grid Layout */}
      <div className="flex-1 grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 max-w-6xl xl:max-w-7xl mx-auto w-full px-5 sm:px-6 md:px-10 lg:px-16 items-start md:items-center relative z-10">

        {/* Left Typography Side */}
        <div className="flex flex-col justify-center max-w-xl xl:max-w-2xl">
          <div className="reveal-item flex items-center gap-3 mb-5 md:mb-6">
            <span className="block w-10 h-px bg-[#FF5C39]" />
            <span className="font-space text-xs font-bold uppercase tracking-[0.2em] text-[#FF5C39]">
              Get in Touch
            </span>
          </div>

          <h1 className="reveal-item font-corpta text-[2.2rem] sm:text-5xl lg:text-[3.7rem] font-medium uppercase tracking-tighter text-[#111111] leading-[1.02] mb-5 md:mb-6">
            LET&apos;S CUT<br />
            <span className="text-[#FF5C39]">SOMETHING</span><br />
            WORTH WATCHING.
          </h1>

          <p className="reveal-item font-sans text-[0.98rem] md:text-[1.06rem] text-[#555555] leading-relaxed max-w-[31rem] mb-8 md:mb-10">
            I take on a few clients at a time. SaaS explainers, product launches, short-form ads, or a channel that is getting views but losing people halfway. That is the space I work in.
            <br /><br />
            Send a note with a link to what you are making. I read every one.
          </p>

          {/* Contact Details */}
          <div className="reveal-item flex flex-col gap-5 md:gap-6">
            <div>
              <h3 className="font-space text-[10px] font-bold uppercase tracking-widest text-[#888888] mb-2">Email</h3>
              <a href={`mailto:${EMAIL}`} className="text-base sm:text-lg font-semibold hover:text-[#FF5C39] transition-colors break-all">
                {EMAIL}
              </a>
            </div>
            <div>
              <h3 className="font-space text-[10px] font-bold uppercase tracking-widest text-[#888888] mb-2">Socials</h3>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#555555] hover:text-[#111111] transition-colors font-medium">{s.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="relative flex justify-end h-full">
          <div className="w-full max-w-xl md:ml-auto">

            {isSubmitted ? (
              <div className="reveal-item-right bg-white p-8 sm:p-10 md:p-12 rounded-3xl border border-[#E5E5E5] shadow-xl flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FF5C39]/10 text-[#FF5C39] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-space text-3xl font-black uppercase tracking-tight text-[#111111] mb-3">Message Sent!</h2>
                <p className="text-[#555555] mb-8 text-base leading-relaxed max-w-sm">
                  Thanks, I&apos;ll reply within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-[#111111] hover:bg-[#333333] text-white transition-colors rounded-full font-space text-[10px] font-bold uppercase tracking-widest"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="reveal-item-right bg-white/70 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl border border-[#E5E5E5] shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col gap-4 md:gap-5"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-space text-[10px] font-bold uppercase tracking-widest text-[#555555]">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg px-4 py-3.5 text-[#111111] focus:outline-none focus:border-[#FF5C39] focus:ring-1 focus:ring-[#FF5C39] transition-all disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-space text-[10px] font-bold uppercase tracking-widest text-[#555555]">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg px-4 py-3.5 text-[#111111] focus:outline-none focus:border-[#FF5C39] focus:ring-1 focus:ring-[#FF5C39] transition-all disabled:opacity-50"
                    placeholder="Where I can reach you"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-space text-[10px] font-bold uppercase tracking-widest text-[#555555]">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg px-4 py-3.5 text-[#111111] focus:outline-none focus:border-[#FF5C39] focus:ring-1 focus:ring-[#FF5C39] transition-all resize-none disabled:opacity-50"
                    placeholder="What are you making? Drop a link."
                  />
                </div>

                {/* Inline error message */}
                {error && (
                  <p className="text-sm text-red-500 font-space">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-3 w-full bg-[#FF5C39] hover:bg-[#E64B2C] text-[#111111] font-space font-bold uppercase tracking-widest text-[11px] rounded-lg px-6 py-4 transition-transform duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] shadow-md"
                >
                  {isSubmitting ? "Sending..." : "Send it over"}
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}