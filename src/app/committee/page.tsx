import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { committees } from '@/lib/data';

export default function CommitteePage() {
  return (
    <div className="bg-background text-foreground">
      {/* 1. Page Header */}
      <section className="bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} />
            <span>Committees</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Conference Committee Members
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Meet the organizing committee, program chairs, and review board members of ICLEAS 2026.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24 space-y-20">
        
        {committees.map((committee) => (
             <section key={committee.title} id={committee.title.toLowerCase().replace(/ /g, '-')}>
                <h2 className="text-3xl font-bold text-primary text-center mb-12">{committee.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                    {committee.members.map((member) => (
                        <Card key={member.name} className="text-center bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                            <CardHeader className="items-center">
                                {member.imgSrc && (
                                     <div className="relative h-24 w-24 rounded-full overflow-hidden">
                                        <Image src={member.imgSrc} alt={`Photo of ${member.name}`} fill style={{objectFit: 'cover'}} data-ai-hint={member.imgHint || 'person portrait'} className="brightness-75" />
                                    </div>
                                )}
                                <CardTitle className="text-xl">{member.name}</CardTitle>
                                {member.title && <CardDescription>{member.title}</CardDescription>}
                            </CardHeader>
                            {member.affiliation && (
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                                </CardContent>
                            )}
                        </Card>
                    ))}
                </div>
            </section>
        ))}
      </div>
    </div>
  );
}
