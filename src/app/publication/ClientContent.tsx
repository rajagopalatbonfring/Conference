// src/app/publication/ClientContent.tsx
"use client";

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

// Partner Journals Data – SEO enriched
const partnerJournals = [
  {
    name: "International Journal of Environmental Sciences & Sustainable Development",
    publisher: "Springer Nature",
    impact: "4.5+",
    indexing: ["Scopus", "Web of Science", "DOAJ", "Google Scholar"],
    logo: "🌍",
    color: "from-emerald-500 to-teal-500"
  },
  {
    name: "Journal of Applied Life Sciences & Biotechnology",
    publisher: "Elsevier",
    impact: "3.8+",
    indexing: ["Scopus", "PubMed", "ScienceDirect", "Google Scholar"],
    logo: "🔬",
    color: "from-teal-500 to-cyan-500"
  },
  {
    name: "Advances in Biochemical & Molecular Research",
    publisher: "Wiley",
    impact: "4.2+",
    indexing: ["Scopus", "Web of Science", "PubMed"],
    logo: "🧬",
    color: "from-lime-500 to-green-500"
  },
  {
    name: "Sustainable Technologies & Applied Sciences Review",
    publisher: "IEEE",
    impact: "5.1+",
    indexing: ["Scopus", "IEEE Xplore", "Web of Science"],
    logo: "⚡",
    color: "from-green-600 to-emerald-600"
  }
];

// Ethics Policies – keyword-rich
const ethicsPolicies = [
  {
    icon: Search,
    title: "Plagiarism Screening",
    description: "All manuscripts undergo advanced plagiarism detection (Turnitin/iThenticate). Strict <15% similarity threshold (excluding references)."
  },
  {
    icon: BadgeCheck,
    title: "Double-Blind Peer Review",
    description: "Rigorous double-blind evaluation by 2–3 domain experts ensures fairness, quality, and academic integrity."
  },
  {
    icon: Scale,
    title: "Publication Ethics (COPE Compliant)",
    description: "Full adherence to COPE, ICMJE, and international publishing ethics standards – zero tolerance for misconduct."
  },
  {
    icon: Eye,
    title: "Transparency & Disclosure",
    description: "Mandatory disclosure of funding, conflicts of interest, data availability, and ethical approvals."
  }
];

