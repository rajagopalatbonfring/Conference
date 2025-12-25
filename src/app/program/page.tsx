// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { ChevronRight, Calendar, List, Search, Download, Clock, User, MicVocal, GitFork } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from '@/components/ui/badge';
// import { Input } from '@/components/ui/input';

// const programData = {
//   day1: [
//     { time: '09:00 - 09:30', title: 'Opening Ceremony & Welcome Address', type: 'Ceremony', speaker: 'Dr. Maria Ivanova', track: 'General' },
//     { time: '09:30 - 10:30', title: 'Keynote: Engineering Nature: Synthetic Biology for a Cleaner Planet', type: 'Keynote', speaker: 'Dr. Evelyn Reed', track: 'General' },
//     { time: '10:30 - 11:00', title: 'Coffee Break & Networking', type: 'Break', speaker: '', track: 'General' },
//     { time: '11:00 - 12:30', title: 'Parallel Session 1A: Advances in Veterinary Medicine', type: 'Oral Session', speaker: 'Various', track: 'Animal Science & Veterinary Studies' },
//     { time: '11:00 - 12:30', title: 'Parallel Session 1B: Marine Ecosystems Under Climate Stress', type: 'Oral Session', speaker: 'Various', track: 'Aquatic Science & Fisheries' },
//     { time: '12:30 - 13:30', title: 'Lunch Break', type: 'Break', speaker: '', track: 'General' },
//     { time: '13:30 - 15:00', title: 'Poster Session 1 & Virtual Booths', type: 'Poster Session', speaker: 'Various', track: 'All Tracks' },
//   ],
//   day2: [
//     { time: '09:30 - 10:30', title: 'Keynote: The Future of Coral Reefs in a Warming World', type: 'Keynote', speaker: 'Prof. Marcus Thorne', track: 'General' },
//     { time: '10:30 - 11:00', title: 'Coffee Break & Networking', type: 'Break', speaker: '', track: 'General' },
//     { time: '11:00 - 12:30', title: 'Parallel Session 2A: AI in Life Sciences Research', type: 'Workshop', speaker: 'Various', track: 'Applied Science & Emerging Technologies' },
//     { time: '11:00 - 12:30', title: 'Parallel Session 2B: Genomics and Proteomics', type: 'Oral Session', speaker: 'Various', track: 'Biochemical & Molecular Sciences' },
//     { time: '12:30 - 13:30', title: 'Lunch Break', type: 'Break', speaker: '', track: 'General' },
//     { time: '15:00 - 15:30', title: 'Closing Ceremony & Best Paper Awards', type: 'Ceremony', speaker: 'Dr. Kenji Tanaka', track: 'General' },
//   ]
// }

// const getTrackColor = (track: string) => {
//     switch (track) {
//         case 'Animal Science & Veterinary Studies': return 'bg-blue-900/50 text-blue-300 border-blue-500/50';
//         case 'Aquatic Science & Fisheries': return 'bg-cyan-900/50 text-cyan-300 border-cyan-500/50';
//         case 'Biochemical & Molecular Sciences': return 'bg-purple-900/50 text-purple-300 border-purple-500/50';
//         case 'Applied Science & Emerging Technologies': return 'bg-orange-900/50 text-orange-300 border-orange-500/50';
//         default: return 'bg-muted text-muted-foreground';
//     }
// }

// export default function ProgramPage() {
  
//   return (
//     <div className="bg-background text-foreground">
//       {/* 1. Page Header */}
//       <section className="bg-card/30 py-12">
//         <div className="container mx-auto">
//           <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//             <Link href="/" className="hover:text-primary">Home</Link>
//             <ChevronRight size={16} />
//             <span>Program</span>
//           </div>
//           <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
//             Conference Program
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground">
//             The detailed conference program will be available closer to the conference date. Below is a tentative schedule.
//           </p>
//         </div>
//       </section>

//       <div className="container mx-auto py-16 md:py-24 space-y-20">
        
//         <section id="program-overview">
//              <h2 className="text-3xl font-bold text-primary text-center mb-12">Program Overview</h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
//                 <Card className="bg-card/50 border-border/50">
//                     <CardHeader>
//                         <MicVocal className="h-8 w-8 mx-auto text-primary"/>
//                         <CardTitle>150+</CardTitle>
//                         <p className="text-muted-foreground">Papers Accepted</p>
//                     </CardHeader>
//                 </Card>
//                  <Card className="bg-card/50 border-border/50">
//                     <CardHeader>
//                         <CardTitle>40%</CardTitle>
//                         <p className="text-muted-foreground">Acceptance Rate</p>
//                     </CardHeader>
//                 </Card>
//                  <Card className="bg-card/50 border-border/50">
//                     <CardHeader>
//                         <GitFork className="h-8 w-8 mx-auto text-primary"/>
//                         <CardTitle>20+</CardTitle>
//                         <p className="text-muted-foreground">Total Sessions</p>
//                     </CardHeader>
//                 </Card>
//                  <Card className="bg-card/50 border-border/50">
//                     <CardHeader>
//                         <Calendar className="h-8 w-8 mx-auto text-primary"/>
//                         <CardTitle>2 Days</CardTitle>
//                         <p className="text-muted-foreground">Online Conference</p>
//                     </CardHeader>
//                 </Card>
//             </div>
//         </section>

//         <section id="schedule">
//              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
//                  <h2 className="text-3xl font-bold text-primary">Interactive Schedule</h2>
//                  <div className="flex items-center gap-2">
//                     <Input placeholder="Search sessions..." className="max-w-xs"/>
//                     <Button variant="outline"><Search className="h-4 w-4 mr-2"/> Search</Button>
//                 </div>
//              </div>

//             <Tabs defaultValue="day1" className="w-full">
//                 <TabsList className="grid w-full grid-cols-2">
//                     <TabsTrigger value="day1">Day 1: June 25, 2026</TabsTrigger>
//                     <TabsTrigger value="day2">Day 2: June 26, 2026</TabsTrigger>
//                 </TabsList>
//                 <TabsContent value="day1" className="mt-8">
//                     <div className="space-y-6">
//                         {programData.day1.map(session => (
//                             <Card key={session.title} className="w-full bg-card/50 border-border/50">
//                                 <CardContent className="p-4 flex flex-col md:flex-row gap-4 items-start">
//                                     <div className="font-semibold text-primary w-full md:w-32"><Clock className="inline h-4 w-4 mr-1"/>{session.time}</div>
//                                     <div className="flex-grow">
//                                         <h3 className="font-bold text-lg">{session.title}</h3>
//                                         {session.speaker && <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1"><User className="h-4 w-4"/>{session.speaker}</p>}
//                                     </div>
//                                     <div className="w-full md:w-auto mt-2 md:mt-0 flex gap-2 flex-wrap">
//                                         <Badge variant={session.type === 'Keynote' ? 'default' : 'secondary'}>{session.type}</Badge>
//                                         <Badge className={`border-1 ${getTrackColor(session.track)}`}>{session.track}</Badge>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </div>
//                 </TabsContent>
//                 <TabsContent value="day2" className="mt-8">
//                      <div className="space-y-6">
//                         {programData.day2.map(session => (
//                             <Card key={session.title} className="w-full bg-card/50 border-border/50">
//                                 <CardContent className="p-4 flex flex-col md:flex-row gap-4 items-start">
//                                     <div className="font-semibold text-primary w-full md:w-32"><Clock className="inline h-4 w-4 mr-1"/>{session.time}</div>
//                                     <div className="flex-grow">
//                                         <h3 className="font-bold text-lg">{session.title}</h3>
//                                         {session.speaker && <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1"><User className="h-4 w-4"/>{session.speaker}</p>}
//                                     </div>
//                                     <div className="w-full md:w-auto mt-2 md:mt-0 flex gap-2 flex-wrap">
//                                         <Badge variant={session.type === 'Keynote' ? 'default' : 'secondary'}>{session.type}</Badge>
//                                         <Badge className={`border-1 ${getTrackColor(session.track)}`}>{session.track}</Badge>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </div>
//                 </TabsContent>
//             </Tabs>
//         </section>

