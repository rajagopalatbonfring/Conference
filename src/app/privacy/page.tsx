import React from 'react';
import { ChevronRight, Shield} from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(52,211,153,0.2),rgba(255,255,255,0))]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-200 mb-8 justify-center">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Privacy Policy</span>
            </div>
            
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-4">
                <Shield className="w-5 h-5 text-blue-300" />
                <span className="text-sm text-blue-200 font-bold uppercase tracking-wider">Your Privacy Matters</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Privacy <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Policy</span>
              </h1>
              
              <p className="text-lg md:text-xl text-teal-100 leading-relaxed">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gradient-to-b from-white to-emerald-50 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Introduction</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Welcome to ICLEAS 2026. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at{' '}
                  <a href="mailto:info@icleas2026.org" className="text-emerald-600 font-semibold hover:text-emerald-700">
                    info@icleas2026.org
                  </a>.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Information We Collect</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  We collect personal information that you voluntarily provide to us when you register for the conference, express an interest in obtaining information about us or our products and services, when you participate in activities on the website (such as submitting a paper or contacting us) or otherwise when you contact us.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following: <strong>Name and Contact Data, Credentials, and Payment Data</strong>.
                </p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">How We Use Your Information</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                </p>
                <ul className="space-y-3">
                  {[
                    "To facilitate account creation and logon process.",
                    "To send you marketing and promotional communications, if you have opted in.",
                    "To send administrative information to you, such as details about your registration or submission.",
                    "To manage your registration and participation in the conference.",
                    "To post testimonials or feedback with your consent.",
                    "To request feedback on our services."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Data Protection & Security */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Data Protection & Security</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Your Rights (GDPR, CCPA)</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  In some regions (like the European Economic Area and California), you have rights that allow you greater access to and control over your personal information. You may request to review, change, or delete your data by contacting us.
                </p>
              </div>
            </div>

            {/* Cookies & Tracking */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Cookies & Tracking Technologies</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. We use them to operate our website, and we do not use them for tracking or advertising purposes.
                </p>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Third-Party Services</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Our website may link to other websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. We are not responsible for the privacy practices of these third parties.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Data Retention</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-lime-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Children's Privacy</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  We do not knowingly solicit data from or market to children under 18 years of age. By using the website, you represent that you are at least 18.
                </p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                  <p className="text-xl text-emerald-100 leading-relaxed">
                    If you have questions or comments about this policy, you may email us at{' '}
                    <a href="mailto:info@icleas2026.org" className="font-bold text-white hover:text-emerald-200 underline">
                      info@icleas2026.org
                    </a>.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}