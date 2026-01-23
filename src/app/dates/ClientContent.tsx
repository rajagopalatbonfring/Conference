// src/app/dates/ClientContent.tsx
"use client"

import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, Calendar, Clock, AlertTriangle, Download, 
  CheckCircle, Circle, Timer, Bell, ArrowRight, Zap,
  CalendarCheck, FileText
} from 'lucide-react';

// Your original dates data – unchanged, only minor status/date tweaks for realism
const importantDates = [
  { event: 'Abstract Submission Opens', date: '2026-01-15T09:00:00Z', timezone: 'UTC', status: 'Completed' },
  { event: 'Abstract Submission Closes', date: '2026-02-28T23:59:00Z', timezone: 'UTC', status: 'Active' },
  { event: 'Abstract Acceptance Notification', date: '2026-03-15T23:59:00Z', timezone: 'UTC', status: 'Pending' },
  { event: 'Full Paper Submission Deadline', date: '2026-04-15T23:59:00Z', timezone: 'UTC', status: 'Pending' },
  { event: 'Peer Review Period Ends', date: '2026-05-10T23:59:00Z', timezone: 'UTC', status: 'Pending' },
  { event: 'Author Notification of Decision', date: '2026-05-25T23:59:00Z', timezone: 'UTC', status: 'Pending' },
  { event: 'Camera-Ready Submission Deadline', date: '2026-06-05T23:59:00Z', timezone: 'UTC', status: 'Pending' },
  { event: 'Final Program Released', date: '2026-06-20T23:59:00Z', timezone: 'UTC', status: 'Pending' },
  { event: 'Conference Dates', date: '2026-07-23T09:00:00Z', timezone: 'UTC', status: 'Pending' },
  { event: 'Conference Ends', date: '2026-07-24T17:00:00Z', timezone: 'UTC', status: 'Pending' }
];

const faqItems = [
  {
    question: "What happens if I miss a deadline?",
    answer: "Deadlines are firm to maintain the conference schedule. Late submissions cannot be accepted. Submit early to avoid any technical or personal delays."
  },
  {
    question: "Will deadlines be extended?",
    answer: "Extensions are rare and only announced officially on the website and via email. Subscribe to updates to stay informed."
  },
  {
    question: "What if I submit after the deadline?",
    answer: "Submissions after the posted deadline will not be considered for review or inclusion in the program."
  }
];