//         <section id="downloads" className="text-center">
//             <h2 className="text-3xl font-bold text-primary mb-8">Downloads</h2>
//             <div className="flex justify-center gap-4 flex-wrap">
//                 <Button variant="outline"><Download className="h-4 w-4 mr-2"/> Add to Google Calendar</Button>
//                 <Button variant="outline"><Download className="h-4 w-4 mr-2"/> Download Full Program (.ics)</Button>
//                 <Button variant="outline"><Download className="h-4 w-4 mr-2"/> Download Program PDF</Button>
//             </div>
//         </section>

//       </div>
//     </div>
//   );
// }










"use client";

import React, { useState } from 'react';
import { 
  Calendar, Clock, User, MicVocal, GitFork, 
  Download, Search, ChevronRight, Filter,
  Coffee, Award, Users, Presentation,
  Zap, Star, Globe, CheckCircle2
} from 'lucide-react';

// Define types for better type safety
interface Session {
  time: string;
  title: string;
  type: string;
  speaker: string;
  track: string;
}

interface ProgramData {
  day1: Session[];
  day2: Session[];
}

const programData: ProgramData = {
  day1: [
    { time: '09:00 - 09:30', title: 'Opening Ceremony & Welcome Address', type: 'Ceremony', speaker: 'Dr. Maria Ivanova', track: 'General' },
    { time: '09:30 - 10:30', title: 'Keynote: Engineering Nature: Synthetic Biology for a Cleaner Planet', type: 'Keynote', speaker: 'Dr. Evelyn Reed', track: 'General' },
    { time: '10:30 - 11:00', title: 'Coffee Break & Networking', type: 'Break', speaker: '', track: 'General' },
    { time: '11:00 - 12:30', title: 'Parallel Session 1A: Advances in Veterinary Medicine', type: 'Oral Session', speaker: 'Various', track: 'Animal Science & Veterinary Studies' },
    { time: '11:00 - 12:30', title: 'Parallel Session 1B: Marine Ecosystems Under Climate Stress', type: 'Oral Session', speaker: 'Various', track: 'Aquatic Science & Fisheries' },
    { time: '12:30 - 13:30', title: 'Lunch Break', type: 'Break', speaker: '', track: 'General' },
    { time: '13:30 - 15:00', title: 'Poster Session 1 & Virtual Booths', type: 'Poster Session', speaker: 'Various', track: 'All Tracks' },
  ],
  day2: [
    { time: '09:30 - 10:30', title: 'Keynote: The Future of Coral Reefs in a Warming World', type: 'Keynote', speaker: 'Prof. Marcus Thorne', track: 'General' },
    { time: '10:30 - 11:00', title: 'Coffee Break & Networking', type: 'Break', speaker: '', track: 'General' },
    { time: '11:00 - 12:30', title: 'Parallel Session 2A: AI in Life Sciences Research', type: 'Workshop', speaker: 'Various', track: 'Applied Science & Emerging Technologies' },
    { time: '11:00 - 12:30', title: 'Parallel Session 2B: Genomics and Proteomics', type: 'Oral Session', speaker: 'Various', track: 'Biochemical & Molecular Sciences' },
    { time: '12:30 - 13:30', title: 'Lunch Break', type: 'Break', speaker: '', track: 'General' },
    { time: '15:00 - 15:30', title: 'Closing Ceremony & Best Paper Awards', type: 'Ceremony', speaker: 'Dr. Kenji Tanaka', track: 'General' },
  ]
};

// Explicitly type the parameter to fix "implicit any" error
const getTrackColor = (track: string): string => {
  switch (track) {
    case 'Animal Science & Veterinary Studies':
      return 'from-blue-500 to-cyan-500';
    case 'Aquatic Science & Fisheries':
      return 'from-cyan-500 to-teal-500';
    case 'Biochemical & Molecular Sciences':
      return 'from-purple-500 to-pink-500';
    case 'Applied Science & Emerging Technologies':
      return 'from-orange-500 to-amber-500';
    default:
      return 'from-emerald-500 to-teal-500';
  }
};

// Explicitly type the return value (Lucide icon component)
const getTypeIcon = (type: string): React.ComponentType<{ className?: string }> => {
  switch (type) {
    case 'Keynote':
      return Star;
    case 'Ceremony':
      return Award;
    case 'Break':
      return Coffee;
    case 'Poster Session':
      return Presentation;
    case 'Workshop':
      return Users;
    default:
      return MicVocal;
  }
};

