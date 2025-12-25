// import Link from 'next/link';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { ChevronRight, CreditCard, Landmark, CheckCircle2 } from 'lucide-react';
// import { registrationTiers } from '@/lib/data';

// const registrationFaqs = [
//   { question: "Is there a student discount?", answer: "Yes, we offer a discounted rate for students. Please select the 'Student' category during registration. You may be asked to provide proof of student status." },
//   { question: "Can I get an invoice for my registration?", answer: "Yes, an invoice will be automatically generated and sent to your registered email address upon completion of payment. You can also request a detailed invoice for tax purposes during registration." },
//   { question: "Can I change my registration category?", answer: "Yes, please contact our support team at registration@icleas.com to request a change in your registration category. The price difference will be adjusted accordingly." },
//   { question: "What is the cancellation policy?", answer: "You can receive a full refund (minus a processing fee) if you cancel before May 25, 2026. Please refer to our refund policy page for detailed information." },
//   { question: "Can I transfer my registration to someone else?", answer: "Yes, registrations can be transferred to another person. Please contact our support team with the details of the new attendee at least one week before the conference." },
// ];

// export default function RegistrationPage() {
//   return (
//     <div className="bg-background text-foreground">
//       {/* 1. Page Header */}
//       <section className="bg-primary text-primary-foreground py-20">
//         <div className="container mx-auto text-center">
//           <div className="flex items-center justify-center space-x-2 text-sm text-primary-foreground/80">
//             <Link href="/" className="hover:text-white">Home</Link>
//             <ChevronRight size={16} />
//             <span>Registration</span>
//           </div>
//           <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
//             Conference Registration
//           </h1>
//           <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
//             Secure your place at ICLEAS 2026. Registration is now open!
//           </p>
//         </div>
//       </section>

//       <div className="container mx-auto py-16 md:py-24 space-y-20">
        
//         {/* 2. Pricing Table */}
//         <section id="pricing">
//             <h2 className="text-3xl font-bold text-primary text-center">Registration Fees</h2>
//             <Card className="mt-12 bg-card/50 border-border/50">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Category</TableHead>
//                     <TableHead>Early Bird (until Apr 30, 2026)</TableHead>
//                     <TableHead>Regular</TableHead>
//                     <TableHead>Action</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {registrationTiers.map(tier => (
//                     <TableRow key={tier.category}>
//                       <TableCell className="font-semibold">{tier.category}</TableCell>
//                       <TableCell>{tier.earlyBirdPrice}</TableCell>
//                       <TableCell>{tier.regularPrice}</TableCell>
//                       <TableCell>
//                         <Button>Register</Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Card>
//         </section>

//         {/* 3. What's Included */}
//         <section id="features">
//           <h2 className="text-3xl font-bold text-primary text-center">What's Included</h2>
//           <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <Card className="bg-card/50 border-border/50">
//               <CardHeader><CardTitle>All Participants</CardTitle></CardHeader>
//               <CardContent>
//                 <ul className="space-y-2 text-muted-foreground">
//                   <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Access to all conference sessions (live)</span></li>
//                   <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Access to recorded sessions (post-event for 30 days)</span></li>
//                   <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Digital conference proceedings</span></li>
//                   <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Certificate of attendance/presentation</span></li>
//                   <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Access to digital materials (slides, abstracts)</span></li>
//                 </ul>
//               </CardContent>
//             </Card>
//             <Card className="bg-card/50 border-border/50">
//               <CardHeader><CardTitle>Authors (Student & Academic)</CardTitle></CardHeader>
//               <CardContent>
//                 <p className="mb-4 text-muted-foreground">Includes all standard features, plus:</p>
//                 <ul className="space-y-2 text-muted-foreground">
//                   <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Paper publication in indexed proceedings</span></li>
//                   <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Dedicated virtual networking events</span></li>
//                   <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Interactive Q&A sessions with speakers</span></li>
//                 </ul>
//               </CardContent>
//             </Card>
//             <Card className="bg-card/50 border-border/50">
//               <CardHeader><CardTitle>Industry Participants</CardTitle></CardHeader>
//               <CardContent>
//                 <p className="mb-4 text-muted-foreground">Includes all author features, plus:</p>
//                 <ul className="space-y-2 text-muted-foreground">
//                   <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Access to virtual sponsor booths</span></li>
//                   <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Exclusive exhibitor networking sessions</span></li>
//                   <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Company logo included in participant list (optional)</span></li>
//                 </ul>
//               </CardContent>
//             </Card>
//           </div>
//         </section>

