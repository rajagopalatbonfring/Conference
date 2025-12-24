import Link from 'next/link';
import { ChevronRight, Target } from 'lucide-react';
import Image from 'next/image';

export default function AboutScientiaForumPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} />
            <span>About ScientiaForum</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            About ScientiaForum
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Connecting Minds, Advancing Science.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24 space-y-20">
        <section id="mission">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-80 rounded-md overflow-hidden">
                    <Image src="https://picsum.photos/seed/scientia-mission/800/600" alt="Team brainstorming" layout="fill" objectFit="cover" data-ai-hint="team brainstorming" className="brightness-75" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        ScientiaForum is dedicated to the advancement of scientific knowledge by providing premier platforms for researchers, academics, and industry professionals to connect, collaborate, and share their work. We believe in the power of interdisciplinary dialogue to solve the world's most pressing challenges.
                    </p>
                </div>
            </div>
        </section>

        <section id="what-we-do" className="text-center bg-card/50 py-16 rounded-md">
             <h2 className="text-3xl font-bold text-primary">What We Do</h2>
             <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">We specialize in organizing high-quality international conferences, workshops, and symposiums across various scientific disciplines.</p>
        </section>
      </div>
    </div>
  );
}
