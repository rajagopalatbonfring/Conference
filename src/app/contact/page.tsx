// import Link from 'next/link';
// import { ChevronRight, Mail, Phone, MapPin, Building, FileText, Ticket, Laptop, Handshake, Info } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { ContactForm } from './_components/contact-form';

// const contactPoints = [
//     {
//         title: "General Inquiries",
//         icon: Info,
//         email: "info@icleas2026.org",
//         whatsapp: "+91-1234567890",
//         details: "Response within 24 hours"
//     },
//     {
//         title: "Paper Submissions",
//         icon: FileText,
//         email: "submissions@icleas2026.org",
//         contactPerson: "Dr. David Kim",
//         details: "Response within 48 hours"
//     },
//     {
//         title: "Registration & Ticketing",
//         icon: Ticket,
//         email: "register@icleas2026.org",
//         whatsapp: "+91-1234567891",
//         details: "9 AM - 6 PM IST (Mon-Fri)"
//     },
//     {
//         title: "Technical Support",
//         icon: Laptop,
//         email: "support@icleas2026.org",
//         phone: "+91-9876543210",
//         details: "Available during conference hours"
//     },
//     {
//         title: "Sponsorship & Partnerships",
//         icon: Handshake,
//         email: "partners@icleas2026.org",
//         contactPerson: "Mr. Alex Johnson",
//         details: "Let's collaborate"
//     },
//      {
//         title: "Office Address",
//         icon: Building,
//         address: "ScientiaForum HQ, 123 Science Avenue, Metropolis, 12345",
//         phone: "+1 234 567 890",
//         details: "9 AM - 6 PM IST, Mon-Fri"
//     }
// ];

// export default function ContactPage() {
//   return (
//     <div className="bg-background text-foreground">
//       {/* 1. Page Header */}
//       <section className="bg-card/30 py-12">
//         <div className="container mx-auto">
//           <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//             <Link href="/" className="hover:text-primary">Home</Link>
//             <ChevronRight size={16} />
//             <span>Contact Us</span>
//           </div>
//           <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
//             Contact Us
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground">
//             We're here to help with any questions you may have about ICLEAS 2026.
//           </p>
//         </div>
//       </section>

//       <div className="container mx-auto py-16 md:py-24 space-y-20">

//         {/* 2. Contact Information */}
//         <section id="contact-info">
//           <h2 className="text-3xl font-bold text-primary text-center">Get in Touch</h2>
//           <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {contactPoints.map((point) => {
//                 const Icon = point.icon;
//                 return (
//                     <Card key={point.title} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
//                         <CardHeader className="flex-row items-center gap-4">
//                             <div className="p-3 bg-primary/10 rounded-md">
//                                 <Icon className="h-6 w-6 text-primary" />
//                             </div>
//                             <CardTitle>{point.title}</CardTitle>
//                         </CardHeader>
//                         <CardContent className="space-y-2 text-sm">
//                             {point.email && <p><a href={`mailto:${point.email}`} className="text-primary hover:underline break-all">{point.email}</a></p>}
//                             {point.whatsapp && <p><strong>WhatsApp:</strong> {point.whatsapp}</p>}
//                             {point.phone && <p><strong>Phone:</strong> {point.phone}</p>}
//                             {point.contactPerson && <p><strong>Contact:</strong> {point.contactPerson}</p>}
//                             {point.address && <p>{point.address}</p>}
//                             <p className="text-muted-foreground">{point.details}</p>
//                         </CardContent>
//                     </Card>
//                 );
//             })}
//           </div>
//         </section>

//         {/* 3. Contact Form */}
//         <section id="contact-form" className="max-w-4xl mx-auto">
//            <h2 className="text-3xl font-bold text-primary text-center">Send Us a Message</h2>
//            <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
//             Have a specific question? Fill out the form below and a member of our team will get back to you. We aim to respond within 24-48 business hours.
//            </p>
//            <Card className="mt-8 bg-card/50 border-border/50">
//             <CardContent className="p-6">
//               <ContactForm />
//             </CardContent>
//            </Card>
//            <p className="mt-4 text-center text-sm text-muted-foreground">Check your spam/promotions folder for our response.</p>
//         </section>

//       </div>
//     </div>
//   );
// }












import Link from 'next/link';
import { 
  ChevronRight, Mail, Phone, MapPin, Building, FileText, 
  Ticket, Laptop, Handshake, Info, MessageCircle, Clock,
  Globe, Send, Sparkles, CheckCircle2
} from 'lucide-react';
import { ContactForm } from './_components/contact-form';

