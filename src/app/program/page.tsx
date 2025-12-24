'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Calendar, List, Search, Download, Clock, User, MicVocal, GitFork } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const programData = {
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
}

const getTrackColor = (track: string) => {
    switch (track) {
        case 'Animal Science & Veterinary Studies': return 'bg-blue-900/50 text-blue-300 border-blue-500/50';
        case 'Aquatic Science & Fisheries': return 'bg-cyan-900/50 text-cyan-300 border-cyan-500/50';
        case 'Biochemical & Molecular Sciences': return 'bg-purple-900/50 text-purple-300 border-purple-500/50';
        case 'Applied Science & Emerging Technologies': return 'bg-orange-900/50 text-orange-300 border-orange-500/50';
        default: return 'bg-muted text-muted-foreground';
    }
}

export default function ProgramPage() {
  
  return (
    <div className="bg-background text-foreground">
      {/* 1. Page Header */}
      <section className="bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} />
            <span>Program</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Conference Program
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The detailed conference program will be available closer to the conference date. Below is a tentative schedule.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24 space-y-20">
        
        <section id="program-overview">
             <h2 className="text-3xl font-bold text-primary text-center mb-12">Program Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
                <Card className="bg-card/50 border-border/50">
                    <CardHeader>
                        <MicVocal className="h-8 w-8 mx-auto text-primary"/>
                        <CardTitle>150+</CardTitle>
                        <p className="text-muted-foreground">Papers Accepted</p>
                    </CardHeader>
                </Card>
                 <Card className="bg-card/50 border-border/50">
                    <CardHeader>
                        <CardTitle>40%</CardTitle>
                        <p className="text-muted-foreground">Acceptance Rate</p>
                    </CardHeader>
                </Card>
                 <Card className="bg-card/50 border-border/50">
                    <CardHeader>
                        <GitFork className="h-8 w-8 mx-auto text-primary"/>
                        <CardTitle>20+</CardTitle>
                        <p className="text-muted-foreground">Total Sessions</p>
                    </CardHeader>
                </Card>
                 <Card className="bg-card/50 border-border/50">
                    <CardHeader>
                        <Calendar className="h-8 w-8 mx-auto text-primary"/>
                        <CardTitle>2 Days</CardTitle>
                        <p className="text-muted-foreground">Online Conference</p>
                    </CardHeader>
                </Card>
            </div>
        </section>

        <section id="schedule">
             <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                 <h2 className="text-3xl font-bold text-primary">Interactive Schedule</h2>
                 <div className="flex items-center gap-2">
                    <Input placeholder="Search sessions..." className="max-w-xs"/>
                    <Button variant="outline"><Search className="h-4 w-4 mr-2"/> Search</Button>
                </div>
             </div>

            <Tabs defaultValue="day1" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="day1">Day 1: June 25, 2026</TabsTrigger>
                    <TabsTrigger value="day2">Day 2: June 26, 2026</TabsTrigger>
                </TabsList>
                <TabsContent value="day1" className="mt-8">
                    <div className="space-y-6">
                        {programData.day1.map(session => (
                            <Card key={session.title} className="w-full bg-card/50 border-border/50">
                                <CardContent className="p-4 flex flex-col md:flex-row gap-4 items-start">
                                    <div className="font-semibold text-primary w-full md:w-32"><Clock className="inline h-4 w-4 mr-1"/>{session.time}</div>
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-lg">{session.title}</h3>
                                        {session.speaker && <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1"><User className="h-4 w-4"/>{session.speaker}</p>}
                                    </div>
                                    <div className="w-full md:w-auto mt-2 md:mt-0 flex gap-2 flex-wrap">
                                        <Badge variant={session.type === 'Keynote' ? 'default' : 'secondary'}>{session.type}</Badge>
                                        <Badge className={`border-1 ${getTrackColor(session.track)}`}>{session.track}</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="day2" className="mt-8">
                     <div className="space-y-6">
                        {programData.day2.map(session => (
                            <Card key={session.title} className="w-full bg-card/50 border-border/50">
                                <CardContent className="p-4 flex flex-col md:flex-row gap-4 items-start">
                                    <div className="font-semibold text-primary w-full md:w-32"><Clock className="inline h-4 w-4 mr-1"/>{session.time}</div>
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-lg">{session.title}</h3>
                                        {session.speaker && <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1"><User className="h-4 w-4"/>{session.speaker}</p>}
                                    </div>
                                    <div className="w-full md:w-auto mt-2 md:mt-0 flex gap-2 flex-wrap">
                                        <Badge variant={session.type === 'Keynote' ? 'default' : 'secondary'}>{session.type}</Badge>
                                        <Badge className={`border-1 ${getTrackColor(session.track)}`}>{session.track}</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </section>

        <section id="downloads" className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Downloads</h2>
            <div className="flex justify-center gap-4 flex-wrap">
                <Button variant="outline"><Download className="h-4 w-4 mr-2"/> Add to Google Calendar</Button>
                <Button variant="outline"><Download className="h-4 w-4 mr-2"/> Download Full Program (.ics)</Button>
                <Button variant="outline"><Download className="h-4 w-4 mr-2"/> Download Program PDF</Button>
            </div>
        </section>

      </div>
    </div>
  );
}
