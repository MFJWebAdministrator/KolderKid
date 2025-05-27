import React from 'react';
import { useScrollToTop } from './hooks/useScrollToTop';

function TermsOfService() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-kolder-blue to-kolder-fire text-transparent bg-clip-text">
          Terms of Platform Use
        </h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Compliance with Global Laws</h2>
            <p className="leading-relaxed mb-4">
              Kolderkid Universe operates in full compliance with major international data protection and privacy laws, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>General Data Protection Regulation (GDPR) – European Union</li>
              <li>California Consumer Privacy Act (CCPA) – United States</li>
              <li>Children's Online Privacy Protection Act (COPPA) – United States</li>
              <li>Personal Information Protection Law (PIPL) – China</li>
              <li>Lei Geral de Proteção de Dados (LGPD) – Brazil</li>
              <li>Digital Millennium Copyright Act (DMCA) – United States</li>
              <li>ePrivacy Directive – European Union</li>
              <li>Federal Trade Commission (FTC) Guidelines – United States</li>
              <li>Accessibility and Anti-Discrimination Standards (ADA/WCAG)</li>
              <li>App Store & Google Play Platform Policies</li>
              <li>Industry-leading Payment and Data Security Standards (Stripe & PCI-DSS)</li>
            </ul>
            <p className="mt-4">
              These laws ensure your data is handled with the highest standards of security, consent, transparency, and user control — whether you're a fan, a seller, or a creator.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Content Responsibility</h2>
            <p className="leading-relaxed mb-4">
              Creators are responsible for any content uploaded, distributed, or sold on the Platform. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Upload unlawful, copyrighted, or harmful content.</li>
              <li>Violate intellectual property rights.</li>
              <li>Post misleading, harmful, or fraudulent material.</li>
            </ul>
            <p className="mt-4">
              Kolderkid Universe follows a formal DMCA policy and will respond to takedown requests when necessary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Privacy & Data Usage</h2>
            <p className="leading-relaxed">
              We only collect data necessary to deliver and improve your experience. We:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Never sell personal data to third parties.</li>
              <li>Offer full transparency in our Privacy Policy.</li>
              <li>Provide users with the ability to view, download, or delete their data upon request.</li>
              <li>Partner with Stripe for all payment processing to ensure financial data protection.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Platform Integrity</h2>
            <p className="leading-relaxed">
              To maintain a fair and secure ecosystem, all users agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Attempt to exploit or disrupt platform operations.</li>
              <li>Circumvent fees, affiliate structures, or creator payouts.</li>
              <li>Engage in harassment, impersonation, or fraudulent behavior.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Licensing & Intellectual Property</h2>
            <p className="leading-relaxed">
              All creators retain full ownership of their original works. By using the Platform, you grant Kolderkid Universe a limited, non-exclusive license to display, host, and distribute your content in accordance with your chosen pricing and permissions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Termination</h2>
            <p className="leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate these terms, break applicable laws, or endanger our user community. Users may cancel or delete their account at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Disclaimers</h2>
            <p className="leading-relaxed">
              Kolderkid Universe makes no guarantees regarding earnings, exposure, or results. Use of the platform is at your own risk. All services are provided "as-is."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Governing Law</h2>
            <p className="leading-relaxed">
              This Agreement is governed by the laws of the State of Delaware, without regard to its conflict of law principles. Disputes may be resolved through binding arbitration if agreed upon by both parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Updates</h2>
            <p className="leading-relaxed">
              We may update these terms as needed to reflect platform changes or comply with evolving global law. Continued use of the platform after any update constitutes acceptance.
            </p>
          </section>

          <p className="mt-8 text-sm text-gray-400">
            Last Updated: March 21, 2024
          </p>

          <p className="mt-4">
            By using Kolderkid Universe, you affirm that you've read, understood, and agreed to this Agreement in full.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;