// // HomeDemo.tsx
// // Demo version with updated fonts, icons, amber accent color
// // Install required packages:
// // npm install @tabler/icons-react
// // Add to your layout or head:
// // <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

// ""

// import React from 'react';
// import {
//   Users,
//   FileText,
//   Calendar,
//   ChevronRight,
//   Newspaper,
//   BookCheck,
//   Globe,
//   Microphone2,
//   GitFork,
//   ArrowRight,
//   Award,
//   TrendingUp,
//   Clock,
//   CircleCheck,
//   Circle,
//   Star,
//   MessageCircle,
//   Leaf,
//   Microscope,
//   Droplet,
// } from '@tabler/icons-react';

// // Mock data (kept identical)
// const speakers = [
//   {
//     id: 1,
//     name: "Dr. Sarah Mitchell",
//     title: "Professor of Environmental Science",
//     affiliation: "Stanford University",
//     bio: "Leading researcher in climate adaptation strategies with over 20 years of experience.",
//     imgSrc: "https://picsum.photos/seed/speaker1/400/400",
//     imgHint: "professional scientist",
//   },
//   {
//     id: 2,
//     name: "Dr. James Chen",
//     title: "Director of Biotechnology Research",
//     affiliation: "MIT",
//     bio: "Pioneer in synthetic biology and sustainable biotechnology applications.",
//     imgSrc: "https://picsum.photos/seed/speaker2/400/400",
//     imgHint: "scientist portrait",
//   },
// ];

// const importantDates = [
//   { title: "Paper Submission Deadline", date: "March 15, 2026", status: "Open" },
//   { title: "Notification of Acceptance", date: "April 30, 2026", status: "Upcoming" },
//   { title: "Early Bird Registration", date: "May 15, 2026", status: "Upcoming" },
//   { title: "Conference Dates", date: "June 25-26, 2026", status: "Upcoming" },
// ];

// const faqs = [
//   {
//     question: "What is the conference format?",
//     answer: "ICLEAS 2026 is a fully online conference accessible from anywhere in the world.",
//   },
//   {
//     question: "How do I submit a paper?",
//     answer: "Visit our submission page and follow the guidelines for paper formatting and submission.",
//   },
//   {
//     question: "What are the registration fees?",
//     answer: "Registration fees vary by category. Please visit our registration page for detailed pricing.",
//   },
// ];

// export default function Demo() {
//   return (
//     <div className="min-h-screen bg-white font-['Inter'] antialiased">

//       {/* =============================================== */}
//       {/* Hero */}
//       {/* =============================================== */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-950 to-green-950 text-white">
//         <div className="absolute inset-0 opacity-20 pointer-events-none">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(52,211,153,0.25),transparent)]" />
//         </div>

//         <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

//         <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 text-center">
//           <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-10">
//             <Leaf className="w-5 h-5 text-emerald-400" />
//             <span className="text-sm font-medium tracking-wide">Premier Scientific Conference 2026</span>
//           </div>

//           <h1 className="font-['Space_Grotesk'] font-bold tracking-tight text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-white via-emerald-100 to-amber-200 bg-clip-text text-transparent">
//             ICLEAS 2026
//           </h1>

//           <p className="text-2xl md:text-3xl lg:text-4xl text-emerald-200/90 font-light mb-10">
//             International Conference on Life, Environmental & Applied Sciences
//           </p>

//           <p className="text-xl md:text-2xl text-teal-100/90 max-w-4xl mx-auto mb-12 leading-relaxed">
//             Integrating Life Sciences, Environment & Technology for a Sustainable Future
//           </p>

//           <div className="flex flex-wrap justify-center gap-8 text-lg mb-12">
//             <div className="flex items-center gap-3">
//               <Calendar className="w-6 h-6 text-amber-400" />
//               <span>June 25–26, 2026</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <Globe className="w-6 h-6 text-amber-400" />
//               <span>Online Conference</span>
//             </div>
//           </div>

