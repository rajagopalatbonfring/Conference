// import Link from 'next/link';
// import { ChevronRight, BookOpen, FileCheck, ShieldCheck, Sigma } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { publicationData } from '@/lib/data';

// export default function PublicationPage() {
//   const icons = [BookOpen, FileCheck, ShieldCheck, Sigma];

//   return (
//     <div className="bg-background text-foreground">
//       {/* 1. Page Header */}
//       <section className="bg-card/30 py-12">
//         <div className="container mx-auto">
//           <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//             <Link href="/" className="hover:text-primary">Home</Link>
//             <ChevronRight size={16} />
//             <span>Publication</span>
//           </div>
//           <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
//             Publication Information
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Details on conference proceedings and journal collaborations for ICLEAS 2026.
//           </p>
//         </div>
//       </section>

//       <div className="container mx-auto py-16 md:py-24 space-y-16">
        
//         {/* 2. Publication Details */}
//         <section id="publication-details">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {publicationData.map((item, index) => {
//                     const Icon = icons[index % icons.length];
//                     return (
//                         <Card key={item.title} className="bg-card/50 border-border/50">
//                             <CardHeader className="flex-row items-center gap-4">
//                                 <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
//                                     <Icon className="h-6 w-6 text-primary" />
//                                 </div>
//                                 <CardTitle>{item.title}</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-muted-foreground">{item.content}</p>
//                             </CardContent>
//                         </Card>
//                     );
//                 })}
//             </div>
//         </section>
//       </div>
//     </div>
//   );
// }













import Link from 'next/link';
import { 
  ChevronRight, BookOpen, FileCheck, ShieldCheck, Sigma, 
  Award, Globe, CheckCircle2, Download, FileText,
  Sparkles, Star, TrendingUp, Link2, Search,
  AlertCircle, Clock, Users, Zap, Shield, Scale,
  FileWarning, CheckCircle, XCircle, FileSearch
} from 'lucide-react';

// Mock data
const publicationData = [
  {
    title: "Conference Proceedings",
    content: "All accepted papers will be published in the ICLEAS 2026 Conference Proceedings with an assigned ISBN. The proceedings will be made available in digital format to all registered participants. Physical copies can be ordered separately at an additional cost.",
    icon: BookOpen,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Peer Review Process",
    content: "All submissions undergo a rigorous double-blind peer review process. Each paper is reviewed by at least two independent experts in the field. Authors will receive detailed feedback and have the opportunity to revise their manuscripts before final acceptance.",
    icon: FileCheck,
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    title: "Open Access Options",
    content: "Authors have the option to publish their work as open access, ensuring maximum visibility and citation potential. Open access articles are freely available to readers worldwide without subscription barriers.",
    icon: ShieldCheck,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Indexing & Abstracting",
    content: "The proceedings will be submitted for indexing to major academic databases including Google Scholar, CrossRef, ResearchGate, and other relevant indexing services to ensure wide discoverability and academic recognition.",
    icon: Sigma,
    gradient: "from-orange-500 to-amber-500"
  }
];

const journalCollaborations = [
  {
    title: "Journal of Environmental Sciences",
    description: "Selected papers will be invited for publication in this prestigious Scopus-indexed journal",
    impact: "Impact Factor: 5.2",
    indexed: "Scopus, SCI",
    icon: BookOpen,
    color: "from-emerald-600 to-teal-600"
  },
  {
    title: "International Journal of Life Sciences",
    description: "High-quality papers in biological sciences may be fast-tracked for publication",
    impact: "Impact Factor: 4.8",
    indexed: "PubMed, Scopus",
    icon: FileText,
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Applied Technology Review",
    description: "Outstanding technological innovations may be published in special issues",
    impact: "Impact Factor: 3.9",
    indexed: "Web of Science, Scopus",
    icon: Zap,
    color: "from-purple-600 to-pink-600"
  }
];

const ethicsPolicies = [
  {
    title: "Originality & Plagiarism",
    description: "All submissions must be original work not previously published. Papers are screened using advanced plagiarism detection software. Similarity index must not exceed 15%.",
    icon: FileSearch,
    severity: "critical"
  },
  {
    title: "Author Responsibilities",
    description: "Authors must ensure all contributors are properly credited. Corresponding authors are responsible for obtaining permissions from all co-authors before submission.",
    icon: Users,
    severity: "high"
  },
  {
    title: "Data Integrity",
    description: "All research data must be authentic and properly documented. Fabrication, falsification, or manipulation of data is strictly prohibited.",
    icon: Shield,
    severity: "critical"
  },
  {
    title: "Conflicts of Interest",
    description: "Authors must disclose any financial or personal relationships that could influence the research. Transparent declaration is mandatory.",
    icon: Scale,
    severity: "high"
  },
  {
    title: "Ethical Approval",
    description: "Research involving human subjects or animals must have appropriate ethical committee approval. Documentation must be provided upon request.",
    icon: CheckCircle,
    severity: "medium"
  },
  {
    title: "Consequences",
    description: "Violations of publication ethics may result in paper rejection, author ban, and notification to affiliated institutions. We take ethical breaches seriously.",
    icon: AlertCircle,
    severity: "warning"
  }
];

