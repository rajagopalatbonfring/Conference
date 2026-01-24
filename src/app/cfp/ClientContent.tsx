// "use client";

// import React, { useState } from 'react';
// import {
//   ChevronRight, Download, FileText, Calendar, CheckCircle,
//   PawPrint, Fish, Leaf, Atom, Rocket, AlertCircle,
//   ArrowRight, Clock, Target, Award, BookOpen, Shield,
//   Users, Zap, Eye, MessageCircle
// } from 'lucide-react';

// const keyDetails = [
//   { detail: "Abstract / Full Paper Submission Deadline", value: "March 31, 2026 (23:59 GMT)", icon: Clock },
//   { detail: "Notification of Acceptance", value: "May 15, 2026", icon: Calendar },
//   { detail: "Camera-Ready Paper Deadline", value: "June 1, 2026", icon: Target },
//   { detail: "Paper Format", value: "PDF / DOCX (IEEE style recommended)", icon: FileText },
//   { detail: "Page Limit", value: "8-10 pages (excluding references)", icon: BookOpen },
//   { detail: "Abstract Length", value: "250-500 words", icon: MessageCircle },
// ];

// const tracks = [
//   { 
//     icon: PawPrint, 
//     title: "Animal Science & Veterinary Studies", 
//     topics: "Animal health, veterinary medicine, livestock management, animal biotechnology, welfare", 
//     keywords: "Animal genetics, disease prevention, veterinary diagnostics, livestock sustainability",
//     color: "from-emerald-500 to-teal-500"
//   },
//   { 
//     icon: Fish, 
//     title: "Aquatic Science & Fisheries", 
//     topics: "Aquaculture, marine biology, fisheries science, aquatic ecosystems", 
//     keywords: "Sustainable fisheries, marine conservation, water quality, aquaculture technology",
//     color: "from-cyan-500 to-blue-500"
//   },
//   { 
//     icon: Leaf, 
//     title: "Environmental & Natural Sciences", 
//     topics: "Climate change, biodiversity, ecology, environmental sustainability, pollution control", 
//     keywords: "Climate adaptation, ecosystem restoration, renewable energy, environmental policy",
//     color: "from-green-600 to-lime-600"
//   },
//   { 
//     icon: Atom, 
//     title: "Biochemical & Molecular Sciences", 
//     topics: "Biochemistry, molecular biology, genetics, biotechnology, genomics", 
//     keywords: "Proteomics, bioinformatics, genetic engineering, molecular diagnostics",
//     color: "from-teal-600 to-cyan-600"
//   },
//   { 
//     icon: Rocket, 
//     title: "Applied Science & Emerging Technologies", 
//     topics: "Applied research, AI in life sciences, green technologies, interdisciplinary innovations", 
//     keywords: "Sustainable biotechnology, machine learning in environmental science, smart agriculture",
//     color: "from-lime-600 to-emerald-600"
//   },
// ];

// const submissionSteps = [
//   { step: 1, title: "Register on Submission Portal", desc: "Create an account on our online submission system" },
//   { step: 2, title: "Enter Author & Paper Details", desc: "Provide accurate author information and paper metadata" },
//   { step: 3, title: "Upload Abstract", desc: "Submit your 250–500 word abstract for preliminary screening" },
//   { step: 4, title: "Submit Full Paper", desc: "After abstract acceptance, upload the complete manuscript" },
//   { step: 5, title: "Double-Blind Peer Review", desc: "Paper reviewed anonymously by 2–3 domain experts (2–3 weeks)" },
//   { step: 6, title: "Receive Review Decision", desc: "Get notification: Accept / Minor Revision / Major Revision / Reject" },
//   { step: 7, title: "Submit Camera-Ready Version", desc: "Revise (if required) and upload final accepted version" },
// ];

// const policies = [
//   {
//     title: "Plagiarism & Originality Policy",
//     content: "Submissions must be original and unpublished. Similarity index must not exceed 15%. All papers are screened using Turnitin or equivalent plagiarism detection tools. Any form of plagiarism results in immediate rejection.",
//     icon: Shield
//   },
//   {
//     title: "Conflict of Interest Disclosure",
//     content: "Authors are required to disclose any financial, personal, or professional relationships that could potentially influence (or be perceived to influence) their work.",
//     icon: AlertCircle
//   },
//   {
//     title: "Research Ethics & Compliance",
//     content: "All research involving human participants, animals, or biological materials must comply with international ethical standards (e.g., Helsinki Declaration, ARRIVE guidelines). Ethical approval statements must be included where applicable.",
//     icon: Award
//   },
//   {
//     title: "Double-Blind Peer Review Process",
//     content: "To ensure impartiality, the review process is strictly double-blind. Authors must remove all identifiable information from the manuscript before submission.",
//     icon: Eye
//   },
// ];

