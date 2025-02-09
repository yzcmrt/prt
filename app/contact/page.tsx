"use client";
import React, { useState, useRef } from "react";

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        if (formRef.current) {
          formRef.current.reset();
        }
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      console.error("Form gönderimi başarısız:", error);
    }
  };

  const buttonStyles = {
    idle: "bg-gray-500 hover:bg-gray-600",
    success: "bg-green-500 hover:bg-green-600",
    error: "bg-red-500 hover:bg-red-600"
  };

  return (
    <section className="max-w-xl mx-auto py-8 relative">
      <h1 className="mb-8 text-2xl font-medium tracking-tight">İletişim Formu</h1>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="hidden" 
          name="access_key" 
          value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
        />

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            İsim
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Mesajınız
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className={`w-full ${buttonStyles[submitStatus]} text-white py-2 px-4 rounded-md transition-colors duration-300`}
        >
          Gönder
        </button>
      </form>
    </section>
  );
}
