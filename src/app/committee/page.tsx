// import Link from 'next/link';
// import Image from 'next/image';
// import { ChevronRight } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { committees } from '@/lib/data';

// export default function CommitteePage() {
//   return (
//     <div className="bg-background text-foreground">
//       {/* 1. Page Header */}
//       <section className="bg-card/30 py-12">
//         <div className="container mx-auto">
//           <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//             <Link href="/" className="hover:text-primary">Home</Link>
//             <ChevronRight size={16} />
//             <span>Committees</span>
//           </div>
//           <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
//             Conference Committee Members
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Meet the organizing committee, program chairs, and review board members of ICLEAS 2026.
//           </p>
//         </div>
//       </section>

//       <div className="container mx-auto py-16 md:py-24 space-y-20">
        
//         {committees.map((committee) => (
//              <section key={committee.title} id={committee.title.toLowerCase().replace(/ /g, '-')}>
//                 <h2 className="text-3xl font-bold text-primary text-center mb-12">{committee.title}</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
//                     {committee.members.map((member) => (
//                         <Card key={member.name} className="text-center bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
//                             <CardHeader className="items-center">
//                                 {member.imgSrc && (
//                                      <div className="relative h-24 w-24 rounded-full overflow-hidden">
//                                         <Image src={member.imgSrc} alt={`Photo of ${member.name}`} fill style={{objectFit: 'cover'}} data-ai-hint={member.imgHint || 'person portrait'} className="brightness-75" />
//                                     </div>
//                                 )}
//                                 <CardTitle className="text-xl">{member.name}</CardTitle>
//                                 {member.title && <CardDescription>{member.title}</CardDescription>}
//                             </CardHeader>
//                             {member.affiliation && (
//                                 <CardContent>
//                                     <p className="text-sm text-muted-foreground">{member.affiliation}</p>
//                                 </CardContent>
//                             )}
//                         </Card>
//                     ))}
//                 </div>
//             </section>
//         ))}
//       </div>
//     </div>
//   );
// }
















import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, Users, Award, Shield, Star, 
  Globe, Sparkles, Mail, Linkedin 
} from 'lucide-react';

// Mock data - replace with your actual import
const committees = [
  {
    title: "Organizing Committee",
    members: [
      { 
        name: "Dr. Sarah Mitchell", 
        title: "Conference Chair", 
        affiliation: "Stanford University",
        imgSrc: "https://picsum.photos/seed/chair1/400/400",
        imgHint: "professional scientist"
      },
      { 
        name: "Dr. James Chen", 
        title: "Program Chair", 
        affiliation: "MIT",
        imgSrc: "https://picsum.photos/seed/chair2/400/400",
        imgHint: "scientist portrait"
      },
      { 
        name: "Prof. Maria Rodriguez", 
        title: "Publication Chair", 
        affiliation: "Oxford University",
        imgSrc: "https://picsum.photos/seed/chair3/400/400",
        imgHint: "academic portrait"
      },
      { 
        name: "Dr. Kenji Tanaka", 
        title: "Technical Chair", 
        affiliation: "University of Tokyo",
        imgSrc: "https://picsum.photos/seed/chair4/400/400",
        imgHint: "professor portrait"
      }
    ]
  },
  {
    title: "Program Committee",
    members: [
      { 
        name: "Dr. Emily White", 
        title: "Track Chair - Life Sciences", 
        affiliation: "Harvard Medical School",
        imgSrc: "https://picsum.photos/seed/prog1/400/400",
        imgHint: "researcher portrait"
      },
      { 
        name: "Prof. Ahmed Hassan", 
        title: "Track Chair - Environmental Science", 
        affiliation: "Cairo University",
        imgSrc: "https://picsum.photos/seed/prog2/400/400",
        imgHint: "professor"
      },
      { 
        name: "Dr. Lisa Anderson", 
        title: "Track Chair - Applied Technologies", 
        affiliation: "ETH Zurich",
        imgSrc: "https://picsum.photos/seed/prog3/400/400",
        imgHint: "scientist"
      },
      { 
        name: "Dr. Raj Kumar", 
        title: "Track Chair - Molecular Sciences", 
        affiliation: "IIT Delhi",
        imgSrc: "https://picsum.photos/seed/prog4/400/400",
        imgHint: "academic"
      }
    ]
  },
  {
    title: "Advisory Board",
    members: [
      { 
        name: "Prof. Robert Williams", 
        title: "Senior Advisor", 
        affiliation: "Cambridge University",
        imgSrc: "https://picsum.photos/seed/adv1/400/400",
        imgHint: "senior professor"
      },
      { 
        name: "Dr. Sophie Martin", 
        title: "Research Advisor", 
        affiliation: "CNRS France",
        imgSrc: "https://picsum.photos/seed/adv2/400/400",
        imgHint: "researcher"
      }
    ]
  }
];

