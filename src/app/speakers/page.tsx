// "use client";

// import React, { useState } from 'react';
// import { 
//   ChevronRight, Linkedin, Twitter, Globe, BookUser, 
//   BrainCircuit, Star, Award, FileText, X, Sparkles,
//   ArrowRight, MicVocal, Users
// } from 'lucide-react';

// // Define the Speaker interface once (fixes all typing issues)
// interface Speaker {
//   id: string;
//   name: string;
//   title: string;
//   affiliation: string;
//   bio: string;
//   imgSrc: string;
//   imgHint: string;
//   researchInterests: string[];
//   talkTitle: string;
//   talkAbstract: string;
//   publications: string[];
// }

// const speakers: Speaker[] = [
//   {
//     id: '1',
//     name: 'Dr. Evelyn Reed',
//     title: 'Chief Scientist, Environmental Genomics',
//     affiliation: 'BioSynthetics Inc.',
//     bio: 'Dr. Reed is a pioneer in synthetic biology and its applications in environmental remediation. Her work focuses on engineering microorganisms to break down pollutants.',
//     imgSrc: 'https://picsum.photos/seed/speaker1/400/400',
//     imgHint: 'female scientist portrait',
//     researchInterests: ['Synthetic Biology', 'Bioremediation', 'Genomics'],
//     talkTitle: 'Engineering Nature: Synthetic Biology for a Cleaner Planet',
//     talkAbstract: 'This talk will explore the cutting-edge intersection of synthetic biology and environmental science. We will discuss the design and application of genetically engineered microorganisms capable of degrading persistent organic pollutants, sequestering heavy metals, and producing biofuels from waste. The session will cover recent breakthroughs, ethical considerations, and the future potential of this transformative technology to address some of the world\'s most pressing environmental challenges.',
//     publications: [
//       'Reed, E., et al. (2023). "A synthetic microbial consortium for the complete mineralization of plastics." Nature Biotechnology.',
//       'Reed, E. (2021). "Genomic blueprints for environmental cleanup." Science.'
//     ]
//   },
//   {
//     id: '2',
//     name: 'Prof. Marcus Thorne',
//     title: 'Professor of Marine Ecology',
//     affiliation: 'Oceanic Institute of Technology',
//     bio: 'Prof. Thorne is a leading authority on coral reef ecosystems and the impacts of climate change. His research provides critical insights into marine conservation strategies.',
//     imgSrc: 'https://picsum.photos/seed/speaker2/400/400',
//     imgHint: 'male scientist portrait',
//     researchInterests: ['Marine Biology', 'Climate Change', 'Coral Reef Ecology'],
//     talkTitle: 'The Future of Coral Reefs in a Warming World',
//     talkAbstract: 'Coral reefs are among the most biodiverse and threatened ecosystems on Earth. This presentation will provide a comprehensive overview of the current state of coral reefs, the multifaceted impacts of climate change—including ocean acidification and warming—and the latest scientific efforts to enhance their resilience. We will explore innovative strategies such as assisted evolution, coral cryopreservation, and large-scale restoration projects, offering a message of hope grounded in scientific action.',
//     publications: [
//       'Thorne, M. (2022). "Resilience in Reef Ecosystems." Annual Review of Marine Science.',
//       'Thorne, M., & Chen, L. (2020). "Global patterns of coral bleaching." Nature Climate Change.'
//     ]
//   },
// ];

// export default function SpeakersPage() {
//   const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

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
//               <span className="text-white font-medium">Speakers</span>
//             </div>
            
//             <div className="text-center space-y-6">
//               <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 mb-4">
//                 <Star className="w-5 h-5 text-amber-300" />
//                 <span className="text-sm text-amber-200 font-bold uppercase tracking-wider">Industry Leaders</span>
//               </div>
              
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
//                 Distinguished <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Keynote Speakers</span>
//               </h1>
              
//               <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto font-light leading-relaxed">
//                 Leading voices in life sciences, environmental studies, and applied technology sharing their groundbreaking research
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="space-y-0">
        
