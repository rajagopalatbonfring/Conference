// import Link from 'next/link';
// import { 
//   ChevronRight, Microscope, Droplet, Dna, Zap, 
//   Leaf, Fish, Beaker, Cpu, Brain, Globe,
//   Sparkles, ArrowRight, BookOpen, Target, Atom, Rocket,PawPrint
// } from 'lucide-react';

// // Mock data - replace with your actual import
// const tracks = [
//   { 
//     icon: PawPrint, 
//     title: "Animal Science & Veterinary Studies", 
//     topics: "Veterinary medicine, animal health, livestock management", 
//     keywords: "Disease prevention, animal behavior",
//     color: "from-emerald-500 to-teal-500"
//   },
//   { 
//     icon: Fish, 
//     title: "Aquatic Science & Fisheries", 
//     topics: "Marine biology, aquaculture, fisheries management", 
//     keywords: "Water ecosystems, sustainable fishing",
//     color: "from-cyan-500 to-blue-500"
//   },
//   { 
//     icon: Leaf, 
//     title: "Environmental & Natural Sciences", 
//     topics: "Ecology, conservation, climate change, renewable energy", 
//     keywords: "Sustainability, green technology",
//     color: "from-green-600 to-lime-600"
//   },
//   { 
//     icon: Atom, 
//     title: "Biochemical & Molecular Sciences", 
//     topics: "Molecular biology, genetics, biochemistry", 
//     keywords: "Bioinformatics, cell biology",
//     color: "from-teal-600 to-cyan-600"
//   },
//   { 
//     icon: Rocket, 
//     title: "Applied Science & Emerging Technologies", 
//     topics: "Biotech applications, AI/ML in life sciences", 
//     keywords: "Innovation, industrial applications",
//     color: "from-lime-600 to-emerald-600"
//   },
// ];

// const getTrackIcon = (title: string) => {
//   if (title.includes('Animal')) return Fish;
//   if (title.includes('Aquatic')) return Droplet;
//   if (title.includes('Biochemical')) return Dna;
//   if (title.includes('Applied')) return Cpu;
//   if (title.includes('Environmental')) return Leaf;
//   return Beaker;
// };

// export default function ConferenceTracksPage() {
//   return (
//     <div className="min-h-screen bg-white">
      
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
//             <span className="text-white font-semibold">Conference Tracks</span>
//           </div>
          
//           <div className="max-w-4xl">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
//               <Target className="w-4 h-4 text-emerald-400" />
//               <span className="text-sm text-white font-medium">5 Specialized Research Tracks</span>
//             </div>
            
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
//               Conference Tracks
//             </h1>
//             <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
//               Explore diverse research areas spanning life sciences, environmental sustainability, and cutting-edge technologies. Find your track and contribute to the future of science.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Stats Bar */}
//       <section className="relative -mt-16 z-20">
//         <div className="container mx-auto px-4">
//           <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-emerald-100">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//               <div className="group">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4 transform group-hover:scale-110 transition-transform">
//                   <Globe className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-slate-900 mb-1">5</div>
//                 <div className="text-sm text-slate-600">Research Tracks</div>
//               </div>
              
//               <div className="group">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-4 transform group-hover:scale-110 transition-transform">
//                   <BookOpen className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
//                 <div className="text-sm text-slate-600">Topics Covered</div>
//               </div>
              
//               <div className="group">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 transform group-hover:scale-110 transition-transform">
//                   <Microscope className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-slate-900 mb-1">150+</div>
//                 <div className="text-sm text-slate-600">Presentations</div>
//               </div>
              
//               <div className="group">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-500 to-green-500 mb-4 transform group-hover:scale-110 transition-transform">
//                   <Brain className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-slate-900 mb-1">Expert</div>
//                 <div className="text-sm text-slate-600">Track Chairs</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tracks Section */}
//       <section className="container mx-auto px-4 py-20 md:py-32">
//         <div className="max-w-7xl mx-auto">
          
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
//               <Sparkles className="w-5 h-5 text-emerald-600" />
//               <span className="text-sm font-bold text-emerald-900">Multidisciplinary Research</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//               Explore Our Tracks
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
//           </div>

