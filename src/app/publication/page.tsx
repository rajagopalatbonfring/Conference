import Link from 'next/link';
import { ChevronRight, BookOpen, FileCheck, ShieldCheck, Sigma } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { publicationData } from '@/lib/data';

export default function PublicationPage() {
  const icons = [BookOpen, FileCheck, ShieldCheck, Sigma];

  return (
    <div className="bg-background text-foreground">
      {/* 1. Page Header */}
      <section className="bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} />
            <span>Publication</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Publication Information
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Details on conference proceedings and journal collaborations for ICLEAS 2026.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24 space-y-16">
        
        {/* 2. Publication Details */}
        <section id="publication-details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {publicationData.map((item, index) => {
                    const Icon = icons[index % icons.length];
                    return (
                        <Card key={item.title} className="bg-card/50 border-border/50">
                            <CardHeader className="flex-row items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.content}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>
      </div>
    </div>
  );
}