export default function ProgramPage() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Type currentDayData based on activeDay
  const currentDayData: Session[] = programData[activeDay];

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
            <span className="hover:text-white cursor-pointer transition-colors">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Program</span>
          </div>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">June 25-26, 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Conference Program
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
              Explore our comprehensive two-day schedule featuring keynote speeches, research presentations, and networking opportunities across multiple scientific tracks.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-emerald-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <MicVocal className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">150+</div>
                <div className="text-sm text-slate-600">Papers Accepted</div>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <GitFork className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">20+</div>
                <div className="text-sm text-slate-600">Total Sessions</div>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">40%</div>
                <div className="text-sm text-slate-600">Acceptance Rate</div>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-500 to-green-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">Online</div>
                <div className="text-sm text-slate-600">Conference Format</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header with Search */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-px bg-slate-300"></div>
              <Calendar className="w-6 h-6 text-emerald-600" />
              <div className="w-12 h-px bg-slate-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Interactive Schedule
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Search and filter sessions by track, type, or speaker
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search sessions, speakers, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl text-lg focus:border-emerald-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Day Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveDay('day1')}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
                activeDay === 'day1'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm opacity-80">Day 1</div>
                  <div>June 25, 2026</div>
                </div>
              </div>
            </button>
            
            <button
              onClick={() => setActiveDay('day2')}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
                activeDay === 'day2'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm opacity-80">Day 2</div>
                  <div>June 26, 2026</div>
                </div>
              </div>
            </button>
          </div>

          {/* Schedule Items */}
          <div className="space-y-6">
            {currentDayData.map((session, idx) => {
              const TypeIcon = getTypeIcon(session.type);
              const isBreak = session.type === 'Break';
              
              return (
                <div
                  key={idx}
                  className={`group relative ${
                    isBreak 
                      ? 'bg-slate-50 border-2 border-dashed border-slate-200' 
                      : 'bg-white border-2 border-slate-200 hover:border-emerald-300 hover:shadow-xl'
                  } rounded-2xl p-6 md:p-8 transition-all`}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Time Badge */}
                    <div className="flex-shrink-0">
                      <div className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl ${
                        isBreak ? 'bg-slate-200' : 'bg-gradient-to-br from-emerald-500 to-teal-500'
                      } shadow-md`}>
                        <Clock className={`w-5 h-5 ${isBreak ? 'text-slate-600' : 'text-white'}`} />
                        <span className={`font-bold ${isBreak ? 'text-slate-700' : 'text-white'}`}>
                          {session.time}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        {!isBreak && (
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${getTrackColor(session.track)} flex items-center justify-center shadow-lg`}>
                            <TypeIcon className="w-6 h-6 text-white" />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                            isBreak ? 'text-slate-600' : 'text-slate-900'
                          }`}>
                            {session.title}
                          </h3>
                          {session.speaker && (
                            <div className="flex items-center gap-2 text-slate-600">
                              <User className="w-4 h-4" />
                              <span className="font-medium">{session.speaker}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Tags */}
                      {!isBreak && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${
                            session.type === 'Keynote' 
                              ? 'from-amber-500 to-orange-500 text-white' 
                              : 'from-slate-100 to-slate-200 text-slate-700'
                          }`}>
                            {session.type}
                          </span>
                          {session.track !== 'General' && (
                            <span className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${getTrackColor(session.track)} text-white`}>
                              {session.track}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md">
              <Download className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-900">Download Resources</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Take the Program With You
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              Download the full conference program and add sessions to your calendar
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:shadow-xl transition-all border-2 border-slate-200 inline-flex items-center gap-3">
                <Download className="w-5 h-5" />
                Program PDF
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all inline-flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                Add to Calendar (.ics)
              </button>
              <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:shadow-xl transition-all border-2 border-slate-200 inline-flex items-center gap-3">
                <Globe className="w-5 h-5" />
                Google Calendar
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
              Don't Miss These Sessions
            </h2>
            <p className="text-xl text-teal-200">
              Register now to secure your spot at ICLEAS 2026 and join leading researchers in shaping the future of science
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl">
                Register Now
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                View All Speakers
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}