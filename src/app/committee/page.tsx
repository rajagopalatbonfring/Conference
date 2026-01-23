
// "use client"
// import Link from 'next/link';
// import Image from 'next/image';
// import { useState } from 'react';
// import { 
//   ChevronRight, Users, Award, Shield, Star, 
//   Globe, Sparkles, Mail, Linkedin, Crown, Briefcase, UserCog 
// } from 'lucide-react';

// // Mock data - replace with your actual import
// const committees = [
//   {
//     title: "Chief Patron",
//     icon: Crown,
//     members: [
//       { 
//         name: "Dr. Sarah Mitchell", 
//         title: "Chief Patron", 
//         affiliation: "Stanford University",
//         imgSrc: "https://picsum.photos/seed/patron1/400/400",
//         imgHint: "professional scientist",
//         country: "🇺🇸"
//       }
//     ]
//   },
//   {
//     title: "Conference Chair",
//     icon: Award,
//     members: [
//       { 
//         name: "Dr. James Chen", 
//         title: "Conference Chair", 
//         affiliation: "MIT",
//         imgSrc: "https://picsum.photos/seed/chair1/400/400",
//         imgHint: "scientist portrait",
//         country: "🇺🇸"
//       }
//     ]
//   },
//   {
//     title: "Co-Chairs",
//     icon: Users,
//     members: [
//       { 
//         name: "Prof. Maria Rodriguez", 
//         title: "Co-Chair", 
//         affiliation: "Oxford University",
//         imgSrc: "https://picsum.photos/seed/cochair1/400/400",
//         imgHint: "academic portrait",
//         country: "🇬🇧"
//       },
//       { 
//         name: "Dr. Kenji Tanaka", 
//         title: "Co-Chair", 
//         affiliation: "University of Tokyo",
//         imgSrc: "https://picsum.photos/seed/cochair2/400/400",
//         imgHint: "professor portrait",
//         country: "🇯🇵"
//       }
//     ]
//   },
//   {
//     title: "Program Chair",
//     icon: Briefcase,
//     members: [
//       { 
//         name: "Dr. Emily White", 
//         title: "Program Chair", 
//         affiliation: "Harvard Medical School",
//         imgSrc: "https://picsum.photos/seed/progchair1/400/400",
//         imgHint: "researcher portrait",
//         country: "🇺🇸"
//       }
//     ]
//   },
//   {
//     title: "Organizing Committee",
//     icon: UserCog,
//     members: [
//       { 
//         name: "Prof. Ahmed Hassan", 
//         title: "Organizing Secretary", 
//         affiliation: "Cairo University",
//         imgSrc: "https://picsum.photos/seed/org1/400/400",
//         imgHint: "professor",
//         country: "🇪🇬"
//       },
//       { 
//         name: "Dr. Lisa Anderson", 
//         title: "Finance Chair", 
//         affiliation: "ETH Zurich",
//         imgSrc: "https://picsum.photos/seed/org2/400/400",
//         imgHint: "scientist",
//         country: "🇨🇭"
//       },
//       { 
//         name: "Dr. Raj Kumar", 
//         title: "Publication Chair", 
//         affiliation: "IIT Delhi",
//         imgSrc: "https://picsum.photos/seed/org3/400/400",
//         imgHint: "academic",
//         country: "🇮🇳"
//       },
//       { 
//         name: "Dr. Anna Kowalski", 
//         title: "Registration Chair", 
//         affiliation: "Warsaw University",
//         imgSrc: "https://picsum.photos/seed/org4/400/400",
//         imgHint: "researcher",
//         country: "🇵🇱"
//       }
//     ]
//   },
//   {
//     title: "Technical / Review Committee",
//     icon: Shield,
//     members: [
//       { 
//         name: "Prof. Robert Williams", 
//         title: "Technical Chair", 
//         affiliation: "Cambridge University",
//         imgSrc: "https://picsum.photos/seed/tech1/400/400",
//         imgHint: "senior professor",
//         country: "🇬🇧"
//       },
//       { 
//         name: "Dr. Sophie Martin", 
//         title: "Review Coordinator", 
//         affiliation: "CNRS France",
//         imgSrc: "https://picsum.photos/seed/tech2/400/400",
//         imgHint: "researcher",
//         country: "🇫🇷"
//       },
//       { 
//         name: "Dr. Carlos Silva", 
//         title: "Technical Reviewer", 
//         affiliation: "University of São Paulo",
//         imgSrc: "https://picsum.photos/seed/tech3/400/400",
//         imgHint: "professor",
//         country: "🇧🇷"
//       },
//       { 
//         name: "Dr. Yuki Nakamura", 
//         title: "Technical Reviewer", 
//         affiliation: "Kyoto University",
//         imgSrc: "https://picsum.photos/seed/tech4/400/400",
//         imgHint: "scientist",
//         country: "🇯🇵"
//       }
//     ]
//   }
// ];

