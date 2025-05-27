import React from 'react';
import { useScrollToTop } from './hooks/useScrollToTop';

function HelpCenter() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-kolder-blue to-kolder-fire text-transparent bg-clip-text">
          Help Center
        </h1>
        
        <div className="space-y-8">
          <section className="bg-gray-900/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">Creating Your Account</h3>
                <p>Sign up at kolderkid.com/creator/login to begin your journey. You'll need a valid email address and password.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Setting Up Your Profile</h3>
                <p>Customize your profile with a bio, profile picture, and links to your social media.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Uploading Content</h3>
                <p>Start sharing your content through our easy-to-use upload interface.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Common Questions</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">How do I get paid?</h3>
                <p>Payments are processed through Stripe. Set up your payment information in your creator dashboard.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Content Guidelines</h3>
                <p>Review our community guidelines to ensure your content meets our standards.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Technical Requirements</h3>
                <p>We support most common file formats for audio, video, and images.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
            <p className="text-gray-300">Contact our support team at support@kolderkid.com or call us at 205-910-3493.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;