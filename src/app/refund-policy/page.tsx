import React from 'react';
import { ChevronRight, DollarSign, Calendar, XCircle, AlertCircle, Clock, Mail } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(52,211,153,0.2),rgba(255,255,255,0))]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-200 mb-8 justify-center">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Refund Policy</span>
            </div>
            
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 mb-4">
                <DollarSign className="w-5 h-5 text-green-300" />
                <span className="text-sm text-green-200 font-bold uppercase tracking-wider">Registration Cancellations</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Refund <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Policy</span>
              </h1>
              
              <p className="text-lg md:text-xl text-teal-100 leading-relaxed">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gradient-to-b from-white to-emerald-50 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* General Policy */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">1. General Policy</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  This policy outlines the terms and conditions for registration fee refunds for the International Conference on Life, Environmental & Applied Sciences (ICLEAS 2026).
                </p>
              </div>
            </div>

            {/* Cancellation by Registrant */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">2. Cancellation by Registrant</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  All refund requests must be made in writing and sent to the conference secretariat via email at{' '}
                  <a href="mailto:registration@icleas.com" className="text-teal-600 font-semibold hover:text-teal-700">
                    registration@icleas.com
                  </a>.
                </p>

                <div className="space-y-4">
                  {/* Full Refund */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Full Refund</h3>
                        <p className="text-slate-700 leading-relaxed">
                          Refund requests received on or before <strong>May 25, 2026</strong>, will be eligible for a full refund, minus a <strong>$50 administrative processing fee</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Partial Refund */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Partial Refund</h3>
                        <p className="text-slate-700 leading-relaxed">
                          No partial refunds will be granted.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* No Refund */}
                  <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border-2 border-red-200">
                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No Refund</h3>
                        <p className="text-slate-700 leading-relaxed">
                          Refund requests received after <strong>May 25, 2026</strong>, will not be eligible for a refund.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Attendance */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">3. Non-Attendance</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  No refunds will be given for non-attendance ("no-shows").
                </p>
              </div>
            </div>

            {/* Conference Cancellation */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">4. Conference Cancellation</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  In the unlikely event that ICLEAS 2026 is cancelled by the organizer, ScientiaForum, all registration fees will be fully refunded to registered participants.
                </p>
              </div>
            </div>

            {/* Processing Time */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">5. Processing Time</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  All approved refunds will be processed within <strong>30 days</strong> after the conclusion of the conference.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Have Questions About Refunds?</h2>
                  <p className="text-xl text-emerald-100 mb-4 leading-relaxed">
                    For all refund-related inquiries, please contact our registration team at:
                  </p>
                  <a 
                    href="mailto:registration@icleas.com" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-900 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    registration@icleas.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}