const indexingServices = [
  { name: "Google Scholar", icon: Search, color: "text-blue-600", status: "Confirmed" },
  { name: "CrossRef/DOI", icon: Link2, color: "text-green-600", status: "Confirmed" },
  { name: "ResearchGate", icon: Users, color: "text-teal-600", status: "Confirmed" },
  { name: "DOAJ", icon: BookOpen, color: "text-purple-600", status: "Confirmed" },
  { name: "Scopus", icon: Globe, color: "text-orange-600", status: "Submitted" },
  { name: "Web of Science", icon: Award, color: "text-red-600", status: "Submitted" }
];

const timeline = [
  { phase: "Submission Deadline", date: "March 15, 2026", status: "Open" },
  { phase: "Review Period", date: "March 16 - April 15", status: "Upcoming" },
  { phase: "Notification of Acceptance", date: "April 30, 2026", status: "Upcoming" },
  { phase: "Camera-Ready Submission", date: "May 15, 2026", status: "Upcoming" },
  { phase: "ISBN Assignment", date: "June 2026", status: "Upcoming" },
  { phase: "Publication", date: "July 2026", status: "Upcoming" }
];

export default function PublicationPage() {
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
            <span className="text-white font-semibold">Publication</span>
          </div>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">Indexed Proceedings & Journal Collaborations</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Publication Information
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
              Maximize the impact of your research with our rigorous peer-review process, indexed conference proceedings, ISBN/DOI assignment, and prestigious journal collaboration opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-emerald-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">ISBN</div>
                <div className="text-sm text-slate-600">Assigned Proceedings</div>
              </div>
              
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <Link2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">DOI</div>
                <div className="text-sm text-slate-600">For All Papers</div>
              </div>
              
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">6+</div>
                <div className="text-sm text-slate-600">Indexing Services</div>
              </div>
              
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-500 to-green-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">3</div>
                <div className="text-sm text-slate-600">Journal Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Details */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-900">Publication Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How We Publish Your Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publicationData.map((item, idx) => {
              const Icon = item.icon || BookOpen;
              
              return (
                <div 
                  key={item.title}
                  className="group"
                >
                  <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-slate-100 hover:border-emerald-300 overflow-hidden">
                    
                    {/* Header */}
                    <div className={`p-6 bg-gradient-to-br ${item.gradient}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-slate-700 leading-relaxed text-lg">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journal Collaborations */}
      <section className="bg-gradient-to-br from-slate-50 to-emerald-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md">
                <Star className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-bold text-slate-900">Extended Publication Opportunities</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Journal Collaborations
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Selected high-quality papers will be invited for fast-track publication in our partner journals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {journalCollaborations.map((journal, idx) => (
                <div key={journal.title} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border-2 border-slate-100">
                  <div className={`h-2 bg-gradient-to-r ${journal.color}`}></div>
                  <div className="p-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${journal.color} mb-4`}>
                      <journal.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{journal.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{journal.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        <span className="font-semibold text-slate-900">{journal.impact}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Globe className="w-4 h-4 text-blue-600" />
                        <span className="text-slate-600">{journal.indexed}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Fast-Track Publication</h3>
                  <p className="text-emerald-50">
                    Authors of outstanding papers will receive invitations within 2 weeks of the conference. The fast-track process reduces publication time by 40-50% compared to regular submissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISBN & DOI Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* ISBN Card */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-emerald-100 uppercase tracking-wider">Proceedings</div>
                  <h3 className="text-3xl font-bold">ISBN Assignment</h3>
                </div>
              </div>
              <p className="text-lg text-emerald-50 leading-relaxed mb-6">
                The ICLEAS 2026 Conference Proceedings will be assigned a unique International Standard Book Number (ISBN), ensuring proper cataloging and global recognition of the published work.
              </p>
              <div className="space-y-3">
                {[
                  "Unique ISBN for proceedings volume",
                  "Registered with international databases",
                  "Available in digital and print formats",
                  "Permanent archival storage"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-emerald-50">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DOI Card */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Link2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-100 uppercase tracking-wider">Individual Papers</div>
                  <h3 className="text-3xl font-bold">DOI Assignment</h3>
                </div>
              </div>
              <p className="text-lg text-blue-50 leading-relaxed mb-6">
                Every published paper receives a Digital Object Identifier (DOI) through CrossRef, providing permanent online accessibility, citation tracking, and enhanced discoverability.
              </p>
              <div className="space-y-3">
                {[
                  "Unique DOI for each paper",
                  "CrossRef registration included",
                  "Permanent digital identifier",
                  "Enhanced citation tracking"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-blue-50">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Originality Policy */}
      <section className="bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md border-2 border-red-200">
                <Shield className="w-5 h-5 text-red-600" />
                <span className="text-sm font-bold text-red-900">Critical Requirements</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Publication Ethics & Originality
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We maintain the highest standards of research integrity and ethical conduct
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {ethicsPolicies.map((policy, idx) => (
                <div 
                  key={policy.title} 
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border-2 ${
                    policy.severity === 'critical' ? 'border-red-200' :
                    policy.severity === 'high' ? 'border-orange-200' :
                    policy.severity === 'warning' ? 'border-amber-200' :
                    'border-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      policy.severity === 'critical' ? 'bg-red-100' :
                      policy.severity === 'high' ? 'bg-orange-100' :
                      policy.severity === 'warning' ? 'bg-amber-100' :
                      'bg-blue-100'
                    }`}>
                      <policy.icon className={`w-6 h-6 ${
                        policy.severity === 'critical' ? 'text-red-600' :
                        policy.severity === 'high' ? 'text-orange-600' :
                        policy.severity === 'warning' ? 'text-amber-600' :
                        'text-blue-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{policy.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{policy.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Plagiarism Policy Highlight */}
            <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <FileWarning className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Zero Tolerance for Plagiarism</h3>
                  <p className="text-lg text-red-50 mb-6 leading-relaxed">
                    All submissions are screened using industry-leading plagiarism detection software (Turnitin/iThenticate). The maximum acceptable similarity index is 15%, including quotes and references.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold mb-1">&lt; 15%</div>
                      <div className="text-sm text-red-100">Acceptable</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold mb-1">15-25%</div>
                      <div className="text-sm text-red-100">Requires Revision</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold mb-1">&gt; 25%</div>
                      <div className="text-sm text-red-100">Desk Rejection</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indexing Services */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <Globe className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-900">Wide Visibility</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Indexing & Abstracting
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proceedings are indexed in major academic databases to ensure maximum visibility and citation potential
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {indexingServices.map((service, idx) => (
              <div 
                key={service.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 border-2 border-slate-100 hover:border-emerald-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center`}>
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      service.status === 'Confirmed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                  <div className="font-bold text-slate-900">{service.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication Timeline */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md">
                <Clock className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-900">Publication Timeline</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                From Submission to Publication
              </h2>
              <p className="text-xl text-slate-600">
                Track your paper's journey through our streamlined publication process
              </p>
            </div>

            <div className="space-y-6">
              {timeline.map((item, idx) => (
                <div 
                  key={item.phase}
                  className="relative"
                >
                  {/* Connecting Line */}
                  {idx < timeline.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 to-teal-300"></div>
                  )}
                  
                  <div className="flex items-start gap-6">
                    {/* Timeline Dot */}
                    <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                      item.status === 'Open' 
                        ? 'bg-gradient-to-br from-lime-500 to-green-500' 
                        : 'bg-gradient-to-br from-emerald-400 to-teal-500'
                    }`}>
                      {item.status === 'Open' ? (
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      ) : (
                        <Clock className="w-8 h-8 text-white" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 border-2 border-slate-100">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-2xl font-bold text-slate-900">
                          {item.phase}
                        </h3>
                        <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                          item.status === 'Open'
                            ? 'bg-lime-100 text-lime-700 border-2 border-lime-300'
                            : 'bg-teal-100 text-teal-700 border-2 border-teal-300'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-lg font-medium">{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Download */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
                  <Download className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Ready to Submit?
                </h2>
                <p className="text-xl text-teal-100">
                  Download our publication guidelines and formatting templates to get started
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <button className="px-6 py-4 bg-white text-emerald-900 rounded-xl font-bold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" />
                  Author Guidelines
                </button>
                <button className="px-6 py-4 bg-white text-emerald-900 rounded-xl font-bold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Paper Template
                </button>
                <button className="px-6 py-4 bg-white text-emerald-900 rounded-xl font-bold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  <Star className="w-5 h-5" />
                  Submission Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Questions About Publication?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Our editorial team is here to help you navigate the publication process
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg hover:shadow-xl transition-all">
              Contact Editorial Team
            </button>
            <button className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:shadow-xl transition-all border-2 border-slate-200">
              View FAQs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}