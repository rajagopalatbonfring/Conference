import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} />
            <span>Privacy Policy</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24">
        <div className="prose max-w-4xl mx-auto">
          <h2>Introduction</h2>
          <p>
            Welcome to ICLEAS 2026. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at <a href="mailto:info@icleas2026.org">info@icleas2026.org</a>.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you register for the conference, express an interest in obtaining information about us or our products and services, when you participate in activities on the website (such as submitting a paper or contacting us) or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following: Name and Contact Data, Credentials, and Payment Data.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul>
            <li>To facilitate account creation and logon process.</li>
            <li>To send you marketing and promotional communications, if you have opted in.</li>
            <li>To send administrative information to you, such as details about your registration or submission.</li>
            <li>To manage your registration and participation in the conference.</li>
            <li>To post testimonials or feedback with your consent.</li>
            <li>To request feedback on our services.</li>
          </ul>

          <h2>Data Protection & Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
          </p>
          
          <h2>Your Rights (GDPR, CCPA)</h2>
          <p>
            In some regions (like the European Economic Area and California), you have rights that allow you greater access to and control over your personal information. You may request to review, change, or delete your data by contacting us.
          </p>

          <h2>Cookies & Tracking Technologies</h2>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. We use them to operate our website, and we do not use them for tracking or advertising purposes.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Our website may link to other websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. We are not responsible for the privacy practices of these third parties.
          </p>

          <h2>Data Retention</h2>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
          </p>

          <h2>Children's Privacy</h2>
          <p>
            We do not knowingly solicit data from or market to children under 18 years of age. By using the website, you represent that you are at least 18.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at <a href="mailto:info@icleas2026.org">info@icleas2026.org</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
