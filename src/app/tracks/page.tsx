// import Link from 'next/link';
// import { ChevronRight } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { conferenceTracks } from '@/lib/data';
// import { Badge } from '@/components/ui/badge';

// export default function ConferenceTracksPage() {
//   return (
//     <div className="bg-background text-foreground">
//       {/* 1. Page Header */}
//       <section className="bg-card/30 py-12">
//         <div className="container mx-auto">
//           <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//             <Link href="/" className="hover:text-primary">Home</Link>
//             <ChevronRight size={16} />
//             <span>Conference Tracks</span>
//           </div>
//           <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
//             Conference Tracks
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Explore the diverse range of topics at ICLEAS 2026.
//           </p>
//         </div>
//       </section>

//       <div className="container mx-auto py-16 md:py-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {conferenceTracks.map((track) => (
//             <Card key={track.title} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
//               <CardHeader>
//                 <CardTitle>{track.title}</CardTitle>
//                 <CardDescription>{track.description}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <h4 className="font-semibold mb-2">Keywords:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {track.keywords.map(keyword => (
//                     <Badge key={keyword} variant="secondary">{keyword}</Badge>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from 'next/link';
import { 
  ChevronRight, Microscope, Droplet, Dna, Zap, 
  Leaf, Fish, Beaker, Cpu, Brain, Globe,
  Sparkles, ArrowRight, BookOpen, Target
} from 'lucide-react';

// Mock data - replace with your actual import
const conferenceTracks = [
  {
    title: "Animal Science & Veterinary Studies",
    description: "Advances in animal health, welfare, breeding, and veterinary medicine for sustainable livestock and pet care.",
    keywords: ["Animal Genetics", "Veterinary Medicine", "Animal Nutrition", "Livestock Management", "Wildlife Conservation"],
    icon: Fish,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    title: "Aquatic Science & Fisheries",
    description: "Research on marine and freshwater ecosystems, sustainable fisheries, aquaculture, and ocean conservation.",
    keywords: ["Marine Biology", "Aquaculture", "Ocean Conservation", "Fisheries Management", "Coral Reefs"],
    icon: Droplet,
    gradient: "from-cyan-500 to-teal-500",
    bgGradient: "from-cyan-50 to-teal-50"
  },
  {
    title: "Biochemical & Molecular Sciences",
    description: "Cutting-edge research in biochemistry, molecular biology, genetics, and cellular mechanisms.",
    keywords: ["Molecular Biology", "Genetics", "Proteomics", "Cell Biology", "Genomics"],
    icon: Dna,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    title: "Applied Science & Emerging Technologies",
    description: "Integration of AI, biotechnology, nanotechnology, and innovative tools for scientific advancement.",
    keywords: ["Artificial Intelligence", "Biotechnology", "Nanotechnology", "Data Science", "Innovation"],
    icon: Cpu,
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50"
  },
  {
    title: "Environmental Science & Sustainability",
    description: "Solutions for climate change, pollution control, renewable energy, and ecosystem preservation.",
    keywords: ["Climate Change", "Renewable Energy", "Pollution Control", "Ecosystem Management", "Sustainability"],
    icon: Leaf,
    gradient: "from-green-500 to-lime-500",
    bgGradient: "from-green-50 to-lime-50"
  }
];

const getTrackIcon = (title: string) => {
  if (title.includes('Animal')) return Fish;
  if (title.includes('Aquatic')) return Droplet;
  if (title.includes('Biochemical')) return Dna;
  if (title.includes('Applied')) return Cpu;
  if (title.includes('Environmental')) return Leaf;
  return Beaker;
};

export default function ConferenceTracksPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
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
            <span className="text-white font-semibold">Conference Tracks</span>
          </div>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Target className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">5 Specialized Research Tracks</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Conference Tracks
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
              Explore diverse research areas spanning life sciences, environmental sustainability, and cutting-edge technologies. Find your track and contribute to the future of science.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-emerald-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">5</div>
                <div className="text-sm text-slate-600">Research Tracks</div>
              </div>
              
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
                <div className="text-sm text-slate-600">Topics Covered</div>
              </div>
              
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <Microscope className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">150+</div>
                <div className="text-sm text-slate-600">Presentations</div>
              </div>
              
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-500 to-green-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">Expert</div>
                <div className="text-sm text-slate-600">Track Chairs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-900">Multidisciplinary Research</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Explore Our Tracks
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {conferenceTracks.map((track, idx) => {
              const Icon = track.icon || Beaker;
              
              return (
                <div 
                  key={track.title}
                  className="group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-slate-100 hover:border-emerald-300 overflow-hidden">
                    
                    {/* Header with Gradient */}
                    <div className={`relative p-8 bg-gradient-to-br ${track.gradient} overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                      
                      <div className="relative flex items-start gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg flex-shrink-0">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {track.title}
                          </h3>
                          <p className="text-white/90 leading-relaxed">
                            {track.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                        Key Topics
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {track.keywords.map((keyword, kidx) => (
                          <span 
                            key={keyword}
                            className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${track.gradient} bg-opacity-10 text-slate-700 border-2 border-slate-200 hover:border-current transition-colors`}
                            style={{ animationDelay: `${(idx * 100) + (kidx * 50)}ms` }}
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action Button */}
                      <div className="mt-8 pt-6 border-t border-slate-100">
                        <button className="group/btn inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
                          Submit to This Track
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose a Track */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Why Submit to a Specific Track?
              </h2>
              <p className="text-xl text-slate-600">
                Each track is led by expert researchers who ensure quality, relevance, and impact
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Targeted Audience",
                  description: "Present your research to specialists and peers in your field",
                  gradient: "from-emerald-500 to-teal-500"
                },
                {
                  icon: Brain,
                  title: "Expert Review",
                  description: "Get feedback from leading researchers and track chairs",
                  gradient: "from-teal-500 to-cyan-500"
                },
                {
                  icon: Globe,
                  title: "Better Visibility",
                  description: "Increase citations and collaboration opportunities",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((benefit, idx) => (
                <div key={benefit.title} className="bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100">
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

      {/* Submission Guidelines */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Submit Your Research?
                </h2>
                <p className="text-xl text-emerald-100 mb-6 leading-relaxed">
                  Choose your track carefully to ensure your paper reaches the right audience. Review our submission guidelines and formatting requirements before submitting.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-white text-emerald-900 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
                    View Submission Guidelines
                  </button>
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                    Contact Track Chairs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Not Sure Which Track to Choose?
            </h2>
            <p className="text-xl text-teal-200">
              Our team is here to help you find the perfect fit for your research
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl">
                Contact Us
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                View Program
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
