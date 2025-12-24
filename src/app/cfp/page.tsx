// import Link from 'next/link';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { ChevronRight, Download, FileText, Lightbulb, Microscope, PawPrint, Fish, Leaf, Atom, Rocket, CheckCircle } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import Image from 'next/image';

// const keyDetails = [
//     { detail: "Submission Deadline", value: "March 31, 2026 (23:59 GMT)" },
//     { detail: "Notification Date", value: "May 15, 2026" },
//     { detail: "Camera-Ready Deadline", value: "June 1, 2026" },
//     { detail: "Paper Format", value: "PDF / DOCX" },
//     { detail: "Page Limit", value: "8-10 pages (excluding references)" },
//     { detail: "Abstract Length", value: "250-500 words" },
// ];

// const tracks = [
//     { icon: PawPrint, title: "Animal Science & Veterinary Studies", topics: "Veterinary medicine, animal health, livestock management", keywords: "Disease prevention, animal behavior" },
//     { icon: Fish, title: "Aquatic Science & Fisheries", topics: "Marine biology, aquaculture, fisheries management", keywords: "Water ecosystems, sustainable fishing" },
//     { icon: Leaf, title: "Environmental & Natural Sciences", topics: "Ecology, conservation, climate change, renewable energy", keywords: "Sustainability, green technology" },
//     { icon: Atom, title: "Biochemical & Molecular Sciences", topics: "Molecular biology, genetics, biochemistry", keywords: "Bioinformatics, cell biology" },
//     { icon: Rocket, title: "Applied Science & Emerging Technologies", topics: "Biotech applications, AI/ML in life sciences", keywords: "Innovation, industrial applications" },
// ];

// const submissionFaqs = [
//     { q: "Can I submit multiple papers?", a: "Yes, you can submit multiple papers. However, each paper must be registered separately if accepted." },
//     { q: "What is the plagiarism threshold?", a: "We maintain a strict policy against plagiarism. Submissions with a similarity index above 15% will be rejected. All papers are checked with Turnitin." },
//     { q: "Can I revise my paper after submission?", a: "No revisions are allowed before the review process is complete. If your paper is accepted with revisions, you will have time to make the necessary changes." },
//     { q: "What happens if my paper is rejected?", a: "The review feedback will be provided to help you improve your work for future submissions elsewhere." },
//     { q: "Is there a submission fee?", a: "No, there is no fee for submitting a paper to ICLEAS 2026." },
// ];

// export default function CallForPapersPage() {
//   return (
//     <div className="bg-background text-foreground">
//       {/* 1. Page Header */}
//        <section className="relative bg-card/50 py-20 text-primary-foreground">
//         <div className="absolute inset-0">
//             <Image
//                 src="https://picsum.photos/seed/cfp-hero/1800/1200"
//                 alt="Abstract background"
//                 fill
//                 style={{ objectFit: 'cover' }}
//                 className="opacity-10"
//                 data-ai-hint="abstract science"
//             />
//         </div>
//         <div className="container relative z-10 mx-auto text-center">
//            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
//             <Link href="/" className="hover:text-primary">Home</Link>
//             <ChevronRight size={16} />
//             <span>Call for Papers</span>
//           </div>
//           <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-6xl bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">
//             Call for Papers
//           </h1>
//           <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
//             Submit your research to ICLEAS 2026. Deadline: March 31, 2026. Papers on life sciences, environmental studies, and applied technologies welcome.
//           </p>
//            <div className="mt-8">
//             <Badge variant="secondary" className="text-base py-2 px-4">Submission Window Open</Badge>
//           </div>
//           <div className="mt-6">
//             <Button size="lg" asChild>
//               <Link href="/submission">Submit Your Paper Now</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       <div className="container mx-auto py-16 md:py-24 space-y-20">

//         <section id="key-details">
//              <h2 className="text-3xl font-bold text-primary text-center">Submission Overview</h2>
//              <Card className="mt-8 max-w-3xl mx-auto bg-card/50 border-border/50">
//                 <Table>
//                     <TableBody>
//                         {keyDetails.map(item => (
//                             <TableRow key={item.detail}>
//                                 <TableHead className="font-semibold">{item.detail}</TableHead>
//                                 <TableCell>
//                                     {item.detail === 'Templates' ? (
//                                         <div className="flex gap-4">
//                                             <Link href="#" className="text-primary hover:underline">Word</Link>
//                                             <Link href="#" className="text-primary hover:underline">LaTeX</Link>
//                                         </div>
//                                     ) : item.value}
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//              </Card>
//         </section>

