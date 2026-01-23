// import React from 'react';
// import { 
//   ChevronRight, CheckCircle, ArrowRight, Target, 
//   Users, Globe, Award, TrendingUp, Lightbulb, 
//   Leaf, Microscope, BookOpen, Sparkles, Building2,
//   Mail, Heart, Zap, Star
// } from 'lucide-react';
// import type { Metadata } from 'next';


// export const metadata: Metadata = {
//   title: 'About ICLEAS 2026 | International Life & Environmental Sciences Conference',
//   description: 'Learn about ICLEAS 2026 – an international platform promoting interdisciplinary research in life sciences, environmental studies, and applied technologies.',
// };


// const objectives = [
//   "Advance high-quality research in life sciences, environmental studies, and applied technologies",
//   "Foster collaboration between academia, industry, and policymakers worldwide",
//   "Provide a premier platform for emerging researchers and students to showcase their work",
//   "Promote sustainable technology solutions for pressing global challenges",
//   "Facilitate international knowledge exchange and build a thriving scientific community",
//   "Publish high-quality research in indexed, peer-reviewed conference proceedings",
//   "Support and encourage participation of researchers from developing nations"
// ];

// const impactAreas = [
//   { 
//     icon: BookOpen, 
//     title: "Publishing Excellence", 
//     desc: "Publishing hundreds of high-quality papers with significant citation impact and real-world applications.",
//     color: "from-emerald-500 to-teal-500"
//   },
//   { 
//     icon: Users, 
//     title: "Alumni Network", 
//     desc: "Building a strong alumni network whose members become leaders and innovators in their fields.",
//     color: "from-teal-500 to-cyan-500"
//   },
//   { 
//     icon: Building2, 
//     title: "Industry Partnerships", 
//     desc: "Forging strategic partnerships that translate research into industrial innovation and impact.",
//     color: "from-lime-600 to-green-500"
//   }
// ];

// export default function AboutPage() {
//   return (
//     <div className="flex flex-col bg-white">
//       {/* Hero Section - Nature Theme */}
//       <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950">
//         {/* Animated background */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(52,211,153,0.2),rgba(255,255,255,0))]"></div>
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
//         </div>
        
//         {/* Floating orbs */}
//         <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
//         <div className="relative z-10 container mx-auto px-4 py-24">
//           <div className="max-w-5xl mx-auto">
//             {/* Breadcrumb */}
//             <div className="flex items-center gap-2 text-emerald-200 mb-8 justify-center">
//               <span className="hover:text-white cursor-pointer transition-colors">Home</span>
//               <ChevronRight className="w-4 h-4" />
//               <span className="text-white font-medium">About Conference</span>
//             </div>
            
//             {/* Title */}
//             <div className="text-center space-y-6">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
//                 <Leaf className="w-4 h-4 text-emerald-400" />
//                 <span className="text-sm text-white font-medium">About the Conference</span>
//               </div>
              
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
//                 About <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">ICLEAS 2026</span>
//               </h1>
              
//               <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto font-light leading-relaxed">
//                 ICLEAS 2026 serves as a global academic forum to exchange innovative ideas, cutting-edge research findings, and best practices across life sciences, environmental sciences, and applied technologies.
// The conference aims to foster interdisciplinary collaboration and address global challenges such as sustainability, climate change, health, and technological innovation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="space-y-0">
        
//         {/* Mission & Vision Section */}
//         <section className="bg-white py-24 md:py-32">
//           <div className="container mx-auto px-4">
//             <div className="max-w-7xl mx-auto">
//               <div className="grid lg:grid-cols-2 gap-16 items-center">
//                 {/* Image Side */}
//                 <div className="relative">
//                   <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-20 blur-xl"></div>
//                   <div className="relative overflow-hidden rounded-2xl shadow-2xl">
//                     <img
//                       src="https://picsum.photos/seed/conf-vision/800/600"
//                       alt="Scientists collaborating"
//                       className="w-full h-[500px] object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
//                     <div className="absolute bottom-0 left-0 right-0 p-8">
//                       <div className="flex items-center gap-3 text-white">
//                         <Sparkles className="w-6 h-6" />
//                         <span className="text-lg font-semibold">Building the Future Together</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Content Side */}
//                 <div className="space-y-8">
//                   <div>
//                     <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
//                       <Target className="w-5 h-5 text-emerald-600" />
//                       <span className="text-sm font-bold text-emerald-900 uppercase tracking-wider">Our Purpose</span>
//                     </div>
//                     <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//                       Mission & Vision
//                     </h2>
//                   </div>
                  
//                   <div className="space-y-6">
//                     <p className="text-xl text-slate-700 leading-relaxed">
//                       The International Conference on Life, Environmental, and Applied Sciences (ICLEAS) was established to create a premier global platform for the brightest minds in science. Our core mission is to accelerate the integration of life sciences, environmental research, and applied technologies to address the world's most pressing sustainability challenges.
//                     </p>
//                     <p className="text-lg text-slate-600 leading-relaxed">
//                       We serve a diverse audience of seasoned researchers, pioneering academics, industry innovators, and forward-thinking policymakers. Our long-term vision is to build a dynamic, collaborative community that drives scientific progress and translates research into tangible, real-world impact for a sustainable and equitable future.
//                     </p>
//                   </div>

//                   <div className="flex flex-wrap gap-3 pt-4">
//                     <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-emerald-100">
//                       <Globe className="w-5 h-5 text-emerald-600" />
//                       <span className="font-semibold text-slate-900 text-sm">Global Impact</span>
//                     </div>
//                     <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-teal-100">
//                       <Microscope className="w-5 h-5 text-teal-600" />
//                       <span className="font-semibold text-slate-900 text-sm">Scientific Excellence</span>
//                     </div>
//                     <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-lime-100">
//                       <Heart className="w-5 h-5 text-lime-600" />
//                       <span className="font-semibold text-slate-900 text-sm">Community First</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Conference History - Featured Section */}
//         <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
//           <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
          
//           <div className="relative z-10 container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-8">
//                 <Star className="w-5 h-5 text-amber-600" />
//                 <span className="text-sm font-bold text-amber-900 uppercase tracking-wider">First Edition</span>
//               </div>
              
//               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
//                 Conference History
//               </h2>
              
//               <div className="bg-white rounded-3xl p-12 shadow-2xl border border-emerald-100">
//                 <div className="space-y-6">
//                   <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 mb-6">
//                     <Lightbulb className="w-10 h-10 text-white" />
//                   </div>
                  
//                   <p className="text-xl text-slate-700 leading-relaxed">
//                     ICLEAS 2026 marks the <strong className="text-emerald-700">inaugural edition</strong> of this international conference. As we launch this new series, we are committed to establishing a legacy of scientific excellence, impactful collaboration, and community building.
//                   </p>
                  
//                   <p className="text-lg text-slate-600 leading-relaxed">
//                     We envision ICLEAS growing into a leading annual event that shapes the future of interdisciplinary research, bringing together thousands of researchers and creating lasting impact across the globe.
//                   </p>
                  
//                   <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-slate-200">
//                     <div>
//                       <div className="text-3xl font-bold text-emerald-600 mb-2">2026</div>
//                       <div className="text-sm text-slate-600">Launch Year</div>
//                     </div>
//                     <div>
//                       <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
//                       <div className="text-sm text-slate-600">Expected Participants</div>
//                     </div>
//                     <div>
//                       <div className="text-3xl font-bold text-lime-600 mb-2">Global</div>
//                       <div className="text-sm text-slate-600">Online Reach</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Key Objectives Section */}
//         <section className="bg-white py-24 md:py-32">
//           <div className="container mx-auto px-4">
//             <div className="max-w-6xl mx-auto">
//               {/* Section Header */}
//               <div className="text-center mb-20">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
//                   <CheckCircle className="w-5 h-5 text-teal-600" />
//                   <span className="text-sm font-bold text-teal-900 uppercase tracking-wider">What We Aim For</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//                   Key Objectives
//                 </h2>
//                 <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//                   Our conference is built on clear, actionable goals that drive meaningful scientific advancement and collaboration
//                 </p>
//               </div>
              
//               {/* Objectives Grid */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 {objectives.map((objective, idx) => (
//                   <div key={idx} className="group flex items-start gap-4 p-6 bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
//                     <div className="flex-shrink-0">
//                       <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
//                         <CheckCircle className="w-6 h-6 text-white" />
//                       </div>
//                     </div>
//                     <div className="flex-1 pt-1">
//                       <p className="text-lg text-slate-700 leading-relaxed">
//                         {objective}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Future Impact Section - Dark Theme */}
//         <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 py-24 md:py-32 overflow-hidden">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
//           <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          
//           <div className="relative z-10 container mx-auto px-4">
//             <div className="max-w-6xl mx-auto">
//               {/* Section Header */}
//               <div className="text-center mb-20">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
//                   <TrendingUp className="w-5 h-5 text-emerald-400" />
//                   <span className="text-sm font-bold text-white uppercase tracking-wider">Looking Ahead</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                   Future Conference Impact
//                 </h2>
//                 <p className="text-xl text-teal-200 max-w-3xl mx-auto">
//                   As we launch ICLEAS, we are focused on creating lasting value for the scientific community and driving meaningful change
//                 </p>
//               </div>
              
//               {/* Impact Cards */}
//               <div className="grid md:grid-cols-3 gap-8">
//                 {impactAreas.map((item, idx) => (
//                   <div key={idx} className="group relative">
//                     <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity`}></div>
//                     <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
//                       <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
//                         <item.icon className="w-8 h-8 text-white" />
//                       </div>
//                       <h3 className="text-2xl font-bold text-white mb-4">
//                         {item.title}
//                       </h3>
//                       <p className="text-lg text-emerald-200 leading-relaxed">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Organizing Institution Section */}
//         <section className="bg-gradient-to-b from-emerald-50 to-white py-24 md:py-32">
//           <div className="container mx-auto px-4">
//             <div className="max-w-5xl mx-auto">
//               {/* Section Header */}
//               <div className="text-center mb-16">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
//                   <Building2 className="w-5 h-5 text-slate-600" />
//                   <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Organized By</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//                   Organizing Institution
//                 </h2>
//               </div>
              
//               {/* Organization Card */}
//               <div className="relative">
//                 <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-20 blur-2xl"></div>
//                 <div className="relative bg-white rounded-3xl p-6 md:p-12 shadow-2xl border border-emerald-100">
//                   <div className="flex flex-col items-left text-left space-y-8">
//                     <div className='flex flex-col sm:flex-row md:items-center gap-6'>
//                       {/* Logo */}
//                       <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-xl">
//                         <span className="text-3xl font-bold text-white">SF</span>
//                       </div>
                      
//                       {/* Organization Name */}
//                       <div>
//                         <h3 className="text-3xl font-bold text-slate-900 mb-2">ScientiaForum</h3>
//                         <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
//                       </div>
//                     </div>

                    
//                     <div className="flex flex-col sm:flex-row">
//                       {/* Description */}
//                       <p className="text-lg text-slate-700 leading-relaxed max-w-3xl pr-8">
//                         ScientiaForum is a professional organization dedicated to advancing scientific knowledge by creating high-quality platforms for academic and industry professionals to connect, share, and collaborate. With years of experience in managing international conferences, we are committed to ensuring ICLEAS 2026 is a resounding success.
//                       </p>
                      
//                       {/* Contact Info */}
//                       <div className="self-start mt-8 md:mt-0 md:border-l md:pl-8 border-slate-200">
//                         <div className="space-y-4">
//                           <h4 className="text-xl font-bold text-slate-900">Contact Information</h4>
//                           <div className="flex flex-col items-center gap-3">
//                             <div className="flex items-center gap-3">
//                               <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
//                                 <Users className="w-5 h-5 text-emerald-600" />
//                               </div>
//                               <div className="text-left">
//                                 <div className="font-semibold text-slate-900">Conference Secretariat</div>
//                                 <div className="text-sm text-slate-600">Main Contact Person</div>
//                               </div>
//                             </div>
//                             <a 
//                               href="mailto:contact@icleas.com" 
//                               className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg"
//                             >
//                               <Mail className="w-5 h-5" />
//                               contact@icleas.com
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>


//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Final CTA Section */}
//         <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 overflow-hidden">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
//           <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
          
//           <div className="relative z-10 container mx-auto px-4 text-center">
//             <div className="max-w-4xl mx-auto space-y-8">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
//                 <Zap className="w-4 h-4 text-emerald-400" />
//                 <span className="text-sm text-white font-medium">Join the Movement</span>
//               </div>
              
//               <h2 className="text-4xl md:text-5xl font-bold text-white">
//                 Be Part of Scientific History
//               </h2>
//               <p className="text-xl text-teal-200">
//                 Join us at the inaugural ICLEAS 2026 and help shape the future of interdisciplinary science
//               </p>
//               <div className="flex flex-wrap justify-center gap-4 pt-4">
//                 <a 
//                   className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2"
//                   href="/submission"
//                 >
//                   Submit Your Paper
//                   <ArrowRight className="w-5 h-5" />
//                 </a>
//                 <a 
//                   className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
//                   href="/registration"
//                 >
//                   Register Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }
























import React from 'react';
import { 
  ChevronRight, CheckCircle, ArrowRight, Target, 
  Users, Globe, Award, TrendingUp, Lightbulb, 
  Leaf, Microscope, BookOpen, Sparkles, Building2,
  Mail, Heart, Zap, Star
} from 'lucide-react';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About ICLEAS 2026 | International Conference on Life, Environmental & Applied Sciences | Online July 23–24, 2026',
  description: 'Discover ICLEAS 2026 – premier online international conference organized by ScientiaForum. Promoting interdisciplinary research in life sciences, environmental studies, applied sciences, biotechnology, sustainability, and emerging technologies for a sustainable future.',
};


const objectives = [
  "Advance high-quality original research in life sciences, environmental sciences, and applied technologies",
  "Foster global interdisciplinary collaboration among researchers, academicians, industry professionals, and students",
  "Provide an inclusive platform for early-career researchers, postgraduate students, and scholars to present innovative work",
  "Promote sustainable innovations and green technologies to tackle climate change, biodiversity loss, and global environmental challenges",
  "Facilitate worldwide knowledge exchange and networking in an accessible online format",
  "Ensure publication of peer-reviewed, high-impact papers in indexed conference proceedings",
  "Encourage broad participation, especially from researchers in developing countries and diverse regions"
];

const impactAreas = [
  { 
    icon: BookOpen, 
    title: "High-Impact Publishing", 
    desc: "Delivering peer-reviewed proceedings with ISBN/DOI indexing to boost citation potential and academic visibility for life & environmental sciences research.",
    color: "from-emerald-500 to-teal-500"
  },
  { 
    icon: Users, 
    title: "Global Research Network", 
    desc: "Creating an international community of scientists and innovators who continue collaborations long after the conference.",
    color: "from-teal-500 to-cyan-500"
  },
  { 
    icon: Building2, 
    title: "Industry-Academia Bridge", 
    desc: "Building partnerships that transform cutting-edge research in applied sciences into practical, sustainable real-world solutions.",
    color: "from-lime-600 to-green-500"
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - Nature Theme */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(52,211,153,0.2),rgba(255,255,255,0))]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-emerald-200 mb-8 justify-center">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">About ICLEAS 2026</span>
            </div>
            
            {/* Title */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-white font-medium">International Life, Environmental & Applied Sciences Conference</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                About <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">ICLEAS 2026</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto font-light leading-relaxed">
                ICLEAS 2026 is the inaugural online international conference on life sciences, environmental sciences, and applied sciences, organized by ScientiaForum. This fully virtual event brings together global researchers, scientists, academicians, industry experts, and students to share groundbreaking research, foster interdisciplinary collaboration, and develop sustainable solutions for climate change, biodiversity, health innovation, and emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-0">
        
        {/* Mission & Vision Section */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-20 blur-xl"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="https://picsum.photos/seed/conf-vision/800/600"
                      alt="Global researchers collaborating in interdisciplinary life and environmental sciences conference"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-3 text-white">
                        <Sparkles className="w-6 h-6" />
                        <span className="text-lg font-semibold">Collaborating for a Sustainable Future</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                      <Target className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-bold text-emerald-900 uppercase tracking-wider">Conference Mission & Vision</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                      Mission & Vision of ICLEAS 2026
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-xl text-slate-700 leading-relaxed">
                      The International Conference on Life, Environmental & Applied Sciences (ICLEAS 2026) is designed as a leading online global platform to unite top researchers and innovators. Our mission focuses on integrating life sciences, environmental research, and applied technologies to solve urgent global issues like sustainability, climate resilience, and technological advancement.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Targeting researchers, faculty, industry professionals, and students worldwide, ICLEAS 2026 aims to build an inclusive, collaborative scientific community that drives high-impact research, knowledge sharing, and real-world applications for a greener, more sustainable planet.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-emerald-100">
                      <Globe className="w-5 h-5 text-emerald-600" />
                      <span className="font-semibold text-slate-900 text-sm">Worldwide Participation</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-teal-100">
                      <Microscope className="w-5 h-5 text-teal-600" />
                      <span className="font-semibold text-slate-900 text-sm">Research Excellence</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-lime-100">
                      <Heart className="w-5 h-5 text-lime-600" />
                      <span className="font-semibold text-slate-900 text-sm">Inclusive Community</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conference History - Featured Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-8">
                <Star className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-bold text-amber-900 uppercase tracking-wider">Inaugural Edition</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                ICLEAS Conference History
              </h2>
              
              <div className="bg-white rounded-3xl p-12 shadow-2xl border border-emerald-100">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 mb-6">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  
                  <p className="text-xl text-slate-700 leading-relaxed">
                    ICLEAS 2026 represents the **inaugural edition** of this international conference series on life, environmental & applied sciences. Organized by ScientiaForum, we are launching this event with a strong commitment to scientific rigor, global inclusivity, and long-term impact.
                  </p>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We aim to establish ICLEAS as an annual flagship online conference that attracts thousands of participants, fosters interdisciplinary breakthroughs, and contributes meaningfully to sustainability and scientific progress worldwide.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-slate-200">
                    <div>
                      <div className="text-3xl font-bold text-emerald-600 mb-2">2026</div>
                      <div className="text-sm text-slate-600">Inaugural Year</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
                      <div className="text-sm text-slate-600">Expected Global Attendees</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-lime-600 mb-2">Online</div>
                      <div className="text-sm text-slate-600">Worldwide Accessibility</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Objectives Section */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-bold text-teal-900 uppercase tracking-wider">Core Objectives</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Key Objectives of ICLEAS 2026
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Driving meaningful progress in life sciences, environmental sustainability, and applied research through focused goals
                </p>
              </div>
              
              {/* Objectives Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {objectives.map((objective, idx) => (
                  <div key={idx} className="group flex items-start gap-4 p-6 bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-lg text-slate-700 leading-relaxed">
                        {objective}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future Impact Section - Dark Theme */}
        <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Long-Term Vision</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Future Impact of ICLEAS Conference Series
                </h2>
                <p className="text-xl text-teal-200 max-w-3xl mx-auto">
                  Launching with ICLEAS 2026, we are committed to creating enduring value for researchers in life sciences, environmental studies, and applied technologies
                </p>
              </div>
              
              {/* Impact Cards */}
              <div className="grid md:grid-cols-3 gap-8">
                {impactAreas.map((item, idx) => (
                  <div key={idx} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity`}></div>
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-lg text-emerald-200 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Organizing Institution Section */}
        <section className="bg-gradient-to-b from-emerald-50 to-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
                  <Building2 className="w-5 h-5 text-slate-600" />
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Conference Organizer</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Organized by ScientiaForum
                </h2>
              </div>
              
              {/* Organization Card */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative bg-white rounded-3xl p-6 md:p-12 shadow-2xl border border-emerald-100">
                  <div className="flex flex-col items-left text-left space-y-8">
                    <div className='flex flex-col sm:flex-row md:items-center gap-6'>
                      {/* Logo */}
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-xl">
                        <span className="text-3xl font-bold text-white">SF</span>
                      </div>
                      
                      {/* Organization Name */}
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">ScientiaForum</h3>
                        <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
                      </div>
                    </div>

                    
                    <div className="flex flex-col sm:flex-row">
                      {/* Description */}
                      <p className="text-lg text-slate-700 leading-relaxed max-w-3xl pr-8">
                        ScientiaForum is a dedicated academic organization focused on promoting high-quality research, innovation, and global collaboration through international conferences, publications, and scholarly initiatives. With expertise in hosting interdisciplinary events, ScientiaForum ensures ICLEAS 2026 delivers exceptional academic value, rigorous peer review, and broad international reach.
                      </p>
                      
                      {/* Contact Info */}
                      <div className="self-start mt-8 md:mt-0 md:border-l md:pl-8 border-slate-200">
                        <div className="space-y-4">
                          <h4 className="text-xl font-bold text-slate-900">Contact the Organizers</h4>
                          <div className="flex flex-col items-center gap-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                <Users className="w-5 h-5 text-emerald-600" />
                              </div>
                              <div className="text-left">
                                <div className="font-semibold text-slate-900">Conference Secretariat</div>
                                <div className="text-sm text-slate-600">ICLEAS 2026 Team</div>
                              </div>
                            </div>
                            <a 
                              href="mailto:contact@icleas.com" 
                              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg"
                            >
                              <Mail className="w-5 h-5" />
                              contact@icleas.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-white font-medium">Join ICLEAS 2026</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Contribute to the Future of Life & Environmental Sciences
              </h2>
              <p className="text-xl text-teal-200">
                Participate in the inaugural ICLEAS 2026 online international conference and help advance interdisciplinary research for global sustainability
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a 
                  className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2"
                  href="/submission"
                >
                  Submit Your Research Paper
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                  href="/registration"
                >
                  Register for ICLEAS 2026
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}