// const faqs = [
//   { q: "Can I submit more than one paper?", a: "Yes. Multiple submissions are allowed, but each accepted paper requires separate registration and fee payment." },
//   { q: "What is the plagiarism similarity limit?", a: "We enforce a strict <15% similarity threshold (excluding references). All manuscripts are checked using professional plagiarism detection software." },
//   { q: "Is it possible to make changes after submission?", a: "No changes are permitted during the review process. If accepted with revisions, authors will receive specific instructions and a deadline for resubmission." },
//   { q: "What happens if my paper is rejected?", a: "Detailed reviewer feedback is provided to help improve the work. Rejected papers may be revised and submitted to other venues." },
//   { q: "Is there any submission or processing fee?", a: "No. ICLEAS 2026 does not charge any fee for paper submission or peer review." },
// ];

// export default function CallForPapersPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);
//   const [openPolicy, setOpenPolicy] = useState<number | null>(null);

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
//               <span className="text-white font-medium">Call for Papers ICLEAS 2026</span>
//             </div>
            
//             <div className="text-center space-y-6">
//               <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-500/20 backdrop-blur-sm border border-lime-400/30 mb-4">
//                 <Zap className="w-5 h-5 text-lime-300" />
//                 <span className="text-sm text-lime-200 font-bold uppercase tracking-wider">Call for Papers – Now Open</span>
//               </div>
              
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
//                 Call for <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Papers</span>
//               </h1>
              
//               <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto font-light leading-relaxed">
//                 Submit your original research to ICLEAS 2026 – the international online conference on life sciences, environmental sciences, applied sciences, biotechnology, sustainability, and emerging technologies. Organized by ScientiaForum.
//               </p>
              
//               <div className="flex items-center justify-center gap-3 text-emerald-200 text-lg">
//                 <Clock className="w-5 h-5" />
//                 <span className="font-medium">Paper Submission Deadline: March 31, 2026</span>
//               </div>
              
//               <div className="flex flex-wrap justify-center gap-4 pt-4">
//                 <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2">
//                   Submit Your Paper Now
//                   <ArrowRight className="w-5 h-5" />
//                 </button>
//                 <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center gap-2">
//                   <Download className="w-5 h-5" />
//                   Download Paper Template
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="space-y-0">
        
//         {/* Key Details Section */}
//         <section className="bg-white py-24 md:py-32">
//           <div className="container mx-auto px-4">
//             <div className="max-w-6xl mx-auto">
//               <div className="text-center mb-16">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
//                   <FileText className="w-5 h-5 text-emerald-600" />
//                   <span className="text-sm font-bold text-emerald-900 uppercase tracking-wider">Important Submission Information</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//                   ICLEAS 2026 Submission Deadlines & Guidelines
//                 </h2>
//                 <p className="text-xl text-slate-600">Key dates and requirements for submitting your research paper</p>
//               </div>
              
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {keyDetails.map((item, idx) => (
//                   <div key={idx} className="group bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all">
//                     <div className="flex items-start gap-4">
//                       <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
//                         <item.icon className="w-6 h-6 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-bold text-slate-900 mb-2">{item.detail}</h3>
//                         <p className="text-slate-600">{item.value}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Research Tracks Section */}
//         <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
//           <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
          
//           <div className="relative z-10 container mx-auto px-4">
//             <div className="max-w-7xl mx-auto">
//               <div className="text-center mb-16">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-6">
//                   <Target className="w-5 h-5 text-teal-600" />
//                   <span className="text-sm font-bold text-teal-900 uppercase tracking-wider">5 Interdisciplinary Tracks</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//                   Conference Tracks – Submit to the Best Fit
//                 </h2>
//                 <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//                   Choose the most relevant track for your research in life sciences, environmental studies, or applied technologies
//                 </p>
//               </div>
              
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {tracks.map((track, idx) => (
//                   <div key={idx} className="group relative">
//                     <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-5 rounded-3xl blur-xl transition-opacity`}></div>
//                     <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-transparent h-full">
//                       <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
//                         <track.icon className="w-8 h-8 text-white" />
//                       </div>
//                       <h3 className="text-xl font-bold text-slate-900 mb-3">{track.title}</h3>
//                       <p className="text-slate-600 mb-4 leading-relaxed">{track.topics}</p>
//                       <div className="pt-4 border-t border-slate-100">
//                         <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Key Keywords</h4>
//                         <p className="text-sm text-slate-600">{track.keywords}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Submission Steps Section */}
//         <section className="bg-white py-24 md:py-32">
//           <div className="container mx-auto px-4">
//             <div className="max-w-6xl mx-auto">
//               <div className="text-center mb-16">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
//                   <CheckCircle className="w-5 h-5 text-slate-600" />
//                   <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">7-Step Submission Process</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//                   How to Submit Your Paper to ICLEAS 2026
//                 </h2>
//                 <p className="text-xl text-slate-600">Clear step-by-step guide for authors</p>
//               </div>
              
//               <div className="relative">
//                 <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 via-teal-400 to-green-300 transform -translate-x-1/2"></div>
                
//                 <div className="space-y-12">
//                   {submissionSteps.map((step, idx) => (
//                     <div key={idx} className={`flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
//                       <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
//                         <div className={`inline-block bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all ${idx % 2 === 0 ? 'md:ml-auto' : ''}`}>
//                           <div className="flex items-center gap-4">
//                             <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
//                               {step.step}
//                             </div>
//                             <div className="flex-1 text-left">
//                               <h3 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h3>
//                               <p className="text-slate-600 text-sm">{step.desc}</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="hidden md:block flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 border-4 border-white shadow-lg z-10"></div>
                      
//                       <div className="flex-1"></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Templates & Review Process */}
//         <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 py-24 md:py-32 overflow-hidden">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          
//           <div className="relative z-10 container mx-auto px-4">
//             <div className="max-w-6xl mx-auto">
//               <div className="grid md:grid-cols-2 gap-12">
//                 <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
//                       <Download className="w-6 h-6 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white">Paper Templates & Formatting Guidelines</h3>
//                   </div>
                  
//                   <div className="space-y-6">
//                     <div className="flex gap-4">
//                       <button className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2">
//                         <Download className="w-4 h-4" />
//                         LaTeX Template
//                       </button>
//                       <button className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2">
//                         <Download className="w-4 h-4" />
//                         Word Template
//                       </button>
//                     </div>
                    
//                     <div className="space-y-3 pt-4">
//                       {[
//                         "Maximum 8–10 pages (excluding references)",
//                         "Font: Times New Roman 12 pt, double-column format",
//                         "Citation & Reference Style: IEEE",
//                         "Final File Format: PDF (embedded fonts)"
//                       ].map((item, idx) => (
//                         <div key={idx} className="flex items-center gap-3 text-emerald-200">
//                           <CheckCircle className="w-5 h-5 flex-shrink-0" />
//                           <span>{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center">
//                       <Eye className="w-6 h-6 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white">Peer Review & Decision Process</h3>
//                   </div>
                  
//                   <div className="space-y-4">
//                     {[
//                       { title: "Initial Abstract Screening", desc: "Quick editorial check for relevance, quality & scope (1 week)" },
//                       { title: "Double-Blind Peer Review", desc: "In-depth evaluation by 2–3 independent experts (2–3 weeks)" },
//                       { title: "Review Outcome", desc: "Accept / Accept with Minor Revisions / Major Revisions / Reject" },
//                       { title: "Camera-Ready Submission", desc: "Final version upload after addressing reviewer comments" }
//                     ].map((item, idx) => (
//                       <div key={idx} className="flex items-start gap-3">
//                         <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
//                           {idx + 1}
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-white mb-1">{item.title}</h4>
//                           <p className="text-teal-200 text-sm">{item.desc}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Publication Info */}
//         <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="bg-white rounded-3xl p-12 shadow-2xl border border-emerald-100">
//                 <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 mb-8">
//                   <BookOpen className="w-10 h-10 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Conference Proceedings & Publication</h2>
//                 <p className="text-lg text-slate-700 leading-relaxed">
//                   All accepted and registered papers will be published in the official ICLEAS 2026 peer-reviewed conference proceedings (with ISBN / DOI), indexed in major academic databases including Google Scholar, CrossRef, and potentially DOAJ / others, subject to indexing criteria.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Policies & FAQ */}
//         <section className="bg-white py-24 md:py-32">
//           <div className="container mx-auto px-4">
//             <div className="max-w-6xl mx-auto">
//               <div className="grid md:grid-cols-2 gap-12">
//                 <div>
//                   <h3 className="text-3xl font-bold text-slate-900 mb-8">Important Policies for Authors</h3>
//                   <div className="space-y-4">
//                     {policies.map((policy, idx) => (
//                       <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
//                         <button
//                           onClick={() => setOpenPolicy(openPolicy === idx ? null : idx)}
//                           className="w-full p-6 text-left hover:bg-slate-50 transition-all flex items-center justify-between gap-4"
//                         >
//                           <div className="flex items-center gap-4 flex-1">
//                             <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
//                               <policy.icon className="w-5 h-5 text-emerald-600" />
//                             </div>
//                             <span className="font-bold text-slate-900">{policy.title}</span>
//                           </div>
//                           <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${openPolicy === idx ? 'rotate-90' : ''}`} />
//                         </button>
//                         {openPolicy === idx && (
//                           <div className="px-6 pb-6 pt-2">
//                             <div className="h-px bg-slate-200 mb-4"></div>
//                             <p className="text-slate-600 leading-relaxed">{policy.content}</p>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div>
//                   <h3 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions – Submissions</h3>
//                   <div className="space-y-4">
//                     {faqs.map((faq, idx) => (
//                       <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
//                         <button
//                           onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
//                           className="w-full p-6 text-left hover:bg-slate-50 transition-all flex items-center justify-between gap-4"
//                         >
//                           <span className="font-bold text-slate-900 flex-1">{faq.q}</span>
//                           <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-90' : ''}`} />
//                         </button>
//                         {openFaq === idx && (
//                           <div className="px-6 pb-6 pt-2">
//                             <div className="h-px bg-slate-200 mb-4"></div>
//                             <p className="text-slate-600 leading-relaxed">{faq.a}</p>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Final CTA */}
//         <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-24 overflow-hidden">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
//           <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
          
//           <div className="relative z-10 container mx-auto px-4 text-center">
//             <div className="max-w-4xl mx-auto space-y-8">
//               <h2 className="text-4xl md:text-5xl font-bold text-white">
//                 Submit Your Research to ICLEAS 2026
//               </h2>
//               <p className="text-xl text-teal-200">
//                 Contribute original work in life sciences, environmental sustainability, biotechnology, or applied technologies – join the global online conference
//               </p>
//               <div className="flex flex-wrap justify-center gap-4 pt-4">
//                 <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2">
//                   Submit Paper Now
//                   <ArrowRight className="w-5 h-5" />
//                 </button>
//                 <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center gap-2">
//                   <Download className="w-5 h-5" />
//                   Download Template
//                 </button>
//                 <button className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all">
//                   Ask Questions
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }
















"use client";

import React from 'react';
import {
  ChevronRight, Download, FileText, Calendar, CheckCircle,
  ArrowRight, Clock, Target, Award, BookOpen, Shield,
  Zap, Eye, MessageCircle, Leaf, Sparkles, Star
} from 'lucide-react';

const importantDates = [
  { detail: "Abstract Submission Deadline", value: "March 25, 2026", icon: Clock, status: "Open" },
  { detail: "Full Paper Submission Deadline", value: "April 30, 2026", icon: FileText, status: "Upcoming" },
  { detail: "Notification of Acceptance", value: "May 30, 2026", icon: Calendar, status: "Upcoming" },
  { detail: "Registration Deadline", value: "June 30, 2026", icon: Target, status: "Upcoming" },
  { detail: "Conference Dates", value: "July 23–24, 2026", icon: Award, status: "Upcoming" },
];

const submissionGuidelines = [
  { text: "Original, unpublished work only", icon: Shield },
  { text: "Papers must follow the prescribed template", icon: FileText },
  { text: "All submissions undergo peer review", icon: Eye },
];

const paperCategories = [
  { 
    title: "Full Length Papers", 
    description: "Comprehensive research papers presenting complete studies with detailed methodology, results, and conclusions",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500"
  },
  { 
    title: "Research Papers", 
    description: "Original research contributions presenting novel findings and innovations in the field",
    icon: Sparkles,
    color: "from-teal-500 to-cyan-500"
  },
  { 
    title: "Review Papers", 
    description: "Comprehensive reviews of existing literature, synthesizing current knowledge and identifying research gaps",
    icon: CheckCircle,
    color: "from-cyan-500 to-blue-500"
  },
];

export default function CallForPapersPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(52,211,153,0.2),rgba(255,255,255,0))]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-200 mb-8 justify-center">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Call for Papers</span>
            </div>
            
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-500/20 backdrop-blur-sm border border-lime-400/30 mb-4">
                <Zap className="w-5 h-5 text-lime-300" />
                <span className="text-sm text-lime-200 font-bold uppercase tracking-wider">Call for Papers – Now Open</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Call for <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Papers</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto font-light leading-relaxed">
                Researchers are invited to submit original and unpublished research papers relevant to the conference tracks for ICLEAS 2026.
              </p>
              
              <div className="flex items-center justify-center gap-3 text-emerald-200 text-lg">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Conference Dates: July 23–24, 2026</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2">
                  Submit Your Paper Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Paper Template
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-0">
        
        {/* Objective Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <Star className="w-7 h-7 text-emerald-600" />
                <span className="text-slate-600 uppercase tracking-widest text-sm font-semibold">Conference Objective</span>
                <Star className="w-7 h-7 text-emerald-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Invitation to Submit High-Quality Research
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mb-8"></div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-3xl p-12 shadow-2xl border border-emerald-100">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Objective</h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      To invite high-quality research submissions.
                    </p>
                  </div>
                </div>
                
                <div className="h-px bg-gradient-to-r from-emerald-200 via-teal-200 to-transparent my-6"></div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Invitation</h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Researchers are invited to submit original and unpublished research papers relevant to the conference tracks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Dates Section */}
        <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-emerald-400" />
                <span className="text-emerald-400 uppercase tracking-widest text-sm font-semibold">Key Deadlines</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Important Dates
              </h2>
              <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
                Mark your calendar with these essential submission and registration deadlines
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {importantDates.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="relative">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                            item.status === 'Open' 
                              ? 'bg-gradient-to-br from-lime-400 to-green-500' 
                              : 'bg-gradient-to-br from-emerald-400 to-teal-600'
                          } shadow-lg`}>
                            <item.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                              item.status === 'Open'
                                ? 'bg-lime-500/20 text-lime-300 border border-lime-400/30'
                                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                            {item.detail}
                          </h3>
                          <div className="flex items-center gap-2 text-emerald-200">
                            <Calendar className="w-4 h-4" />
                            <span className="text-lg font-medium">{item.value}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="h-px bg-gradient-to-r from-emerald-400/30 via-emerald-400/10 to-transparent"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Submission Guidelines Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-6">
                  <Shield className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-bold text-teal-900 uppercase tracking-wider">Submission Requirements</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Submission Guidelines
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Follow these essential requirements when preparing your research submission
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {submissionGuidelines.map((item, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-5 rounded-3xl blur-xl transition-opacity"></div>
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-emerald-300 h-full">
                      <div className="flex flex-col items-center text-center space-y-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <span className="text-emerald-700 text-lg font-bold">{idx + 1}</span>
                        </div>
                        <p className="text-lg text-slate-700 leading-relaxed font-medium">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Paper Categories Section */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
                  <BookOpen className="w-5 h-5 text-slate-600" />
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Paper Types</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Paper Categories
                </h2>
                <p className="text-xl text-slate-600">Full length papers only accepted – Research & Review Papers</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {paperCategories.map((category, idx) => (
                  <div key={idx} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-3xl blur-xl transition-opacity`}></div>
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-transparent h-full flex flex-col">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{category.title}</h3>
                      <p className="text-slate-600 leading-relaxed flex-1">{category.description}</p>
                      <div className="mt-6 pt-6 border-t border-slate-100">
                        <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold">
                          <CheckCircle className="w-5 h-5" />
                          <span>Accepted Category</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Submit Your Research to ICLEAS 2026
              </h2>
              <p className="text-xl text-teal-200">
                Contribute original work in life sciences, environmental sustainability, biotechnology, or applied technologies – join the global online conference
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2">
                  Submit Paper Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Template
                </button>
                <button className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                  Ask Questions
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}