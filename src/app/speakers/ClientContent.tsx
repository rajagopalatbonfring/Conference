"use client";

import React, { useState } from 'react';
import { 
  ChevronRight, Linkedin, Twitter, Globe, BookUser, 
  BrainCircuit, Star, Award, FileText, X, Sparkles,
  ArrowRight, MicVocal, Users
} from 'lucide-react';

// Define the Speaker interface
interface Speaker {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  bio: string;
  imgSrc: string;
  imgHint: string;
  researchInterests: string[];
  talkTitle: string;
  talkAbstract: string;
  publications: string[];
}





// Speakers data - SEO optimized with richer bios, keywords & talk details
const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Reed',
    title: 'Chief Scientist, Environmental Genomics',
    affiliation: 'BioSynthetics Inc.',
    bio: 'Dr. Evelyn Reed is a globally recognized leader in synthetic biology and environmental biotechnology. With over 18 years of experience, she pioneers microbial engineering solutions for pollution remediation, carbon sequestration, and sustainable bioremediation. Her interdisciplinary work bridges molecular biology, environmental science, and green technology.',
    imgSrc: 'https://picsum.photos/seed/speaker1/400/400',
    imgHint: 'female environmental scientist portrait – synthetic biology expert',
    researchInterests: ['Synthetic Biology', 'Bioremediation', 'Environmental Genomics', 'Microbial Engineering', 'Sustainable Biotechnology'],
    talkTitle: 'Engineering Microbes for a Sustainable Planet: Synthetic Biology in Environmental Cleanup',
    talkAbstract: 'This keynote explores revolutionary applications of synthetic biology in addressing global environmental challenges. We will examine genetically engineered microorganisms designed to degrade persistent pollutants, capture heavy metals, remediate oil spills, and convert waste into biofuels. The talk covers recent breakthroughs in CRISPR-based editing, ethical frameworks, regulatory considerations, and scalable real-world deployments that could transform environmental restoration and support net-zero sustainability goals.',
    publications: [
      'Reed, E., et al. (2024). "Synthetic microbial consortia for complete plastic mineralization." Nature Biotechnology, 42(3), 289–301.',
      'Reed, E. & Patel, S. (2022). "Genomic design principles for enhanced bioremediation." Science Advances, 8(15).',
      'Reed, E. (2020). "CRISPR-enabled microbial solutions for heavy metal sequestration." Environmental Science & Technology.'
    ]
  },
  {
    id: '2',
    name: 'Prof. Marcus Thorne',
    title: 'Professor of Marine Ecology & Conservation Biology',
    affiliation: 'Oceanic Institute of Technology',
    bio: 'Prof. Marcus Thorne is an internationally acclaimed marine ecologist specializing in coral reef resilience, ocean acidification, and climate change impacts on marine biodiversity. His research informs global conservation policy and large-scale restoration initiatives.',
    imgSrc: 'https://picsum.photos/seed/speaker2/400/400',
    imgHint: 'male marine biologist portrait – coral reef expert',
    researchInterests: ['Marine Ecology', 'Coral Reef Resilience', 'Climate Change Impacts', 'Ocean Acidification', 'Marine Conservation', 'Biodiversity'],
    talkTitle: 'Safeguarding Coral Reefs in the Era of Climate Crisis: Science, Strategies & Hope',
    talkAbstract: 'Coral reefs, often called the rainforests of the sea, face existential threats from warming oceans, acidification, and pollution. This keynote presents the latest data on global bleaching events, resilience mechanisms, and innovative interventions including assisted evolution, coral gardening, cryopreservation, and reef connectivity enhancement. We will discuss scalable restoration successes, policy implications, and a science-based roadmap for preserving these critical ecosystems that support 25% of marine life and coastal communities worldwide.',
    publications: [
      'Thorne, M., et al. (2025). "Global coral bleaching patterns and resilience thresholds." Nature Climate Change, 15(2), 112–125.',
      'Thorne, M. & Garcia, L. (2023). "Assisted evolution as a tool for coral reef conservation." Proceedings of the National Academy of Sciences.',
      'Thorne, M. (2021). "Ocean acidification effects on reef ecosystem services." Annual Review of Marine Science, 13, 401–428.'
    ]
  },
];

