// 'use client';
// import React from 'react';
// import { 
//   ChevronRight, Search, Mail, MessageCircle, 
//   HelpCircle, ArrowRight, Sparkles
// } from 'lucide-react';

// const allFaqs = [
//   {
//     category: 'General',
//     faqs: [
//       { question: 'What is ICLEAS 2026?', answer: 'The International Conference on Life, Environmental, and Applied Sciences (ICLEAS) 2026 is a premier interdisciplinary platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in the fields of Life, Environmental, and Applied Sciences.' },
//       { question: 'When & where is the conference?', answer: 'ICLEAS 2026 is scheduled for June 25–26, 2026. It is a fully online conference, so you can attend from anywhere in the world.' },
//       { question: 'Is the conference virtual or in-person?', answer: 'The conference is 100% virtual, hosted on our state-of-the-art online platform.' },
//       { question: 'Who should attend?', answer: 'Academics, researchers, students, industry professionals, and policymakers interested in the fields of life sciences, environmental studies, and applied technologies.' },
//     ],
//   },
//   {
//     category: 'Submissions & Papers',
//     faqs: [
//       { question: 'When is the submission deadline?', answer: 'The abstract submission deadline is March 31, 2026. Please see the Important Dates page for the full timeline.' },
//       { question: 'What are the format requirements for papers?', answer: 'Papers should be 8-10 pages long, formatted according to the templates provided on the Call for Papers page. The required format is PDF.' },
//       { question: 'How long does the peer review process take?', answer: 'The double-blind peer review process typically takes 2-3 weeks after the submission deadline.' },
//       { question: 'What if my paper is rejected?', answer: 'You will receive constructive feedback from the reviewers, which you can use to improve your paper for submission to other conferences or journals.' },
//       { question: 'Is there a submission fee?', answer: 'No, there is no fee for submitting a paper to ICLEAS 2026.' },
//       { question: 'Can I submit multiple papers?', answer: 'Yes, you can submit more than one paper. However, if multiple papers are accepted, a separate registration fee is required for each paper.' },
//     ],
//   },
//   {
//     category: 'Registration & Ticketing',
//     faqs: [
//       { question: 'How do I register for the conference?', answer: 'You can register through the "Registration" page on our website. Simply choose your category and follow the payment instructions.' },
//       { question: "What are the registration fees?", answer: "We have different registration tiers for Students, Academics/Professionals, Industry participants, and Listeners. Please check the Registration page for detailed pricing." },
//       { question: 'Can I get an invoice for my registration?', answer: 'Yes, an invoice will be automatically sent to your registered email address after payment. You can also request a detailed invoice during the registration process.' },
//       { question: "What's included in the registration fee?", answer: "Registration includes access to all live sessions, recorded sessions for 30 days post-conference, digital conference proceedings, and a certificate of attendance or presentation." },
//       { question: "What is the cancellation policy?", answer: "You can receive a full refund (minus a processing fee) if you cancel before May 25, 2026. No refunds are available after this date. Please see our Refund Policy page for full details." },
//       { question: 'Can I transfer my registration?', answer: 'Yes, you can transfer your registration to another person. Please contact our support team with the details of the new attendee at least one week before the conference begins.' },
//     ],
//   },
//   {
//     category: 'Virtual Attendance',
//     faqs: [
//       { question: 'How do I join the virtual conference?', answer: 'A unique link to access the virtual platform will be emailed to all registered participants one week before the conference starts.' },
//       { question: 'Will the conference sessions be recorded?', answer: 'Yes, all sessions will be recorded and made available to registered attendees for 30 days following the conference.' },
//       { question: 'Can I ask questions and interact during sessions?', answer: 'Absolutely. Our platform includes a live Q&A feature and chat functionality for interaction.' },
//       { question: 'What happens if my internet connection drops?', answer: 'You can rejoin the session at any time using your access link. Since sessions are recorded, you can catch up on anything you missed.' },
//       { question: 'Can I attend specific sessions only?', answer: 'Yes, your registration gives you the flexibility to join any session you are interested in throughout the conference.' },
//     ],
//   },
//   {
//     category: 'Technical',
//     faqs: [
//       { question: 'What are the technical requirements to attend?', answer: 'A stable internet connection (5 Mbps recommended), a modern web browser (Chrome, Firefox, Safari, or Edge), and a computer or tablet. A desktop or laptop is recommended for the best experience.' },
//       { question: 'Which web browsers are supported?', answer: 'The latest versions of Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge are all supported.' },
//       { question: 'How do I get my certificate of attendance/presentation?', answer: 'Certificates will be available for download from your participant dashboard after the conference concludes.' },
//       { question: 'Who do I contact if I have technical issues during the event?', answer: 'We will have a live technical support team available via email and chat during the conference. Contact details will be provided on the virtual platform.' },
//     ],
//   },
//   {
//     category: 'Other',
//     faqs: [
//       { question: 'Is accommodation provided for this conference?', answer: 'As ICLEAS 2026 is a fully online event, no accommodation is required or provided.' },
//       { question: 'Do you offer travel grants?', answer: 'Since the conference is virtual, there are no travel grants.' },
//       { question: 'Can my company sponsor the conference?', answer: 'Yes, we have several sponsorship opportunities available. Please contact us at partners@icleas2026.org for more information.' },
//     ],
//   }
// ];

