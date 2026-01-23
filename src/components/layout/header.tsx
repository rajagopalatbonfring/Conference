// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/cfp", label: "Call for Papers" },
//   { href: "/dates", label: "Important Dates" },
//   { href: "/speakers", label: "Speakers" },
//   { href: "/program", label: "Program" },
//   { href: "/registration", label: "Registration" },
//   { href: "/committee", label: "Committee" },
//   { href: "/blog", label: "Blog" },
//   { href: "/contact", label: "Contact Us" },
// ];

// export default function Header() {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const pathname = usePathname();

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 max-w-screen-xl items-center">
//         <div className="mr-4 flex">
//           <Link href="/" className="mr-6 flex items-center space-x-2">
//             <span className="font-bold sm:inline-block">ICLEAS 2026</span>
//           </Link>
//         </div>

//         <div className="flex flex-1 items-center justify-end">
//            <nav className="hidden items-center gap-1 text-sm lg:flex">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className={cn(
//                   "rounded-md px-3 py-2 font-medium transition-colors",
//                   pathname === link.href
//                     ? "text-primary"
//                     : "text-foreground/70 hover:text-foreground"
//                 )}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Button
//                 variant="ghost"
//                 className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
//               >
//                 <Menu className="h-6 w-6" />
//                 <span className="sr-only">Toggle Menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="pr-0">
//               <div className="flex justify-between items-center px-4 mb-6">
//                 <Link
//                     href="/"
//                     className="flex items-center space-x-2"
//                     onClick={() => setIsOpen(false)}
//                 >
//                     <span className="font-bold">ICLEAS 2026</span>
//                 </Link>
//                 <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
//                     <X className="h-6 w-6" />
//                 </Button>
//               </div>
//               <div className="flex flex-col space-y-2">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.label}
//                     href={link.href}
//                     className={cn(
//                       "mx-2 rounded-md px-4 py-2 text-foreground",
//                        pathname === link.href ? "bg-muted font-semibold" : "font-medium"
//                     )}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }















"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, ArrowRight, Calendar, Globe, Leaf } from "lucide-react";
import { usePathname } from "next/navigation";
// import { Button } from '@/components/ui/button';  // kept commented as in original

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cfp", label: "Call for Papers" },
  { href: "/tracks", label: "Conference Tracks" },
  { href: "/speakers", label: "Speakers" },
  // { href: "/program", label: "Program" },
  // { href: "/registration", label: "Registration" },
  { href: "/committee", label: "Committee" },
  { href: "/publication", label: "Publication" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar - Updated to nature theme */}
      <div className="bg-gradient-to-r from-gray-900 via-teal-950 to-green-950 text-white py-2 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-xs md:text-sm gap-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-white">June 25-26, 2026</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-white">Online Conference</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-orange-200 font-medium">Call for Papers Now Open</span>
            </div>
            <div className="flex gap-6">
              <a 
               className="text-sm group inline-flex items-center gap-1 text-teal-200 font-bold hover:text-teal-100 transition-all"
               href="/registration"
              >
                Register
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                className="text-sm group inline-flex items-center gap-1 text-white font-bold hover:text-orange-200 transition-all"
                href="/submission"
              >
                Submit Paper
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white shadow-2xl" 
            : "bg-white"
        }`}
      >
        {/* Gradient Border  */}
        <div className="h-1 bg-gradient-to-r from-gray-400 via-black to-gray-400"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            {/* Logo Section - More Prominent */}
            <a href="/" className="flex items-center gap-4 group">

              <img className="w-64" src="/images/icon.jpg" alt="" />
              {/* <div className="relative">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-none flex items-center justify-center  transition-all duration-300 group-hover:scale-105">
                    <Leaf className="w-12 h-12 text-emerald-600" />
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-black group-hover:from-emerald-600 group-hover:via-teal-600 group-hover:to-lime-700 transition-all duration-300">
                  ICLEAS 20<span className="text-orange-400">26</span>
                </div>
              </div> */}
            </a>

            {/* Desktop Navigation - Floating Style */}
            <nav className="hidden lg:flex items-center gap-2 bg-orange-50 rounded-full px-2 py-2 border border-orange-100 shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-emerald-600 to-teal-600 text-white shadow-lg"
                      : "text-gray-800 hover:bg-white hover:text-teal-700 hover:shadow-md"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button - Styled */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
              aria-label="Toggle menu"
            >
              <div className="relative">
                {isOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Premium Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-50 transition-all duration-500 ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          style={{ top: '0' }}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-emerald-950/80 backdrop-blur-md transition-opacity duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Menu Panel */}
          <div
            className={`absolute -top-2 right-0 w-full max-w-md h-full bg-white shadow-2xl transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-4 group p-8">
                <div className="relative">
                  
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-none flex items-center justify-center  transition-all duration-300 group-hover:scale-105">
                      <Leaf className="w-12 h-12 text-emerald-600" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-black group-hover:from-emerald-600 group-hover:via-teal-600 group-hover:to-lime-700 transition-all duration-300">
                    ICLEAS 20<span className="text-orange-400">26</span>
                  </div>
                </div>
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-12 h-12 rounded-xl bg-none flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="relative transition-all">
                    <X className="h-6 w-6 text-gray-500 hover:text-red-600" />
                </div>
              </button>
            </div>


            {/* Menu Items */}
            <nav className="p-4 pt-0 overflow-y-auto h-[calc(100%-180px)]">
              <div className="space-y-2">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-5 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      pathname === link.href
                        ? "bg-emerald-600 t text-white shadow-lg"
                        : "bg-emerald-50 text-gray-900 hover:bg-emerald-100"
                    }`}
                    style={{
                      animationDelay: `${idx * 50}ms`,
                      animation: isOpen ? "slideInRight 0.4s ease-out forwards" : "none",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{link.label}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${
                        pathname === link.href ? "text-white" : "text-teal-500"
                      }`} />
                    </div>
                  </a>
                ))}
              </div>
            </nav>

            {/* Mobile CTA Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-emerald-50 border-t border-emerald-100 space-y-3">
              <a
                href="/registration"
                onClick={() => setIsOpen(false)}
                className="block w-full px-6 py-3.5 border-2 border-emerald-700 text-gray-900 rounded-xl font-bold text-center hover:bg-emerald-700 hover:text-white transition-all"
              >
                Register Now
              </a>
              <a
                href="/submission"  // changed to /cfp to match "Submit Paper" context
                onClick={() => setIsOpen(false)}
                className="block w-full px-6 py-3.5 bg-white/90 text-orange-400 rounded-xl font-bold text-center shadow-lg"
              >
                Submit Your Paper
              </a>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}