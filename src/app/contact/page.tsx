// import Link from 'next/link';
// import { 
//   ChevronRight, Mail, Phone, MapPin, Building, FileText, 
//   Ticket, Laptop, Handshake, Info, MessageCircle, Clock,
//   Globe, Send, Sparkles, CheckCircle2
// } from 'lucide-react';
// import { ContactForm } from './_components/contact-form';

// const contactPoints = [
//   {
//     title: "General Inquiries",
//     icon: Info,
//     email: "info@icleas2026.org",
//     whatsapp: "+91-1234567890",
//     details: "Response within 24 hours",
//     gradient: "from-emerald-500 to-teal-500"
//   },
//   {
//     title: "Paper Submissions",
//     icon: FileText,
//     email: "submissions@icleas2026.org",
//     contactPerson: "Dr. David Kim",
//     details: "Response within 48 hours",
//     gradient: "from-teal-500 to-cyan-500"
//   },
//   {
//     title: "Registration & Ticketing",
//     icon: Ticket,
//     email: "register@icleas2026.org",
//     whatsapp: "+91-1234567891",
//     details: "9 AM - 6 PM IST (Mon-Fri)",
//     gradient: "from-purple-500 to-pink-500"
//   },
//   {
//     title: "Technical Support",
//     icon: Laptop,
//     email: "support@icleas2026.org",
//     phone: "+91-9876543210",
//     details: "Available during conference hours",
//     gradient: "from-orange-500 to-amber-500"
//   },
//   {
//     title: "Sponsorship & Partnerships",
//     icon: Handshake,
//     email: "partners@icleas2026.org",
//     contactPerson: "Mr. Alex Johnson",
//     details: "Let's collaborate",
//     gradient: "from-lime-500 to-green-500"
//   },
//   {
//     title: "Office Address",
//     icon: Building,
//     address: "ScientiaForum HQ, 123 Science Avenue, Metropolis, 12345",
//     phone: "+1 234 567 890",
//     details: "9 AM - 6 PM IST, Mon-Fri",
//     gradient: "from-cyan-500 to-blue-500"
//   }
// ];

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-white">
      
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 py-24 md:py-32 overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
//         <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        
//         <div className="relative z-10 container mx-auto px-4">
//           {/* Breadcrumb */}
//           <div className="flex items-center gap-2 text-emerald-200 mb-8">
//             <Link href="/" className="hover:text-white cursor-pointer transition-colors">
//               Home
//             </Link>
//             <ChevronRight className="w-4 h-4" />
//             <span className="text-white font-semibold">Contact Us</span>
//           </div>
          
//           <div className="max-w-4xl">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
//               <MessageCircle className="w-4 h-4 text-emerald-400" />
//               <span className="text-sm text-white font-medium">We're Here to Help</span>
//             </div>
            
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
//               Contact Us
//             </h1>
//             <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
//               Have questions about ICLEAS 2026? Our team is ready to assist you with submissions, registration, and any inquiries you may have.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Quick Stats */}
//       <section className="relative -mt-16 z-20">
//         <div className="container mx-auto px-4">
//           <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-emerald-100">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//               <div className="group">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4 transform group-hover:scale-110 transition-transform">
//                   <Clock className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-slate-900 mb-1">24 Hours</div>
//                 <div className="text-sm text-slate-600">Average Response Time</div>
//               </div>
              
//               <div className="group">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-4 transform group-hover:scale-110 transition-transform">
//                   <Mail className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
//                 <div className="text-sm text-slate-600">Email Support</div>
//               </div>
              
