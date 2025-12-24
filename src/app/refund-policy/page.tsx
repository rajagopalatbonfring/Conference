import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} />
            <span>Refund Policy</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Refund Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24">
        <div className="prose max-w-4xl mx-auto">
          <h2>1. General Policy</h2>
          <p>
            This policy outlines the terms and conditions for registration fee refunds for the International Conference on Life, Environmental &amp; Applied Sciences (ICLEAS 2026).
          </p>

          <h2>2. Cancellation by Registrant</h2>
          <p>
            All refund requests must be made in writing and sent to the conference secretariat via email at <a href="mailto:registration@icleas.com">registration@icleas.com</a>.
          </p>
          <ul>
            <li><strong>Full Refund:</strong> Refund requests received on or before May 25, 2026, will be eligible for a full refund, minus a $50 administrative processing fee.</li>
            <li><strong>Partial Refund:</strong> No partial refunds will be granted.</li>
            <li><strong>No Refund:</strong> Refund requests received after May 25, 2026, will not be eligible for a refund.</li>
          </ul>

          <h2>3. Non-Attendance</h2>
          <p>
            No refunds will be given for non-attendance ("no-shows").
          </p>
          
          <h2>4. Conference Cancellation</h2>
          <p>
            In the unlikely event that ICLEAS 2026 is cancelled by the organizer, ScientiaForum, all registration fees will be fully refunded to registered participants.
          </p>

          <h2>5. Processing Time</h2>
          <p>
            All approved refunds will be processed within 30 days after the conclusion of the conference.
          </p>
        </div>
      </div>
    </div>
  );
}
