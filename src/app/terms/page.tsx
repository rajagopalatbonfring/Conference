import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} />
            <span>Terms & Conditions</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24">
        <div className="prose max-w-4xl mx-auto">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the ICLEAS 2026 website and its services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2>2. Conference Participation Rules</h2>
          <p>
            All participants, including attendees, speakers, sponsors, and volunteers, are required to agree with the conference's <Link href="/code-of-conduct">Code of Conduct</Link>. We expect cooperation from all participants to help ensure a safe and respectful environment for everybody.
          </p>

          <h2>3. Cancellation & Refund Policy</h2>
          <p>
            All registration cancellations and refund requests must be made in writing as specified in our <Link href="/refund-policy">Refund Policy</Link>. Refunds will be processed according to the deadlines and terms outlined on that page.
          </p>
          
          <h2>4. Liability Limitations</h2>
          <p>
            The organizers of ICLEAS 2026 (ScientiaForum) are not liable for any loss, injury, or damage to any person or property, however caused. The views expressed by speakers are their own and do not necessarily reflect the views of the conference organizers.
          </p>

          <h2>5. Intellectual Property Rights</h2>
          <p>
            Authors retain copyright of their work. By submitting a paper, authors grant the conference organizers a non-exclusive license to publish and distribute the work in the conference proceedings and other related materials. All other content on this website is the property of ScientiaForum and protected by copyright laws.
          </p>

          <h2>6. Termination Rights</h2>
          <p>
            The conference organizers reserve the right to refuse/cancel a registration at any time. If a registration is canceled by the organizers for reasons other than a violation of the Code of Conduct, a full refund will be issued.
          </p>
          
          <h2>7. Dispute Resolution</h2>
          <p>
            Any disputes arising out of or in connection with this conference shall be governed by and construed in accordance with the laws of the jurisdiction where ScientiaForum is registered.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which ScientiaForum is based, without regard to its conflict of law provisions.
          </p>

          <h2>9. Contact for Legal Inquiries</h2>
           <p>
            For any legal questions or concerns regarding these terms, please contact us at <a href="mailto:info@icleas2026.org">info@icleas2026.org</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
