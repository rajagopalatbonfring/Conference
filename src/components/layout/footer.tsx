// import React from 'react';
// import Link from 'next/link';
// import { Twitter, Linkedin, Facebook } from 'lucide-react';
// import { importantDates } from '@/lib/data';

// export default function Footer() {
//   return (
//     <footer className="w-full bg-card/50 border-t border-border/50" id="contact">
//       <div className="container max-w-screen-xl">
//         <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
//           <div>
//             <h3 className="font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
//             <ul className="mt-4 space-y-2">
//               <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link></li>
//               <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
//               <li><Link href="/cfp" className="text-sm text-muted-foreground hover:text-foreground">Call for Papers</Link></li>
//               <li><Link href="/registration" className="text-sm text-muted-foreground hover:text-foreground">Registration</Link></li>
//               <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold uppercase tracking-wider text-foreground">Important Dates</h3>
//             <ul className="mt-4 space-y-2">
//               {importantDates.slice(0, 4).map(item => (
//                 <li key={item.title}>
//                   <p className="text-sm text-muted-foreground">{item.title}: {item.date}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold uppercase tracking-wider text-foreground">Follow Us</h3>
//             <div className="mt-4 flex space-x-4">
//               <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
//               <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
//               <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
//             </div>
//           </div>
          
//           <div>
//             <h3 className="font-semibold uppercase tracking-wider text-foreground">Contact Info</h3>
//             <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
//                 <li><a href="mailto:info@icleas2026.org" className="hover:text-foreground">info@icleas2026.org</a></li>
//                 <li>WhatsApp: +91-1234567890</li>
//                 <li>ScientiaForum HQ, Metropolis</li>
//             </ul>
//           </div>

//         </div>
//         <div className="border-t border-border/50 py-6 text-center text-sm text-muted-foreground">
//           <p>&copy; {new Date().getFullYear()} ScientiaForum. All rights reserved.</p>
//            <div className="mt-2 space-x-4">
//               <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
//               <span>|</span>
//               <Link href="/terms" className="hover:text-foreground">Terms & Conditions</Link>
//               <span>|</span>
//                <Link href="/faq" className="hover:text-foreground">FAQ</Link>
//                <span>|</span>
//               <Link href="/code-of-conduct" className="hover:text-foreground">Code of Conduct</Link>
//            </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



















import React from 'react';
import { 
  Twitter, Linkedin, Facebook, Mail, Phone, MapPin, 
  ArrowRight, Calendar, Send, Globe, Award, Leaf 
} from 'lucide-react';

const importantDates = [
  { title: "Paper Submission Deadline", date: "March 15, 2026" },
  { title: "Notification of Acceptance", date: "April 30, 2026" },
  { title: "Early Bird Registration", date: "May 15, 2026" },
  { title: "Conference Dates", date: "June 25-26, 2026" }
];

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      {/* Decorative Orbs - Nature colors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10 bg-gradient-to-br from-emerald-950 via-teal-950 to-green-950 ">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Send className="w-6 h-6 text-orange-300" />
                    <span className="text-sm font-semibold text-orange-300 uppercase tracking-wider">Stay Updated</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">Subscribe to Our Newsletter</h3>
                  <p className="text-teal-200">Receive updates on ICLEAS 2026, sustainability research, and environmental science news.</p>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    />
                    <button className="px-8 py-4 bg-orange-400 rounded-xl font-semibold hover:bg-emerald-500 transition-all shadow-xl flex items-center gap-2 whitespace-nowrap">
                      Subscribe
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <a href="/" className="flex items-center gap-4 group">
                    <div className="relative">
                      
                      {/* Logo container */}
                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-none flex items-center justify-center  transition-all duration-300 group-hover:scale-105">
                          <Leaf className="w-12 h-12 text-emerald-600" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-white group-hover:from-emerald-600 group-hover:via-teal-600 group-hover:to-lime-700 transition-all duration-300">
                        ICLEAS 20<span className="text-orange-400">26</span>
                      </div>
                    </div>
                  </a>
                </div>
                <p className="text-teal-200 leading-relaxed mb-6">
                  International Conference on Life, Environmental & Applied Sciences
                </p>
                <div className="flex items-center gap-2 text-teal-200 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">June 25-26, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-teal-200">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">Online Conference</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4 text-white">Connect With Us</h4>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    aria-label="Twitter"
                    className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all group"
                  >
                    <Twitter className="w-5 h-5 text-teal-200 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="#" 
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-teal-200 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all group"
                  >
                    <Facebook className="w-5 h-5 text-teal-200 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About ScientiaForum', href: '/about-scientiaforum' },
                  { label: 'Call for Papers', href: '/cfp' },
                  { label: 'Speakers', href: '/speakers' },
                  { label: 'Registration', href: '/registration' },
                  { label: 'Contact Us', href: '/contact' },
                  { label: 'Blogs', href: '/blog' },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href}
                      className="text-teal-200 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Dates */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <h4 className="font-bold text-lg text-white">Important Dates</h4>
              </div>
              <ul className="space-y-4">
                {importantDates.map((item, idx) => (
                  <li key={idx} className="pb-4 border-b border-white/10 last:border-0">
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-sm text-teal-300">{item.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Get In Touch</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:info@icleas2026.org"
                    className="flex items-start gap-3 text-teal-200 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-teal-300 mb-1">Email Us</p>
                      <p className="font-medium">info@icleas2026.org</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+911234567890"
                    className="flex items-start gap-3 text-teal-200 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-teal-300 mb-1">WhatsApp / Phone</p>
                      <p className="font-medium">+91-1234567890</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-teal-200">
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-teal-300 mb-1">Location</p>
                    <p className="font-medium">Online – Global Participation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-teal-200 text-sm">
                © {new Date().getFullYear()} ScientiaForum. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="/privacy" className="text-teal-200 hover:text-white transition-colors">Privacy Policy</a>
                <span className="text-white/20">•</span>
                <a href="/terms" className="text-teal-200 hover:text-white transition-colors">Terms & Conditions</a>
                <span className="text-white/20">•</span>
                <a href="/faq" className="text-teal-200 hover:text-white transition-colors">FAQ</a>
                <span className="text-white/20">•</span>
                <a href="/code-of-conduct" className="text-teal-200 hover:text-white transition-colors">Code of Conduct</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}