//         <div className="grid md:grid-cols-2 gap-12">
//             <section id="payment-policy">
//                 <div className="space-y-12">
//                     <div>
//                         <h2 className="text-2xl font-bold text-primary mb-4">Payment Methods</h2>
//                         <div className="flex items-center gap-4 text-muted-foreground flex-wrap">
//                             <div className="flex items-center gap-2"><CreditCard className="h-6 w-6" /> Credit/Debit Card</div>
//                             <div className="flex items-center gap-2"><Landmark className="h-6 w-6" /> Bank Transfer</div>
//                             <p className="font-bold text-lg">PayPal</p>
//                         </div>
//                         <p className="mt-2 text-sm text-muted-foreground">All payments are processed securely. We accept all major credit cards, bank transfers, and PayPal.</p>
//                     </div>
//                      <div>
//                         <h2 className="text-2xl font-bold text-primary mb-4">Cancellation & Refund Policy</h2>
//                          <div className="p-4 bg-card/50 rounded-md">
//                              <p className="text-sm text-muted-foreground">
//                                 Full refunds (minus a $50 processing fee) are available for cancellations made on or before May 25, 2026. No refunds will be issued after this date. For more details, please see our <Link href="/refund-policy" className="text-primary hover:underline">Refund Policy</Link> page.
//                              </p>
//                          </div>
//                     </div>
//                 </div>
//             </section>
//             <section id="faq">
//                  <h2 className="text-2xl font-bold text-primary mb-4">Registration FAQs</h2>
//                 <Accordion type="single" collapsible className="w-full">
//                 {registrationFaqs.map((faq, index) => (
//                     <AccordionItem key={index} value={`item-${index}`}>
//                     <AccordionTrigger>{faq.question}</AccordionTrigger>
//                     <AccordionContent>{faq.answer}</AccordionContent>
//                     </AccordionItem>
//                 ))}
//                 </Accordion>
//             </section>
//         </div>

//       </div>
//     </div>
//   );
// }









import Link from 'next/link';
import {
  ChevronRight, CreditCard, Landmark, CheckCircle2, 
  Users, FileText, Building2, Star, Clock, Award,
  Sparkles, Tag, Shield, DollarSign, Calendar,
  ArrowRight, Zap, Gift, TrendingUp
} from 'lucide-react';

// Mock data - replace with your actual import
const registrationTiers = [
  { category: "Student (Author)", earlyBirdPrice: "$150", regularPrice: "$200" },
  { category: "Academic (Author)", earlyBirdPrice: "$250", regularPrice: "$300" },
  { category: "Industry (Author)", earlyBirdPrice: "$400", regularPrice: "$500" },
  { category: "Student (Listener)", earlyBirdPrice: "$75", regularPrice: "$100" },
  { category: "Academic (Listener)", earlyBirdPrice: "$125", regularPrice: "$150" },
  { category: "Industry (Listener)", earlyBirdPrice: "$200", regularPrice: "$250" }
];

const registrationFaqs = [
  { question: "Is there a student discount?", answer: "Yes, we offer a discounted rate for students. Please select the 'Student' category during registration. You may be asked to provide proof of student status." },
  { question: "Can I get an invoice for my registration?", answer: "Yes, an invoice will be automatically generated and sent to your registered email address upon completion of payment. You can also request a detailed invoice for tax purposes during registration." },
  { question: "Can I change my registration category?", answer: "Yes, please contact our support team at registration@icleas.com to request a change in your registration category. The price difference will be adjusted accordingly." },
  { question: "What is the cancellation policy?", answer: "You can receive a full refund (minus a processing fee) if you cancel before May 25, 2026. Please refer to our refund policy page for detailed information." },
  { question: "Can I transfer my registration to someone else?", answer: "Yes, registrations can be transferred to another person. Please contact our support team with the details of the new attendee at least one week before the conference." },
];

