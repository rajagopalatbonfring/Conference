import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} />
            <span>Disclaimer</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Disclaimer
          </h1>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24">
        <div className="prose max-w-4xl mx-auto">
          <h2>General Information</h2>
          <p>
            The information provided by ScientiaForum on the ICLEAS 2026 website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>

          <h2>External Links Disclaimer</h2>
          <p>
            The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>

          <h2>Views Expressed Disclaimer</h2>
          <p>
            The views and opinions expressed by speakers, presenters, or attendees at ICLEAS 2026 are their own and do not necessarily reflect the official policy or position of ScientiaForum or the conference organizing committee.
          </p>
          
          <h2>Errors and Omissions Disclaimer</h2>
          <p>
            While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, ScientiaForum is not responsible for any errors or omissions or for the results obtained from the use of this information.
          </p>
        </div>
      </div>
    </div>
  );
}
