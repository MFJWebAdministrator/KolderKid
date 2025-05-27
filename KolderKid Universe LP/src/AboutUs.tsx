import React from 'react';
import { useScrollToTop } from './hooks/useScrollToTop';

function AboutUs() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-kolder-blue to-kolder-fire text-transparent bg-clip-text">
          About KolderKid Universe
        </h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
            <p className="leading-relaxed">
              KolderKid Universe is dedicated to empowering creators by providing a platform where they can share, monetize, and grow their creative content. We believe in building a community where creativity knows no bounds and where artists can thrive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Story</h2>
            <p className="leading-relaxed">
              Founded with a vision to revolutionize the creator economy, KolderKid Universe has grown into a global platform supporting thousands of creators across multiple disciplines. Our journey began with a simple idea: give creators the tools they need to succeed in the digital age.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p>We constantly push boundaries to provide creators with cutting-edge tools and opportunities.</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p>We maintain the highest standards of transparency and fairness in all our operations.</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p>We foster a supportive environment where creators can connect and grow together.</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p>We strive for excellence in every aspect of our platform and service.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;