//           <div className="flex flex-wrap justify-center gap-6">
//             <a
//               href="/submission"
//               className="px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold text-lg rounded-xl shadow-xl shadow-amber-900/30 transition-all transform hover:scale-[1.03]"
//             >
//               Submit Your Paper
//             </a>
//             <a
//               href="/registration"
//               className="px-10 py-5 border-2 border-emerald-300 text-emerald-100 font-semibold text-lg rounded-xl hover:bg-white/10 backdrop-blur-md transition-all"
//             >
//               Register Now
//             </a>
//           </div>
//         </div>

//         {/* Stats bar */}
//         <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-black/30 backdrop-blur-lg">
//           <div className="container mx-auto px-6 py-10">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//               <div>
//                 <div className="text-4xl md:text-5xl font-bold text-amber-300">500+</div>
//                 <div className="text-sm text-emerald-200/80 mt-1">Expected Attendees</div>
//               </div>
//               <div>
//                 <div className="text-4xl md:text-5xl font-bold text-amber-300">Open</div>
//                 <div className="text-sm text-emerald-200/80 mt-1">Call for Papers</div>
//               </div>
//               <div>
//                 <div className="text-4xl md:text-5xl font-bold text-amber-300">3+</div>
//                 <div className="text-sm text-emerald-200/80 mt-1">Keynote Speakers</div>
//               </div>
//               <div>
//                 <div className="text-4xl md:text-5xl font-bold text-amber-300">Online</div>
//                 <div className="text-sm text-emerald-200/80 mt-1">Conference Format</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =============================================== */}
//       {/* Highlights */}
//       {/* =============================================== */}
//       <section className="py-24 md:py-32 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold text-slate-900 mb-4">
//               Conference Highlights
//             </h2>
//             <div className="w-28 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 to-amber-500 mx-auto rounded-full" />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: Microphone2,
//                 title: "Leading Researchers",
//                 desc: "Learn from and interact with experts and pioneers in the field.",
//                 href: "/speakers",
//                 gradient: "from-emerald-500 to-teal-600",
//               },
//               {
//                 icon: GitFork,
//                 title: "5 Cutting-Edge Tracks",
//                 desc: "Explore diverse topics across our specialized scientific tracks.",
//                 href: "/tracks",
//                 gradient: "from-green-600 to-lime-600",
//               },
//               {
//                 icon: Globe,
//                 title: "Global Networking",
//                 desc: "Connect with peers and professionals from around the world online.",
//                 href: "/committee",
//                 gradient: "from-teal-500 to-cyan-600",
//               },
//               {
//                 icon: BookCheck,
//                 title: "Indexed Proceedings",
//                 desc: "Get your work published in our proceedings with a dedicated ISBN.",
//                 href: "/publication",
//                 gradient: "from-lime-600 to-green-500",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-amber-200/60"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
//                 <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
//                   <item.icon className="w-10 h-10 text-white" />
//                 </div>
//                 <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
//                 <p className="text-slate-600 mb-6 leading-relaxed">{item.desc}</p>
//                 <a
//                   href={item.href}
//                   className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-500 hover:gap-3 transition-all"
//                 >
//                   View details <ArrowRight className="w-5 h-5" />
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =============================================== */}
//       {/* Important Dates */}
//       {/* =============================================== */}
//       <section className="relative py-24 md:py-32 bg-gradient-to-br from-emerald-950 via-teal-950 to-green-950 overflow-hidden text-white">
//         <div className="absolute inset-0 opacity-30 pointer-events-none">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.15),transparent)]" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(45,212,191,0.15),transparent)]" />
//         </div>

//         <div className="relative z-10 container mx-auto px-6">
//           <div className="text-center mb-20">
//             <Clock className="w-12 h-12 text-amber-400 mx-auto mb-6" />
//             <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold mb-4">Important Dates</h2>
//             <p className="text-xl text-emerald-200/90 max-w-3xl mx-auto">
//               Stay on track with our conference timeline and don't miss any crucial deadlines
//             </p>
//           </div>