//         <section id="tracks">
//              <h2 className="text-3xl font-bold text-primary text-center">Research Tracks</h2>
//              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {tracks.map(track => {
//                     const Icon = track.icon;
//                     return (
//                         <Card key={track.title} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
//                             <CardHeader>
//                                 <div className="flex items-center gap-4">
//                                     <Icon className="h-8 w-8 text-primary"/>
//                                     <CardTitle>{track.title}</CardTitle>
//                                 </div>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-sm text-muted-foreground">{track.topics}</p>
//                                 <div className="mt-4">
//                                     <h4 className="font-semibold text-xs uppercase tracking-wider mb-2">Keywords</h4>
//                                     <p className="text-xs text-muted-foreground">{track.keywords}</p>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     );
//                 })}
//              </div>
//         </section>
        
//         <section id="guidelines" className="max-w-4xl mx-auto p-8 bg-card/50 rounded-md">
//             <h2 className="text-3xl font-bold text-primary text-center">Submission Guidelines</h2>
//             <div className="mt-12 space-y-6">
//                 <div className="flex items-start gap-4"><div className="font-bold text-primary text-lg">Step 1:</div><p>Create an account on our submission portal.</p></div>
//                 <div className="flex items-start gap-4"><div className="font-bold text-primary text-lg">Step 2:</div><p>Fill in author and paper information accurately.</p></div>
//                 <div className="flex items-start gap-4"><div className="font-bold text-primary text-lg">Step 3:</div><p>Upload your abstract for initial review.</p></div>
//                 <div className="flex items-start gap-4"><div className="font-bold text-primary text-lg">Step 4:</div><p>Upon abstract acceptance, upload your full paper.</p></div>
//                 <div className="flex items-start gap-4"><div className="font-bold text-primary text-lg">Step 5:</div><p>Your paper will undergo a double-blind peer review (2-3 weeks).</p></div>
//                 <div className="flex items-start gap-4"><div className="font-bold text-primary text-lg">Step 6:</div><p>Receive the final decision (Accept, Revise, or Reject).</p></div>
//                 <div className="flex items-start gap-4"><div className="font-bold text-primary text-lg">Step 7:</div><p>If accepted, submit the camera-ready version.</p></div>
//             </div>
//         </section>

//         <section id="templates-format" className="grid md:grid-cols-2 gap-12 items-start">
//              <div>
//                 <h3 className="text-2xl font-bold text-primary mb-4">Paper Templates & Format</h3>
//                 <div className="flex gap-4">
//                     <Button variant="outline" asChild><Link href="#"><Download className="mr-2 h-4 w-4" /> LaTeX Template</Link></Button>
//                     <Button variant="outline" asChild><Link href="#"><Download className="mr-2 h-4 w-4" /> Word Template</Link></Button>
//                 </div>
//                  <ul className="mt-6 space-y-2 text-muted-foreground list-disc list-inside">
//                      <li><strong>Page Limit:</strong> 8-10 pages + references</li>
//                      <li><strong>Font:</strong> Times New Roman, 12pt</li>
//                      <li><strong>Citation Style:</strong> IEEE</li>
//                      <li><strong>File Format:</strong> PDF</li>
//                  </ul>
//              </div>
//              <div>
//                 <h3 className="text-2xl font-bold text-primary mb-4">Review Process</h3>
//                 <ul className="space-y-2 text-muted-foreground">
//                     <li><strong>Abstract Screening:</strong> 1-week editor review for scope and originality.</li>
//                     <li><strong>Peer Review:</strong> 2-3 week double-blind review by 2-3 experts.</li>
//                     <li><strong>Decision:</strong> Accept / Major Revision / Minor Revision / Reject.</li>
//                     <li><strong>Final Version:</strong> Camera-ready submission after acceptance.</li>
//                 </ul>
//              </div>
//         </section>

