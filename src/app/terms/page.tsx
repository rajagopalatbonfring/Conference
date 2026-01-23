// import React from 'react';
// import { 
//   ChevronRight, FileText, Users, DollarSign, Shield, 
//   Copyright, XCircle, Scale, Globe, Mail 
// } from 'lucide-react';

// export default function TermsAndConditionsPage() {
//   return (
//     <div className="flex flex-col bg-white">
//       {/* Hero Section */}
//       <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(52,211,153,0.2),rgba(255,255,255,0))]"></div>
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
//         </div>
        
//         <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
//         <div className="relative z-10 container mx-auto px-4 py-20">
//           <div className="max-w-4xl mx-auto">
//             <div className="flex items-center gap-2 text-emerald-200 mb-8 justify-center">
//               <span className="hover:text-white cursor-pointer transition-colors">Home</span>
//               <ChevronRight className="w-4 h-4" />
//               <span className="text-white font-medium">Terms & Conditions</span>
//             </div>
            
//             <div className="text-center space-y-6">
//               <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 mb-4">
//                 <FileText className="w-5 h-5 text-indigo-300" />
//                 <span className="text-sm text-indigo-200 font-bold uppercase tracking-wider">Legal Terms</span>
//               </div>
              
//               <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//                 Terms & <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Conditions</span>
//               </h1>
              
//               <p className="text-lg md:text-xl text-teal-100 leading-relaxed">
//                 Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="bg-gradient-to-b from-white to-emerald-50 py-24 md:py-32">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
            
//             {/* Acceptance of Terms */}
//             <div className="mb-16">
//               <div className="flex items-center gap-3 mb-6">
//                 <h2 className="text-3xl font-bold text-slate-900">1. Acceptance of Terms</h2>
//               </div>
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
//                 <p className="text-lg text-slate-700 leading-relaxed">
//                   By accessing or using the ICLEAS 2026 website and its services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of the terms, you may not access the service.
//                 </p>
//               </div>
//             </div>

//             {/* Conference Participation Rules */}
//             <div className="mb-16">
//               <div className="flex items-center gap-3 mb-6">
//                 <h2 className="text-3xl font-bold text-slate-900">2. Conference Participation Rules</h2>
//               </div>
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100">
//                 <p className="text-lg text-slate-700 leading-relaxed">
//                   All participants, including attendees, speakers, sponsors, and volunteers, are required to agree with the conference's Code of Conduct. We expect cooperation from all participants to help ensure a safe and respectful environment for everybody.
//                 </p>
//               </div>
//             </div>

//             {/* Cancellation & Refund Policy */}
//             <div className="mb-16">
//               <div className="flex items-center gap-3 mb-6">
//                 <h2 className="text-3xl font-bold text-slate-900">3. Cancellation & Refund Policy</h2>
//               </div>
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
//                 <p className="text-lg text-slate-700 leading-relaxed">
//                   All registration cancellations and refund requests must be made in writing as specified in our Refund Policy. Refunds will be processed according to the deadlines and terms outlined on that page.
//                 </p>
//               </div>
//             </div>

//             {/* Liability Limitations */}
//             <div className="mb-16">
//               <div className="flex items-center gap-3 mb-6">
//                 <h2 className="text-3xl font-bold text-slate-900">4. Liability Limitations</h2>
//               </div>
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
//                 <p className="text-lg text-slate-700 leading-relaxed">
//                   The organizers of ICLEAS 2026 (ScientiaForum) are not liable for any loss, injury, or damage to any person or property, however caused. The views expressed by speakers are their own and do not necessarily reflect the views of the conference organizers.
//                 </p>
//               </div>
//             </div>

//             {/* Intellectual Property Rights */}
//             <div className="mb-16">
//               <div className="flex items-center gap-3 mb-6">
//                 <h2 className="text-3xl font-bold text-slate-900">5. Intellectual Property Rights</h2>
//               </div>
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
//                 <p className="text-lg text-slate-700 leading-relaxed">
//                   Authors retain copyright of their work. By submitting a paper, authors grant the conference organizers a non-exclusive license to publish and distribute the work in the conference proceedings and other related materials. All other content on this website is the property of ScientiaForum and protected by copyright laws.
//                 </p>
//               </div>
//             </div>

//             {/* Termination Rights */}
//             <div className="mb-16">
//               <div className="flex items-center gap-3 mb-6">
//                 <h2 className="text-3xl font-bold text-slate-900">6. Termination Rights</h2>
//               </div>
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
//                 <p className="text-lg text-slate-700 leading-relaxed">
//                   The conference organizers reserve the right to refuse/cancel a registration at any time. If a registration is canceled by the organizers for reasons other than a violation of the Code of Conduct, a full refund will be issued.
//                 </p>
//               </div>
//             </div>

//             {/* Dispute Resolution */}
//             <div className="mb-16">
//               <div className="flex items-center gap-3 mb-6">
//                 <h2 className="text-3xl font-bold text-slate-900">7. Dispute Resolution</h2>
//               </div>
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-lime-100">
//                 <p className="text-lg text-slate-700 leading-relaxed">
//                   Any disputes arising out of or in connection with this conference shall be governed by and construed in accordance with the laws of the jurisdiction where ScientiaForum is registered.
//                 </p>
//               </div>
//             </div>

//             {/* Governing Law */}
//             <div className="mb-16">
//               <div className="flex items-center gap-3 mb-6">
//                 <h2 className="text-3xl font-bold text-slate-900">8. Governing Law</h2>
//               </div>
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100">
//                 <p className="text-lg text-slate-700 leading-relaxed">
//                   These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which ScientiaForum is based, without regard to its conflict of law provisions.
//                 </p>
//               </div>
//             </div>