//           {/* Clean Track Cards */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
//                         <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Keywords</h4>
//                         <p className="text-sm text-slate-600">{track.keywords}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//         </div>
//       </section>

//       {/* Why Choose a Track */}
//       <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-5xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//                 Why Submit to a Specific Track?
//               </h2>
//               <p className="text-xl text-slate-600">
//                 Each track is led by expert researchers who ensure quality, relevance, and impact
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: Target,
//                   title: "Targeted Audience",
//                   description: "Present your research to specialists and peers in your field",
//                   gradient: "from-emerald-500 to-teal-500"
//                 },
//                 {
//                   icon: Brain,
//                   title: "Expert Review",
//                   description: "Get feedback from leading researchers and track chairs",
//                   gradient: "from-teal-500 to-cyan-500"
//                 },
//                 {
//                   icon: Globe,
//                   title: "Better Visibility",
//                   description: "Increase citations and collaboration opportunities",
//                   gradient: "from-purple-500 to-pink-500"
//                 }
//               ].map((benefit, idx) => (
//                 <div key={benefit.title} className="bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100">
//                   <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 shadow-xl`}>
//                     <benefit.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-900 mb-3">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed">
//                     {benefit.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
//         <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        
//         <div className="relative z-10 container mx-auto px-4 text-center">
//           <div className="max-w-3xl mx-auto space-y-8">
//             <h2 className="text-4xl md:text-5xl font-bold text-white">
//               Not Sure Which Track to Choose?
//             </h2>
//             <p className="text-xl text-teal-200">
//               Our team is here to help you find the perfect fit for your research
//             </p>
//             <div className="flex flex-wrap justify-center gap-4 pt-4">
//               <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl">
//                 Contact Us
//               </button>
//               <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
//                 View Program
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }









import Link from 'next/link';
import { 
  ChevronRight, Microscope, Droplet, Dna, Zap, 
  Leaf, Fish, Beaker, Cpu, Brain, Globe,
  Sparkles, ArrowRight, BookOpen, Target, Atom, Rocket, PawPrint
} from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conference Tracks ICLEAS 2026 | Life Sciences, Environmental & Applied Sciences Research Areas',
  description: 'Explore the 5 specialized tracks at ICLEAS 2026 – international online conference covering animal science, aquatic science, environmental sciences, biochemical & molecular sciences, and applied emerging technologies. Submit your paper today.',
  keywords: 'ICLEAS 2026 tracks, life sciences conference tracks, environmental sciences research areas, biotechnology conference, sustainable technology tracks, interdisciplinary science conference 2026',
};

// Mock data - optimized with more descriptive, SEO-friendly content
const tracks = [
  { 
    icon: PawPrint, 
    title: "Animal Science & Veterinary Studies", 
    topics: "Animal health, veterinary medicine, livestock management, animal biotechnology, welfare and genetics", 
    keywords: "veterinary diagnostics, animal disease prevention, livestock sustainability, animal behavior, veterinary biotechnology",
    color: "from-emerald-500 to-teal-500",
    slug: "animal-science-veterinary-studies"
  },
  { 
    icon: Fish, 
    title: "Aquatic Science & Fisheries", 
    topics: "Aquaculture, marine biology, fisheries science, aquatic ecosystems, sustainable fisheries management", 
    keywords: "marine conservation, water quality monitoring, aquaculture technology, sustainable fishing practices, aquatic biodiversity",
    color: "from-cyan-500 to-blue-500",
    slug: "aquatic-science-fisheries"
  },
  { 
    icon: Leaf, 
    title: "Environmental & Natural Sciences", 
    topics: "Climate change, biodiversity conservation, ecology, environmental sustainability, pollution control, natural resource management", 
    keywords: "climate adaptation strategies, ecosystem restoration, renewable energy solutions, environmental policy, green technology",
    color: "from-green-600 to-lime-600",
    slug: "environmental-natural-sciences"
  },
  { 
    icon: Atom, 
    title: "Biochemical & Molecular Sciences", 
    topics: "Biochemistry, molecular biology, genetics, biotechnology, genomics, proteomics", 
    keywords: "bioinformatics applications, genetic engineering, molecular diagnostics, cell biology research, synthetic biology",
    color: "from-teal-600 to-cyan-600",
    slug: "biochemical-molecular-sciences"
  },
  { 
    icon: Rocket, 
    title: "Applied Science & Emerging Technologies", 
    topics: "Applied research, AI and machine learning in life sciences, green technologies, interdisciplinary innovations, sustainable biotech", 
    keywords: "AI in environmental science, smart agriculture technologies, green innovation, industrial biotechnology, emerging tech applications",
    color: "from-lime-600 to-emerald-600",
    slug: "applied-science-emerging-technologies"
  },
];