//          <section id="publication">
//             <h2 className="text-3xl font-bold text-primary text-center">Publication Information</h2>
//             <div className="mt-8 max-w-3xl mx-auto p-6 bg-card/50 rounded-md text-center">
//                 <p className="text-muted-foreground">All accepted papers will be published in the peer-reviewed conference proceedings with a unique DOI and indexed in Google Scholar, DOAJ, and CrossRef. Authors retain full rights to their work.</p>
//             </div>
//         </section>
        
//         <div className="grid md:grid-cols-2 gap-12">
//             <section id="policies">
//                 <h3 className="text-2xl font-bold text-primary mb-4">Special Policies</h3>
//                 <Accordion type="single" collapsible className="w-full">
//                     <AccordionItem value="plagiarism">
//                         <AccordionTrigger>Plagiarism Policy</AccordionTrigger>
//                         <AccordionContent>Maximum 15% plagiarism allowed. All submissions are checked via Turnitin.</AccordionContent>
//                     </AccordionItem>
//                     <AccordionItem value="conflict">
//                         <AccordionTrigger>Conflict of Interest</AccordionTrigger>
//                         <AccordionContent>Authors must declare any potential conflict of interest during submission.</AccordionContent>
//                     </AccordionItem>
//                     <AccordionItem value="ethics">
//                         <AccordionTrigger>Ethical Guidelines</AccordionTrigger>
//                         <AccordionContent>Research must comply with all relevant ethical guidelines for human or animal subjects.</AccordionContent>
//                     </AccordionItem>
//                     <AccordionItem value="review">
//                         <AccordionTrigger>Double-Blind Review</AccordionTrigger>
//                         <AccordionContent>The review process is double-blind. Ensure your manuscript is properly anonymized.</AccordionContent>
//                     </AccordionItem>
//                 </Accordion>
//             </section>
//              <section id="faq">
//                 <h3 className="text-2xl font-bold text-primary mb-4">Submission FAQs</h3>
//                 <Accordion type="single" collapsible className="w-full">
//                 {submissionFaqs.map((faq, index) => (
//                     <AccordionItem key={index} value={`item-${index}`}>
//                         <AccordionTrigger>{faq.q}</AccordionTrigger>
//                         <AccordionContent>{faq.a}</AccordionContent>
//                     </AccordionItem>
//                 ))}
//                 </Accordion>
//             </section>
//         </div>


//         <section id="submit-cta" className="text-center bg-card/50 py-12 rounded-md">
//             <h2 className="text-3xl font-bold">Ready to Contribute?</h2>
//             <div className="mt-8 flex justify-center items-center gap-4">
//                 <Button size="lg" asChild>
//                     <Link href="/submission">Submit Your Paper</Link>
//                 </Button>
//                 <Button size="lg" variant="outline" asChild>
//                     <Link href="#">Download Template</Link>
//                 </Button>
//                  <Button size="lg" variant="ghost" asChild>
//                     <Link href="/contact">Contact for Questions</Link>
//                 </Button>
//             </div>
//         </section>

//       </div>
//     </div>
//   );
// }

















"use client";

import React, { useState } from 'react';
import {
  ChevronRight, Download, FileText, Calendar, CheckCircle,
  PawPrint, Fish, Leaf, Atom, Rocket, AlertCircle,
  ArrowRight, Clock, Target, Award, BookOpen, Shield,
  Users, Zap, Eye, MessageCircle
} from 'lucide-react';

const keyDetails = [
  { detail: "Submission Deadline", value: "March 31, 2026 (23:59 GMT)", icon: Clock },
  { detail: "Notification Date", value: "May 15, 2026", icon: Calendar },
  { detail: "Camera-Ready Deadline", value: "June 1, 2026", icon: Target },
  { detail: "Paper Format", value: "PDF / DOCX", icon: FileText },
  { detail: "Page Limit", value: "8-10 pages (excluding references)", icon: BookOpen },
  { detail: "Abstract Length", value: "250-500 words", icon: MessageCircle },
];