//               <div className="group">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 transform group-hover:scale-110 transition-transform">
//                   <Globe className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-slate-900 mb-1">Global</div>
//                 <div className="text-sm text-slate-600">Online Conference</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Methods */}
//       <section className="container mx-auto px-4 py-20 md:py-32">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
//               <Sparkles className="w-5 h-5 text-emerald-600" />
//               <span className="text-sm font-bold text-emerald-900">Multiple Ways to Reach Us</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//               Get in Touch
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {contactPoints.map((point, idx) => {
//               const Icon = point.icon;
//               return (
//                 <div
//                   key={point.title}
//                   className="group"
//                   style={{ animationDelay: `${idx * 100}ms` }}
//                 >
//                   <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-slate-100 hover:border-emerald-300 overflow-hidden">
//                     {/* Header with Icon */}
//                     <div className={`p-6 bg-gradient-to-br ${point.gradient}`}>
//                       <div className="flex items-center gap-4">
//                         <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
//                           <Icon className="w-7 h-7 text-white" />
//                         </div>
//                         <h3 className="text-xl font-bold text-white">
//                           {point.title}
//                         </h3>
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 space-y-3">
//                       {point.email && (
//                         <div className="flex items-start gap-3">
//                           <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
//                           <a 
//                             href={`mailto:${point.email}`} 
//                             className="text-slate-700 hover:text-emerald-600 transition-colors break-all font-medium"
//                           >
//                             {point.email}
//                           </a>
//                         </div>
//                       )}
                      
//                       {point.whatsapp && (
//                         <div className="flex items-start gap-3">
//                           <MessageCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
//                           <div>
//                             <div className="text-sm font-semibold text-slate-900">WhatsApp</div>
//                             <div className="text-slate-700">{point.whatsapp}</div>
//                           </div>
//                         </div>
//                       )}
                      
//                       {point.phone && (
//                         <div className="flex items-start gap-3">
//                           <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
//                           <div>
//                             <div className="text-sm font-semibold text-slate-900">Phone</div>
//                             <div className="text-slate-700">{point.phone}</div>
//                           </div>
//                         </div>
//                       )}
                      
//                       {point.contactPerson && (
//                         <div className="flex items-start gap-3">
//                           <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
//                           <div>
//                             <div className="text-sm font-semibold text-slate-900">Contact Person</div>
//                             <div className="text-slate-700">{point.contactPerson}</div>
//                           </div>
//                         </div>
//                       )}
                      
//                       {point.address && (
//                         <div className="flex items-start gap-3">
//                           <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
//                           <div className="text-slate-700">{point.address}</div>
//                         </div>
//                       )}
                      
//                       {/* Details */}
//                       <div className="pt-3 border-t border-slate-100">
//                         <div className="flex items-center gap-2 text-sm text-slate-600">
//                           <Clock className="w-4 h-4" />
//                           <span>{point.details}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20 md:py-32">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md">
//                 <Send className="w-5 h-5 text-emerald-600" />
//                 <span className="text-sm font-bold text-slate-900">Send Us a Message</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//                 Have a Specific Question?
//               </h2>
//               <p className="text-xl text-slate-600 leading-relaxed">
//                 Fill out the form below and a member of our team will get back to you within 24-48 business hours.
//               </p>
//             </div>

//             {/* Form Card */}
//             <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-emerald-100">
//               <ContactForm />
//             </div>

//             {/* Additional Info */}
//             <div className="mt-8 text-center">
//               <div className="inline-flex items-center gap-2 text-sm text-slate-600">
//                 <CheckCircle2 className="w-4 h-4 text-emerald-600" />
//                 <span>Check your spam/promotions folder for our response</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section (Optional) */}
//       <section className="container mx-auto px-4 py-20">
//         <div className="max-w-6xl mx-auto">
//           <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl overflow-hidden shadow-xl">
//             <div className="grid md:grid-cols-2">
//               {/* Map Placeholder */}
//               <div className="relative h-96 md:h-auto bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
//                 <div className="text-center text-white space-y-4">
//                   <MapPin className="w-16 h-16 mx-auto" />
//                   <h3 className="text-2xl font-bold">Our Location</h3>
//                   <p className="text-emerald-100">ScientiaForum HQ</p>
//                 </div>
//               </div>
              
//               {/* Office Info */}
//               <div className="p-8 md:p-12 bg-white">
//                 <h3 className="text-3xl font-bold text-slate-900 mb-6">
//                   Office Hours
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-4">
//                     <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
//                     <div>
//                       <div className="font-semibold text-slate-900">Monday - Friday</div>
//                       <div className="text-slate-600">9:00 AM - 6:00 PM IST</div>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <Clock className="w-6 h-6 text-slate-400 flex-shrink-0" />
//                     <div>
//                       <div className="font-semibold text-slate-900">Weekend</div>
//                       <div className="text-slate-600">Closed</div>
//                     </div>
//                   </div>
//                   <div className="pt-6 border-t border-slate-200">
//                     <div className="flex items-start gap-4">
//                       <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0" />
//                       <div>
//                         <div className="font-semibold text-slate-900 mb-1">Address</div>
//                         <div className="text-slate-600">
//                           ScientiaForum HQ<br />
//                           123 Science Avenue<br />
//                           Metropolis, 12345
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Quick Links */}
//       <section className="bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
//         <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
        
//         <div className="relative z-10 container mx-auto px-4 text-center">
//           <div className="max-w-3xl mx-auto space-y-8">
//             <h2 className="text-4xl md:text-5xl font-bold text-white">
//               Still Have Questions?
//             </h2>
//             <p className="text-xl text-teal-200">
//               Check our FAQ section for quick answers to common questions
//             </p>
//             <div className="flex flex-wrap justify-center gap-4 pt-4">
//               <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl">
//                 View FAQs
//               </button>
//               <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
//                 Submit a Paper
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }












"use client"

import { useState } from 'react';
import { 
  ChevronRight, Mail, Phone, MapPin, Clock,
  Send, Sparkles, CheckCircle2, User, Building, 
  MessageSquare, Leaf, Globe, MessageCircle
} from 'lucide-react';


// Add type definitions
interface FormState {
  name: string;
  email: string;
  phone: string;
  organization: string;
  subject: string;
  message: string;
  subscribe: boolean;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}


export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    subscribe: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus({ 
        success: true, 
        message: "Thank you for your message! We will get back to you within 24-48 hours." 
      });
      setIsSubmitting(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        subject: '',
        message: '',
        subscribe: false
      });
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-emerald-200 mb-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Contact Us</span>
          </div>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white font-medium">We're Here to Help</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
              Have questions about ICLEAS 2026? Our team is ready to assist you with submissions, registration, and any inquiries you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              
              {/* Contact Info Card - 2 columns */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 rounded-3xl p-10 shadow-2xl h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
                  
                  <div className="relative z-10 space-y-8">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                        <Leaf className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-white font-medium">Get in Touch</span>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-3">
                        Contact Information
                      </h2>
                      <p className="text-teal-200 leading-relaxed">
                        Reach out to us for any inquiries about ICLEAS 2026. We're here to help!
                      </p>
                    </div>

                    <div className="space-y-6 pt-4">
                      {/* Email */}
                      <div className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all">
                          <Mail className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-emerald-300 mb-1">Email Us</div>
                          <a href="mailto:info@icleas2026.org" className="text-white hover:text-emerald-300 transition-colors font-medium">
                            info@icleas2026.org
                          </a>
                          <div className="text-sm text-teal-300 mt-1">Response within 24 hours</div>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all">
                          <Phone className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-emerald-300 mb-1">Call Us</div>
                          <div className="text-white font-medium">+91-1234567890</div>
                          <div className="text-sm text-teal-300 mt-1">9 AM - 6 PM IST (Mon-Fri)</div>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all">
                          <MapPin className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-emerald-300 mb-1">Visit Us</div>
                          <div className="text-white leading-relaxed">
                            ScientiaForum HQ<br />
                            123 Science Avenue<br />
                            Metropolis, 12345
                          </div>
                        </div>
                      </div>

                      {/* Office Hours */}
                      <div className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all">
                          <Clock className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-emerald-300 mb-1">Office Hours</div>
                          <div className="text-white">Monday - Friday</div>
                          <div className="text-teal-300">9:00 AM - 6:00 PM IST</div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="pt-8 border-t border-white/10">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-1">24h</div>
                          <div className="text-xs text-teal-300">Response Time</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-1">24/7</div>
                          <div className="text-xs text-teal-300">Email Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - 3 columns */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-emerald-100">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-4">
                      <Send className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-bold text-slate-900">Send Us a Message</span>
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-3">
                      Have a Question?
                    </h2>
                    <p className="text-lg text-slate-600">
                      Fill out the form and we'll get back to you within 24-48 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-bold text-slate-900">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input 
                            id="name" 
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Your Full Name" 
                            required
                            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold text-slate-900">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input 
                            id="email" 
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com" 
                            required
                            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone and Organization Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-bold text-slate-900">
                          Phone <span className="text-slate-400 text-xs">(Optional)</span>
                        </label>
                        <input 
                          id="phone" 
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 890"
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="organization" className="block text-sm font-bold text-slate-900">
                          Organization <span className="text-slate-400 text-xs">(Optional)</span>
                        </label>
                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input 
                            id="organization" 
                            name="organization"
                            value={formState.organization}
                            onChange={handleChange}
                            placeholder="Your Organization"
                            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-bold text-slate-900">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none z-10" />
                        <select
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors appearance-none bg-white cursor-pointer"
                        >
                          <option value="">Select a subject</option>
                          <option value="General">General Inquiry</option>
                          <option value="Submission">Paper Submission</option>
                          <option value="Registration">Registration Issue</option>
                          <option value="Technical">Technical Support</option>
                          <option value="Sponsorship">Sponsorship Inquiry</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-bold text-slate-900">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Please describe your inquiry in detail..."
                        rows={6}
                        required
                        minLength={50}
                        maxLength={2000}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                      />
                      <div className="text-xs text-slate-500 text-right">
                        Minimum 50 characters
                      </div>
                    </div>

                    {/* Subscribe Checkbox */}
                    <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-100">
                      <div className="flex items-start space-x-3">
                        <input 
                          type="checkbox"
                          id="subscribe" 
                          name="subscribe"
                          checked={formState.subscribe}
                          onChange={handleChange}
                          className="w-5 h-5 mt-0.5 rounded border-2 border-emerald-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer"
                        />
                        <label htmlFor="subscribe" className="text-sm text-slate-700 cursor-pointer">
                          <span className="font-semibold">Subscribe to conference updates</span>
                          <span className="block text-xs text-slate-600 mt-1">
                            Receive the latest news and important dates for ICLEAS 2026
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Success Message */}
                    {submitStatus?.success && (
                      <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-emerald-900 mb-1">Success!</div>
                            <div className="text-sm text-emerald-700">{submitStatus.message}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quick Response</h3>
              <p className="text-slate-600">Average response time of 24 hours for all inquiries</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Global Support</h3>
              <p className="text-slate-600">Supporting participants from around the world</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-500 to-green-500 mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Team</h3>
              <p className="text-slate-600">Dedicated team ready to assist with any questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              Check our FAQ section or explore other pages for more information
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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