export default function ConferenceTracksPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - SEO optimized */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 py-24 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-emerald-200 mb-8">
            <Link href="/" className="hover:text-white cursor-pointer transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Conference Tracks ICLEAS 2026</span>
          </div>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Target className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">5 Specialized Scientific Tracks – ICLEAS 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              ICLEAS 2026 Conference Tracks
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
              Submit your research to one of our 5 interdisciplinary tracks covering life sciences, environmental sustainability, biotechnology, aquatic & animal sciences, and emerging technologies for a sustainable future. Organized by ScientiaForum – online international conference July 23–24, 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar - SEO signals */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-emerald-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">5</div>
                <div className="text-sm text-slate-600">Scientific Tracks</div>
              </div>
              
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
                <div className="text-sm text-slate-600">Research Topics</div>
              </div>
              
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <Microscope className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">150+</div>
                <div className="text-sm text-slate-600">Expected Presentations</div>
              </div>
              
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-500 to-green-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">Global</div>
                <div className="text-sm text-slate-600">Expert Reviewers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section - Enhanced for SEO */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-900">Interdisciplinary Tracks – ICLEAS 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              ICLEAS 2026 Research Tracks
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
            <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
              Choose the most suitable track for your original research in life sciences, environmental sciences, biotechnology, sustainability, or emerging technologies. All tracks welcome interdisciplinary submissions.
            </p>
          </div>

          {/* Track Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-5 rounded-3xl blur-xl transition-opacity`}></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-transparent h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
                    <track.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {track.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {track.topics}
                  </p>
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Key Research Keywords</h4>
                    <p className="text-sm text-slate-600">
                      {track.keywords}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose a Track - SEO enhanced */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Benefits of Submitting to ICLEAS 2026 Tracks
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Targeted exposure, expert peer review, and higher impact for your life sciences, environmental, or applied research
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Specialized Audience Reach",
                  description: "Present directly to researchers, academics, and professionals focused on your specific field",
                  gradient: "from-emerald-500 to-teal-500"
                },
                {
                  icon: Brain,
                  title: "High-Quality Expert Feedback",
                  description: "Receive detailed reviews from track chairs and domain specialists in life & environmental sciences",
                  gradient: "from-teal-500 to-cyan-500"
                },
                {
                  icon: Globe,
                  title: "Enhanced Academic Visibility",
                  description: "Increase citations, networking, and collaboration through indexed proceedings and global exposure",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((benefit, idx) => (
                <div key={benefit.title} className="bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100 hover:border-emerald-300 transition-all">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 shadow-xl`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Strong call-to-action with keywords */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Submit to ICLEAS 2026 Tracks?
            </h2>
            <p className="text-xl text-teal-200">
              Choose your research track in life sciences, environmental studies, biotechnology, or emerging technologies and contribute to global sustainability
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/submission"
                className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2"
              >
                Submit Your Paper
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/cfp"
                className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center gap-2"
              >
                View Call for Papers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}