import React from 'react';
import { 
  ChevronRight, ExternalLink, Globe, Building2, 
  ArrowRight, Award, Users, TrendingUp, Sparkles
} from 'lucide-react';

export default function AboutScientiaForumPage() {
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
              <span className="text-white font-medium">About ScientiaForum</span>
            </div>
            
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 mb-4">
                <Building2 className="w-5 h-5 text-amber-300" />
                <span className="text-sm text-amber-200 font-bold uppercase tracking-wider">External Partner Website</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                About <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">ScientiaForum</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto font-light leading-relaxed">
                The organization behind ICLEAS 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Introduction Card */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200 mb-16">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-10 h-10 text-slate-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    About ScientiaForum
                  </h2>
                  <p className="text-xl text-slate-700 leading-relaxed mb-6">
                    ScientiaForum is a professional organization dedicated to advancing scientific knowledge by creating high-quality platforms for academic and industry professionals to connect, share, and collaborate.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    ICLEAS 2026 is organized and managed by ScientiaForum. To learn more about our organization, our mission, and our other conferences, please visit our main website.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  desc: "Highest standards in conference organization"
                },
                {
                  icon: Users,
                  title: "Global Network",
                  desc: "Connecting researchers worldwide"
                },
                {
                  icon: TrendingUp,
                  title: "Innovation",
                  desc: "Driving scientific advancement forward"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-md border border-slate-200 hover:shadow-lg transition-all text-center">
                  <div className="mb-6">
                    <item.icon className="w-12 h-12 text-slate-600 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* External Link CTA - Primary */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Globe className="w-8 h-8 text-slate-700" />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 border border-slate-200">
                    <Sparkles className="w-4 h-4 text-slate-600" />
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-700">Visit Our Website</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Explore ScientiaForum
                  </h2>
                  <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                    Visit our main website to discover all our conferences, services, and how we're advancing scientific collaboration globally.
                  </p>
                  <a 
                    href="https://scientiaforum.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg"
                  >
                    Visit ScientiaForum.org
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* What You'll Find Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                What You'll Find on ScientiaForum.org
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Complete list of all our international conferences",
                  "Information about upcoming events and workshops",
                  "Our organization's history and achievements",
                  "Resources for researchers and academics",
                  "Partnership and sponsorship opportunities",
                  "Contact information for our team"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-5 h-5 text-slate-600" />
                    </div>
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-gradient-to-br from-slate-100 to-slate-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 border border-slate-200">
              <ExternalLink className="w-4 h-4 text-slate-600" />
              <span className="text-sm text-slate-700 font-medium">External Website</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-slate-600">
              Visit the ScientiaForum website to explore our complete portfolio of conferences and services
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href="https://scientiaforum.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-lg inline-flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                Visit ScientiaForum
                <ExternalLink className="w-5 h-5" />
              </a>
              <button className="px-10 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
                Back to ICLEAS 2026
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}