export default function ClientContent() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const activeDeadline = importantDates.find(d => d.status === 'Active');

  useEffect(() => {
    if (!activeDeadline) return;

    const timer = setInterval(() => {
      const now = new Date();
      const deadlineDate = new Date(activeDeadline.date);
      const difference = deadlineDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [activeDeadline]);

  const getStatusConfig = (status: string | undefined) => {
    switch (status) {
      case 'Completed':
        return { icon: CheckCircle, color: 'from-slate-500 to-slate-600', bg: 'bg-slate-100', text: 'text-slate-700', label: 'Completed' };
      case 'Active':
        return { icon: Zap, color: 'from-lime-500 to-green-500', bg: 'bg-lime-100', text: 'text-lime-800', label: 'Active Now' };
      case 'Pending':
        return { icon: Circle, color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50', text: 'text-emerald-700', label: 'Upcoming' };
      default:
        return { icon: Circle, color: 'from-slate-500 to-slate-600', bg: 'bg-slate-100', text: 'text-slate-700', label: 'Unknown' };
    }
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section – your exact design + SEO text */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(52,211,153,0.2),rgba(255,255,255,0))]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9nVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-200 mb-8 justify-center">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Important Dates ICLEAS 2026</span>
            </div>
            
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 mb-4">
                <Clock className="w-5 h-5 text-amber-300" />
                <span className="text-sm text-amber-200 font-bold uppercase tracking-wider">Conference Timeline</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Important <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Dates</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto font-light leading-relaxed">
                Full schedule for ICLEAS 2026 – abstract submission, full paper deadline, notifications, and conference dates (all in UTC)
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-0">
        
        {/* Countdown Timer Section – your exact original */}
        {activeDeadline && (
          <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-lime-950 via-green-900 to-emerald-950">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500/20 backdrop-blur-sm border border-lime-400/30 rounded-full mb-8">
                  <Timer className="w-5 h-5 text-lime-300 animate-pulse" />
                  <span className="text-sm text-lime-200 font-bold uppercase tracking-wider">Active Deadline Countdown</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Time Remaining Until {activeDeadline.event}
                </h2>
                <p className="text-xl text-lime-200 mb-12">
                  {activeDeadline.event} closes soon – submit your work now!
                </p>
                
                {/* Countdown Display */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                  {[
                    { value: timeLeft.days, label: 'Days' },
                    { value: timeLeft.hours, label: 'Hours' },
                    { value: timeLeft.minutes, label: 'Minutes' },
                    { value: timeLeft.seconds, label: 'Seconds' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all">
                      <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                        {String(item.value).padStart(2, '0')}
                      </div>
                      <div className="text-sm md:text-base text-lime-200 uppercase tracking-wider font-semibold">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2">
                    Submit Before Deadline
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Dates Timeline Section – your exact original */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                  <CalendarCheck className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-900 uppercase tracking-wider">Complete Timeline</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  ICLEAS 2026 Important Dates Timeline
                </h2>
                <p className="text-xl text-slate-600">From submission opening to conference conclusion – all dates in UTC</p>
              </div>
              
              {/* Timeline Items */}
              <div className="space-y-6">
                {importantDates.map((item, idx) => {
                  const statusConfig = getStatusConfig(item.status);
                  const StatusIcon = statusConfig.icon;
                  
                  return (
                    <div key={idx} className="group relative">
                      <div className={`bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all`}>
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                          {/* Status Icon */}
                          <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${statusConfig.color} flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg`}>
                            <StatusIcon className="w-8 h-8 text-white" />
                          </div>
                          
                          {/* Event Details */}
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-slate-900">{item.event}</h3>
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${statusConfig.bg} ${statusConfig.text}`}>
                                {statusConfig.label}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-slate-600">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(item.date).toLocaleDateString('en-US', { dateStyle: 'long' })}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{new Date(item.date).toLocaleTimeString('en-US', { timeStyle: 'short' })}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm bg-slate-100 px-3 py-1 rounded-full font-medium">{item.timezone}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Downloads – your exact original */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Download Calendar Files
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Add ICLEAS 2026 deadlines to Google Calendar, Outlook, or download offline
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white border-2 border-emerald-200 text-slate-900 rounded-full font-semibold text-lg hover:border-emerald-400 hover:shadow-lg transition-all inline-flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  Add to Google Calendar
                </button>
                <button className="px-8 py-4 bg-white border-2 border-teal-200 text-slate-900 rounded-full font-semibold text-lg hover:border-teal-400 hover:shadow-lg transition-all inline-flex items-center gap-2">
                  <Download className="w-5 h-5 text-teal-600" />
                  Download .ics File
                </button>
                <button className="px-8 py-4 bg-white border-2 border-lime-200 text-slate-900 rounded-full font-semibold text-lg hover:border-lime-400 hover:shadow-lg transition-all inline-flex items-center gap-2">
                  <FileText className="w-5 h-5 text-lime-600" />
                  Download PDF Schedule
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Important Reminders – your exact original */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-3xl p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Reminders</h3>
                    <div className="space-y-4">
                      {[
                        "Submit early – no extensions will be granted for any deadline",
                        "Check your email regularly for confirmation and notification updates",
                        "Subscribe to our newsletter for automatic deadline reminders"
                      ].map((reminder, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Bell className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <p className="text-slate-700 leading-relaxed">{reminder}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section – your exact original */}
        <section className="bg-gradient-to-b from-emerald-50 to-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  FAQ – Deadlines & Submissions
                </h2>
                <p className="text-xl text-slate-600">Common questions about important dates and late submissions</p>
              </div>
              
              <div className="space-y-4">
                {faqItems.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-6 text-left hover:bg-slate-50 transition-all flex items-center justify-between gap-4"
                    >
                      <span className="font-bold text-slate-900 flex-1 text-lg">{faq.question}</span>
                      <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-90' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-6 pt-2">
                        <div className="h-px bg-slate-200 mb-4"></div>
                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
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
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Don't Miss Any ICLEAS 2026 Deadlines
              </h2>
              <p className="text-xl text-teal-200">
                Subscribe now to receive automatic reminders for submission, notification, and conference dates
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl inline-flex items-center gap-2">
                  Subscribe to Updates
                  <Bell className="w-5 h-5" />
                </button>
                <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                  View Full Guidelines
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}