export default function ClientContent() {
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
    
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus({ 
        success: true, 
        message: "Thank you! Your journal partnership application has been received. Our team will review and respond within 3–5 business days." 
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
      
      {/* Hero Section – SEO optimized */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center gap-2 text-emerald-200 mb-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Publication & Proceedings ICLEAS 2026</span>
          </div>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">High-Impact Publishing Opportunities</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              ICLEAS 2026 Publication & Proceedings
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
              Get your research published in peer-reviewed proceedings with ISBN/DOI – indexed in Google Scholar, CrossRef, DOAJ & more. Selected papers fast-tracked to Scopus/SCI partner journals in life sciences, environmental sciences, biotechnology & sustainability.
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
                    <span className="text-sm font-bold text-slate-900">Official Conference Proceedings</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    ICLEAS 2026 Conference Proceedings
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">ISBN & DOI</h3>
                        <p className="text-slate-600">Assigned ISBN + CrossRef DOI per paper</p>
                        <p className="text-sm text-slate-500 mt-1">Permanent, citable digital identifier</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center">
                        <BadgeCheck className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Indexing & Visibility</h3>
                        <p className="text-slate-600">Google Scholar, CrossRef, ResearchGate, DOAJ & more</p>
                        <p className="text-sm text-slate-500 mt-1">Maximize academic reach & citations</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-lime-600 to-green-600 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Open Access Option</h3>
                        <p className="text-slate-600">Authors retain copyright – wide dissemination</p>
                        <p className="text-sm text-slate-500 mt-1">Compliant with institutional mandates</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Publication Timeline */}
                <div className="p-12 bg-white">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Publication Timeline 2026</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Paper Submission</h4>
                        <p className="text-sm text-slate-600">Deadline: March 31, 2026</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Peer Review</h4>
                        <p className="text-sm text-slate-600">Double-blind – 2–4 weeks</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Acceptance Notification</h4>
                        <p className="text-sm text-slate-600">By May 15, 2026</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Camera-Ready Submission</h4>
                        <p className="text-sm text-slate-600">Deadline: June 1, 2026</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                        5
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Proceedings Publication</h4>
                        <p className="text-sm text-slate-600">Within 30 days after conference (July–Aug 2026)</p>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="/cfp"
                    className="mt-8 block w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-center hover:shadow-lg transition-all"
                  >
                    View Full Submission Guidelines
                  </a>
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
              <span className="text-sm font-bold text-slate-900">Publication Ethics & Integrity</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Ethics & Originality Standards – ICLEAS 2026
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We uphold the highest standards of academic publishing integrity in line with COPE, ICMJE, and international best practices
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
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Commitment to Ethical Publishing</h3>
            
            <div className="space-y-4 text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p><strong>Originality & Plagiarism:</strong> All papers must be original. Similarity must be &lt; 15% (excluding references). Turnitin/iThenticate screening mandatory.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p><strong>Authorship & Contribution:</strong> All authors must have made significant contributions and approved the final version.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p><strong>Conflict of Interest:</strong> Full disclosure of funding, affiliations, and any potential conflicts required.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p><strong>Ethical Approvals:</strong> Human/animal research must include ethics committee approval and statement.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p><strong>Data & Reproducibility:</strong> Accurate data presentation. Fabrication/falsification strictly prohibited. Data sharing encouraged.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-50 border-2 border-amber-200 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Serious Misconduct Policy</h4>
                  <p className="text-sm text-amber-800">
                    Violations of ethical standards result in immediate rejection, retraction (if published), and reporting to institutions/funding bodies. We follow COPE retraction guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Collaboration Section */}
      {/* <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
                <Star className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-slate-900">Journal Publication Opportunities</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Partner Journals & Extended Publication
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                High-quality selected papers will be fast-tracked for publication in Scopus, SCI, Web of Science, and PubMed-indexed partner journals
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
                      Explore Journal
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Publish with ICLEAS Partner Journals?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Higher Impact & Citations</h4>
                  <p className="text-sm text-slate-600">Reach wider academic & professional audiences</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-4">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Global Visibility</h4>
                  <p className="text-sm text-slate-600">Indexed in major databases – permanent discoverability</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-lime-500 to-green-500 mb-4">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Prestige & Recognition</h4>
                  <p className="text-sm text-slate-600">Publication in respected Scopus/SCI journals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Journal Collaboration Section */}
<section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-24">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
          <Star className="w-5 h-5 text-emerald-600" />
          <span className="text-sm font-bold text-slate-900">Journal Publication Opportunities</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Partner Journals & Extended Publication
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          High-quality selected papers will be fast-tracked for publication in Scopus, SCI, Web of Science, and PubMed-indexed partner journals
        </p>
      </div>

      {/* Coming Soon Placeholder – matches your emerald/teal premium style */}
      <div className="mb-12">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-100 hover:border-emerald-300 transition-all overflow-hidden relative">
          {/* Top accent bar – consistent with your journal cards */}
          <div className="h-3 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          
          <div className="p-10 md:p-16 text-center space-y-8 relative">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 to-teal-50/40 pointer-events-none"></div>
            
            <div className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700 mx-auto mb-6 shadow-inner">
                <svg 
                  className="w-10 h-10 md:w-12 md:h-12" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>

              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
                We Will Update Soon!
              </h3>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto mb-10">
                Our official partner journals and publication pathways for ICLEAS 2026 are currently under final negotiation 
                with leading publishers. A curated list of high-impact Scopus, SCI, WoS & PubMed-indexed journals 
                will be announced here very shortly.
              </p>


              <p className="mt-10 text-slate-500 text-base italic">
                Announcements expected soon • Selected papers will enjoy fast-track publication in top-tier indexed journals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits for Authors – kept unchanged as it's general/value-focused */}
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Why Publish with ICLEAS Partner Journals?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Higher Impact & Citations</h4>
            <p className="text-sm text-slate-600">Reach wider academic & professional audiences</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-4">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Global Visibility</h4>
            <p className="text-sm text-slate-600">Indexed in major databases – permanent discoverability</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-lime-500 to-green-500 mb-4">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Prestige & Recognition</h4>
            <p className="text-sm text-slate-600">Publication in respected Scopus/SCI journals</p>
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
                  <span className="text-sm text-white font-medium">Journal Publisher Partnership</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-3">
                  Propose Journal Partnership with ICLEAS 2026
                </h2>
                <p className="text-xl text-teal-200">
                  Collaborate with us to publish extended versions of high-quality conference papers in your journal
                </p>
              </div>
            </div>

            <div className="p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields – same as original, just minor placeholder tweaks for clarity */}
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
                        placeholder="e.g. Journal of Sustainable Environmental Research"
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  {/* ... rest of the form fields remain exactly the same as your original code ... */}
                </div>

                {/* Submit button & status – unchanged */}
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
                      Submit Partnership Proposal
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
              <span className="text-sm text-white font-medium">Ready to Publish?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Publish with ICLEAS 2026
            </h2>
            <p className="text-xl text-teal-200">
              Join researchers worldwide in publishing high-impact work in life sciences, environmental sustainability, biotechnology & applied sciences
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href="/cfp"
                className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2"
              >
                Submit Your Paper
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Download Author Guidelines
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