// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { ChevronRight, Search } from 'lucide-react';
// import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { blogArticles } from '@/lib/data';
// import { Badge } from '@/components/ui/badge';
// import { Input } from '@/components/ui/input';

// export default function BlogPage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const featuredArticle = blogArticles[0];
  
//   const filteredArticles = blogArticles.slice(1).filter(article =>
//     article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const categories = [...new Set(blogArticles.map(a => a.category))];

//   return (
//     <div className="bg-background text-foreground">
//       {/* Page Header */}
//       <section className="bg-card/30 py-12">
//         <div className="container mx-auto">
//           <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//             <Link href="/" className="hover:text-primary">Home</Link>
//             <ChevronRight size={16} />
//             <span>Blog</span>
//           </div>
//           <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
//             Our Blog
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Insights, articles, and updates from the world of science.
//           </p>
//         </div>
//       </section>

//       <div className="container mx-auto py-16 md:py-24 space-y-20">
        
//         {/* Featured Article */}
//         <section id="featured-article">
//             <h2 className="text-3xl font-bold text-primary mb-8">Featured Post</h2>
//             <Link href={`/blog/${featuredArticle.slug}`} className="group block">
//               <Card className="overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
//                 <div className="grid md:grid-cols-2">
//                   <div className="relative h-80">
//                       <Image src={featuredArticle.imageSrc} alt={featuredArticle.title} fill style={{objectFit: 'cover'}} data-ai-hint={featuredArticle.imageHint} className="brightness-75"/>
//                   </div>
//                   <div className="p-8 flex flex-col justify-center">
//                       <Badge variant="default" className="w-fit mb-2">{featuredArticle.category}</Badge>
//                       <CardTitle className="text-2xl group-hover:text-primary transition-colors">{featuredArticle.title}</CardTitle>
//                       <CardDescription className="mt-2 text-sm">{new Date(featuredArticle.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
//                       <p className="mt-4 text-muted-foreground">{featuredArticle.excerpt}</p>
//                       <p className="mt-4 font-semibold text-primary">Read More →</p>
//                   </div>
//                 </div>
//               </Card>
//             </Link>
//         </section>

//         <div className="grid lg:grid-cols-4 gap-12">
//           <aside className="lg:col-span-1 space-y-8">
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Search Articles</h3>
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//                 <Input
//                   type="search"
//                   placeholder="Search..."
//                   className="pl-10"
//                   value={searchTerm}
//                   onChange={e => setSearchTerm(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Categories</h3>
//               <div className="flex flex-wrap gap-2">
//                 {categories.map(category => (
//                   <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-primary/20">{category}</Badge>
//                 ))}
//               </div>
//             </div>
//           </aside>

//           <main className="lg:col-span-3">
//              <h2 className="text-3xl font-bold text-primary mb-8">All Posts</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {filteredArticles.length > 0 ? (
//                 filteredArticles.map(article => (
//                   <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
//                     <Card className="h-full bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
//                         <CardHeader>
//                             <div className="relative h-48 mb-4 rounded-md overflow-hidden">
//                                 <Image src={article.imageSrc} alt={article.title} fill style={{objectFit: 'cover'}} data-ai-hint={article.imageHint} className="brightness-75"/>
//                             </div>
//                             <Badge variant="outline" className="w-fit">{article.category}</Badge>
//                             <CardTitle className="mt-2 group-hover:text-primary transition-colors">{article.title}</CardTitle>
//                              <CardDescription>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <p className="text-muted-foreground">{article.excerpt}</p>
//                         </CardContent>
//                     </Card>
//                   </Link>
//                 ))
//               ) : (
//                 <p>No articles found.</p>
//               )}
//             </div>
//              {/* Pagination can be added here */}
//           </main>
//         </div>

//         {/* Newsletter Subscription */}
//         <section id="newsletter" className="bg-card/50 p-8 rounded-md text-center">
//           <h2 className="text-2xl font-bold text-primary">Subscribe to Our Blog</h2>
//           <p className="mt-2 text-muted-foreground max-w-lg mx-auto">Get the latest articles and insights delivered straight to your inbox.</p>
//           <form className="mt-6 flex max-w-md mx-auto">
//             <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
//             <Button type="submit" className="rounded-l-none">Subscribe</Button>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// }






'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, Search, Calendar, User, Tag, 
  ArrowRight, Sparkles, TrendingUp, Newspaper,
  Filter, Clock, BookOpen
} from 'lucide-react';