const getCommitteeIcon = (title: string) => {
  if (title.includes("Organizing")) return Users;
  if (title.includes("Program")) return Award;
  if (title.includes("Advisory")) return Shield;
  return Star;
};

const getCommitteeGradient = (title: string) => {
  if (title.includes("Organizing")) return "from-emerald-500 to-teal-500";
  if (title.includes("Program")) return "from-teal-500 to-cyan-500";
  if (title.includes("Advisory")) return "from-purple-500 to-pink-500";
  return "from-lime-500 to-green-500";
};

export default function CommitteePage() {
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
            <span className="text-white font-semibold">Committees</span>
          </div>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Users className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">Leadership & Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Conference Committee
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
              Meet the distinguished experts and leaders guiding ICLEAS 2026 toward scientific excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-emerald-100">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-900">World-Class Leadership</span>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our conference is organized by a diverse team of internationally recognized researchers, 
                academics, and industry leaders committed to advancing life sciences, environmental 
                sustainability, and applied technologies for a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Sections */}
      <div className="container mx-auto px-4 py-20 md:py-32 space-y-32">
        {committees.map((committee, idx) => {
          const Icon = getCommitteeIcon(committee.title);
          const gradient = getCommitteeGradient(committee.title);
          
          return (
            <section 
              key={committee.title} 
              id={committee.title.toLowerCase().replace(/ /g, '-')}
              className="scroll-mt-20"
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-6 shadow-xl">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  {committee.title}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {committee.members.map((member, memberIdx) => (
                  <div 
                    key={member.name}
                    className="group"
                    style={{ animationDelay: `${memberIdx * 100}ms` }}
                  >
                    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-slate-100 hover:border-emerald-300">
                      {/* Card Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                      
                      <div className="relative p-6">
                        {/* Image */}
                        {member.imgSrc && (
                          <div className="relative mb-6">
                            <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-lg"></div>
                            <div className="relative h-32 w-32 rounded-full overflow-hidden mx-auto ring-4 ring-white shadow-xl">
                              <Image 
                                src={member.imgSrc} 
                                alt={`Photo of ${member.name}`} 
                                fill 
                                style={{objectFit: 'cover'}} 
                                data-ai-hint={member.imgHint || 'person portrait'} 
                                className="transform group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        )}
                        
                        {/* Content */}
                        <div className="text-center space-y-3">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                            {member.name}
                          </h3>
                          
                          {member.title && (
                            <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${gradient} text-white text-sm font-semibold shadow-md`}>
                              {member.title}
                            </div>
                          )}
                          
                          {member.affiliation && (
                            <>
                              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-4"></div>
                              <div className="flex items-center justify-center gap-2 text-slate-600">
                                <Globe className="w-4 h-4 flex-shrink-0" />
                                <p className="text-sm font-medium">
                                  {member.affiliation}
                                </p>
                              </div>
                            </>
                          )}
                        </div>
                        
                        {/* Social Links (Optional) */}
                        <div className="flex justify-center gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors">
                            <Mail className="w-4 h-4 text-slate-600" />
                          </button>
                          <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors">
                            <Linkedin className="w-4 h-4 text-slate-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Join the Team CTA */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md">
              <Star className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-bold text-slate-900">Be Part of Our Team</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Interested in Joining?
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              We're always looking for passionate researchers and experts to contribute to ICLEAS. 
              Join us as a reviewer, session chair, or committee member.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg hover:shadow-xl transition-all">
                Become a Reviewer
              </button>
              <button className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:shadow-xl transition-all border-2 border-slate-200">
                Contact Us
              </button>
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
              Join ICLEAS 2026
            </h2>
            <p className="text-xl text-teal-200">
              Be part of a conference led by the world's brightest minds in science and sustainability
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl">
                Submit Your Paper
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}