const contactPoints = [
  {
    title: "General Inquiries",
    icon: Info,
    email: "info@icleas2026.org",
    whatsapp: "+91-1234567890",
    details: "Response within 24 hours",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Paper Submissions",
    icon: FileText,
    email: "submissions@icleas2026.org",
    contactPerson: "Dr. David Kim",
    details: "Response within 48 hours",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    title: "Registration & Ticketing",
    icon: Ticket,
    email: "register@icleas2026.org",
    whatsapp: "+91-1234567891",
    details: "9 AM - 6 PM IST (Mon-Fri)",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Technical Support",
    icon: Laptop,
    email: "support@icleas2026.org",
    phone: "+91-9876543210",
    details: "Available during conference hours",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    title: "Sponsorship & Partnerships",
    icon: Handshake,
    email: "partners@icleas2026.org",
    contactPerson: "Mr. Alex Johnson",
    details: "Let's collaborate",
    gradient: "from-lime-500 to-green-500"
  },
  {
    title: "Office Address",
    icon: Building,
    address: "ScientiaForum HQ, 123 Science Avenue, Metropolis, 12345",
    phone: "+1 234 567 890",
    details: "9 AM - 6 PM IST, Mon-Fri",
    gradient: "from-cyan-500 to-blue-500"
  }
];

export default function ContactPage() {
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
            <span className="text-white font-semibold">Contact Us</span>
          </div>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">We're Here to Help</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
              Have questions about ICLEAS 2026? Our team is ready to assist you with submissions, registration, and any inquiries you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-emerald-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">24 Hours</div>
                <div className="text-sm text-slate-600">Average Response Time</div>
              </div>
              
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
                <div className="text-sm text-slate-600">Email Support</div>
              </div>
              
              <div className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 transform group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">Global</div>
                <div className="text-sm text-slate-600">Online Conference</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-900">Multiple Ways to Reach Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-slate-100 hover:border-emerald-300 overflow-hidden">
                    {/* Header with Icon */}
                    <div className={`p-6 bg-gradient-to-br ${point.gradient}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {point.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      {point.email && (
                        <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <a 
                            href={`mailto:${point.email}`} 
                            className="text-slate-700 hover:text-emerald-600 transition-colors break-all font-medium"
                          >
                            {point.email}
                          </a>
                        </div>
                      )}
                      
                      {point.whatsapp && (
                        <div className="flex items-start gap-3">
                          <MessageCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-semibold text-slate-900">WhatsApp</div>
                            <div className="text-slate-700">{point.whatsapp}</div>
                          </div>
                        </div>
                      )}
                      
                      {point.phone && (
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-semibold text-slate-900">Phone</div>
                            <div className="text-slate-700">{point.phone}</div>
                          </div>
                        </div>
                      )}
                      
                      {point.contactPerson && (
                        <div className="flex items-start gap-3">
                          <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-semibold text-slate-900">Contact Person</div>
                            <div className="text-slate-700">{point.contactPerson}</div>
                          </div>
                        </div>
                      )}
                      
                      {point.address && (
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div className="text-slate-700">{point.address}</div>
                        </div>
                      )}
                      
                      {/* Details */}
                      <div className="pt-3 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Clock className="w-4 h-4" />
                          <span>{point.details}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md">
                <Send className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-slate-900">Send Us a Message</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Have a Specific Question?
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Fill out the form below and a member of our team will get back to you within 24-48 business hours.
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-emerald-100">
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Check your spam/promotions folder for our response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Map Placeholder */}
              <div className="relative h-96 md:h-auto bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <MapPin className="w-16 h-16 mx-auto" />
                  <h3 className="text-2xl font-bold">Our Location</h3>
                  <p className="text-emerald-100">ScientiaForum HQ</p>
                </div>
              </div>
              
              {/* Office Info */}
              <div className="p-8 md:p-12 bg-white">
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Office Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Monday - Friday</div>
                      <div className="text-slate-600">9:00 AM - 6:00 PM IST</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-slate-400 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Weekend</div>
                      <div className="text-slate-600">Closed</div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">Address</div>
                        <div className="text-slate-600">
                          ScientiaForum HQ<br />
                          123 Science Avenue<br />
                          Metropolis, 12345
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Still Have Questions?
            </h2>
            <p className="text-xl text-teal-200">
              Check our FAQ section for quick answers to common questions
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl">
                View FAQs
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Submit a Paper
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}