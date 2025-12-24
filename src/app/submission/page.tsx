import Link from 'next/link';
import { ChevronRight, Download, Mail, CopyCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SubmissionEmailCard from './_components/submission-email-card';

export default function SubmissionPage() {
  return (
    <div className="bg-background text-foreground">
      {/* 1. Page Header */}
      <section className="bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} />
            <span>Submission</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Paper Submission
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Submit your work to ICLEAS 2026.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24 space-y-20">
        
        {/* 2. Submission System */}
        <section id="submission-system" className="text-center">
            <h2 className="text-3xl font-bold text-primary">Submission System</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                All papers must be submitted via email to our conference secretariat. Please follow the instructions carefully to ensure your submission is processed correctly.
            </p>
            <SubmissionEmailCard />
            <p className="mt-4 text-sm text-muted-foreground">We are working on integrating with EasyChair/CMT for future conferences.</p>
        </section>

        {/* 3. Paper Templates */}
        <section id="templates" className="text-center">
            <h2 className="text-3xl font-bold text-primary">Paper Templates</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                To ensure consistency and streamline the review process, all submissions must use our official templates.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild>
                    <Link href="#"> <Download className="mr-2 h-4 w-4"/> Word Template </Link>
                </Button>
                 <Button size="lg" variant="outline" asChild>
                    <Link href="#"> <Download className="mr-2 h-4 w-4"/> LaTeX Template </Link>
                </Button>
            </div>
        </section>
        
        {/* 4. Review Process */}
        <section id="review-process" className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center">Review Process</h2>
             <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
                We follow a rigorous double-blind peer review process to ensure the quality of all accepted papers.
             </p>
             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-card/50 rounded-md border-border/50">
                    <h3 className="font-semibold text-lg">1. Initial Screening</h3>
                    <p className="mt-2 text-muted-foreground">Submissions are checked for scope, formatting, and plagiarism.</p>
                </div>
                <div className="text-center p-6 bg-card/50 rounded-md border-border/50">
                    <h3 className="font-semibold text-lg">2. Peer Review</h3>
                    <p className="mt-2 text-muted-foreground">Anonymous manuscripts are sent to at least two independent reviewers.</p>
                </div>
                <div className="text-center p-6 bg-card/50 rounded-md border-border/50">
                    <h3 className="font-semibold text-lg">3. Final Decision</h3>
                    <p className="mt-2 text-muted-foreground">The program committee makes a final decision based on reviewer feedback.</p>
                </div>
             </div>
        </section>

        {/* 5. Plagiarism Policy */}
        <section id="plagiarism-policy" className="bg-card/50 p-8 md:p-12 rounded-md">
             <div className="flex items-center gap-6">
                <CopyCheck className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                     <h2 className="text-2xl font-bold text-primary">Plagiarism Policy</h2>
                     <p className="mt-2 text-muted-foreground">
                        ICLEAS has a zero-tolerance policy for plagiarism. All submissions are checked using professional plagiarism detection software. Any paper found to have a high similarity index or to be in violation of our originality policy will be rejected.
                     </p>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}
