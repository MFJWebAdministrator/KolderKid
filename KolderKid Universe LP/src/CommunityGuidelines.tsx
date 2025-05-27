import React from 'react';
import { useScrollToTop } from './hooks/useScrollToTop';

function CommunityGuidelines() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-kolder-blue to-kolder-fire text-transparent bg-clip-text">
          Community Guidelines
        </h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">KOLDERKID UNIVERSE: OUR CONTENT POLICY</h2>
            <p className="text-xl mb-4 text-kolder-fire">Respect. Integrity. Global Reach.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Why We Don't Allow Adult Content</h2>
            <p className="leading-relaxed">
              At Kolderkid Universe, we are building a global platform that supports thousands of creators and businesses — from musicians and filmmakers to podcasters, designers, and more.
            </p>
            <p className="leading-relaxed mt-4">
              To ensure fair access for everyone and maintain a strong international presence, we've chosen not to support adult content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Reasons Behind Our Policy</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-kolder-fire font-bold">•</span>
                <span>Global Compliance: Adult content is restricted or banned in many countries. Supporting it could risk entire regions losing access to our platform.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-kolder-fire font-bold">•</span>
                <span>Fairness to All Creators: We serve a wide range of creators. It wouldn't be right to jeopardize their visibility or business due to a niche category.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-kolder-fire font-bold">•</span>
                <span>Payment Processing Limitations: Many payment processors and services do not support platforms that host adult content, limiting our growth and sustainability.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Commitment</h2>
            <p className="leading-relaxed">
              We're committed to offering a high-quality, professional, and inclusive environment where creators can grow and monetize without unnecessary risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Thank You for Understanding</h2>
            <p className="leading-relaxed">
              Together, we're building something powerful. Let's keep it clean, fair, and unstoppable.
            </p>
          </section>

          <section className="border-t border-gray-800 pt-8 mt-12">
            <div className="text-center">
              <p className="text-xl font-semibold mb-4">Kolderkid Universe</p>
              <p className="text-kolder-fire">Where Creators Control the Culture</p>
              <div className="mt-6 space-y-2">
                <p>Contact Us: <a href="mailto:kolderkid@icloud.com" className="text-kolder-blue hover:underline">kolderkid@icloud.com</a> | 205-910-3493</p>
                <p>Join the movement at: <a href="https://www.kolderkiduniverse.com" target="_blank" rel="noopener noreferrer" className="text-kolder-blue hover:underline">www.kolderkiduniverse.com</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CommunityGuidelines;