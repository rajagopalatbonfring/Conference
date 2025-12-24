import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { newsArticles } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = newsArticles.find(a => a.slug === params.slug);

  if (!article) {
    notFound();
  }
  
  const relatedArticles = newsArticles.filter(a => a.slug !== article.slug && a.category === article.category).slice(0, 3);

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
            <Link href="/news" className="inline-flex items-center text-sm text-primary hover:underline mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
            </Link>

            <article>
                <header>
                    <div className="relative h-96 w-full rounded-md overflow-hidden mb-8">
                        <Image src={article.imageSrc} alt={article.title} fill style={{objectFit: 'cover'}} data-ai-hint={article.imageHint} priority className="brightness-75"/>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-2"><Tag className="h-4 w-4" /><Badge variant="default">{article.category}</Badge></div>
                        <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span></div>
                        <div className="flex items-center gap-2"><User className="h-4 w-4" /> <span>{article.author}</span></div>
                    </div>
                    <h1 className="text-4xl font-bold text-primary mt-2">{article.title}</h1>
                </header>

                <div 
                  className="prose max-w-none mt-8"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </article>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                 <aside className="mt-24">
                    <h2 className="text-3xl font-bold text-primary mb-8">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedArticles.map(related => (
                            <Link key={related.slug} href={`/news/${related.slug}`} className="group block">
                                <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                                    <CardContent className="p-4">
                                        <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                                            <Image src={related.imageSrc} alt={related.title} fill style={{objectFit: 'cover'}} data-ai-hint={related.imageHint} className="brightness-75"/>
                                        </div>
                                        <Badge variant="secondary">{related.category}</Badge>
                                        <h3 className="mt-2 font-semibold text-lg group-hover:text-primary transition-colors">{related.title}</h3>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </aside>
            )}
        </div>
      </div>
    </div>
  );
}