// export default function FaqPage() {
//   const [searchTerm, setSearchTerm] = React.useState('');
//   const [openFaq, setOpenFaq] = React.useState<string | null>(null);

//   const filteredFaqs = allFaqs.map(category => ({
//     ...category,
//     faqs: category.faqs.filter(faq =>
//       faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   })).filter(category => category.faqs.length > 0);

//   return (
//     <div className="flex flex-col bg-white">
//       {/* Hero Section */}
//       <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(52,211,153,0.2),rgba(255,255,255,0))]"></div>
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
//         </div>
        
//         <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
//         <div className="relative z-10 container mx-auto px-4 py-24">
//           <div className="max-w-5xl mx-auto">
//             <div className="flex items-center gap-2 text-emerald-200 mb-8 justify-center">
//               <span className="hover:text-white cursor-pointer transition-colors">Home</span>
//               <ChevronRight className="w-4 h-4" />
//               <span className="text-white font-medium">FAQ</span>
//             </div>
            
//             <div className="text-center space-y-6">
//               <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-4">
//                 <HelpCircle className="w-5 h-5 text-blue-300" />
//                 <span className="text-sm text-blue-200 font-bold uppercase tracking-wider">Get Your Answers</span>
//               </div>
              
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
//                 Frequently Asked <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Questions</span>
//               </h1>
              
//               <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto font-light leading-relaxed">
//                 Find quick answers to common questions about ICLEAS 2026
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="space-y-0">
        
//         {/* Search Section */}
//         <section className="bg-white py-16">
//           <div className="container mx-auto px-4">
//             <div className="max-w-3xl mx-auto">
//               <div className="relative">
//                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
//                 <input
//                   type="search"
//                   placeholder="Search for a question..."
//                   className="w-full pl-16 pr-6 py-5 text-lg border-2 border-slate-200 rounded-2xl focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//               {searchTerm && (
//                 <p className="mt-4 text-center text-slate-600">
//                   {filteredFaqs.reduce((acc, cat) => acc + cat.faqs.length, 0)} results found
//                 </p>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* FAQ Categories Section */}
//         <section className="bg-gradient-to-b from-white to-emerald-50 py-24 md:py-32">
//           <div className="container mx-auto px-4">
//             <div className="max-w-5xl mx-auto">
//               {filteredFaqs.length > 0 ? (
//                 <div className="space-y-16">
//                   {filteredFaqs.map((category, catIndex) => (
//                     <div key={category.category}>
//                       {/* Category Header */}
//                       <div className="mb-8">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
//                           <MessageCircle className="w-4 h-4 text-emerald-700" />
//                           <span className="text-sm font-bold text-emerald-900 uppercase tracking-wider">
//                             {category.category}
//                           </span>
//                         </div>
//                         <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
//                           {category.category} Questions
//                         </h2>
//                       </div>
                      
//                       {/* FAQ Items */}
//                       <div className="space-y-4">
//                         {category.faqs.map((faq, faqIndex) => {
//                           const uniqueId = `${catIndex}-${faqIndex}`;
//                           const isOpen = openFaq === uniqueId;
                          
