import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { conferenceTracks } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default function ConferenceTracksPage() {
  return (
    <div className="bg-background text-foreground">
      {/* 1. Page Header */}
      <section className="bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} />
            <span>Conference Tracks</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Conference Tracks
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the diverse range of topics at ICLEAS 2026.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conferenceTracks.map((track) => (
            <Card key={track.title} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>{track.title}</CardTitle>
                <CardDescription>{track.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Keywords:</h4>
                <div className="flex flex-wrap gap-2">
                  {track.keywords.map(keyword => (
                    <Badge key={keyword} variant="secondary">{keyword}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
