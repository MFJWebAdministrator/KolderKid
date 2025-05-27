import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

function Pricing() {
  const features = [
    "Unlimited content uploads",
    "Analytics dashboard",
    "Priority support",
    "Revenue sharing",
    "Exclusive tools",
    "Early access to new features",
    "Custom branding",
    "API access"
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
      price: "599.99",
      period: "/year",
      features: features.slice(0, 7),
      gradient: "from-kolder-fire to-kolder-fire-dark",
      buttonGradient: "from-kolder-fire to-kolder-blue",
      popular: true,
      savings: "Save $240"
    },
    {
      name: "Lifetime",
      price: "1,999.99",
      period: " one-time",
      features: features,
      gradient: "from-kolder-blue via-kolder-fire to-kolder-blue",
      buttonGradient: "from-kolder-blue via-kolder-fire to-kolder-blue"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <div className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-kolder-blue via-kolder-fire to-kolder-blue text-transparent bg-clip-text">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Start your journey as a content creator with our flexible pricing options
          </p>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-24 px-4 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
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
                  <div className="mb-2">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  {tier.savings && (
                    <div className="text-kolder-fire font-semibold mb-4">
                      {tier.savings}
                    </div>
                  )}
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

export default Pricing;