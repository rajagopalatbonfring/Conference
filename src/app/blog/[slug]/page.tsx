import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, Calendar, User, Tag, Clock, Share2, 
  Facebook, Twitter, Linkedin, Mail, ChevronRight,
  BookOpen, TrendingUp
} from 'lucide-react';

// Mock data - replace with your actual import
const blogArticles = [
  {
    slug: 'sustainable-biotech-2026',
    title: 'The Future of Sustainable Biotechnology',
    excerpt: 'Exploring how synthetic biology is revolutionizing environmental conservation and creating sustainable solutions for tomorrow.',
    content: `
      <p class="text-lg leading-relaxed mb-6">Synthetic biology is emerging as one of the most promising fields in the quest for environmental sustainability. By combining principles from biology, engineering, and computer science, researchers are developing innovative solutions to some of our planet's most pressing challenges.</p>
      
      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6">Breaking New Ground in Bio-Engineering</h2>
      <p class="text-lg leading-relaxed mb-6">Recent breakthroughs in CRISPR technology and metabolic engineering have opened up unprecedented possibilities. Scientists are now able to design microorganisms that can:</p>
      
      <ul class="list-disc pl-8 mb-6 space-y-2 text-lg">
        <li>Break down plastic waste more efficiently than ever before</li>
        <li>Capture and sequester carbon dioxide from the atmosphere</li>
        <li>Produce sustainable biofuels from renewable sources</li>
        <li>Create biodegradable materials to replace traditional plastics</li>
      </ul>
      
      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6">Environmental Applications</h2>
      <p class="text-lg leading-relaxed mb-6">The environmental applications of synthetic biology are vast and varied. From cleaning up oil spills to restoring damaged ecosystems, these technologies offer hope for reversing some of the environmental damage caused by industrial activities.</p>
      
      <p class="text-lg leading-relaxed mb-6">One particularly exciting development is the use of engineered bacteria to remove heavy metals from contaminated soil and water. These microorganisms can be designed to target specific pollutants, making remediation efforts more efficient and cost-effective.</p>
      
      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6">The Road Ahead</h2>
      <p class="text-lg leading-relaxed mb-6">As we look to the future, it's clear that sustainable biotechnology will play a crucial role in addressing climate change and environmental degradation. However, success will require continued investment in research, careful regulation, and international collaboration.</p>
    `,
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
    content: '<p>Article content...</p>',
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
    content: '<p>Article content...</p>',
    category: 'Applied Technology',
    date: '2024-01-08',
    author: 'Dr. Emily White',
    imageSrc: 'https://picsum.photos/seed/blog3/1200/800',
    imageHint: 'artificial intelligence'
  }
];

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = blogArticles.find(a => a.slug === params.slug);

  if (!article) {
    notFound();
  }
  
  const relatedArticles = blogArticles
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section with Image */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image 
          src={article.imageSrc} 
          alt={article.title} 
          fill 
          style={{objectFit: 'cover'}} 
          data-ai-hint={article.imageHint} 
          priority
          className="brightness-50"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/80 mb-6">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white font-semibold">{article.category}</span>
              </div>

              {/* Category Badge */}
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold rounded-full mb-6">
                {article.category}
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>8 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Excerpt/Introduction */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-12 border-2 border-emerald-100">
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              {article.excerpt}
            </p>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b-2 border-slate-200">
            <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">
              Share this article:
            </span>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors group">
                <Mail className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
              </button>
            </div>
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-slate-900 prose-headings:font-bold
              prose-p:text-slate-700 prose-p:leading-relaxed
              prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-700
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-ul:text-slate-700 prose-ol:text-slate-700
              prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
              prose-code:text-emerald-600 prose-code:bg-emerald-50 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-img:rounded-2xl prose-img:shadow-xl"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Author Bio */}
          <div className="mt-16 pt-12 border-t-2 border-slate-200">
            <div className="flex items-start gap-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-100">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {article.author}
                </h3>
                <p className="text-slate-600 mb-4">
                  {article.author} is a leading researcher in {article.category.toLowerCase()} with over 15 years of experience. 
                  Their work focuses on innovative solutions for sustainable development and environmental conservation.
                </p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white border-2 border-emerald-200 text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                    View Profile
                  </button>
                  <button className="px-4 py-2 bg-white border-2 border-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                    More Articles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-slate-900">Continue Reading</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Related Articles
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((related, idx) => (
                  <Link 
                    key={related.slug} 
                    href={`/blog/${related.slug}`} 
                    className="group block"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-slate-100 hover:border-emerald-300 overflow-hidden h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image 
                          src={related.imageSrc} 
                          alt={related.title} 
                          fill 
                          style={{objectFit: 'cover'}} 
                          data-ai-hint={related.imageHint}
                          className="transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-full">
                            {related.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        <p className="text-slate-600 mb-4 line-clamp-2 text-sm">
                          {related.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-600 pt-4 border-t border-slate-100">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(related.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Stay Updated with Our Research
            </h2>
            <p className="text-xl text-teal-200">
              Subscribe to our newsletter and never miss the latest scientific breakthroughs
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl">
                Subscribe Now
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                View All Articles
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}






























// import { notFound } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import { ArrowLeft, Calendar, User, Clock, ChevronRight, BookOpen ,Mail,Linkedin,Facebook,Twitter} from 'lucide-react';

// import { getBlogPostBySlug } from '@/lib/strapi';

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   try {
//     const post = await getBlogPostBySlug(params.slug);
//     if (!post) return { title: 'Article not found' };

//     return {
//       title: post.title || 'Blog Article',
//       description: post.excerpt || 'Conference blog post',
//     };
//   } catch (err) {
//     console.error('Metadata error:', err);
//     return { title: 'Article not found' };
//   }
// }

// export default async function BlogArticlePage({ params }: { params: { slug: string } }) {
//   let post = null;

  

//   try {
//     post = await getBlogPostBySlug(params.slug);
//       console.log('Trying to fetch slug:', params.slug);
//   console.log('Single post result:', post);
//   } catch (err) {
//     console.error('Single post fetch error:', err);
//   }

//   if (!post) {
//     notFound();
//   }

//   // Strapi v5 flat structure
//   const image = post.image;
  

//   return (
//     <div className="min-h-screen bg-white">
      
//       {/* Hero Section */}
//       <section className="relative h-[70vh] overflow-hidden">
//         {image?.url ? (
//           <Image 
//             src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
//             alt={image.alternativeText || post.title || 'Blog article'}
//             fill
//             className="object-cover brightness-50"
//             priority
//             sizes="(max-width: 768px) 100vw, 80vw"
//           />
//         ) : (
//           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-teal-900" />
//         )}
        
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        
//         <div className="absolute inset-0 flex items-end">
//           <div className="container mx-auto px-4 pb-16">
//             <div className="max-w-4xl">
//               <div className="flex items-center gap-2 text-white/80 mb-6">
//                 <Link href="/" className="hover:text-white transition-colors">Home</Link>
//                 <ChevronRight className="w-4 h-4" />
//                 <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
//                 <ChevronRight className="w-4 h-4" />
//                 <span className="text-white font-semibold">{post.category || 'Article'}</span>
//               </div>

//               <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold rounded-full mb-6">
//                 {post.category || 'General'}
//               </span>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//                 {post.title}
//               </h1>

//               <div className="flex flex-wrap items-center gap-6 text-white/90">
//                 <div className="flex items-center gap-2">
//                   <User className="w-5 h-5" />
//                   <span className="font-medium">{post.author || 'Conference Team'}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Calendar className="w-5 h-5" />
//                   <span>
//                     {new Date(post.publishedAt || post.publishedat || post.createdAt).toLocaleDateString('en-US', { 
//                       year: 'numeric', month: 'long', day: 'numeric' 
//                     })}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Clock className="w-5 h-5" />
//                   <span>8 min read</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Article Content */}
//       <article className="container mx-auto px-4 py-16 md:py-24">
//         <div className="max-w-4xl mx-auto">
          
//           <Link 
//             href="/blog" 
//             className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-12 group"
//           >
//             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
//             Back to Blog
//           </Link>

//           {post.excerpt && (
//             <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-12 border-2 border-emerald-100">
//               <p className="text-xl text-slate-700 leading-relaxed font-medium">
//                 {post.excerpt}
//               </p>
//             </div>
//           )}

//           <div className="flex items-center gap-4 mb-12 pb-8 border-b-2 border-slate-200">
//             <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">
//               Share this article:
//             </span>
//             <div className="flex gap-2">
//               <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors group">
//                 <Twitter className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
//               </button>
//               <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors group">
//                 <Facebook className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
//               </button>
//               <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors group">
//                 <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
//               </button>
//               <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors group">
//                 <Mail className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
//               </button>
//             </div>
//           </div>

//           {/* Article Body */}
//           <div 
//             className="prose prose-lg max-w-none
//               prose-headings:text-slate-900 prose-headings:font-bold
//               prose-p:text-slate-700 prose-p:leading-relaxed
//               prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-700
//               prose-strong:text-slate-900 prose-strong:font-bold
//               prose-ul:text-slate-700 prose-ol:text-slate-700
//               prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
//               prose-code:text-emerald-600 prose-code:bg-emerald-50 prose-code:px-2 prose-code:py-1 prose-code:rounded
//               prose-img:rounded-2xl prose-img:shadow-xl"
//             dangerouslySetInnerHTML={{ __html: post.content || '<p>No content available yet.</p>' }}
//           />

//           {/* Author Bio */}
//           <div className="mt-16 pt-12 border-t-2 border-slate-200">
//             <div className="flex items-start gap-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-100">
//               <div className="flex-shrink-0">
//                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
//                   {(post.author || 'A')[0]}
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-slate-900 mb-2">
//                   {post.author || 'Conference Team'}
//                 </h3>
//                 <p className="text-slate-600 mb-4">
//                   Leading researcher in {post.category?.toLowerCase() || 'science'} with extensive experience in sustainable development and environmental conservation.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </article>

//       {/* Final CTA */}
//       <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 overflow-hidden">
//         {/* ... your CTA ... */}
//       </section>
//     </div>
//   );
// }