//             {/* Contact Section */}
//             <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
//               <div className="flex items-start gap-6">
//                 <div className="flex-1">
//                   <h2 className="text-3xl font-bold mb-4">Contact for Legal Inquiries</h2>
//                   <p className="text-xl text-emerald-100 mb-4 leading-relaxed">
//                     For any legal questions or concerns regarding these terms, please contact us at:
//                   </p>
//                   <a 
//                     href="mailto:info@icleas2026.org" 
//                     className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-900 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all"
//                   >
//                     <Mail className="w-5 h-5" />
//                     info@icleas2026.org
//                   </a>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




















// src/app/terms-and-conditions/page.tsx
// This page is fully static (no forms, no useState, no client-side interactivity)
// We can safely place metadata directly here – no need to split into ClientContent.tsx

import { Metadata } from 'next';
import { ChevronRight, FileText, Mail, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions ICLEAS 2026 | Conference Participation Rules & Legal Terms',
  description: 'Read the full Terms & Conditions for ICLEAS 2026 – the international online conference on life, environmental & applied sciences organized by ScientiaForum. Includes registration, cancellation, refund policy, intellectual property, liability, and governing law.',
  keywords: 'ICLEAS 2026 terms and conditions, conference terms, registration policy ICLEAS, cancellation refund policy conference, intellectual property conference papers, liability limitations ICLEAS, ScientiaForum legal terms',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section – your exact original design + SEO-friendly text */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(52,211,153,0.2),rgba(255,255,255,0))]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9nVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-200 mb-8 justify-center">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Terms & Conditions ICLEAS 2026</span>
            </div>
            
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 mb-4">
                <FileText className="w-5 h-5 text-indigo-300" />
                <span className="text-sm text-indigo-200 font-bold uppercase tracking-wider">Conference Legal Terms</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Terms & <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Conditions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-teal-100 leading-relaxed">
                Last Updated: January 23, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section – your exact original structure + SEO text improvements */}
      <section className="bg-gradient-to-b from-white to-emerald-50 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* 1. Acceptance of Terms */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">1. Acceptance of Terms</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  By accessing, registering for, submitting papers to, or participating in ICLEAS 2026 (the International Conference on Life, Environmental & Applied Sciences), whether as an attendee, author, speaker, sponsor, reviewer, or committee member, you agree to be legally bound by these Terms and Conditions, our Privacy Policy, and Code of Conduct. If you do not agree with any part of these terms, you must not use the website or participate in the conference.
                </p>
              </div>
            </div>

            {/* 2. Conference Participation Rules */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">2. Conference Participation Rules & Code of Conduct</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  All participants in ICLEAS 2026 (online international conference) are required to adhere to our Code of Conduct. We are committed to providing a safe, respectful, inclusive, and harassment-free environment for everyone. This applies to all conference activities including virtual sessions, chats, networking, and communications.
                </p>
              </div>
            </div>

            {/* 3. Cancellation & Refund Policy */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">3. Cancellation & Refund Policy</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Registration cancellations and refund requests must be submitted in writing to registration@icleas2026.org. Full refunds (minus a $50 administrative processing fee) are available for cancellations received on or before May 25, 2026. No refunds will be issued after this date. Refunds are processed within 14 business days after approval.
                </p>
              </div>
            </div>

            {/* 4. Liability Limitations */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">4. Liability Limitations</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  ScientiaForum, the organizers of ICLEAS 2026, shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from participation in the conference, including but not limited to personal injury, loss of data, loss of income, or property damage. All participants attend at their own risk.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-4">
                  The views, opinions, and statements expressed by speakers, presenters, and participants are their own and do not necessarily reflect the views of the organizers.
                </p>
              </div>
            </div>

            {/* 5. Intellectual Property Rights */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">5. Intellectual Property Rights</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Authors retain the copyright to their submitted papers, presentations, and other original work. By submitting a paper or abstract to ICLEAS 2026, authors grant the organizers a non-exclusive, royalty-free, worldwide license to publish, reproduce, distribute, and display the work in the conference proceedings, website, and related promotional materials.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-4">
                  All other content on the ICLEAS 2026 website (including design, text, graphics, logos) remains the property of ScientiaForum and is protected by copyright and other intellectual property laws.
                </p>
              </div>
            </div>

            {/* 6. Termination Rights */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">6. Termination Rights</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  The conference organizers reserve the right to refuse, suspend, or cancel any registration, participation, or presentation at any time without prior notice, particularly in cases of violation of the Code of Conduct, terms of service, or applicable laws. In such cases, no refund will be provided.
                </p>
              </div>
            </div>

            {/* 7. Dispute Resolution */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">7. Dispute Resolution</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-lime-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Any dispute, controversy, or claim arising out of or in connection with these Terms & Conditions, registration, or participation in ICLEAS 2026 shall be resolved through good-faith negotiations. If unresolved, disputes shall be subject to binding arbitration in Coimbatore, India, in accordance with the rules of the relevant arbitration body.
                </p>
              </div>
            </div>

            {/* 8. Governing Law */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">8. Governing Law</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. The courts of Coimbatore, Tamil Nadu, India shall have exclusive jurisdiction over any legal proceedings.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Questions About These Terms?</h2>
                  <p className="text-xl text-emerald-100 mb-4 leading-relaxed">
                    For any legal questions, concerns, or clarification regarding these Terms & Conditions, please contact us at:
                  </p>
                  <a 
                    href="mailto:info@icleas2026.org" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-900 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    info@icleas2026.org
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