const tracks = [
  { 
    icon: PawPrint, 
    title: "Animal Science & Veterinary Studies", 
    topics: "Veterinary medicine, animal health, livestock management", 
    keywords: "Disease prevention, animal behavior",
    color: "from-emerald-500 to-teal-500"
  },
  { 
    icon: Fish, 
    title: "Aquatic Science & Fisheries", 
    topics: "Marine biology, aquaculture, fisheries management", 
    keywords: "Water ecosystems, sustainable fishing",
    color: "from-cyan-500 to-blue-500"
  },
  { 
    icon: Leaf, 
    title: "Environmental & Natural Sciences", 
    topics: "Ecology, conservation, climate change, renewable energy", 
    keywords: "Sustainability, green technology",
    color: "from-green-600 to-lime-600"
  },
  { 
    icon: Atom, 
    title: "Biochemical & Molecular Sciences", 
    topics: "Molecular biology, genetics, biochemistry", 
    keywords: "Bioinformatics, cell biology",
    color: "from-teal-600 to-cyan-600"
  },
  { 
    icon: Rocket, 
    title: "Applied Science & Emerging Technologies", 
    topics: "Biotech applications, AI/ML in life sciences", 
    keywords: "Innovation, industrial applications",
    color: "from-lime-600 to-emerald-600"
  },
];

const submissionSteps = [
  { step: 1, title: "Create Account", desc: "Register on our submission portal with your details" },
  { step: 2, title: "Author Information", desc: "Fill in author and paper information accurately" },
  { step: 3, title: "Submit Abstract", desc: "Upload your abstract for initial review" },
  { step: 4, title: "Full Paper Upload", desc: "Upon abstract acceptance, upload your full paper" },
  { step: 5, title: "Peer Review", desc: "Your paper undergoes double-blind peer review (2-3 weeks)" },
  { step: 6, title: "Receive Decision", desc: "Get final decision (Accept, Revise, or Reject)" },
  { step: 7, title: "Camera-Ready", desc: "Submit final version after acceptance" },
];

const policies = [
  {
    title: "Plagiarism Policy",
    content: "Maximum 15% similarity index allowed. All submissions are checked via Turnitin to ensure originality.",
    icon: Shield
  },
  {
    title: "Conflict of Interest",
    content: "Authors must declare any potential conflict of interest during submission.",
    icon: AlertCircle
  },
  {
    title: "Ethical Guidelines",
    content: "Research must comply with all relevant ethical guidelines for human or animal subjects.",
    icon: Award
  },
  {
    title: "Double-Blind Review",
    content: "The review process is double-blind. Ensure your manuscript is properly anonymized.",
    icon: Eye
  },
];

const faqs = [
  { q: "Can I submit multiple papers?", a: "Yes, you can submit multiple papers. However, each paper must be registered separately if accepted." },
  { q: "What is the plagiarism threshold?", a: "We maintain a strict policy against plagiarism. Submissions with a similarity index above 15% will be rejected. All papers are checked with Turnitin." },
  { q: "Can I revise my paper after submission?", a: "No revisions are allowed before the review process is complete. If your paper is accepted with revisions, you will have time to make the necessary changes." },
  { q: "What happens if my paper is rejected?", a: "The review feedback will be provided to help you improve your work for future submissions elsewhere." },
  { q: "Is there a submission fee?", a: "No, there is no fee for submitting a paper to ICLEAS 2026." },
];

