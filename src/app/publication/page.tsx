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










"use client"

import { useState } from 'react';
import { 
  ChevronRight, BookOpen, Award, Globe, CheckCircle2, 
  Sparkles, Send, Building, Mail, Phone, FileText,
  TrendingUp, Users, Target, Zap, ArrowRight, Leaf,
  ExternalLink, Star, ShieldCheck, Briefcase, Lock,
  AlertCircle, BadgeCheck, Search, Scale, Eye
} from 'lucide-react';

// Type definitions
interface FormState {
  journalName: string;
  publisherName: string;
  contactPerson: string;
  email: string;
  phone: string;
  website: string;
  issn: string;
  scopusIndexed: boolean;
  description: string;
  subscribe: boolean;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

// Partner Journals Data
const partnerJournals = [
  {
    name: "International Journal of Environmental Sciences",
    publisher: "SpringerNature",
    impact: "4.5",
    indexing: ["Scopus", "Web of Science", "DOAJ"],
    logo: "🌍",
    color: "from-emerald-500 to-teal-500"
  },
  {
    name: "Journal of Applied Life Sciences",
    publisher: "Elsevier",
    impact: "3.8",
    indexing: ["Scopus", "PubMed", "Google Scholar"],
    logo: "🔬",
    color: "from-teal-500 to-cyan-500"
  },
  {
    name: "Biotechnology & Innovation Review",
    publisher: "Wiley",
    impact: "4.2",
    indexing: ["Scopus", "Web of Science"],
    logo: "🧬",
    color: "from-lime-500 to-green-500"
  },
  {
    name: "Sustainable Technology Journal",
    publisher: "IEEE",
    impact: "5.1",
    indexing: ["Scopus", "IEEE Xplore"],
    logo: "⚡",
    color: "from-green-600 to-emerald-600"
  }
];

// Ethics Policies
const ethicsPolicies = [
  {
    icon: Search,
    title: "Plagiarism Detection",
    description: "All submissions undergo rigorous plagiarism screening using industry-standard tools. Minimum 85% originality required."
  },
  {
    icon: BadgeCheck,
    title: "Peer Review Process",
    description: "Double-blind peer review by at least two independent experts ensures quality and academic rigor."
  },
  {
    icon: Scale,
    title: "Publication Ethics",
    description: "We adhere to COPE guidelines and maintain highest standards of academic integrity and ethical publishing."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear disclosure of conflicts of interest, funding sources, and research methodology required for all submissions."
  }
];

export default function PublicationPage() {
  const [formState, setFormState] = useState<FormState>({
    journalName: '',
    publisherName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    issn: '',
    scopusIndexed: false,
    description: '',
    subscribe: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitStatus({ 
        success: true, 
        message: "Thank you for your interest! Our partnership team will review your application and contact you within 3-5 business days." 
      });
      setIsSubmitting(false);
      setFormState({
        journalName: '',
        publisherName: '',
        contactPerson: '',
        email: '',
        phone: '',
        website: '',
        issn: '',
        scopusIndexed: false,
        description: '',
        subscribe: false
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center gap-2 text-emerald-200 mb-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Publication</span>
          </div>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">Academic Publishing Excellence</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Publication & Proceedings
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
              Publish your research with ICLEAS 2026 and gain global visibility through our indexed proceedings and prestigious journal collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Proceedings Information Section */}
      <section className="relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-emerald-100 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Proceedings Info */}
                <div className="p-12 bg-gradient-to-br from-emerald-50 to-teal-50">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-bold text-slate-900">Conference Proceedings</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    ICLEAS 2026 Proceedings
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Official ISBN</h3>
                        <p className="text-slate-600">ISBN: 978-X-XXXX-XXXX-X</p>
                        <p className="text-sm text-slate-500 mt-1">Unique identifier for citation and cataloging</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center">
                        <BadgeCheck className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">DOI Assignment</h3>
                        <p className="text-slate-600">CrossRef DOI for each paper</p>
                        <p className="text-sm text-slate-500 mt-1">Digital Object Identifier ensures permanent access</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-lime-600 to-green-600 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Global Indexing</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {["Google Scholar", "CrossRef", "DOAJ", "ResearchGate"].map((index, i) => (
                            <span key={i} className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-700 shadow-sm">
                              {index}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Publication Details */}
                <div className="p-12 bg-white">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Publication Timeline</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Paper Submission</h4>
                        <p className="text-sm text-slate-600">Submit your research through our online portal by March 15, 2026</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Peer Review</h4>
                        <p className="text-sm text-slate-600">Double-blind review by expert reviewers (2-4 weeks)</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Notification</h4>
                        <p className="text-sm text-slate-600">Acceptance notification by April 30, 2026</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Final Submission</h4>
                        <p className="text-sm text-slate-600">Camera-ready paper submission by May 20, 2026</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                        5
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Publication</h4>
                        <p className="text-sm text-slate-600">Proceedings published within 30 days post-conference</p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-8 w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold hover:shadow-lg transition-all">
                    View Submission Guidelines
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Originality Policy Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-bold text-slate-900">Ethical Standards</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Ethics & Originality Policy
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We are committed to maintaining the highest standards of academic integrity and ethical publishing practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {ethicsPolicies.map((policy, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-100 hover:border-emerald-200 transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-6">
                  <policy.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{policy.title}</h3>
                <p className="text-slate-600 leading-relaxed">{policy.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Ethics Information */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Commitment to Academic Integrity</h3>
            
            <div className="space-y-4 text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p><strong>Originality Requirement:</strong> All submissions must be original work not previously published or under consideration elsewhere. Similarity index must be below 15%.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p><strong>Author Contributions:</strong> All listed authors must have made substantial contributions to the research and approved the final manuscript.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p><strong>Conflict of Interest:</strong> Authors must disclose any financial or personal relationships that could influence their work.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p><strong>Research Ethics:</strong> Studies involving human subjects or animals must have appropriate ethical approval documented.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p><strong>Data Integrity:</strong> Research data must be accurately presented. Fabrication, falsification, or manipulation of data is strictly prohibited.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-50 border-2 border-amber-200 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Important Notice</h4>
                  <p className="text-sm text-amber-800">
                    Papers found to violate ethical standards will be rejected or retracted. We use Turnitin and iThenticate for plagiarism detection and maintain strict adherence to COPE (Committee on Publication Ethics) guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Collaboration Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
                <Star className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-slate-900">Extended Publication Opportunities</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Journal Collaboration
              </h2>
              <p className="text-xl text-slate-600">
                Selected high-quality papers will be invited for publication in our partner journals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {partnerJournals.map((journal, idx) => (
                <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-slate-100 hover:border-emerald-300 overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${journal.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${journal.color} flex items-center justify-center text-3xl shadow-lg`}>
                        {journal.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                          {journal.name}
                        </h3>
                        <p className="text-slate-600 mb-1">{journal.publisher}</p>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-amber-500" />
                          <span className="text-sm font-semibold text-slate-700">
                            Impact Factor: {journal.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span className="font-semibold">Indexed in:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {journal.indexing.map((index, i) => (
                          <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
                            {index}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
                      Visit Journal
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits for Authors */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Benefits of Journal Publication</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Higher Impact</h4>
                  <p className="text-sm text-slate-600">Increased citations and academic visibility</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-4">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Global Reach</h4>
                  <p className="text-sm text-slate-600">Access to international research community</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-lime-500 to-green-500 mb-4">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Peer Recognition</h4>
                  <p className="text-sm text-slate-600">Publication in prestigious indexed journals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Application Form Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-emerald-100 overflow-hidden">
            <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-white font-medium">For Journal Publishers</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-3">
                  Apply for Journal Partnership
                </h2>
                <p className="text-xl text-teal-200">
                  Join our network of prestigious academic journals and expand your publication's reach
                </p>
              </div>
            </div>

            <div className="p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="journalName" className="block text-sm font-bold text-slate-900">
                      Journal Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        id="journalName" 
                        name="journalName"
                        value={formState.journalName}
                        onChange={handleChange}
                        placeholder="Journal Name" 
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="publisherName" className="block text-sm font-bold text-slate-900">
                      Publisher Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        id="publisherName" 
                        name="publisherName"
                        value={formState.publisherName}
                        onChange={handleChange}
                        placeholder="Publisher Name" 
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contactPerson" className="block text-sm font-bold text-slate-900">
                      Contact Person <span className="text-red-500">*</span>
                    </label>
                    <input 
                      id="contactPerson" 
                      name="contactPerson"
                      value={formState.contactPerson}
                      onChange={handleChange}
                      placeholder="Full Name" 
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-slate-900">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        id="email" 
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="email@journal.com" 
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-900">
                      Phone <span className="text-slate-400 text-xs">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        id="phone" 
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="website" className="block text-sm font-bold text-slate-900">
                      Journal Website <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        id="website" 
                        name="website"
                        type="url"
                        value={formState.website}
                        onChange={handleChange}
                        placeholder="https://journal.com"
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="issn" className="block text-sm font-bold text-slate-900">
                      ISSN Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        id="issn" 
                        name="issn"
                        value={formState.issn}
                        onChange={handleChange}
                        placeholder="XXXX-XXXX"
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 flex items-end">
                    <div className="w-full bg-emerald-50 rounded-xl p-4 border-2 border-emerald-100">
                      <div className="flex items-center space-x-3">
                        <input 
                          type="checkbox"
                          id="scopusIndexed" 
                          name="scopusIndexed"
                          checked={formState.scopusIndexed}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-2 border-emerald-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                        />
                        <label htmlFor="scopusIndexed" className="text-sm font-semibold text-slate-900 cursor-pointer">
                          Scopus Indexed Journal
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-bold text-slate-900">
                    Journal Description & Partnership Interest <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formState.description}
                    onChange={handleChange}
                    placeholder="Describe your journal's focus areas, target audience, and why you're interested in partnering with ICLEAS 2026..."
                    rows={6}
                    required
                    minLength={100}
                    maxLength={2000}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  />
                  <div className="text-xs text-slate-500 text-right">
                    Minimum 100 characters
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-100">
                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox"
                      id="subscribe" 
                      name="subscribe"
                      checked={formState.subscribe}
                      onChange={handleChange}
                      className="w-5 h-5 mt-0.5 rounded border-2 border-emerald-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                    />
                    <label htmlFor="subscribe" className="text-sm text-slate-700 cursor-pointer">
                      <span className="font-semibold">Subscribe to partnership updates</span>
                      <span className="block text-xs text-slate-600 mt-1">
                        Receive news about collaboration opportunities and conference updates
                      </span>
                    </label>
                  </div>
                </div>

                {submitStatus?.success && (
                  <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-emerald-900 mb-1">Application Submitted!</div>
                        <div className="text-sm text-emerald-700">{submitStatus.message}</div>
                      </div>
                    </div>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Partnership Application
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <Leaf className="w-5 h-5 text-emerald-400" />
              <span className="text-sm text-white font-medium">Questions About Publication?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Publish Your Research?
            </h2>
            <p className="text-xl text-teal-200">
              Join hundreds of researchers publishing cutting-edge work with ICLEAS 2026
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2">
                Submit Your Paper
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center gap-2">
                Download Guidelines
                <FileText className="w-5 h-5" />
              </button>
            </div>
            
            <div className="pt-12 border-t border-white/10">
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 text-white">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">publications@icleas2026.org</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">+91-1234567890</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}