//                           return (
//                             <div 
//                               key={faqIndex} 
//                               className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-emerald-300 transition-all"
//                             >
//                               <button
//                                 onClick={() => setOpenFaq(isOpen ? null : uniqueId)}
//                                 className="w-full p-6 text-left hover:bg-slate-50 transition-all flex items-start justify-between gap-4"
//                               >
//                                 <div className="flex items-start gap-4 flex-1">
//                                   <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
//                                     <HelpCircle className="w-5 h-5 text-emerald-600" />
//                                   </div>
//                                   <span className="font-bold text-slate-900 text-lg flex-1 pt-1">
//                                     {faq.question}
//                                   </span>
//                                 </div>
//                                 <ChevronRight 
//                                   className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 mt-2 ${
//                                     isOpen ? 'rotate-90' : ''
//                                   }`} 
//                                 />
//                               </button>
//                               {isOpen && (
//                                 <div className="px-6 pb-6 pt-2">
//                                   <div className="ml-14">
//                                     <div className="h-px bg-slate-200 mb-4"></div>
//                                     <p className="text-slate-600 leading-relaxed">
//                                       {faq.answer}
//                                     </p>
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-20">
//                   <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-6">
//                     <Search className="w-10 h-10 text-slate-400" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-slate-900 mb-2">No Results Found</h3>
//                   <p className="text-slate-600">Try searching with different keywords</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* Still Have Questions CTA */}
//         <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
//           <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
          
//           <div className="relative z-10 container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 mb-8">
//                 <Mail className="w-10 h-10 text-white" />
//               </div>
              
//               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//                 Still Have Questions?
//               </h2>
              
//               <p className="text-xl text-slate-700 leading-relaxed mb-8 max-w-2xl mx-auto">
//                 If you can't find the answer you're looking for, please don't hesitate to reach out to our team. We're here to help!
//               </p>
              
//               <button className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg hover:from-emerald-500 hover:to-teal-500 transition-all shadow-2xl inline-flex items-center gap-2">
//                 <Mail className="w-5 h-5" />
//                 Contact Us
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Quick Links */}
//         <section className="bg-white py-20">
//           <div className="container mx-auto px-4">
//             <div className="max-w-6xl mx-auto">
//               <div className="text-center mb-12">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
//                   <Sparkles className="w-5 h-5 text-slate-600" />
//                   <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Helpful Resources</span>
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
//                   Explore More
//                 </h2>
//               </div>
              
//               <div className="grid md:grid-cols-3 gap-6">
//                 {[
//                   { title: "Call for Papers", desc: "Submit your research", link: "/call-for-papers" },
//                   { title: "Important Dates", desc: "View all deadlines", link: "/dates" },
//                   { title: "Registration", desc: "Register for the conference", link: "/registration" }
//                 ].map((item, idx) => (
//                   <div 
//                     key={idx}
//                     className="group bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all cursor-pointer"
//                   >
//                     <h3 className="text-xl font-bold text-slate-900 mb-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-slate-600 mb-4">{item.desc}</p>
//                     <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
//                       Learn More
//                       <ArrowRight className="w-4 h-4" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Final CTA */}
//         <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 overflow-hidden">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
//           <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
          
//           <div className="relative z-10 container mx-auto px-4 text-center">
//             <div className="max-w-4xl mx-auto space-y-8">
//               <h2 className="text-4xl md:text-5xl font-bold text-white">
//                 Ready to Join ICLEAS 2026?
//               </h2>
//               <p className="text-xl text-teal-200">
//                 Register now and be part of groundbreaking scientific discussions
//               </p>
//               <div className="flex flex-wrap justify-center gap-4 pt-4">
//                 <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl">
//                   Register Now
//                 </button>
//                 <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
//                   Submit Paper
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }


















// src/app/faq/page.tsx
// This page has client-side interactivity (search + accordion state)
// We split it: metadata in page.tsx + interactive content in ClientContent.tsx

import { Metadata } from 'next';
import ClientContent from './ClientContent';

export const metadata: Metadata = {
  title: 'FAQ ICLEAS 2026 | Frequently Asked Questions – Conference, Submission & Registration',
  description: 'Find answers to common questions about ICLEAS 2026 – the international online conference on life sciences, environmental sciences, applied sciences, biotechnology & sustainability. Covers submission deadlines, registration fees, virtual attendance, certificates, and more.',
  keywords: 'ICLEAS 2026 FAQ, conference FAQ, paper submission questions, registration FAQ ICLEAS, virtual conference FAQ, important dates ICLEAS 2026, student discount conference, refund policy FAQ',
};

export default function FaqPage() {
  return <ClientContent />;
}