// export default function CommitteePage() {
//   const [activeTab, setActiveTab] = useState(0);
//   const activeCommittee = committees[activeTab];
//   const Icon = activeCommittee.icon;

//   return (
//     <div className="min-h-screen bg-slate-50">
      
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 py-24 md:py-32 overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
//         <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        
//         <div className="relative z-10 container mx-auto px-4">
//           {/* Breadcrumb */}
//           <div className="flex items-center gap-2 text-emerald-200 mb-8">
//             <Link href="/" className="hover:text-white cursor-pointer transition-colors">
//               Home
//             </Link>
//             <ChevronRight className="w-4 h-4" />
//             <span className="text-white font-semibold">Committees</span>
//           </div>
          
//           <div className="max-w-4xl">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
//               <Users className="w-4 h-4 text-emerald-400" />
//               <span className="text-sm text-white font-medium">Leadership & Excellence</span>
//             </div>
            
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
//               Conference Committee
//             </h1>
//             <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
//               Meet the distinguished experts and leaders guiding ICLEAS 2026 toward scientific excellence and innovation.
//             </p>
//           </div>
//         </div>

//       </section>






//       {/* Active Committee Content */}
//       <section className="relative container mx-auto px-4 py-16 md:py-24">
        

//         {/* Tabs Navigation */}
//         <section className="absolute -top-8 z-30 ">
//           <div className="container mx-auto p-2 bg-black/5 backdrop-blur-xl border border-gray-600/20 shadow-sm rounded-full overflow-hidden">
//             <div className="flex overflow-x-auto scrollbar-hide">
//               {committees.map((committee, idx) => {
//                 const TabIcon = committee.icon;
//                 return (
//                   <button
//                     key={committee.title}
//                     onClick={() => setActiveTab(idx)}
//                     className={`flex items-center gap-2 px-6 py-4 font-semibold text-sm whitespace-nowrap transition-all rounded-full ${
//                       activeTab === idx
//                         ? 'text-emerald-600 border-emerald-500 bg-white'
//                         : 'text-white border-transparent hover:text-slate-900 hover:bg-slate-50'
//                     }`}
//                   >
//                     <TabIcon className="w-4 h-4" />
//                     {committee.title}
//                     <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
//                       activeTab === idx
//                         ? 'bg-orange-100 text-black'
//                         : 'bg-slate-100 text-slate-500'
//                     }`}>
//                       {committee.members.length}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>


//         {/* Section Header */}
//         <div className="mb-12 text-center">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
//               <Icon className="w-7 h-7 text-white" />
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
//               {activeCommittee.title}
//             </h2>
//           </div>
//           <p className="text-slate-600 max-w-2xl mx-auto">
//             {activeCommittee.members.length} {activeCommittee.members.length === 1 ? 'member' : 'members'} leading this committee
//           </p>
//         </div>