//         {/* Keynote Speakers Section */}
//         <section className="bg-white py-24 md:py-32">
//           <div className="container mx-auto px-4">
//             <div className="max-w-7xl mx-auto">
//               <div className="text-center mb-16">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
//                   <MicVocal className="w-5 h-5 text-emerald-600" />
//                   <span className="text-sm font-bold text-emerald-900 uppercase tracking-wider">Featured Speakers</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//                   Keynote Speakers
//                 </h2>
//                 <p className="text-xl text-slate-600">Learn from world-renowned experts shaping the future of science</p>
//               </div>
              
//               {/* Speaker Cards */}
//               <div className="space-y-16">
//                 {speakers.map((speaker, idx) => (
//                   <div key={speaker.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>
//                     {/* Image Side */}
//                     <div className="lg:w-5/12">
//                       <div className="relative group">
//                         <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
//                         <div className="relative overflow-hidden rounded-2xl shadow-2xl">
//                           <img
//                             src={speaker.imgSrc}
//                             alt={speaker.name}
//                             className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
//                           <div className="absolute bottom-0 left-0 right-0 p-8">
//                             <div className="flex items-center gap-3 text-white/90">
//                               <div className="w-12 h-px bg-white/50"></div>
//                               <span className="text-sm uppercase tracking-wider">Keynote Speaker</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Content Side */}
//                     <div className="lg:w-7/12 space-y-6">
//                       <div>
//                         <div className="inline-block mb-4">
//                           <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
//                             <Award className="w-4 h-4 text-emerald-600" />
//                             <span className="text-sm font-semibold text-emerald-900">Featured Speaker</span>
//                           </div>
//                         </div>
//                         <h3 className="text-4xl font-bold text-slate-900 mb-3">
//                           {speaker.name}
//                         </h3>
//                         <div className="space-y-1 mb-4">
//                           <p className="text-xl font-semibold text-emerald-600">
//                             {speaker.title}
//                           </p>
//                           <p className="text-lg text-slate-600">
//                             {speaker.affiliation}
//                           </p>
//                         </div>
                        
//                         {/* Social Links */}
//                         <div className="flex gap-2">
//                           <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors">
//                             <Linkedin className="w-5 h-5 text-slate-600" />
//                           </button>
//                           <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors">
//                             <Twitter className="w-5 h-5 text-slate-600" />
//                           </button>
//                           <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors">
//                             <Globe className="w-5 h-5 text-slate-600" />
//                           </button>
//                         </div>
//                       </div>
                      
//                       <div className="h-px bg-gradient-to-r from-slate-300 via-slate-200 to-transparent"></div>
                      
//                       <p className="text-lg text-slate-700 leading-relaxed">
//                         {speaker.bio}
//                       </p>
                      
//                       {/* Research Interests */}
//                       <div>
//                         <h4 className="font-bold text-slate-900 mb-3">Research Interests</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {speaker.researchInterests.map((interest, i) => (
//                             <span 
//                               key={i} 
//                               className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100"
//                             >
//                               {interest}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
                      
//                       {/* Keynote Talk */}
//                       <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100">
//                         <div className="flex items-center gap-2 mb-3">
//                           <BrainCircuit className="w-5 h-5 text-teal-600" />
//                           <h4 className="font-bold text-slate-900">Keynote:</h4>
//                         </div>
//                         <h5 className="font-bold text-lg text-slate-900 mb-2">{speaker.talkTitle}</h5>
//                         <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
//                           {speaker.talkAbstract}
//                         </p>
//                       </div>
                      
//                       <button 
//                         onClick={() => setSelectedSpeaker(speaker)}
//                         className="group inline-flex items-center gap-2 text-emerald-600 font-bold text-lg hover:gap-3 transition-all"
//                       >
//                         Read Full Bio & Abstract
//                         <ArrowRight className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Invited Speakers Announcement */}
//         <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
//           <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
          
//           <div className="relative z-10 container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 mb-8">
//                 <Users className="w-10 h-10 text-white" />
//               </div>
              