//           <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
//             {importantDates.map((item, idx) => (
//               <div key={idx} className="group">
//                 <div className="flex items-start gap-6">
//                   <div
//                     className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${
//                       item.status === "Open"
//                         ? "bg-gradient-to-br from-lime-400 to-lime-600"
//                         : "bg-gradient-to-br from-amber-400 to-amber-600"
//                     }`}
//                   >
//                     {item.status === "Open" ? (
//                       <CircleCheck className="w-10 h-10 text-white" />
//                     ) : (
//                       <Circle className="w-10 h-10 text-white" />
//                     )}
//                   </div>

//                   <div className="flex-1 pt-2">
//                     <span
//                       className={`inline-block px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
//                         item.status === "Open"
//                           ? "bg-lime-500/20 text-lime-300 border border-lime-400/40"
//                           : "bg-amber-500/20 text-amber-300 border border-amber-400/40"
//                       }`}
//                     >
//                       {item.status}
//                     </span>
//                     <h3 className="font-['Space_Grotesk'] text-2xl font-bold mt-4 mb-2 group-hover:text-amber-300 transition-colors">
//                       {item.title}
//                     </h3>
//                     <div className="flex items-center gap-3 text-emerald-200/90">
//                       <Calendar className="w-5 h-5" />
//                       <span className="font-medium">{item.date}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =============================================== */}
//       {/* Distinguished Speakers (shortened for brevity – expand as needed) */}
//       {/* =============================================== */}
//       <section className="py-24 md:py-32 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-20">
//             <Award className="w-12 h-12 text-amber-500 mx-auto mb-6" />
//             <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold text-slate-900 mb-4">
//               Distinguished Speakers
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               Learn from world-renowned experts shaping the future of science and sustainability
//             </p>
//           </div>

//           <div className="max-w-6xl mx-auto space-y-20">
//             {speakers.map((speaker, idx) => (
//               <div
//                 key={speaker.id}
//                 className={`flex flex-col lg:flex-row ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"} gap-12 items-center`}
//               >
//                 <div className="lg:w-1/2">
//                   <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
//                     <img
//                       src={speaker.imgSrc}
//                       alt={speaker.name}
//                       className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//                     <div className="absolute bottom-8 left-8 text-white">
//                       <p className="text-sm uppercase tracking-wider opacity-80">Keynote Speaker</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="lg:w-1/2 space-y-6">
//                   <div className="inline-flex items-center gap-3 px-5 py-2 bg-amber-50 rounded-full text-amber-800 font-medium">
//                     <Microphone2 className="w-5 h-5" />
//                     Featured Speaker
//                   </div>
//                   <h3 className="font-['Space_Grotesk'] text-4xl font-bold text-slate-900">{speaker.name}</h3>
//                   <div className="space-y-2">
//                     <p className="text-xl font-semibold text-emerald-700">{speaker.title}</p>
//                     <p className="text-lg text-slate-600">{speaker.affiliation}</p>
//                   </div>
//                   <p className="text-lg text-slate-700 leading-relaxed">{speaker.bio}</p>
//                   <a
//                     href="/speakers"
//                     className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-500 hover:gap-3 transition-all"
//                   >
//                     Read full biography <ArrowRight className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =============================================== */}
//       {/* Final CTA Banner */}
//       {/* =============================================== */}
//       <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white overflow-hidden">
//         <div className="relative z-10 container mx-auto px-6 text-center">
//           <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold mb-6">
//             Ready to Contribute to a Sustainable Future?
//           </h2>
//           <p className="text-xl text-teal-200/90 mb-10 max-w-3xl mx-auto">
//             Join ICLEAS 2026 and help shape solutions in life, environmental, and applied sciences
//           </p>
//           <div className="flex flex-wrap justify-center gap-6">
//             <a
//               href="/submission"
//               className="px-12 py-6 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold text-lg rounded-xl shadow-2xl shadow-amber-900/40 transition-all"
//             >
//               Submit Your Paper
//             </a>
//             <a
//               href="/registration"
//               className="px-12 py-6 border-2 border-white/60 hover:bg-white/10 backdrop-blur-md text-white font-semibold text-lg rounded-xl transition-all"
//             >
//               Register Now
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }