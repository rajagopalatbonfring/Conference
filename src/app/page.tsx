// import React from 'react';
// import { 
//   Users, FileText, Calendar, ChevronRight, Download, 
//   Newspaper, BookCheck, Globe, MicVocal, GitFork, 
//   ArrowRight, Sparkles, Award, TrendingUp, Clock,
//   CheckCircle2, Circle, Zap, Star, Target, Lightbulb,
//   MessageCircle, Mail, Phone, Leaf, Microscope, Droplet,
//   Building2
// } from 'lucide-react';

// import bg from '../assets/bg1.jpg';

// // Mock data
// const speakers = [
//   {
//     id: 1,
//     name: "Dr. Sarah Mitchell",
//     title: "Professor of Environmental Science",
//     affiliation: "Stanford University",
//     bio: "Leading researcher in climate adaptation strategies with over 20 years of experience.",
//     imgSrc: "https://picsum.photos/seed/speaker1/400/400",
//     imgHint: "professional scientist"
//   },
//   {
//     id: 2,
//     name: "Dr. James Chen",
//     title: "Director of Biotechnology Research",
//     affiliation: "MIT",
//     bio: "Pioneer in synthetic biology and sustainable biotechnology applications.",
//     imgSrc: "https://picsum.photos/seed/speaker2/400/400",
//     imgHint: "scientist portrait"
//   }
// ];

// const importantDates = [
//   { title: "Paper Submission Deadline", date: "March 15, 2026", status: "Open" },
//   { title: "Notification of Acceptance", date: "April 30, 2026", status: "Upcoming" },
//   { title: "Early Bird Registration", date: "May 15, 2026", status: "Upcoming" },
//   { title: "Conference Dates", date: "June 25-26, 2026", status: "Upcoming" }
// ];

// const faqs = [
//   {
//     question: "What is the conference format?",
//     answer: "ICLEAS 2026 is a fully online conference accessible from anywhere in the world."
//   },
//   {
//     question: "How do I submit a paper?",
//     answer: "Visit our submission page and follow the guidelines for paper formatting and submission."
//   },
//   {
//     question: "What are the registration fees?",
//     answer: "Registration fees vary by category. Please visit our registration page for detailed pricing."
//   }
// ];

// export default function Home() {
//   return (
//     <div className="flex flex-col bg-white">
//       {/* Hero Section - Nature-Inspired Design */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950">
//         {/* Animated background */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(52,211,153,0.2),rgba(255,255,255,0))]"></div>
//           <div 
//             className="absolute inset-0 opacity-30"
//             style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
//           ></div>
//         </div>
        
//         {/* Floating orbs - Nature colors */}
//         <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
//         <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
//           <div className="text-center space-y-8">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
//               <Leaf className="w-4 h-4 text-emerald-400" />
//               <span className="text-sm text-white font-medium">Premier Scientific Conference 2026</span>
//             </div>
            
//             {/* Main Title */}
//             <h1 className="font-bold tracking-wide leading-loose text-white max-w-5xl mx-auto text-5xl md:text-6xl lg:text-7xl mb-4 bg-white bg-clip-text text-transparent leading-[1.1] md:leading-[1.3]">
//                 International Conference on Life, Environmental & Applied Sciences 
//                  <span className='block mt-16'> (ICLEAS 2026)</span>
//             </h1>
            
//             {/* Subtitle */}
//             <p className="text-xl md:text-2xl text-orange-400 max-w-3xl mx-auto font-bold leading-relaxed">
//               Integrating Life Sciences, Environment & Technology for a Sustainable Future
//             </p>
            
//             {/* Date & Format */}
//             <div className="flex flex-wrap justify-center gap-6 text-white/90">
//               <div className="flex items-center gap-2">
//                 <Calendar className="w-5 h-5" />
//                 <span className="text-lg">July 23–24, 2026</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Globe className="w-5 h-5" />
//                 <span className="text-lg">Online Conference</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Building2 className="w-5 h-5" />
//                 <span className="text-lg">ScientiaForum</span>
//               </div>
//             </div>
            
//             {/* CTA Buttons */}
//             <div className="flex flex-wrap justify-center gap-4 pt-4">
//               <a  
//                 className="px-8 py-4 bg-white text-emerald-900 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-2xl"
//                 href="/submission"
//               >
//                 Submit Your Paper
//               </a>
//               <a 
//                 className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
//                 href="/registration" 
//               >
//                 Register Now
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Stats Bar */}
//         <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/20 backdrop-blur-md">
//           <div className="container mx-auto px-4 py-8">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
//                 <div className="text-sm text-emerald-200">Expected Attendees</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-white mb-1">Open</div>
//                 <div className="text-sm text-emerald-200">Call for Papers</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-white mb-1">3+</div>
//                 <div className="text-sm text-emerald-200">Keynote Speakers</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-white mb-1">Online</div>
//                 <div className="text-sm text-emerald-200">Conference Format</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="space-y-0">
        
//         {/* Conference Highlights - Nature Theme */}
//         <section className="container mx-auto px-4 py-20 md:py-32">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Conference Highlights</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: MicVocal, title: "Leading Researchers", desc: "Learn from and interact with experts and pioneers in the field.", bgcolor: "from-emerald-500 to-teal-500", href:"/speakers", color:"emerald-400" },
//               { icon: GitFork, title: "5 Cutting-Edge Tracks", desc: "Explore diverse topics across our specialized scientific tracks.", bgcolor: "from-green-600 to-lime-600", href:"/tracks", color:"green-600" },
//               { icon: Globe, title: "Global Networking", desc: "Connect with peers and professionals from around the world online.", bgcolor: "from-orange-400 to-orange-300", href:"/committee", color:"orange-400" },
//               { icon: BookCheck, title: "Indexed Proceedings", desc: "Get your work published in our proceedings with a dedicated ISBN.", bgcolor: "from-lime-600 to-green-500", href:"/publication", color:"lime-600" }
//             ].map((item, idx) => (
//               <div key={idx} className="text-center flex flex-col justify-between group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-transparent overflow-hidden">
//                 <div className={`absolute inset-0 bg-gradient-to-br ${item.bgcolor} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
//                 <div className='flex flex-col items-center'>
//                   <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.bgcolor} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
//                     <item.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
//                   <p className="text-slate-600 leading-relaxed">{item.desc}</p>
//                 </div>
//                 <a 
//                   href={item.href}
//                   className={`group text-${item.color} font-bold text-lg hover:gap-3 transition-all relative z-10 hover:underline`}
//                 >
//                   view
//                 </a>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Important Dates - Environmental Theme */}
//         <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 py-24 md:py-32 overflow-hidden">
//           {/* Decorative Elements */}
//           <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          
//           <div className="relative z-10 container mx-auto px-4">
//             {/* Section Header */}
//             <div className="text-center mb-20">
//               <div className="inline-flex items-center gap-3 mb-6">
//                 <Clock className="w-8 h-8 text-emerald-400" />
//                 <span className="text-emerald-400 uppercase tracking-widest text-sm font-semibold">Mark Your Calendar</span>
//               </div>
//               <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
//                 Important Dates
//               </h2>
//               <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
//                 Stay on track with our conference timeline and don't miss any crucial deadlines
//               </p>
//             </div>

//             {/* Timeline */}
//             <div className="max-w-5xl mx-auto">
//               <div className="grid md:grid-cols-2 gap-8 md:gap-12">
//                 {importantDates.map((item, idx) => (
//                   <div key={idx} className="relative group">
//                     {/* Connecting Line for Desktop */}
//                     {idx < importantDates.length - 1 && idx % 2 === 0 && (
//                       <div className="hidden md:block absolute top-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
//                     )}
                    
//                     <div className="relative">
//                       {/* Date Badge */}
//                       <div className="flex items-start gap-6 mb-6">
//                         <div className="flex-shrink-0">
//                           <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
//                             item.status === 'Open' 
//                               ? 'bg-gradient-to-br from-lime-400 to-green-500' 
//                               : 'bg-gradient-to-br from-emerald-400 to-teal-600'
//                           } shadow-lg`}>
//                             {item.status === 'Open' ? (
//                               <CheckCircle2 className="w-8 h-8 text-white" />
//                             ) : (
//                               <Circle className="w-8 h-8 text-white" />
//                             )}
//                           </div>
//                         </div>
                        
//                         <div className="flex-1 pt-2">
//                           <div className="flex items-center gap-3 mb-3">
//                             <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
//                               item.status === 'Open'
//                                 ? 'bg-lime-500/20 text-lime-300 border border-lime-400/30'
//                                 : 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
//                             }`}>
//                               {item.status}
//                             </span>
//                           </div>
//                           <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
//                             {item.title}
//                           </h3>
//                           <div className="flex items-center gap-2 text-emerald-200">
//                             <Calendar className="w-4 h-4" />
//                             <span className="text-lg font-medium">{item.date}</span>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Decorative line */}
//                       <div className="h-px bg-gradient-to-r from-emerald-400/30 via-emerald-400/10 to-transparent"></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Button */}
//               <div className="text-center mt-16">
//                 <a 
//                   className="group px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg hover:from-emerald-500 hover:to-teal-500 transition-all shadow-2xl shadow-emerald-600/50 inline-flex items-center gap-3"
//                   href="/dates"
//                 >
//                   View Full Timeline
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Distinguished Speakers - Magazine Layout */}
//         <section className="bg-orange-50/10 py-24 md:py-32">
//           <div className="container mx-auto px-4">
//             {/* Section Header */}
//             <div className="text-center mb-20">
//               <div className="inline-flex items-center gap-3 mb-6">
//                 <Star className="w-7 h-7 text-amber-500" />
//                 <span className="text-slate-600 uppercase tracking-widest text-sm font-semibold">Industry Leaders</span>
//                 <Star className="w-7 h-7 text-amber-500" />
//               </div>
//               <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
//                 Distinguished Speakers
//               </h2>
//               <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//                 Learn from world-renowned experts who are shaping the future of science and technology
//               </p>
//             </div>
            
//             {/* Speakers Grid */}
//             <div className="max-w-7xl mx-auto space-y-16">
//               {speakers.map((speaker, idx) => (
//                 <div key={speaker.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
//                   {/* Image Side */}
//                   <div className="lg:w-1/2">
//                     <div className="relative group">
//                       <div className="relative overflow-hidden rounded-2xl shadow-2xl">
//                         <img
//                           src={speaker.imgSrc}
//                           alt={speaker.name}
//                           className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
//                         <div className="absolute bottom-0 left-0 right-0 p-8">
//                           <div className="flex items-center gap-3 text-white/90">
//                             <div className="w-12 h-px bg-white/50"></div>
//                             <span className="text-sm uppercase tracking-wider">Keynote Speaker</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Content Side */}
//                   <div className="lg:w-1/2 space-y-6">
//                     <div>
//                       <div className="inline-block mb-4">
//                         <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
//                           <MicVocal className="w-4 h-4 text-emerald-600" />
//                           <span className="text-sm font-semibold text-emerald-900">Featured Speaker</span>
//                         </div>
//                       </div>
//                       <h3 className="text-4xl font-bold text-slate-900 mb-3">
//                         {speaker.name}
//                       </h3>
//                       <div className="space-y-1 mb-6">
//                         <p className="text-xl font-semibold text-emerald-600">
//                           {speaker.title}
//                         </p>
//                         <p className="text-lg text-slate-600">
//                           {speaker.affiliation}
//                         </p>
//                       </div>
//                     </div>
                    
//                     <div className="h-px bg-gradient-to-r from-slate-300 via-slate-200 to-transparent"></div>
                    
//                     <p className="text-lg text-slate-700 leading-relaxed">
//                       {speaker.bio}
//                     </p>
                    
//                     <a 
//                       className="group inline-flex items-center gap-2 text-emerald-600 font-bold text-lg hover:gap-3 transition-all"
//                       href="/speakers"
//                     >
//                       Read Full Biography
//                       <ArrowRight className="w-5 h-5" />
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* View All Button */}
//             <div className="text-center mt-20">
//               <a 
//                 className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl inline-flex items-center gap-3"
//                 href="/speakers"
//               >
//                 View All Speakers
//                 <ChevronRight className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* Why ICLEAS Matters - Feature Section */}
//         <section className="relative py-32 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
//           {/* Decorative background */}
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
          
//           <div className="relative z-10 container mx-auto px-4">
//             <div className="max-w-6xl mx-auto">
//               <div className="grid lg:grid-cols-2 gap-16 items-center">
//                 {/* Left side - Content */}
//                 <div className="space-y-8">
//                   <div>
//                     <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
//                       <Award className="w-5 h-5 text-amber-600" />
//                       <span className="text-sm font-bold text-amber-900 uppercase tracking-wider">Our Vision</span>
//                     </div>
//                     <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
//                       Why ICLEAS 2026 Matters
//                     </h2>
//                   </div>
                  
//                   <div className="space-y-6">
//                     <p className="text-xl text-slate-700 leading-relaxed">
//                       ICLEAS 2026 is founded on the vision that today's global challenges require a unified scientific front. By gathering experts in life sciences, environmental sustainability, and applied technologies, we create a dynamic platform for forging interdisciplinary solutions.
//                     </p>
//                     <p className="text-xl text-slate-700 leading-relaxed">
//                       Our goal is to accelerate innovation and foster collaborations that will shape a more sustainable and technologically advanced future for all.
//                     </p>
//                   </div>

//                   <div className="flex flex-wrap gap-4 pt-4">
//                     <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md">
//                       <Leaf className="w-5 h-5 text-emerald-600" />
//                       <span className="font-semibold text-slate-900">Sustainability Focus</span>
//                     </div>
//                     <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md">
//                       <Microscope className="w-5 h-5 text-teal-600" />
//                       <span className="font-semibold text-slate-900">Scientific Excellence</span>
//                     </div>
//                     <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md">
//                       <Droplet className="w-5 h-5 text-cyan-600" />
//                       <span className="font-semibold text-slate-900">Environmental Impact</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right side - Visual Element */}
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl transform rotate-3"></div>
//                   <div className="relative bg-white rounded-3xl p-12 shadow-2xl">
//                     <div className="space-y-8">
//                       {[
//                         { icon: Users, title: "Global Collaboration", desc: "Connect with 500+ scientists worldwide" },
//                         { icon: BookCheck, title: "Research Excellence", desc: "Publish in indexed proceedings" },
//                         { icon: TrendingUp, title: "Career Growth", desc: "Advance your academic profile" }
//                       ].map((item, idx) => (
//                         <div key={idx} className="flex items-start gap-4">
//                           <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${
//                             idx === 0 ? 'from-emerald-500 to-teal-500' :
//                             idx === 1 ? 'from-green-600 to-lime-600' :
//                             'from-teal-500 to-cyan-500'
//                           } flex items-center justify-center`}>
//                             <item.icon className="w-6 h-6 text-white" />
//                           </div>
//                           <div>
//                             <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
//                             <p className="text-slate-600">{item.desc}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Latest News - Editorial Style */}
//         <section className="bg-white py-24 md:py-32">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               {/* Section Header */}
//               <div className="text-center mb-16">
//                 <div className="inline-flex items-center gap-2 mb-6">
//                   <div className="w-12 h-px bg-slate-300"></div>
//                   <Newspaper className="w-6 h-6 text-slate-400" />
//                   <div className="w-12 h-px bg-slate-300"></div>
//                 </div>
//                 <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
//                   Latest News
//                 </h2>
//                 <p className="text-lg text-slate-600">Stay updated with the latest announcements</p>
//               </div>
              
//               {/* News Placeholder */}
//               <div className="relative py-24">
//                 <div className="text-center space-y-6">
//                   <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-100">
//                     <Newspaper className="w-12 h-12 text-slate-400" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-slate-900 mb-2">Coming Soon</h3>
//                     <p className="text-lg text-slate-600">Exciting updates are on the way. Check back soon!</p>
//                   </div>
//                   <a 
//                     className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all"
//                     href="/news"
//                   >
//                     View All News
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Publication Partners - Nature / Sustainability Theme */}
//         <section className="bg-gradient-to-br from-emerald-950 via-teal-950 to-green-950 py-24 md:py-32 relative overflow-hidden">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          
//           <div className="relative z-10 container mx-auto px-4">
//             <div className="text-center mb-16">
//               <div className="inline-flex items-center gap-3 mb-6">
//                 <BookCheck className="w-7 h-7 text-emerald-400" />
//                 <span className="text-emerald-400 uppercase tracking-widest text-sm font-semibold">Academic & Environmental Impact</span>
//               </div>
//               <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
//                 Publication Partners
//               </h2>
//               <p className="text-xl text-teal-200 max-w-3xl mx-auto">
//                 All accepted papers will be indexed in leading academic databases, ensuring visibility and real-world environmental impact
//               </p>
//             </div>
            
//             <div className="max-w-5xl mx-auto">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                 {[
//                   { name: 'CrossRef/DOI', icon: BookCheck },
//                   { name: 'DOAJ', icon: Globe },
//                   { name: 'Google Scholar', icon: FileText },
//                   { name: 'Scopus', icon: Award }
//                 ].map((partner, idx) => (
//                   <div key={idx} className="group">
//                     <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
//                       <div className="text-center space-y-4">
//                         <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10">
//                           <partner.icon className="w-8 h-8 text-white" />
//                         </div>
//                         <h3 className="text-lg font-bold text-white">{partner.name}</h3>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Triple CTA - Nature Theme */}
//         <section className="bg-white py-24 md:py-32">
//           <div className="container mx-auto px-4">
//             <div className="max-w-7xl mx-auto">
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
//                 {[
//                   { 
//                     icon: FileText, 
//                     title: "Submit Your Research", 
//                     desc: "Contribute to sustainable solutions in life & environmental sciences.", 
//                     cta: "Go to CFP", 
//                     gradient: "from-emerald-600 to-teal-600",
//                     bgGradient: "from-emerald-50 to-teal-50",
//                     href : "/submission"
//                   },
//                   { 
//                     icon: Users, 
//                     title: "Register for ICLEAS", 
//                     desc: "Join scientists working toward a greener and more resilient future.", 
//                     cta: "Register Now", 
//                     gradient: "from-teal-600 to-cyan-600",
//                     bgGradient: "from-teal-50 to-cyan-50",
//                     href : "/registration"
//                   },
//                   { 
//                     icon: Newspaper, 
//                     title: "Become a Reviewer", 
//                     desc: "Help ensure high-quality research with environmental relevance.", 
//                     cta: "Interested", 
//                     gradient: "from-lime-600 to-green-600",
//                     bgGradient: "from-lime-50 to-green-50",
//                     href : "/committee"
//                   }
//                 ].map((item, idx) => (
//                   <div key={idx} className="relative group">
//                     {/* Divider line between items */}
//                     {idx < 2 && (
//                       <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
//                     )}
                    
//                     <div className={`h-full p-12 bg-gradient-to-br ${item.bgGradient} shadow-2xl hover:shadow-xl transition-all duration-300`}>
//                       <div className="space-y-6">
//                         {/* Icon */}
//                         <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-xl`}>
//                           <item.icon className="w-10 h-10 text-white" />
//                         </div>
                        
//                         {/* Content */}
//                         <div className="space-y-4">
//                           <h3 className="text-3xl font-bold text-slate-900">
//                             {item.title}
//                           </h3>
//                           <p className="text-lg text-slate-700 leading-relaxed min-h-[80px]">
//                             {item.desc}
//                           </p>
//                         </div>
                        
//                         {/* CTA */}
//                         <a 
//                           className={`group/btn w-full px-8 py-4 bg-gradient-to-r ${item.gradient} text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2`}
//                           href={item.href}
//                         >
//                           {item.cta}
//                           <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* FAQ Section - Clean & Nature Theme */}
//         <section className="bg-gradient-to-b from-emerald-50 to-teal-50 py-24 md:py-32">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               {/* Section Header */}
//               <div className="text-center mb-20">
//                 <div className="inline-flex items-center gap-2 mb-6">
//                   <MessageCircle className="w-7 h-7 text-emerald-600" />
//                   <span className="text-slate-600 uppercase tracking-widest text-sm font-semibold">Got Questions?</span>
//                 </div>
//                 <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
//                   Frequently Asked Questions
//                 </h2>
//                 <p className="text-xl text-slate-600">
//                   Find answers to common questions about ICLEAS 2026
//                 </p>
//               </div>
              
//               {/* FAQ Items */}
//               <div className="space-y-6">
//                 {faqs.map((faq, idx) => (
//                   <div key={idx} className="group">
//                     <details className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-emerald-100">
//                       <summary className="cursor-pointer p-8 font-bold text-slate-900 text-xl flex justify-between items-center list-none">
//                         <span className="flex-1 pr-4">{faq.question}</span>
//                         <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center group-open:bg-emerald-600 transition-colors">
//                           <ChevronRight className="w-5 h-5 text-emerald-600 group-open:text-white group-open:rotate-90 transition-all" />
//                         </div>
//                       </summary>
//                       <div className="px-8 pb-8 pt-2">
//                         <div className="h-px bg-gradient-to-r from-emerald-200 to-transparent mb-6"></div>
//                         <p className="text-lg text-slate-700 leading-relaxed">
//                           {faq.answer}
//                         </p>
//                       </div>
//                     </details>
//                   </div>
//                 ))}
//               </div>
              
//               {/* View All Button */}
//               <div className="text-center mt-12">
//                 <a 
//                   className="px-10 py-4 bg-emerald-700 text-white rounded-full font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl inline-flex items-center gap-3"
//                   href="/faq"
//                 >
//                   View All FAQs
//                   <ArrowRight className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Final CTA Banner - Strong Nature Call */}
//         <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 overflow-hidden">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
//           <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
          
//           <div className="relative z-10 container mx-auto px-4 text-center">
//             <div className="max-w-4xl mx-auto space-y-8">
//               <h2 className="text-4xl md:text-5xl font-bold text-white">
//                 Ready to Shape a Sustainable Future?
//               </h2>
//               <p className="text-xl text-teal-200">
//                 Join ICLEAS 2026 and contribute to life sciences, environmental protection, and applied innovation
//               </p>
//               <div className="flex flex-wrap justify-center gap-4 pt-4">
//                 <a 
//                   className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl"
//                   href="/submission"
//                 >
//                   Submit Your Paper
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
  Users, FileText, Calendar, ChevronRight, Download, 
  Newspaper, BookCheck, Globe, MicVocal, GitFork, 
  ArrowRight, Sparkles, Award, TrendingUp, Clock,
  CheckCircle2, Circle, Zap, Star, Target, Lightbulb,
  MessageCircle, Mail, Phone, Leaf, Microscope, Droplet,
  Building2
} from 'lucide-react';

import bg from '../../public/images/img1.png';

// Mock data (unchanged, but speaker bios lightly tuned for relevance)
const speakers = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    title: "Professor of Environmental Science",
    affiliation: "Stanford University",
    bio: "Renowned expert in climate change adaptation and environmental sustainability strategies with over 20 years leading interdisciplinary research.",
    imgSrc: "https://picsum.photos/seed/speaker1/400/400",
    imgHint: "professional environmental scientist portrait"
  },
  {
    id: 2,
    name: "Dr. James Chen",
    title: "Director of Biotechnology Research",
    affiliation: "MIT",
    bio: "Pioneer in synthetic biology, molecular biotechnology, and green technology innovations for sustainable life sciences applications.",
    imgSrc: "https://picsum.photos/seed/speaker2/400/400",
    imgHint: "biotechnology scientist professional headshot"
  }
];

// Important dates updated to match your original July 23–24, 2026 (placeholders refined for realism/SEO)
const importantDates = [
  { title: "Abstract / Full Paper Submission Deadline", date: "March 31, 2026", status: "Open" },
  { title: "Notification of Acceptance", date: "April 30, 2026", status: "Upcoming" },
  { title: "Early Bird Registration Deadline", date: "May 31, 2026", status: "Upcoming" },
  { title: "Conference Dates", date: "July 23–24, 2026", status: "Upcoming" }
];

const faqs = [
  {
    question: "What is the format of ICLEAS 2026 conference?",
    answer: "ICLEAS 2026 is a fully online international conference on life, environmental & applied sciences, accessible worldwide without travel."
  },
  {
    question: "How can I submit a research paper to ICLEAS 2026?",
    answer: "Visit the submission page, download the official template, and submit your original unpublished paper following the guidelines."
  },
  {
    question: "What are the registration fees for the online conference?",
    answer: "Fees vary by category (student, academic, industry, listener). Full details and payment options are on the registration page."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* 
        SEO META TAGS — Add this via next/head or helmet in real app:
        <Head>
          <title>ICLEAS 2026 | International Conference on Life, Environmental & Applied Sciences | July 23–24, 2026 | Online</title>
          <meta name="description" content="Join ICLEAS 2026 — premier online international conference on life sciences, environmental sciences, and applied sciences. Submit papers, present research, network globally, and publish in proceedings. Theme: Integrating Life Sciences, Environment & Technology for a Sustainable Future." />
          <meta name="keywords" content="ICLEAS 2026, life sciences conference 2026, environmental sciences conference, applied sciences conference, online international conference, sustainable future conference, interdisciplinary science conference, ScientiaForum conference" />
          <meta property="og:title" content="ICLEAS 2026 | International Conference on Life, Environmental & Applied Sciences" />
          <meta property="og:description" content="Online conference July 23–24, 2026: Share research in life sciences, environmental studies, biotechnology, climate change, and emerging technologies for sustainability." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yourdomain.com/" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      */}

      {/* Hero Section - Nature-Inspired Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(52,211,153,0.2),rgba(255,255,255,0))]"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
          ></div>
        </div>
        
        {/* Floating orbs - Nature colors */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">Premier International Life & Environmental Sciences Conference 2026</span>
            </div>
            
            {/* Main Title */}
            <h1 className="font-bold tracking-wide leading-loose text-white max-w-5xl mx-auto text-5xl md:text-6xl lg:text-7xl mb-4 bg-white bg-clip-text text-transparent leading-[1.1] md:leading-[1.3]">
                International Conference on Life, Environmental & Applied Sciences 
                 <span className='block mt-16'> (ICLEAS 2026)</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-orange-400 max-w-3xl mx-auto font-bold leading-relaxed">
              Integrating Life Sciences, Environment & Technology for a Sustainable Future – Online Global Event
            </p>
            
            {/* Date & Format */}
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-lg">July 23–24, 2026 | Online International Conference</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span className="text-lg">Fully Online – Worldwide Participation</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span className="text-lg">Organized by ScientiaForum</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a  
                className="px-8 py-4 bg-white text-emerald-900 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-2xl"
                href="/submission"
              >
                Submit Your Paper Now
              </a>
              <a 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                href="/registration" 
              >
                Register for ICLEAS 2026
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/20 backdrop-blur-md">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-emerald-200">Expected Global Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">Open</div>
                <div className="text-sm text-emerald-200">Call for Papers – Life & Environmental Sciences</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">3+</div>
                <div className="text-sm text-emerald-200">International Keynote Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">Online</div>
                <div className="text-sm text-emerald-200">Accessible Worldwide Conference Format</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-0">
        
        {/* Conference Highlights - Nature Theme */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">ICLEAS 2026 Conference Highlights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MicVocal, title: "Leading International Researchers", desc: "Engage with top experts in life sciences, environmental sustainability, and applied technologies.", bgcolor: "from-emerald-500 to-teal-500", href:"/speakers", color:"emerald-400" },
              { icon: GitFork, title: "5 Specialized Scientific Tracks", desc: "Submit to tracks covering animal science, aquatic science, environmental studies, biochemical sciences, and emerging technologies.", bgcolor: "from-green-600 to-lime-600", href:"/tracks", color:"green-600" },
              { icon: Globe, title: "Global Online Networking", desc: "Connect with researchers, scientists, and professionals worldwide from the comfort of your location.", bgcolor: "from-orange-400 to-orange-300", href:"/committee", color:"orange-400" },
              { icon: BookCheck, title: "Peer-Reviewed Proceedings & Publication", desc: "Publish your accepted paper in indexed conference proceedings with ISBN for maximum academic visibility.", bgcolor: "from-lime-600 to-green-500", href:"/publication", color:"lime-600" }
            ].map((item, idx) => (
              <div key={idx} className="text-center flex flex-col justify-between group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-transparent overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgcolor} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className='flex flex-col items-center'>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.bgcolor} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <a 
                  href={item.href}
                  className={`group text-${item.color} font-bold text-lg hover:gap-3 transition-all relative z-10 hover:underline`}
                >
                  view
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Important Dates - Environmental Theme */}
        <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 py-24 md:py-32 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-emerald-400" />
                <span className="text-emerald-400 uppercase tracking-widest text-sm font-semibold">Key Deadlines – ICLEAS 2026</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Important Dates for Submission & Registration
              </h2>
              <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
                Plan your participation in this leading online conference on life, environmental and applied sciences
              </p>
            </div>

            {/* Timeline */}
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {importantDates.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Connecting Line for Desktop */}
                    {idx < importantDates.length - 1 && idx % 2 === 0 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
                    )}
                    
                    <div className="relative">
                      {/* Date Badge */}
                      <div className="flex items-start gap-6 mb-6">
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                            item.status === 'Open' 
                              ? 'bg-gradient-to-br from-lime-400 to-green-500' 
                              : 'bg-gradient-to-br from-emerald-400 to-teal-600'
                          } shadow-lg`}>
                            {item.status === 'Open' ? (
                              <CheckCircle2 className="w-8 h-8 text-white" />
                            ) : (
                              <Circle className="w-8 h-8 text-white" />
                            )}
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
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 text-emerald-200">
                            <Calendar className="w-4 h-4" />
                            <span className="text-lg font-medium">{item.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative line */}
                      <div className="h-px bg-gradient-to-r from-emerald-400/30 via-emerald-400/10 to-transparent"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center mt-16">
                <a 
                  className="group px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg hover:from-emerald-500 hover:to-teal-500 transition-all shadow-2xl shadow-emerald-600/50 inline-flex items-center gap-3"
                  href="/dates"  // or link to a dedicated dates/announcements page
                >
                  View Complete Timeline & Deadlines
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Distinguished Speakers - Magazine Layout */}
        <section className="bg-orange-50/10 py-24 md:py-32">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <Star className="w-7 h-7 text-amber-500" />
                <span className="text-slate-600 uppercase tracking-widest text-sm font-semibold">Keynote & Invited Speakers</span>
                <Star className="w-7 h-7 text-amber-500" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Distinguished Speakers at ICLEAS 2026
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Gain insights from world-class experts driving advancements in life sciences, environmental research, biotechnology, and sustainable technologies
              </p>
            </div>
            
            {/* Speakers Grid */}
            <div className="max-w-7xl mx-auto space-y-16">
              {speakers.map((speaker, idx) => (
                <div key={speaker.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  {/* Image Side */}
                  <div className="lg:w-1/2">
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                          src={speaker.imgSrc}
                          alt={`${speaker.name} - ${speaker.title} at ICLEAS 2026 conference`}
                          className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <div className="flex items-center gap-3 text-white/90">
                            <div className="w-12 h-px bg-white/50"></div>
                            <span className="text-sm uppercase tracking-wider">Keynote / Invited Speaker</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <div className="inline-block mb-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                          <MicVocal className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm font-semibold text-emerald-900">Featured Speaker – ICLEAS 2026</span>
                        </div>
                      </div>
                      <h3 className="text-4xl font-bold text-slate-900 mb-3">
                        {speaker.name}
                      </h3>
                      <div className="space-y-1 mb-6">
                        <p className="text-xl font-semibold text-emerald-600">
                          {speaker.title}
                        </p>
                        <p className="text-lg text-slate-600">
                          {speaker.affiliation}
                        </p>
                      </div>
                    </div>
                    
                    <div className="h-px bg-gradient-to-r from-slate-300 via-slate-200 to-transparent"></div>
                    
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {speaker.bio}
                    </p>
                    
                    <a 
                      className="group inline-flex items-center gap-2 text-emerald-600 font-bold text-lg hover:gap-3 transition-all"
                      href="/speakers"
                    >
                      View Full Speaker Profile
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View All Button */}
            <div className="text-center mt-20">
              <a 
                className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl inline-flex items-center gap-3"
                href="/speakers"
              >
                Explore All Keynote & Invited Speakers
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Why ICLEAS Matters - Feature Section */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
          {/* Decorative background */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Content */}
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
                      <Award className="w-5 h-5 text-amber-600" />
                      <span className="text-sm font-bold text-amber-900 uppercase tracking-wider">Conference Vision</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                      Why Attend ICLEAS 2026 – International Life & Environmental Sciences Conference
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-xl text-slate-700 leading-relaxed">
                      ICLEAS 2026 unites global researchers to tackle pressing challenges in life sciences, environmental sustainability, and applied technologies through interdisciplinary collaboration and knowledge exchange.
                    </p>
                    <p className="text-xl text-slate-700 leading-relaxed">
                      Participate in this fully online conference to present innovative research, receive peer feedback, build international networks, and contribute to solutions for climate change, biodiversity, health, and green innovation.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md">
                      <Leaf className="w-5 h-5 text-emerald-600" />
                      <span className="font-semibold text-slate-900">Strong Sustainability Emphasis</span>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md">
                      <Microscope className="w-5 h-5 text-teal-600" />
                      <span className="font-semibold text-slate-900">High-Quality Scientific Research</span>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md">
                      <Droplet className="w-5 h-5 text-cyan-600" />
                      <span className="font-semibold text-slate-900">Real-World Environmental Solutions</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Visual Element */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white rounded-3xl p-12 shadow-2xl">
                    <div className="space-y-8">
                      {[
                        { icon: Users, title: "Global Scientific Collaboration", desc: "Network with 500+ researchers & experts worldwide" },
                        { icon: BookCheck, title: "High-Impact Publication Opportunity", desc: "Peer-reviewed proceedings + potential journal recommendations" },
                        { icon: TrendingUp, title: "Boost Your Academic & Professional Profile", desc: "Present, gain visibility, and advance your career" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${
                            idx === 0 ? 'from-emerald-500 to-teal-500' :
                            idx === 1 ? 'from-green-600 to-lime-600' :
                            'from-teal-500 to-cyan-500'
                          } flex items-center justify-center`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                            <p className="text-slate-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News - Editorial Style */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-12 h-px bg-slate-300"></div>
                  <Newspaper className="w-6 h-6 text-slate-400" />
                  <div className="w-12 h-px bg-slate-300"></div>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                  ICLEAS 2026 Latest Announcements & Updates
                </h2>
                <p className="text-lg text-slate-600">Stay informed about call for papers, speakers, registration, and more</p>
              </div>
              
              {/* News Placeholder */}
              <div className="relative py-24">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-100">
                    <Newspaper className="w-12 h-12 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Updates Coming Soon</h3>
                    <p className="text-lg text-slate-600">Important news, speaker announcements, and deadlines for the ICLEAS 2026 online conference will appear here.</p>
                  </div>
                  <a 
                    className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all"
                    href="/news"
                  >
                    Check All Conference News & Updates
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publication Partners - Nature / Sustainability Theme */}
        <section className="bg-gradient-to-br from-emerald-950 via-teal-950 to-green-950 py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <BookCheck className="w-7 h-7 text-emerald-400" />
                <span className="text-emerald-400 uppercase tracking-widest text-sm font-semibold">Publication Reach & Impact</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Conference Proceedings & Publication Opportunities
              </h2>
              <p className="text-xl text-teal-200 max-w-3xl mx-auto">
                Accepted papers from ICLEAS 2026 will be published in peer-reviewed proceedings, indexed in major academic databases, maximizing visibility for your life sciences, environmental, or applied research
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { name: 'CrossRef / DOI Assignment', icon: BookCheck },
                  { name: 'DOAJ Inclusion Potential', icon: Globe },
                  { name: 'Google Scholar Indexing', icon: FileText },
                  { name: 'Scopus & Other Databases', icon: Award }
                ].map((partner, idx) => (
                  <div key={idx} className="group">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                      <div className="text-center space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10">
                          <partner.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">{partner.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Triple CTA - Nature Theme */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {[
                  { 
                    icon: FileText, 
                    title: "Submit Your Research Paper", 
                    desc: "Contribute original work in life sciences, environmental studies, or applied technologies to this international online conference.", 
                    cta: "Submit Paper →", 
                    gradient: "from-emerald-600 to-teal-600",
                    bgGradient: "from-emerald-50 to-teal-50",
                    href : "/submission"
                  },
                  { 
                    icon: Users, 
                    title: "Register for ICLEAS 2026", 
                    desc: "Join global scientists, researchers, and professionals in advancing sustainability and scientific innovation online.", 
                    cta: "Register Now →", 
                    gradient: "from-teal-600 to-cyan-600",
                    bgGradient: "from-teal-50 to-cyan-50",
                    href : "/registration"
                  },
                  { 
                    icon: Newspaper, 
                    title: "Become a Peer Reviewer", 
                    desc: "Support quality research in environmental & life sciences by joining our technical/review committee.", 
                    cta: "Express Interest →", 
                    gradient: "from-lime-600 to-green-600",
                    bgGradient: "from-lime-50 to-green-50",
                    href : "/committee"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Divider line between items */}
                    {idx < 2 && (
                      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
                    )}
                    
                    <div className={`h-full p-12 bg-gradient-to-br ${item.bgGradient} shadow-2xl hover:shadow-xl transition-all duration-300`}>
                      <div className="space-y-6">
                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-xl`}>
                          <item.icon className="w-10 h-10 text-white" />
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold text-slate-900">
                            {item.title}
                          </h3>
                          <p className="text-lg text-slate-700 leading-relaxed min-h-[80px]">
                            {item.desc}
                          </p>
                        </div>
                        
                        {/* CTA */}
                        <a 
                          className={`group/btn w-full px-8 py-4 bg-gradient-to-r ${item.gradient} text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2`}
                          href={item.href}
                        >
                          {item.cta}
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Clean & Nature Theme */}
        <section className="bg-gradient-to-b from-emerald-50 to-teal-50 py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 mb-6">
                  <MessageCircle className="w-7 h-7 text-emerald-600" />
                  <span className="text-slate-600 uppercase tracking-widest text-sm font-semibold">Common Questions – ICLEAS 2026</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                  Frequently Asked Questions about ICLEAS 2026
                </h2>
                <p className="text-xl text-slate-600">
                  Quick answers for researchers, students, and professionals interested in this online life & environmental sciences conference
                </p>
              </div>
              
              {/* FAQ Items */}
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="group">
                    <details className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-emerald-100">
                      <summary className="cursor-pointer p-8 font-bold text-slate-900 text-xl flex justify-between items-center list-none">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center group-open:bg-emerald-600 transition-colors">
                          <ChevronRight className="w-5 h-5 text-emerald-600 group-open:text-white group-open:rotate-90 transition-all" />
                        </div>
                      </summary>
                      <div className="px-8 pb-8 pt-2">
                        <div className="h-px bg-gradient-to-r from-emerald-200 to-transparent mb-6"></div>
                        <p className="text-lg text-slate-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
              
              {/* View All Button */}
              <div className="text-center mt-12">
                <a 
                  className="px-10 py-4 bg-emerald-700 text-white rounded-full font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl inline-flex items-center gap-3"
                  href="/faq"
                >
                  See All Frequently Asked Questions
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner - Strong Nature Call */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Contribute to a Sustainable Scientific Future?
              </h2>
              <p className="text-xl text-teal-200">
                Participate in ICLEAS 2026 — the leading online international conference on life sciences, environmental protection, biotechnology, and applied innovations
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a 
                  className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl"
                  href="/submission"
                >
                  Submit Research Paper Today
                </a>
                <a 
                  className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                  href="/registration"
                >
                  Register for the Conference
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}