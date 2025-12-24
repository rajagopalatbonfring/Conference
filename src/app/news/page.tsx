'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Search, Mail, Send } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { newsArticles } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const featuredArticle = newsArticles[0];
  
  const filteredArticles = newsArticles.slice(1).filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(newsArticles.map(a => a.category))];

  return (
    <div className="bg-background text-foreground">
      {/* Page Header */}
      <section className="bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} />
            <span>News</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            News & Updates
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay up-to-date with the latest announcements from ICLEAS 2026.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24 space-y-20">
        
        {/* Featured Article */}
        <section id="featured-article">
            <h2 className="text-3xl font-bold text-primary mb-8">Featured News</h2>
            <Link href={`/news/${featuredArticle.slug}`} className="group block">
              <Card className="overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-80">
                      <Image src={featuredArticle.imageSrc} alt={featuredArticle.title} fill style={{objectFit: 'cover'}} data-ai-hint={featuredArticle.imageHint} className="brightness-75"/>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                      <Badge variant="default" className="w-fit mb-2">{featuredArticle.category}</Badge>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">{featuredArticle.title}</CardTitle>
                      <CardDescription className="mt-2 text-sm">{new Date(featuredArticle.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                      <p className="mt-4 text-muted-foreground">{featuredArticle.excerpt}</p>
                      <p className="mt-4 font-semibold text-primary">Read More →</p>
                  </div>
                </div>
              </Card>
            </Link>
        </section>

        <div className="grid lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Search Articles</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-primary/20">{category}</Badge>
                ))}
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3">
             <h2 className="text-3xl font-bold text-primary mb-8">Recent News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.length > 0 ? (
                filteredArticles.map(article => (
                  <Link key={article.slug} href={`/news/${article.slug}`} className="group block">
                    <Card className="h-full bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                                <Image src={article.imageSrc} alt={article.title} fill style={{objectFit: 'cover'}} data-ai-hint={article.imageHint} className="brightness-75"/>
                            </div>
                            <Badge variant="outline" className="w-fit">{article.category}</Badge>
                            <CardTitle className="mt-2 group-hover:text-primary transition-colors">{article.title}</CardTitle>
                             <CardDescription>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{article.excerpt}</p>
                        </CardContent>
                    </Card>
                  </Link>
                ))
              ) : (
                <p>No articles found.</p>
              )}
            </div>
             {/* Pagination can be added here */}
          </main>
        </div>

        {/* Newsletter Subscription */}
        <section id="newsletter" className="bg-card/50 p-8 rounded-md text-center">
          <h2 className="text-2xl font-bold text-primary">Subscribe to Updates</h2>
          <p className="mt-2 text-muted-foreground max-w-lg mx-auto">Get the latest news and announcements from ICLEAS 2026 delivered straight to your inbox.</p>
          <form className="mt-6 flex max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
            <Button type="submit" className="rounded-l-none">Subscribe</Button>
          </form>
        </section>
      </div>
    </div>
  );
}
