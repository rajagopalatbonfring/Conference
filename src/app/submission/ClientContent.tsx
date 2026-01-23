"use client"

import React, { useState } from 'react';
import { 
  ChevronRight, Download, Mail, FileText, Eye, 
  CheckCircle, AlertTriangle, Copy, Check, Send
} from 'lucide-react';

const SubmissionEmailCard = () => {
  const [copied, setCopied] = useState(false);
  const email = "submissions@icleas2026.org"; // Updated to match your other pages

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto mt-12">
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <Send className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Submit Your Paper via Email</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/20">
              <p className="text-2xl font-mono font-bold text-white">{email}</p>
            </div>
            <button 
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-900 rounded-xl font-bold hover:bg-emerald-50 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Copy Submission Email
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ClientContent() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section – your exact design + SEO text */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(52,211,153,0.2),rgba(255,255,255,0))]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9nVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-200 mb-8 justify-center">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Paper Submission ICLEAS 2026</span>
            </div>
            
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 mb-4">
                <FileText className="w-5 h-5 text-purple-300" />
                <span className="text-sm text-purple-200 font-bold uppercase tracking-wider">Call for Papers – Submit Now</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Paper <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Submission</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto font-light leading-relaxed">
                Submit your original research to ICLEAS 2026 – international online conference on life sciences, environmental sciences, biotechnology, sustainability & applied technologies
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-0">
        
        {/* Submission System Section – your exact original */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-900 uppercase tracking-wider">Simple Email Submission</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  How to Submit Your Paper
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  All submissions for ICLEAS 2026 must be sent via email to our conference secretariat. Follow the guidelines below to ensure smooth processing.
                </p>
              </div>
              
              <SubmissionEmailCard />
              
              <p className="mt-8 text-center text-slate-500">
                We are planning to integrate with EasyChair or CMT for future editions.
              </p>
            </div>
          </div>
        </section>

        {/* Paper Templates Section – your exact original */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-6">
                <Download className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-bold text-teal-900 uppercase tracking-wider">Download Templates</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Official Paper Templates
              </h2>
              
              <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
                Use our official templates to ensure your submission meets formatting requirements for double-blind peer review.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <button className="group px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-bold text-lg hover:from-emerald-500 hover:to-teal-500 transition-all shadow-2xl inline-flex items-center gap-3">
                  <Download className="w-6 h-6" />
                  Word Template
                </button>
                <button className="group px-10 py-5 bg-white border-2 border-emerald-200 text-slate-900 rounded-2xl font-bold text-lg hover:border-emerald-400 hover:shadow-xl transition-all inline-flex items-center gap-3">
                  <Download className="w-6 h-6 text-emerald-600" />
                  LaTeX Template
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Review Process Section – your exact original */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
                  <Eye className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-bold text-purple-900 uppercase tracking-wider">Rigorous Peer Review</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Double-Blind Peer Review Process
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  We ensure high-quality, fair evaluation of all submissions through a strict double-blind review process.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "Initial Screening",
                    desc: "Submissions checked for scope, formatting, plagiarism, and completeness.",
                    color: "from-emerald-500 to-teal-500"
                  },
                  {
                    step: "2",
                    title: "Peer Review",
                    desc: "Anonymous manuscripts reviewed by at least two independent experts.",
                    color: "from-teal-500 to-cyan-500"
                  },
                  {
                    step: "3",
                    title: "Final Decision",
                    desc: "Program committee makes accept/revise/reject decision based on reviews.",
                    color: "from-purple-500 to-pink-500"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-200 hover:border-emerald-300 h-full">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 transition-transform`}>
                        <span className="text-3xl font-bold text-white">{item.step}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Plagiarism Policy Section – your exact original */}
        <section className="bg-gradient-to-b from-red-50 to-orange-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-red-200">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-xl">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      Strict Plagiarism Policy
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      ICLEAS 2026 maintains a zero-tolerance policy toward plagiarism. All submissions are screened using professional tools (Turnitin/iThenticate). Papers exceeding 15% similarity (excluding references) will be rejected outright.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Submission Checklist – your exact original */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Submission Checklist
                </h2>
                <p className="text-xl text-slate-600">
                  Ensure your paper meets all requirements before emailing to submissions@icleas2026.org
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Formatted using official Word or LaTeX template",
                  "Abstract length: 250–500 words",
                  "Full paper length: 8–10 pages (excluding references)",
                  "All author details removed for double-blind review",
                  "References in correct IEEE style",
                  "High-resolution figures/tables with proper captions",
                  "Plagiarism check passed (similarity <15%)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-6 bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA – your exact original */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Submit Your Research to ICLEAS 2026?
              </h2>
              <p className="text-xl text-teal-200">
                Share your work in life sciences, environmental sustainability, biotechnology & applied technologies with a global audience
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Submit Your Paper
                </button>
                <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Template
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}