// Mock data - replace with your actual import
const blogArticles = [
  {
    slug: 'sustainable-biotech-2026',
    title: 'The Future of Sustainable Biotechnology',
    excerpt: 'Exploring how synthetic biology is revolutionizing environmental conservation and creating sustainable solutions for tomorrow.',
    content: '<p>Full article content here...</p>',
    category: 'Biotechnology',
    date: '2024-01-15',
    author: 'Dr. Sarah Mitchell',
    imageSrc: 'https://picsum.photos/seed/blog1/1200/800',
    imageHint: 'laboratory research'
  },
  {
    slug: 'climate-adaptation-strategies',
    title: 'Climate Adaptation Strategies for 2026',
    excerpt: 'New research reveals innovative approaches to help ecosystems adapt to rapidly changing climate conditions.',
    content: '<p>Full article content here...</p>',
    category: 'Environmental Science',
    date: '2024-01-10',
    author: 'Prof. James Chen',
    imageSrc: 'https://picsum.photos/seed/blog2/1200/800',
    imageHint: 'climate research'
  },
  {
    slug: 'ai-drug-discovery',
    title: 'AI-Powered Drug Discovery Breakthroughs',
    excerpt: 'Machine learning algorithms are accelerating the development of new medications and treatments.',
    content: '<p>Full article content here...</p>',
    category: 'Applied Technology',
    date: '2024-01-08',
    author: 'Dr. Emily White',
    imageSrc: 'https://picsum.photos/seed/blog3/1200/800',
    imageHint: 'artificial intelligence'
  },
  {
    slug: 'marine-conservation',
    title: 'Protecting Marine Ecosystems',
    excerpt: 'A comprehensive look at current efforts to preserve ocean biodiversity and coral reef systems.',
    content: '<p>Full article content here...</p>',
    category: 'Environmental Science',
    date: '2024-01-05',
    author: 'Dr. Maria Rodriguez',
    imageSrc: 'https://picsum.photos/seed/blog4/1200/800',
    imageHint: 'ocean coral reef'
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const featuredArticle = blogArticles[0];
  
  const filteredArticles = blogArticles.slice(1).filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(blogArticles.map(a => a.category))];

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
            <Link href="/" className="hover:text-white cursor-pointer transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Blog</span>
          </div>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Newspaper className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">Insights & Updates</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
              Insights, articles, and updates from the world of life sciences, environmental research, and applied technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="relative -mt-32 z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full mb-6 shadow-xl">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold">Featured Post</span>
            </div>
            
            <Link href={`/blog/${featuredArticle.slug}`} className="group block">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-slate-100 hover:border-emerald-300 transition-all">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-80 md:h-full overflow-hidden">
                    <Image 
                      src={featuredArticle.imageSrc} 
                      alt={featuredArticle.title} 
                      fill 
                      style={{objectFit: 'cover'}} 
                      data-ai-hint={featuredArticle.imageHint}
                      className="transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold rounded-full mb-4 w-fit">
                      {featuredArticle.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                    </div>
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-lg group-hover:gap-3 transition-all">
                      Read Full Article
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Search */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-100">
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-5 h-5 text-emerald-600" />
                <h3 className="text-xl font-bold text-slate-900">Search Articles</h3>
              </div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 border-2 border-slate-100 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-emerald-600" />
                <h3 className="text-xl font-bold text-slate-900">Categories</h3>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all ${
                    selectedCategory === null
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  All Articles
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5" />
                <h3 className="text-lg font-bold">Popular Topics</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-sm">Climate Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-sm">Biotechnology</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-sm">AI in Research</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Articles Grid */}
          <main className="lg:col-span-3">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {selectedCategory ? `${selectedCategory} Articles` : 'All Posts'}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
            </div>

            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.map((article, idx) => (
                  <Link 
                    key={article.slug} 
                    href={`/blog/${article.slug}`} 
                    className="group block"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-slate-100 hover:border-emerald-300 overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <Image 
                          src={article.imageSrc} 
                          alt={article.title} 
                          fill 
                          style={{objectFit: 'cover'}} 
                          data-ai-hint={article.imageHint}
                          className="transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-full">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-slate-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>5 min read</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-slate-600 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <User className="w-4 h-4" />
                            <span className="font-medium">{article.author}</span>
                          </div>
                          <div className="inline-flex items-center gap-1 text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all">
                            Read
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-6">
                  <BookOpen className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No articles found</h3>
                <p className="text-slate-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-emerald-100">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-6 shadow-xl">
                  <Newspaper className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Subscribe to Our Blog
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Get the latest articles, research insights, and conference updates delivered straight to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-6 py-4 border-2 border-slate-200 rounded-xl text-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                  <button 
                    type="submit" 
                    className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </form>
                <p className="text-sm text-slate-500 mt-4">
                  Join 500+ researchers and professionals. Unsubscribe anytime.
                </p>
              </div>
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
              Join the Conversation
            </h2>
            <p className="text-xl text-teal-200">
              Submit your research and be part of ICLEAS 2026
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl">
                Submit Your Paper
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}