export default function RegistrationPage() {
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
            <span className="text-white font-semibold">Registration</span>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Tag className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">Now Open - Early Bird Rates Available</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Conference Registration
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 leading-relaxed mb-8">
              Secure your place at ICLEAS 2026 and join the global scientific community shaping the future of sustainability.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-lg">Early Bird: Until Apr 30</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5" />
                <span className="text-lg">Save Up to 25%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative -mt-32 z-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-xl">
                <DollarSign className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-slate-900">Transparent Pricing</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Registration Fees
              </h2>
            </div>

            {/* Pricing Table */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-emerald-100">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-6">
                <div className="grid grid-cols-4 gap-4 text-white font-bold">
                  <div className="col-span-1">Category</div>
                  <div className="col-span-1 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-5 h-5 text-amber-300" />
                      <span>Early Bird</span>
                    </div>
                    <div className="text-xs font-normal text-emerald-100 mt-1">
                      Until Apr 30, 2026
                    </div>
                  </div>
                  <div className="col-span-1 text-center">Regular</div>
                  <div className="col-span-1 text-center">Action</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-slate-100">
                {registrationTiers.map((tier, idx) => (
                  <div 
                    key={tier.category}
                    className="grid grid-cols-4 gap-4 px-6 py-6 hover:bg-emerald-50 transition-colors items-center"
                  >
                    <div className="col-span-1">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          tier.category.includes('Student') 
                            ? 'bg-blue-100' 
                            : tier.category.includes('Academic')
                            ? 'bg-purple-100'
                            : 'bg-orange-100'
                        }`}>
                          {tier.category.includes('Student') && <Users className="w-5 h-5 text-blue-600" />}
                          {tier.category.includes('Academic') && <FileText className="w-5 h-5 text-purple-600" />}
                          {tier.category.includes('Industry') && <Building2 className="w-5 h-5 text-orange-600" />}
                        </div>
                        <span className="font-semibold text-slate-900">{tier.category}</span>
                      </div>
                    </div>
                    <div className="col-span-1 text-center">
                      <div className="inline-flex flex-col">
                        <span className="text-2xl font-bold text-emerald-600">{tier.earlyBirdPrice}</span>
                        <span className="text-xs text-slate-500">Save 20%</span>
                      </div>
                    </div>
                    <div className="col-span-1 text-center">
                      <span className="text-2xl font-bold text-slate-700">{tier.regularPrice}</span>
                    </div>
                    <div className="col-span-1 text-center">
                      <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold hover:shadow-lg transition-all">
                        Register
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md">
                <Gift className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-slate-900">Full Access Package</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                What's Included
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* All Participants */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-emerald-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">All Participants</h3>
                <ul className="space-y-4">
                  {[
                    "Access to all conference sessions (live)",
                    "Access to recorded sessions (30 days)",
                    "Digital conference proceedings",
                    "Certificate of attendance/presentation",
                    "Access to digital materials (slides, abstracts)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Authors */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Authors</h3>
                  <p className="text-emerald-100 mb-6 text-sm">Student & Academic</p>
                  <p className="text-white/90 mb-6 font-semibold">All standard features, plus:</p>
                  <ul className="space-y-4">
                    {[
                      "Paper publication in indexed proceedings",
                      "Dedicated virtual networking events",
                      "Interactive Q&A with speakers"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Industry */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Industry Participants</h3>
                <p className="text-slate-600 mb-6 font-semibold">All author features, plus:</p>
                <ul className="space-y-4">
                  {[
                    "Access to virtual sponsor booths",
                    "Exclusive exhibitor networking",
                    "Company logo in participant list (optional)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Policy Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Payment Methods */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                <CreditCard className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-900">Secure Payment</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Payment Methods
              </h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 pb-6 border-b border-slate-200">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Credit/Debit Card</div>
                      <div className="text-sm text-slate-600">Visa, MasterCard, Amex</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 pb-6 border-b border-slate-200">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <Landmark className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Bank Transfer</div>
                      <div className="text-sm text-slate-600">Wire transfer available</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                      <span className="font-bold text-purple-600">PP</span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">PayPal</div>
                      <div className="text-sm text-slate-600">Fast & secure checkout</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600">
                      All payments are processed securely using industry-standard encryption. Your financial information is never stored on our servers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Policy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full mb-6">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-bold text-amber-900">Flexible Policy</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Cancellation & Refund
              </h2>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Full refunds (minus a $50 processing fee) are available for cancellations made on or before <strong className="text-slate-900">May 25, 2026</strong>. No refunds will be issued after this date.
                    </p>
                    <Link 
                      href="/refund-policy" 
                      className="inline-flex items-center gap-2 text-amber-700 font-bold hover:text-amber-800 transition-colors"
                    >
                      View Full Refund Policy
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-bold text-teal-900">Quick Answers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Registration FAQs
            </h2>
            
            <div className="space-y-4">
              {registrationFaqs.map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden border-2 border-slate-100"
                >
                  <summary className="cursor-pointer p-6 font-bold text-slate-900 flex justify-between items-center list-none">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-emerald-600 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <div className="h-px bg-gradient-to-r from-emerald-200 to-transparent mb-4"></div>
                    <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-full font-bold shadow-xl">
              <Star className="w-5 h-5" />
              <span>Early Bird Rates End Apr 30, 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Don't Miss Out - Register Today
            </h2>
            <p className="text-xl text-teal-200">
              Join hundreds of researchers and professionals at ICLEAS 2026
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl">
                Register Now
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}