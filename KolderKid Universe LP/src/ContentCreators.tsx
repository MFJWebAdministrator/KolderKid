import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useScrollToTop } from './hooks/useScrollToTop';

function ContentCreators() {
  useScrollToTop();
  
  const features = [
    "Unlimited content uploads",
    "Analytics dashboard",
    "Priority support",
    "Revenue sharing",
    "Exclusive tools",
    "Early access to new features"
  ];

  const tiers = [
    {
      name: "Monthly",
      price: "69.99",
      period: "/month",
      features: features.slice(0, 6),
      gradient: "from-kolder-blue to-kolder-blue-dark",
      buttonGradient: "from-kolder-blue to-kolder-fire"
    },
    {
      name: "Yearly",
      price: "299.99",
      period: "/year",
      features: features.slice(0, 7),
      gradient: "from-kolder-fire to-kolder-fire-dark",
      buttonGradient: "from-kolder-fire to-kolder-blue",
      popular: true
    },
    {
      name: "Lifetime",
      price: "479.99",
      period: " one-time",
      features: features,
      gradient: "from-kolder-blue via-kolder-fire to-kolder-blue",
      buttonGradient: "from-kolder-blue via-kolder-fire to-kolder-blue"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-kolder-blue via-kolder-fire to-kolder-blue text-transparent bg-clip-text">
            Start Your Creator Journey
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of creators who are building their universe and reaching millions of fans worldwide.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 px-4 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolder-blue to-kolder-fire text-transparent bg-clip-text">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-kolder-blue/20">
              <div className="text-2xl font-bold mb-4 text-kolder-blue">01</div>
              <h3 className="text-xl font-semibold mb-4">Create Your Universe</h3>
              <p className="text-gray-400">Set up your creator profile, customize your space, and start uploading your content.</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-kolder-fire/20">
              <div className="text-2xl font-bold mb-4 text-kolder-fire">02</div>
              <h3 className="text-xl font-semibold mb-4">Build Your Community</h3>
              <p className="text-gray-400">Engage with your audience, create exclusive content, and grow your following.</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-kolder-blue/20">
              <div className="text-2xl font-bold mb-4 text-kolder-blue">03</div>
              <h3 className="text-xl font-semibold mb-4">Monetize Your Content</h3>
              <p className="text-gray-400">Generate revenue through multiple streams including subscriptions, merchandise, and tips.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolder-blue to-kolder-fire text-transparent bg-clip-text">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div 
                key={tier.name}
                className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden ${
                  tier.popular ? 'ring-2 ring-kolder-fire' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-kolder-fire px-4 py-1 rounded-bl-lg text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`h-2 bg-gradient-to-r ${tier.gradient}`} />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-kolder-fire" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://kolderkid.com/creator/login"
                    className={`w-full bg-gradient-to-r ${tier.buttonGradient} py-3 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2`}
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCreators;