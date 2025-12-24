'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Search, Mail } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const allFaqs = [
    {
        category: 'General',
        faqs: [
            { question: 'What is ICLEAS 2026?', answer: 'The International Conference on Life, Environmental, and Applied Sciences (ICLEAS) 2026 is a premier interdisciplinary platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in the fields of Life, Environmental, and Applied Sciences.' },
            { question: 'When & where is the conference?', answer: 'ICLEAS 2026 is scheduled for June 25–26, 2026. It is a fully online conference, so you can attend from anywhere in the world.' },
            { question: 'Is the conference virtual or in-person?', answer: 'The conference is 100% virtual, hosted on our state-of-the-art online platform.' },
            { question: 'Who should attend?', answer: 'Academics, researchers, students, industry professionals, and policymakers interested in the fields of life sciences, environmental studies, and applied technologies.' },
        ],
    },
    {
        category: 'Submissions & Papers',
        faqs: [
            { question: 'When is the submission deadline?', answer: 'The abstract submission deadline is March 31, 2026. Please see the Important Dates page for the full timeline.' },
            { question: 'What are the format requirements for papers?', answer: 'Papers should be 8-10 pages long, formatted according to the templates provided on the Call for Papers page. The required format is PDF.' },
            { question: 'How long does the peer review process take?', answer: 'The double-blind peer review process typically takes 2-3 weeks after the submission deadline.' },
            { question: 'What if my paper is rejected?', answer: 'You will receive constructive feedback from the reviewers, which you can use to improve your paper for submission to other conferences or journals.' },
            { question: 'Is there a submission fee?', answer: 'No, there is no fee for submitting a paper to ICLEAS 2026.' },
            { question: 'Can I submit multiple papers?', answer: 'Yes, you can submit more than one paper. However, if multiple papers are accepted, a separate registration fee is required for each paper.' },
        ],
    },
    {
        category: 'Registration & Ticketing',
        faqs: [
            { question: 'How do I register for the conference?', answer: 'You can register through the "Registration" page on our website. Simply choose your category and follow the payment instructions.' },
            { question: "What are the registration fees?", answer: "We have different registration tiers for Students, Academics/Professionals, Industry participants, and Listeners. Please check the Registration page for detailed pricing." },
            { question: 'Can I get an invoice for my registration?', answer: 'Yes, an invoice will be automatically sent to your registered email address after payment. You can also request a detailed invoice during the registration process.' },
            { question: "What's included in the registration fee?", answer: "Registration includes access to all live sessions, recorded sessions for 30 days post-conference, digital conference proceedings, and a certificate of attendance or presentation." },
            { question: "What is the cancellation policy?", answer: "You can receive a full refund (minus a processing fee) if you cancel before May 25, 2026. No refunds are available after this date. Please see our Refund Policy page for full details." },
            { question: 'Can I transfer my registration?', answer: 'Yes, you can transfer your registration to another person. Please contact our support team with the details of the new attendee at least one week before the conference begins.' },
        ],
    },
    {
        category: 'Virtual Attendance',
        faqs: [
            { question: 'How do I join the virtual conference?', answer: 'A unique link to access the virtual platform will be emailed to all registered participants one week before the conference starts.' },
            { question: 'Will the conference sessions be recorded?', answer: 'Yes, all sessions will be recorded and made available to registered attendees for 30 days following the conference.' },
            { question: 'Can I ask questions and interact during sessions?', answer: 'Absolutely. Our platform includes a live Q&A feature and chat functionality for interaction.' },
            { question: 'What happens if my internet connection drops?', answer: 'You can rejoin the session at any time using your access link. Since sessions are recorded, you can catch up on anything you missed.' },
            { question: 'Can I attend specific sessions only?', answer: 'Yes, your registration gives you the flexibility to join any session you are interested in throughout the conference.' },
        ],
    },
    {
        category: 'Technical',
        faqs: [
            { question: 'What are the technical requirements to attend?', answer: 'A stable internet connection (5 Mbps recommended), a modern web browser (Chrome, Firefox, Safari, or Edge), and a computer or tablet. A desktop or laptop is recommended for the best experience.' },
            { question: 'Which web browsers are supported?', answer: 'The latest versions of Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge are all supported.' },
            { question: 'How do I get my certificate of attendance/presentation?', answer: 'Certificates will be available for download from your participant dashboard after the conference concludes.' },
            { question: 'Who do I contact if I have technical issues during the event?', answer: 'We will have a live technical support team available via email and chat during the conference. Contact details will be provided on the virtual platform.' },
        ],
    },
    {
        category: 'Other',
        faqs: [
            { question: 'Is accommodation provided for this conference?', answer: 'As ICLEAS 2026 is a fully online event, no accommodation is required or provided.' },
            { question: 'Do you offer travel grants?', answer: 'Since the conference is virtual, there are no travel grants.' },
            { question: 'Can my company sponsor the conference?', answer: 'Yes, we have several sponsorship opportunities available. Please contact us at partners@icleas2026.org for more information.' },
        ],
    }
];

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = allFaqs.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="bg-background text-foreground">
      {/* Page Header */}
      <section className="bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} />
            <span>FAQ</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24 space-y-20">
        
        {/* Search Bar */}
        <section id="search-faq" className="max-w-2xl mx-auto">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                    type="search"
                    placeholder="Search for a question..."
                    className="pl-10 text-base"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </section>

        {/* FAQ Accordion */}
        <section id="faq-list" className="max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((category, catIndex) => (
              <div key={category.category} className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`category-${catIndex}-faq-${faqIndex}`}>
                      <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground">No questions match your search.</p>
          )}
        </section>

        {/* Still Have Questions? */}
        <section id="contact-cta" className="text-center bg-card/50 py-16 rounded-md">
            <div className="container">
                <h2 className="text-3xl font-bold text-primary">Still have questions?</h2>
                <p className="mt-4 max-w-xl mx-auto text-muted-foreground">If you can't find the answer you're looking for, please don't hesitate to reach out to our team.</p>
                <div className="mt-8">
                    <Button size="lg" asChild>
                        <Link href="/contact"><Mail className="mr-2 h-4 w-4" /> Contact Us</Link>
                    </Button>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
