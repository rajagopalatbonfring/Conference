import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CodeOfConductPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} />
            <span>Code of Conduct</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Code of Conduct
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Our commitment to a safe and inclusive environment.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24">
        <div className="prose max-w-4xl mx-auto">
          <h2>Our Pledge</h2>
          <p>
            We, the organizers of ICLEAS 2026, are dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of conference participants in any form.
          </p>

          <h2>Expected Behavior</h2>
          <p>
            All participants are expected to be respectful and considerate of others. This includes:
          </p>
          <ul>
            <li>Being professional and courteous in all communications.</li>
            <li>Valuing a diversity of views and opinions.</li>
            <li>Being considerate in your speech and actions.</li>
            <li>Refraining from demeaning, discriminatory, or harassing behavior and speech.</li>
          </ul>

          <h2>Unacceptable Behavior</h2>
          <p>
            Unacceptable behaviors include, but are not limited to:
          </p>
           <ul>
            <li>Intimidating, harassing, abusive, discriminatory, derogatory or demeaning conduct.</li>
            <li>Offensive verbal comments related to gender, sexual orientation, race, religion, or disability.</li>
            <li>Use of sexualized images, language, or any form of sexual attention.</li>
            <li>Disruption of talks or other events.</li>
          </ul>

          <h2>Reporting</h2>
          <p>
            If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of the conference staff immediately. You can reach us at <a href="mailto:conduct@icleas.com">conduct@icleas.com</a>. All reports will be handled confidentially.
          </p>

          <h2>Consequences</h2>
          <p>
            Participants asked to stop any harassing behavior are expected to comply immediately. If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.
          </p>
        </div>
      </div>
    </div>
  );
}