export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section – SEO optimized */}
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
              <span className="text-white font-medium">Keynote Speakers ICLEAS 2026</span>
            </div>
            
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 mb-4">
                <Star className="w-5 h-5 text-amber-300" />
                <span className="text-sm text-amber-200 font-bold uppercase tracking-wider">Renowned Experts – ICLEAS 2026</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Distinguished Keynote <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Speakers</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto font-light leading-relaxed">
                World-leading scientists and innovators in life sciences, environmental sustainability, biotechnology, marine ecology, synthetic biology, and emerging green technologies share groundbreaking insights at ICLEAS 2026 – online international conference July 23–24, 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-0">
        
        {/* Keynote Speakers Section */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                  <MicVocal className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-900 uppercase tracking-wider">Keynote Speakers ICLEAS 2026</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Featured Keynote Speakers
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Hear from global leaders driving advancements in life sciences, environmental protection, biotechnology, and sustainable innovation
                </p>
              </div>
              
              {/* Speaker Cards */}
              <div className="space-y-16">
                {speakers.map((speaker, idx) => (
                  <div key={speaker.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>
                    {/* Image Side */}
                    <div className="lg:w-5/12">
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                          <img
                            src={speaker.imgSrc}
                            alt={`${speaker.name} – ${speaker.title} at ICLEAS 2026 keynote speaker`}
                            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="flex items-center gap-3 text-white/90">
                              <div className="w-12 h-px bg-white/50"></div>
                              <span className="text-sm uppercase tracking-wider">Keynote Speaker – ICLEAS 2026</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Side */}
                    <div className="lg:w-7/12 space-y-6">
                      <div>
                        <div className="inline-block mb-4">
                          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                            <Award className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-semibold text-emerald-900">Keynote Speaker</span>
                          </div>
                        </div>
                        <h3 className="text-4xl font-bold text-slate-900 mb-3">
                          {speaker.name}
                        </h3>
                        <div className="space-y-1 mb-4">
                          <p className="text-xl font-semibold text-emerald-600">
                            {speaker.title}
                          </p>
                          <p className="text-lg text-slate-600">
                            {speaker.affiliation}
                          </p>
                        </div>
                        
                        {/* Social Links – placeholder */}
                        <div className="flex gap-2">
                          <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors">
                            <Linkedin className="w-5 h-5 text-slate-600" />
                          </button>
                          <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors">
                            <Twitter className="w-5 h-5 text-slate-600" />
                          </button>
                          <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors">
                            <Globe className="w-5 h-5 text-slate-600" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="h-px bg-gradient-to-r from-slate-300 via-slate-200 to-transparent"></div>
                      
                      <p className="text-lg text-slate-700 leading-relaxed">
                        {speaker.bio}
                      </p>
                      
                      {/* Research Interests */}
                      <div>
                        <h4 className="font-bold text-slate-900 mb-3">Key Research Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {speaker.researchInterests.map((interest, i) => (
                            <span 
                              key={i} 
                              className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Keynote Talk */}
                      <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100">
                        <div className="flex items-center gap-2 mb-3">
                          <BrainCircuit className="w-5 h-5 text-teal-600" />
                          <h4 className="font-bold text-slate-900">Keynote Presentation:</h4>
                        </div>
                        <h5 className="font-bold text-lg text-slate-900 mb-3">{speaker.talkTitle}</h5>
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                          {speaker.talkAbstract}
                        </p>
                      </div>
                      
                      <button 
                        onClick={() => setSelectedSpeaker(speaker)}
                        className="group inline-flex items-center gap-2 text-emerald-600 font-bold text-lg hover:gap-3 transition-all"
                      >
                        View Full Profile & Abstract
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Invited Speakers Announcement */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 mb-8">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Invited Speakers & Panel Discussions – ICLEAS 2026
              </h2>
              
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                Additional invited speakers, panelists, and session chairs from academia, industry, and international organizations will be announced shortly. These experts will join our keynote lineup to deliver cutting-edge insights across life sciences, environmental sustainability, biotechnology, and applied technologies.
              </p>
              
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span className="text-slate-700 font-medium">Stay updated – full speaker list coming soon</span>
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
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Hear from Global Experts at ICLEAS 2026
              </h2>
              <p className="text-xl text-teal-200">
                Register today to attend keynote sessions on life sciences, environmental sustainability, biotechnology, marine ecology, synthetic biology, and green innovation – online international conference July 23–24, 2026
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2">
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                  View Call for Papers
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Modal – Full Speaker Profile */}
      {selectedSpeaker && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 relative">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-emerald-700 to-teal-700 p-8 md:p-10 text-white">
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all text-white hover:scale-110"
              >
                <X className="w-7 h-7" />
              </button>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{selectedSpeaker.name}</h2>
              <p className="text-xl text-emerald-100">
                {selectedSpeaker.title}
                <span className="font-semibold block mt-1">{selectedSpeaker.affiliation}</span>
              </p>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 md:p-10 overflow-y-auto max-h-[calc(92vh-220px)]">
              <div className="space-y-10">
                {/* Biography */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <BookUser className="w-7 h-7 text-emerald-600" />
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Professional Biography</h3>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed">{selectedSpeaker.bio}</p>
                </div>

                {/* Research Interests */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                    <BrainCircuit className="w-7 h-7 text-teal-600" />
                    Research Interests & Expertise
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedSpeaker.researchInterests.map((interest, i) => (
                      <span 
                        key={i} 
                        className="px-5 py-2.5 bg-emerald-50 text-emerald-800 rounded-full text-base font-medium border border-emerald-100 shadow-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Keynote Talk */}
                <div className="bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-50 rounded-2xl p-7 md:p-9 border border-teal-100 shadow-inner">
                  <div className="flex items-center gap-3 mb-5">
                    <MicVocal className="w-7 h-7 text-teal-600" />
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Keynote Talk</h3>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">{selectedSpeaker.talkTitle}</h4>
                  <p className="text-lg text-slate-700 leading-relaxed">{selectedSpeaker.talkAbstract}</p>
                </div>

                {/* Selected Publications */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <FileText className="w-7 h-7 text-emerald-600" />
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Selected Publications</h3>
                  </div>
                  <ul className="space-y-4">
                    {selectedSpeaker.publications.map((pub, i) => (
                      <li key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="w-3 h-3 rounded-full bg-emerald-600 mt-2.5 flex-shrink-0"></div>
                        <span className="text-slate-700 text-base leading-relaxed">{pub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}