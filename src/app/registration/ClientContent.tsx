"use client";

import Link from 'next/link';
import {
  ChevronRight, CreditCard, Landmark, CheckCircle2, 
  Users, FileText, Building2, Star, Clock, Award,
  Sparkles, Tag, Shield, DollarSign, Calendar,
  ArrowRight, Zap, Gift, TrendingUp
} from 'lucide-react';

// Your original mock data – unchanged
const registrationTiers = [
  { category: "Student (Author)", earlyBirdPrice: "$100", regularPrice: "$150" },
  { category: "Academic (Author)", earlyBirdPrice: "$200", regularPrice: "$250" },
  { category: "Industry (Author)", earlyBirdPrice: "$300", regularPrice: "$350" },
  { category: "Student (Listener)", earlyBirdPrice: "$25", regularPrice: "$50" },
  { category: "Academic (Listener)", earlyBirdPrice: "$50", regularPrice: "$75" },
  { category: "Industry (Listener)", earlyBirdPrice: "$75", regularPrice: "$100" }
];

const registrationFaqs = [
  { question: "Is there a student discount?", answer: "Yes, students receive discounted rates. Select the 'Student' category during registration and be prepared to provide proof of enrollment if requested." },
  { question: "Can I get an invoice for my registration?", answer: "Yes, an automatic invoice will be emailed to you upon successful payment. You can also request a formal invoice for institutional reimbursement during or after registration." },
  { question: "Can I change my registration category?", answer: "Yes, category changes are possible. Contact registration@icleas2026.org with your details and we will adjust the fee accordingly (difference may apply)." },
  { question: "What is the cancellation policy?", answer: "Full refund (minus $50 processing fee) available for cancellations before May 25, 2026. No refunds after this date. Refer to our refund policy page for complete details." },
  { question: "Can I transfer my registration to someone else?", answer: "Yes, registrations are transferable. Notify us at least one week before the conference with the new attendee’s details." },
];

export default function ClientContent() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section – your exact design + SEO text */}
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
            <span className="text-white font-semibold">Registration ICLEAS 2026</span>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Tag className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">Early Bird Registration Open – Save up to 25%</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              ICLEAS 2026 Registration
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 leading-relaxed mb-8">
              Secure your participation at the online international conference on life sciences, environmental sciences, applied sciences, biotechnology & sustainability – July 23–24, 2026.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-lg">Early Bird Deadline: Apr 30, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5" />
                <span className="text-lg">Save up to 25% on Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section – your exact original table & design */}
      <section className="relative -mt-32 z-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-xl">
                <DollarSign className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-slate-900">Clear & Affordable Pricing</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                ICLEAS 2026 Registration Fees
              </h2>
            </div>

            {/* Pricing Table – your exact structure */}
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
                        <span className="text-xs text-slate-500">Save 20-25%</span>
                      </div>
                    </div>
                    <div className="col-span-1 text-center">
                      <span className="text-2xl font-bold text-slate-700">{tier.regularPrice}</span>
                    </div>
                    <div className="col-span-1 text-center">
                      <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold hover:shadow-lg transition-all">
                        Register Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section – your exact original */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md">
                <Gift className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-slate-900">Complete Access Package</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                What’s Included in Your Registration
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
                    "Live access to all conference sessions",
                    "30-day access to recorded sessions",
                    "Digital conference proceedings (ISBN/DOI)",
                    "Certificate of attendance / presentation",
                    "Access to digital materials & abstracts"
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
                  <h3 className="text-2xl font-bold mb-2">Presenting Authors</h3>
                  <p className="text-emerald-100 mb-6 text-sm">Student & Academic</p>
                  <p className="text-white/90 mb-6 font-semibold">All standard benefits, plus:</p>
                  <ul className="space-y-4">
                    {[
                      "Publication in indexed proceedings",
                      "Virtual networking sessions",
                      "Live Q&A with keynote speakers"
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
                <p className="text-slate-600 mb-6 font-semibold">All author benefits, plus:</p>
                <ul className="space-y-4">
                  {[
                    "Access to virtual sponsor/exhibitor booths",
                    "Exclusive industry networking sessions",
                    "Company logo in participant directory (optional)"
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

      {/* Payment & Policy Section – your exact original */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Payment Methods */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                <CreditCard className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-slate-900">Secure & Flexible Payment</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Accepted Payment Methods
              </h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 pb-6 border-b border-slate-200">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Credit / Debit Card</div>
                      <div className="text-sm text-slate-600">Visa, MasterCard, American Express</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 pb-6 border-b border-slate-200">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <Landmark className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Bank Transfer / Wire</div>
                      <div className="text-sm text-slate-600">Details provided after registration</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                      <span className="font-bold text-purple-600">PP</span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">PayPal</div>
                      <div className="text-sm text-slate-600">Fast & secure online payment</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600">
                      All transactions are secured with 256-bit SSL encryption. We never store your card details.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Policy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full mb-6">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-bold text-amber-900">Clear Refund Terms</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Cancellation & Refund Policy
              </h2>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Full refund (less $50 processing fee) available for cancellations on or before <strong className="text-slate-900">May 25, 2026</strong>. No refunds after this date.
                    </p>
                    <Link 
                      href="/refund-policy" 
                      className="inline-flex items-center gap-2 text-amber-700 font-bold hover:text-amber-800 transition-colors"
                    >
                      Read Full Refund Policy
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ – your exact original */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-bold text-teal-900">Common Questions</span>
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

      {/* Final CTA – your exact original */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-full font-bold shadow-xl">
              <Star className="w-5 h-5" />
              <span>Early Bird Ends Apr 30, 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Register Today for ICLEAS 2026
            </h2>
            <p className="text-xl text-teal-200">
              Join global researchers and professionals advancing life sciences, environmental sustainability & applied technologies
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