export default function CallForPapersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openPolicy, setOpenPolicy] = useState<number | null>(null);

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
              <span className="text-white font-medium">Call for Papers</span>
            </div>
            
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-500/20 backdrop-blur-sm border border-lime-400/30 mb-4">
                <Zap className="w-5 h-5 text-lime-300" />
                <span className="text-sm text-lime-200 font-bold uppercase tracking-wider">Submission Window Open</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Call for <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Papers</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto font-light leading-relaxed">
                Submit your groundbreaking research to ICLEAS 2026. We welcome papers on life sciences, environmental studies, and applied technologies
              </p>
              
              <div className="flex items-center justify-center gap-3 text-emerald-200 text-lg">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Deadline: March 31, 2026</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2">
                  Submit Your Paper Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Template
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-0">
        
        {/* Key Details Section */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                  <FileText className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-900 uppercase tracking-wider">Quick Reference</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Submission Overview
                </h2>
                <p className="text-xl text-slate-600">Important dates and requirements at a glance</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyDetails.map((item, idx) => (
                  <div key={idx} className="group bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 mb-2">{item.detail}</h3>
                        <p className="text-slate-600">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Tracks Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-6">
                  <Target className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-bold text-teal-900 uppercase tracking-wider">5 Specialized Areas</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Research Tracks
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Choose the track that best matches your research focus
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tracks.map((track, idx) => (
                  <div key={idx} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-5 rounded-3xl blur-xl transition-opacity`}></div>
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-transparent h-full">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
                        <track.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{track.title}</h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">{track.topics}</p>
                      <div className="pt-4 border-t border-slate-100">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Keywords</h4>
                        <p className="text-sm text-slate-600">{track.keywords}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Submission Steps Section */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
                  <CheckCircle className="w-5 h-5 text-slate-600" />
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Easy Process</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Submission Guidelines
                </h2>
                <p className="text-xl text-slate-600">Follow these steps to submit your research</p>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 via-teal-400 to-green-300 transform -translate-x-1/2"></div>
                
                <div className="space-y-12">
                  {submissionSteps.map((step, idx) => (
                    <div key={idx} className={`flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <div className={`inline-block bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all ${idx % 2 === 0 ? 'md:ml-auto' : ''}`}>
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                              {step.step}
                            </div>
                            <div className="flex-1 text-left">
                              <h3 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h3>
                              <p className="text-slate-600 text-sm">{step.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="hidden md:block flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 border-4 border-white shadow-lg z-10"></div>
                      
                      <div className="flex-1"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Templates & Review Process */}
        <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                      <Download className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Paper Templates & Format</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <button className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        LaTeX Template
                      </button>
                      <button className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        Word Template
                      </button>
                    </div>
                    
                    <div className="space-y-3 pt-4">
                      {[
                        "Page Limit: 8-10 pages + references",
                        "Font: Times New Roman, 12pt",
                        "Citation Style: IEEE",
                        "File Format: PDF"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-emerald-200">
                          <CheckCircle className="w-5 h-5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Review Process</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { title: "Abstract Screening", desc: "1-week editor review for scope and originality" },
                      { title: "Peer Review", desc: "2-3 week double-blind review by 2-3 experts" },
                      { title: "Decision", desc: "Accept / Major Revision / Minor Revision / Reject" },
                      { title: "Final Version", desc: "Camera-ready submission after acceptance" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">{item.title}</h4>
                          <p className="text-teal-200 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publication Info */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-3xl p-12 shadow-2xl border border-emerald-100">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 mb-8">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Publication Information</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  All accepted papers will be published in the peer-reviewed conference proceedings with a unique DOI and indexed in Google Scholar, DOAJ, and CrossRef. Authors retain full rights to their work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Policies & FAQ */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-8">Special Policies</h3>
                  <div className="space-y-4">
                    {policies.map((policy, idx) => (
                      <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setOpenPolicy(openPolicy === idx ? null : idx)}
                          className="w-full p-6 text-left hover:bg-slate-50 transition-all flex items-center justify-between gap-4"
                        >
                          <div className="flex items-center gap-4 flex-1">
                            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                              <policy.icon className="w-5 h-5 text-emerald-600" />
                            </div>
                            <span className="font-bold text-slate-900">{policy.title}</span>
                          </div>
                          <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${openPolicy === idx ? 'rotate-90' : ''}`} />
                        </button>
                        {openPolicy === idx && (
                          <div className="px-6 pb-6 pt-2">
                            <div className="h-px bg-slate-200 mb-4"></div>
                            <p className="text-slate-600 leading-relaxed">{policy.content}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-8">Submission FAQs</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full p-6 text-left hover:bg-slate-50 transition-all flex items-center justify-between gap-4"
                        >
                          <span className="font-bold text-slate-900 flex-1">{faq.q}</span>
                          <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-90' : ''}`} />
                        </button>
                        {openFaq === idx && (
                          <div className="px-6 pb-6 pt-2">
                            <div className="h-px bg-slate-200 mb-4"></div>
                            <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Contribute?
              </h2>
              <p className="text-xl text-teal-200">
                Submit your groundbreaking research and be part of ICLEAS 2026
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2">
                  Submit Your Paper
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Template
                </button>
                <button className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                  Contact for Questions
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}