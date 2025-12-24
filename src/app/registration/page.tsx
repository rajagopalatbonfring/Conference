import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronRight, CreditCard, Landmark, CheckCircle2 } from 'lucide-react';
import { registrationTiers } from '@/lib/data';

const registrationFaqs = [
  { question: "Is there a student discount?", answer: "Yes, we offer a discounted rate for students. Please select the 'Student' category during registration. You may be asked to provide proof of student status." },
  { question: "Can I get an invoice for my registration?", answer: "Yes, an invoice will be automatically generated and sent to your registered email address upon completion of payment. You can also request a detailed invoice for tax purposes during registration." },
  { question: "Can I change my registration category?", answer: "Yes, please contact our support team at registration@icleas.com to request a change in your registration category. The price difference will be adjusted accordingly." },
  { question: "What is the cancellation policy?", answer: "You can receive a full refund (minus a processing fee) if you cancel before May 25, 2026. Please refer to our refund policy page for detailed information." },
  { question: "Can I transfer my registration to someone else?", answer: "Yes, registrations can be transferred to another person. Please contact our support team with the details of the new attendee at least one week before the conference." },
];

export default function RegistrationPage() {
  return (
    <div className="bg-background text-foreground">
      {/* 1. Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 text-sm text-primary-foreground/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={16} />
            <span>Registration</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Conference Registration
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
            Secure your place at ICLEAS 2026. Registration is now open!
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24 space-y-20">
        
        {/* 2. Pricing Table */}
        <section id="pricing">
            <h2 className="text-3xl font-bold text-primary text-center">Registration Fees</h2>
            <Card className="mt-12 bg-card/50 border-border/50">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Early Bird (until Apr 30, 2026)</TableHead>
                    <TableHead>Regular</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {registrationTiers.map(tier => (
                    <TableRow key={tier.category}>
                      <TableCell className="font-semibold">{tier.category}</TableCell>
                      <TableCell>{tier.earlyBirdPrice}</TableCell>
                      <TableCell>{tier.regularPrice}</TableCell>
                      <TableCell>
                        <Button>Register</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
        </section>

        {/* 3. What's Included */}
        <section id="features">
          <h2 className="text-3xl font-bold text-primary text-center">What's Included</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border/50">
              <CardHeader><CardTitle>All Participants</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Access to all conference sessions (live)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Access to recorded sessions (post-event for 30 days)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Digital conference proceedings</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Certificate of attendance/presentation</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Access to digital materials (slides, abstracts)</span></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardHeader><CardTitle>Authors (Student & Academic)</CardTitle></CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Includes all standard features, plus:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Paper publication in indexed proceedings</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Dedicated virtual networking events</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Interactive Q&A sessions with speakers</span></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardHeader><CardTitle>Industry Participants</CardTitle></CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Includes all author features, plus:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Access to virtual sponsor booths</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Exclusive exhibitor networking sessions</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /><span>Company logo included in participant list (optional)</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
            <section id="payment-policy">
                <div className="space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Payment Methods</h2>
                        <div className="flex items-center gap-4 text-muted-foreground flex-wrap">
                            <div className="flex items-center gap-2"><CreditCard className="h-6 w-6" /> Credit/Debit Card</div>
                            <div className="flex items-center gap-2"><Landmark className="h-6 w-6" /> Bank Transfer</div>
                            <p className="font-bold text-lg">PayPal</p>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">All payments are processed securely. We accept all major credit cards, bank transfers, and PayPal.</p>
                    </div>
                     <div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Cancellation & Refund Policy</h2>
                         <div className="p-4 bg-card/50 rounded-md">
                             <p className="text-sm text-muted-foreground">
                                Full refunds (minus a $50 processing fee) are available for cancellations made on or before May 25, 2026. No refunds will be issued after this date. For more details, please see our <Link href="/refund-policy" className="text-primary hover:underline">Refund Policy</Link> page.
                             </p>
                         </div>
                    </div>
                </div>
            </section>
            <section id="faq">
                 <h2 className="text-2xl font-bold text-primary mb-4">Registration FAQs</h2>
                <Accordion type="single" collapsible className="w-full">
                {registrationFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
                </Accordion>
            </section>
        </div>

      </div>
    </div>
  );
}
