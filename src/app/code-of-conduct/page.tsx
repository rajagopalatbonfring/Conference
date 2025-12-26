import React from 'react';
import { 
  ChevronRight, Heart, Users, CheckCircle, XCircle, 
  AlertTriangle, Mail, Shield, Award, MessageCircle 
} from 'lucide-react';

export default function CodeOfConductPage() {
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
              <span className="text-white font-medium">Code of Conduct</span>
            </div>
            
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-500/20 backdrop-blur-sm border border-rose-400/30 mb-4">
                <Heart className="w-5 h-5 text-rose-300" />
                <span className="text-sm text-rose-200 font-bold uppercase tracking-wider">Safe & Inclusive</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Code of <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Conduct</span>
              </h1>
              
              <p className="text-lg md:text-xl text-teal-100 leading-relaxed max-w-3xl mx-auto">
                Our commitment to a safe, respectful, and inclusive environment for all participants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gradient-to-b from-white to-emerald-50 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Our Pledge */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Our Pledge</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  We, the organizers of ICLEAS 2026, are dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of conference participants in any form.
                </p>
              </div>
            </div>

            {/* Expected Behavior */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Expected Behavior</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  All participants are expected to be respectful and considerate of others. This includes:
                </p>
                
                <div className="space-y-4">
                  {[
                    "Being professional and courteous in all communications.",
                    "Valuing a diversity of views and opinions.",
                    "Being considerate in your speech and actions.",
                    "Refraining from demeaning, discriminatory, or harassing behavior and speech."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-100">
                      <p className="text-slate-700 leading-relaxed pt-0.5">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Unacceptable Behavior */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Unacceptable Behavior</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Unacceptable behaviors include, but are not limited to:
                </p>
                
                <div className="space-y-4">
                  {[
                    "Intimidating, harassing, abusive, discriminatory, derogatory or demeaning conduct.",
                    "Offensive verbal comments related to gender, sexual orientation, race, religion, or disability.",
                    "Use of sexualized images, language, or any form of sexual attention.",
                    "Disruption of talks or other events."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border border-red-200">

                      <p className="text-slate-700 leading-relaxed pt-0.5">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reporting */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Reporting</h2>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border-2 border-amber-200">
                <div className="space-y-6">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of the conference staff immediately. All reports will be handled confidentially.
                  </p>
                  
                  <div className="flex items-center gap-4 p-6 bg-white rounded-xl border border-amber-200">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Report Issues To:</p>
                      <a 
                        href="mailto:conduct@icleas.com" 
                        className="text-xl font-bold text-amber-700 hover:text-amber-800"
                      >
                        conduct@icleas.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consequences */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Consequences</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Participants asked to stop any harassing behavior are expected to comply immediately. If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.
                </p>
              </div>
            </div>

            {/* Commitment Banner */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
                  <p className="text-xl text-emerald-100 mb-6 leading-relaxed">
                    We are committed to making ICLEAS 2026 a welcoming, safe, and productive environment for all participants. By attending, you agree to abide by this Code of Conduct and help us create a positive experience for everyone.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="mailto:conduct@icleas.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-900 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Report an Issue
                    </a>
                    <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}