//         {/* Members Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
//           {activeCommittee.members.map((member, memberIdx) => (
//             <div 
//               key={member.name}
//               className="group relative animate-fadeIn"
//               style={{ animationDelay: `${memberIdx * 100}ms` }}
//             >
//               {/* Card */}
//               <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl shadow-md">
//                 {/* Image Container */}
//                 {/* <div className="relative aspect-square overflow-hidden bg-slate-100">
//                   <div className="absolute top-3 left-3 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-xl shadow-md">
//                     {member.country || '🌍'}
//                   </div>
                  
//                   <div className="absolute top-3 right-3 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                     <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all shadow-md">
//                       <Sparkles className="w-4 h-4 text-slate-700 hover:text-white" />
//                     </button>
//                   </div>
                  
//                   <div className="relative w-full h-full">
//                     <Image 
//                       src={member.imgSrc} 
//                       alt={`Photo of ${member.name}`} 
//                       fill 
//                       style={{objectFit: 'cover'}} 
//                       data-ai-hint={member.imgHint || 'person portrait'} 
//                       className="transform group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
//                   </div>
//                 </div> */}
                
//                 {/* Content */}
//                 <div className="p-5 space-y-3">
//                   <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">
//                     {member.name}
//                   </h3>
                  
//                   {member.title && (
//                     <div className="flex items-start gap-2">
//                       <div className="flex-shrink-0 mt-1">
//                         <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
//                       </div>
//                       <p className="text-sm text-emerald-600 font-medium leading-snug">
//                         {member.title}
//                       </p>
//                     </div>
//                   )}
                  
//                   {member.affiliation && (
//                     <div className="flex items-start gap-2 text-slate-600">
//                       <Globe className="w-4 h-4 flex-shrink-0 mt-0.5" />
//                       <p className="text-sm leading-snug">
//                         {member.affiliation}
//                       </p>
//                     </div>
//                   )}
                  
//                   {/* Divider */}
//                   <div className="pt-3 border-t border-slate-100">
//                     <div className="flex gap-2">
//                       <button className="flex-1 px-3 py-2 rounded-lg bg-slate-50 hover:bg-emerald-500 text-slate-600 hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium border border-slate-200 hover:border-emerald-500">
//                         <Mail className="w-3.5 h-3.5" />
//                         Email
//                       </button>
//                       <button className="flex-1 px-3 py-2 rounded-lg bg-slate-50 hover:bg-emerald-500 text-slate-600 hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium border border-slate-200 hover:border-emerald-500">
//                         <Linkedin className="w-3.5 h-3.5" />
//                         Profile
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Join the Team CTA */}
//       <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 border-y border-emerald-100">
//         <div className="relative container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-emerald-200 rounded-full mb-6 shadow-sm">
//               <Star className="w-5 h-5 text-amber-500" />
//               <span className="text-sm font-bold text-slate-900">Be Part of Our Team</span>
//             </div>
            
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//               Interested in Joining?
//             </h2>
//             <p className="text-xl text-slate-700 mb-12 max-w-2xl mx-auto">
//               We're always looking for passionate researchers and experts to contribute to ICLEAS. 
//               Join us as a reviewer, session chair, or committee member.
//             </p>
            
//             <div className="flex flex-wrap justify-center gap-4">
//               <button className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all">
//                 Become a Reviewer
//               </button>
//               <button className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-50 transition-all border-2 border-slate-200 shadow-md">
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out forwards;
//           opacity: 0;
//         }

//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }

//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// }









import { Metadata } from 'next';
import ClientContent from './ClientContent';

export const metadata: Metadata = {
  title: 'Conference Committees ICLEAS 2026 | Organizing, Technical & Review Committee Members',
  description: 'Meet the distinguished conference committees of ICLEAS 2026 – Chief Patron, Conference Chair, Co-Chairs, Program Chair, Organizing Committee, and Technical/Review Committee from top global universities and research institutions. Join the leading online international conference on life sciences, environmental sciences, and applied technologies.',
  keywords: 'ICLEAS 2026 committees, conference organizing committee, technical committee ICLEAS, review committee members, scientific committee life sciences conference, environmental sciences conference committee, biotechnology conference organizers',
};

export default function CommitteePage() {
  return <ClientContent />;
}