//               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//                 Invited Speakers & Panelists
//               </h2>
              
//               <p className="text-xl text-slate-700 leading-relaxed mb-8">
//                 The full list of our distinguished invited speakers and panelists will be announced soon. Stay tuned for more experts who will be sharing their insights at ICLEAS 2026.
//               </p>
              
//               <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
//                 <Sparkles className="w-5 h-5 text-emerald-600" />
//                 <span className="text-slate-700 font-medium">More announcements coming soon</span>
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
//                 Join These Experts at ICLEAS 2026
//               </h2>
//               <p className="text-xl text-teal-200">
//                 Register now and be part of groundbreaking discussions shaping the future of science
//               </p>
//               <div className="flex flex-wrap justify-center gap-4 pt-4">
//                 <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2">
//                   Register for Conference
//                   <ArrowRight className="w-5 h-5" />
//                 </button>
//                 <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
//                   View Full Program
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//       </div>

//       {/* Modal */}
//       {selectedSpeaker && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
//           <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
//             {/* Modal Header */}
//             <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white relative">
//               <button
//                 onClick={() => setSelectedSpeaker(null)}
//                 className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//               <h2 className="text-3xl font-bold mb-2">{selectedSpeaker.name}</h2>
//               <p className="text-emerald-100 text-lg">
//                 {selectedSpeaker.title}, <span className="font-semibold">{selectedSpeaker.affiliation}</span>
//               </p>
//             </div>
            
//             {/* Modal Content */}
//             <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
//               <div className="space-y-8">
//                 {/* Biography */}
//                 <div>
//                   <div className="flex items-center gap-2 mb-4">
//                     <BookUser className="w-5 h-5 text-emerald-600" />
//                     <h3 className="text-2xl font-bold text-slate-900">Biography</h3>
//                   </div>
//                   <p className="text-slate-700 leading-relaxed">{selectedSpeaker.bio}</p>
//                 </div>
                
//                 {/* Research Interests */}
//                 <div>
//                   <h3 className="text-2xl font-bold text-slate-900 mb-4">Research Interests</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedSpeaker.researchInterests.map((interest, i) => (
//                       <span 
//                         key={i} 
//                         className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold"
//                       >
//                         {interest}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Keynote Abstract */}
//                 <div>
//                   <div className="flex items-center gap-2 mb-4">
//                     <BrainCircuit className="w-5 h-5 text-teal-600" />
//                     <h3 className="text-2xl font-bold text-slate-900">Keynote Abstract</h3>
//                   </div>
//                   <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100">
//                     <h4 className="font-bold text-lg text-slate-900 mb-3">{selectedSpeaker.talkTitle}</h4>
//                     <p className="text-slate-700 leading-relaxed">{selectedSpeaker.talkAbstract}</p>
//                   </div>
//                 </div>
                
//                 {/* Publications */}
//                 <div>
//                   <div className="flex items-center gap-2 mb-4">
//                     <FileText className="w-5 h-5 text-emerald-600" />
//                     <h3 className="text-2xl font-bold text-slate-900">Notable Publications</h3>
//                   </div>
//                   <ul className="space-y-3">
//                     {selectedSpeaker.publications.map((pub, i) => (
//                       <li key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
//                         <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></div>
//                         <span className="text-slate-700 text-sm leading-relaxed">{pub}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



























import { Metadata } from 'next';
import ClientContent from './ClientContent';  // we'll create this next

export const metadata: Metadata = {
  title: 'Keynote Speakers ICLEAS 2026 | Life Sciences, Environmental & Biotechnology Experts',
  description: 'Meet the distinguished keynote speakers at ICLEAS 2026 – international online conference on life sciences, environmental sustainability, synthetic biology, marine ecology, and emerging green technologies. July 23–24, 2026.',
  keywords: 'ICLEAS 2026 keynote speakers, life sciences conference speakers, environmental science experts, biotechnology keynote, synthetic biology speakers, marine ecology conference, sustainability conference 2026',
};


export default function SpeakersPage() {
  return <ClientContent />;
}