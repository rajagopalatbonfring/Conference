import Link from 'next/link';
import { ChevronRight, Mail, Phone, MapPin, Building, FileText, Ticket, Laptop, Handshake, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from './_components/contact-form';

const contactPoints = [
    {
        title: "General Inquiries",
        icon: Info,
        email: "info@icleas2026.org",
        whatsapp: "+91-1234567890",
        details: "Response within 24 hours"
    },
    {
        title: "Paper Submissions",
        icon: FileText,
        email: "submissions@icleas2026.org",
        contactPerson: "Dr. David Kim",
        details: "Response within 48 hours"
    },
    {
        title: "Registration & Ticketing",
        icon: Ticket,
        email: "register@icleas2026.org",
        whatsapp: "+91-1234567891",
        details: "9 AM - 6 PM IST (Mon-Fri)"
    },
    {
        title: "Technical Support",
        icon: Laptop,
        email: "support@icleas2026.org",
        phone: "+91-9876543210",
        details: "Available during conference hours"
    },
    {
        title: "Sponsorship & Partnerships",
        icon: Handshake,
        email: "partners@icleas2026.org",
        contactPerson: "Mr. Alex Johnson",
        details: "Let's collaborate"
    },
     {
        title: "Office Address",
        icon: Building,
        address: "ScientiaForum HQ, 123 Science Avenue, Metropolis, 12345",
        phone: "+1 234 567 890",
        details: "9 AM - 6 PM IST, Mon-Fri"
    }
];

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      {/* 1. Page Header */}
      <section className="bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} />
            <span>Contact Us</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We're here to help with any questions you may have about ICLEAS 2026.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24 space-y-20">

        {/* 2. Contact Information */}
        <section id="contact-info">
          <h2 className="text-3xl font-bold text-primary text-center">Get in Touch</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactPoints.map((point) => {
                const Icon = point.icon;
                return (
                    <Card key={point.title} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                        <CardHeader className="flex-row items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-md">
                                <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle>{point.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            {point.email && <p><a href={`mailto:${point.email}`} className="text-primary hover:underline break-all">{point.email}</a></p>}
                            {point.whatsapp && <p><strong>WhatsApp:</strong> {point.whatsapp}</p>}
                            {point.phone && <p><strong>Phone:</strong> {point.phone}</p>}
                            {point.contactPerson && <p><strong>Contact:</strong> {point.contactPerson}</p>}
                            {point.address && <p>{point.address}</p>}
                            <p className="text-muted-foreground">{point.details}</p>
                        </CardContent>
                    </Card>
                );
            })}
          </div>
        </section>

        {/* 3. Contact Form */}
        <section id="contact-form" className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-primary text-center">Send Us a Message</h2>
           <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            Have a specific question? Fill out the form below and a member of our team will get back to you. We aim to respond within 24-48 business hours.
           </p>
           <Card className="mt-8 bg-card/50 border-border/50">
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
           </Card>
           <p className="mt-4 text-center text-sm text-muted-foreground">Check your spam/promotions folder for our response.</p>
        </section>

      </div>
    </div>
  );
}
