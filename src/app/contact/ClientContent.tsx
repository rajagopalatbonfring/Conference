"use client";

import { useState, FormEvent } from "react";
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  User,
  Building,
  MessageSquare,
  Leaf,
  Globe,
  MessageCircle,
} from "lucide-react";

// ────────────────────────────────────────────────
// Types (unchanged)
interface FormState {
  name: string;
  email: string;
  phone: string;
  organization: string;
  subject: string;
  message: string;
  subscribe: boolean;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

// ────────────────────────────────────────────────
// Main Component – your exact original design + SEO text updates only
export default function ClientContent() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
    subscribe: false,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (your original logic)
    setTimeout(() => {
      setSubmitStatus({
        success: true,
        message:
          "Thank you for contacting ICLEAS 2026! We will respond within 24-48 hours.",
      });
      setIsSubmitting(false);

      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        organization: "",
        subject: "",
        message: "",
        subscribe: false,
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section – your exact design + SEO-rich text */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center gap-2 text-emerald-200 mb-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Contact ICLEAS 2026</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">Conference Support Team</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Contact ICLEAS 2026 Team
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
              Reach out for help with paper submission, registration, sponsorship, technical issues, or any questions about the online international conference on life, environmental & applied sciences – July 23–24, 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section – your exact grid & design */}
      <section className="relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Info Card – your exact original */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 rounded-3xl p-10 shadow-2xl h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

                  <div className="relative z-10 space-y-8">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                        <Leaf className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-white font-medium">Conference Support</span>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-3">Contact Information</h2>
                      <p className="text-teal-200 leading-relaxed">
                        Questions about ICLEAS 2026? Reach our team for submission, registration, sponsorship, or general inquiries.
                      </p>
                    </div>

                    <div className="space-y-6 pt-4">
                      {/* Email */}
                      <div className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all">
                          <Mail className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-emerald-300 mb-1">Email Us</div>
                          <a
                            href="mailto:info@icleas2026.org"
                            className="text-white hover:text-emerald-300 transition-colors font-medium"
                          >
                            info@icleas2026.org
                          </a>
                          <div className="text-sm text-teal-300 mt-1">Usually reply within 24 hours</div>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all">
                          <Phone className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-emerald-300 mb-1">Call Us</div>
                          <div className="text-white font-medium">+91-1234567890</div>
                          <div className="text-sm text-teal-300 mt-1">Mon–Fri, 9 AM – 6 PM IST</div>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all">
                          <MapPin className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-emerald-300 mb-1">Our Location</div>
                          <div className="text-white leading-relaxed">
                            ScientiaForum<br />
                            Coimbatore, Tamil Nadu, India
                          </div>
                        </div>
                      </div>

                      {/* Office Hours */}
                      <div className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all">
                          <Clock className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-emerald-300 mb-1">Working Hours</div>
                          <div className="text-white">Monday - Friday</div>
                          <div className="text-teal-300">9:00 AM - 6:00 PM IST</div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats – your exact original */}
                    <div className="pt-8 border-t border-white/10">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-1">24h</div>
                          <div className="text-xs text-teal-300">Avg Response Time</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-1">24/7</div>
                          <div className="text-xs text-teal-300">Email Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form – your exact original form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-emerald-100">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-4">
                      <Send className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-bold text-slate-900">Send Your Inquiry</span>
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-3">Get in Touch</h2>
                    <p className="text-lg text-slate-600">
                      Questions about ICLEAS 2026 – paper submission, registration, sponsorship, or anything else? Fill out the form below.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-bold text-slate-900">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Your Full Name"
                            required
                            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold text-slate-900">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone and Organization Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-bold text-slate-900">
                          Phone <span className="text-slate-400 text-xs">(Optional)</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="organization" className="block text-sm font-bold text-slate-900">
                          Organization / University <span className="text-slate-400 text-xs">(Optional)</span>
                        </label>
                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            id="organization"
                            name="organization"
                            value={formState.organization}
                            onChange={handleChange}
                            placeholder="Your University / Organization"
                            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-bold text-slate-900">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none z-10" />
                        <select
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors appearance-none bg-white cursor-pointer"
                        >
                          <option value="">Select subject</option>
                          <option value="General">General Inquiry</option>
                          <option value="Submission">Paper Submission Help</option>
                          <option value="Registration">Registration Support</option>
                          <option value="Technical">Technical / Platform Issue</option>
                          <option value="Sponsorship">Sponsorship / Collaboration</option>
                          <option value="Other">Other Questions</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-bold text-slate-900">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your inquiry – paper submission, registration, sponsorship, or anything else..."
                        rows={6}
                        required
                        minLength={50}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                      />
                      <div className="text-xs text-slate-500 text-right">
                        Minimum 50 characters
                      </div>
                    </div>

                    {/* Subscribe Checkbox */}
                    <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-100">
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="subscribe"
                          name="subscribe"
                          checked={formState.subscribe}
                          onChange={handleChange}
                          className="w-5 h-5 mt-0.5 rounded border-2 border-emerald-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer"
                        />
                        <label htmlFor="subscribe" className="text-sm text-slate-700 cursor-pointer">
                          <span className="font-semibold">Subscribe to ICLEAS 2026 updates</span>
                          <span className="block text-xs text-slate-600 mt-1">
                            Get important dates, speaker announcements & call for papers notifications
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Success Message */}
                    {submitStatus?.success && (
                      <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-emerald-900 mb-1">Message Sent Successfully!</div>
                            <div className="text-sm text-emerald-700">{submitStatus.message}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Your Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section – your exact original */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quick Response</h3>
              <p className="text-slate-600">Average response within 24 hours</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Global Reach</h3>
              <p className="text-slate-600">Supporting participants worldwide</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-500 to-green-500 mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Dedicated Support</h3>
              <p className="text-slate-600">Expert team ready to assist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA – your exact original */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Still Have Questions?
            </h2>
            <p className="text-xl text-teal-200">
              Check our FAQ section or explore other pages for more information
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl">
                View FAQs
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Submit a Paper
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}