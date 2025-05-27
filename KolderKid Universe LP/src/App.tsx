import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Music, Video, Headphones, ShoppingBag, ArrowRight, Star, Users, Upload, Coins, Zap, Share2, Youtube, Check, Apple, PlayCircle, Menu, X } from 'lucide-react';
import ContentCreators from './ContentCreators';
import CookiePolicy from './CookiePolicy';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import CommunityGuidelines from './CommunityGuidelines';
import AffiliateProgram from './AffiliateProgram';
import Careers from './Careers';
import AboutUs from './AboutUs';
import HelpCenter from './HelpCenter';
import ContactUs from './ContactUs';
import { useScrollToTop } from './hooks/useScrollToTop';

function HomePage() {
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
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <img 
            src="/kkuniversehero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-kolder-blue via-kolder-fire to-kolder-fire-dark text-transparent bg-clip-text">
            KolderKid Universe
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300">
            Your Creative Universe Awaits
          </p>
          <a 
            href="https://kolderkid.com/creator/login"
            className="bg-gradient-to-r from-kolder-blue to-kolder-fire px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2 mx-auto inline-flex"
          >
            Start Creating <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div className="animate-card bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-gray-800 transition-colors border border-kolder-blue/20">
          <div className="relative">
            <Music className="w-10 sm:w-12 h-10 sm:h-12 text-kolder-blue mb-4 relative z-10" />
            <div className="absolute inset-0 bg-kolder-blue/20 blur-xl rounded-full"></div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2">Music</h3>
          <p className="text-gray-400">Share your beats, tracks, and albums with the world</p>
        </div>
        <div className="animate-card bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-gray-800 transition-colors border border-kolder-fire/20">
          <div className="relative">
            <Video className="w-10 sm:w-12 h-10 sm:h-12 text-kolder-fire mb-4 relative z-10" />
            <div className="absolute inset-0 bg-kolder-fire/20 blur-xl rounded-full"></div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2">Videos</h3>
          <p className="text-gray-400">Upload and monetize your video content</p>
        </div>
        <div className="animate-card bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-gray-800 transition-colors border border-kolder-blue/20">
          <div className="relative">
            <Headphones className="w-10 sm:w-12 h-10 sm:h-12 text-kolder-blue mb-4 relative z-10" />
            <div className="absolute inset-0 bg-kolder-blue/20 blur-xl rounded-full"></div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2">Podcasts</h3>
          <p className="text-gray-400">Build your audience with engaging podcasts</p>
        </div>
        <div className="animate-card bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-gray-800 transition-colors border border-kolder-fire/20">
          <div className="relative">
            <ShoppingBag className="w-10 sm:w-12 h-10 sm:h-12 text-kolder-fire mb-4 relative z-10" />
            <div className="absolute inset-0 bg-kolder-fire/20 blur-xl rounded-full"></div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2">Apparel</h3>
          <p className="text-gray-400">Sell your branded merchandise</p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 sm:py-24 px-4 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-kolder-blue to-kolder-fire text-transparent bg-clip-text">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
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
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">{tier.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl sm:text-4xl font-bold">${tier.price}</span>
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

      {/* Download App Section */}
      <div className="py-16 sm:py-24 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-kolder-blue to-kolder-fire text-transparent bg-clip-text">
            Get the KolderKid App
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Take your creative universe with you. Download our app and stay connected with your audience anywhere, anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a 
              href="https://apps.apple.com/us/app/kolderkid-universe/id6743467223" 
              className="w-full sm:w-auto flex items-center gap-3 bg-black hover:bg-gray-900 transition-colors px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-gray-800"
            >
              <Apple className="w-6 sm:w-8 h-6 sm:h-8" />
              <div className="text-left">
                <div className="text-sm">Download on the</div>
                <div className="text-lg sm:text-xl font-semibold">App Store</div>
              </div>
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.kolderkiduniverse&pli=1" 
              className="w-full sm:w-auto flex items-center gap-3 bg-black hover:bg-gray-900 transition-colors px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-gray-800"
            >
              <PlayCircle className="w-6 sm:w-8 h-6 sm:h-8" />
              <div className="text-left">
                <div className="text-sm">Get it on</div>
                <div className="text-lg sm:text-xl font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="py-16 sm:py-24 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16">
            {/* For Content Creators */}
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-kolder-blue to-kolder-fire text-transparent bg-clip-text">For Content Creators</h2>
                <p className="text-gray-400 text-lg">Launch your creative career with powerful tools</p>
              </div>
              <div className="grid gap-4 sm:gap-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-kolder-blue/10 hover:border-kolder-blue/30 transition-colors">
                  <Upload className="w-6 h-6 text-kolder-blue mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Easy Upload</h3>
                    <p className="text-gray-400">Upload your content in any format with our intuitive tools</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-kolder-fire/10 hover:border-kolder-fire/30 transition-colors">
                  <Coins className="w-6 h-6 text-kolder-fire mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Monetization</h3>
                    <p className="text-gray-400">Multiple revenue streams to maximize your earnings</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-kolder-fire-dark/10 hover:border-kolder-fire-dark/30 transition-colors">
                  <Zap className="w-6 h-6 text-kolder-fire-dark mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Analytics</h3>
                    <p className="text-gray-400">Detailed insights to grow your audience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For The Universe */}
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-kolder-fire to-kolder-blue text-transparent bg-clip-text">For The Universe</h2>
                <p className="text-gray-400 text-lg">Discover and support amazing creators</p>
              </div>
              <div className="grid gap-4 sm:gap-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-kolder-fire/10 hover:border-kolder-fire/30 transition-colors">
                  <Star className="w-6 h-6 text-kolder-fire mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Exclusive Content</h3>
                    <p className="text-gray-400">Access unique content from your favorite creators</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-kolder-blue/10 hover:border-kolder-blue/30 transition-colors">
                  <Users className="w-6 h-6 text-kolder-blue mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Community</h3>
                    <p className="text-gray-400">Connect with like-minded fans and creators</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-kolder-fire/10 hover:border-kolder-fire/30 transition-colors">
                  <Share2 className="w-6 h-6 text-kolder-fire mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Share & Discover</h3>
                    <p className="text-gray-400">Detailed insights to grow your audience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  useScrollToTop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/kolderkidmenu.png" alt="KolderKid Logo" className="h-8 w-auto" />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-kolder-blue to-kolder-fire text-transparent bg-clip-text">
              KolderKid Universe
            </span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/creators"
              className="bg-gradient-to-r from-kolder-blue to-kolder-fire px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-b border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <Link 
                to="/creators"
                className="block bg-gradient-to-r from-kolder-blue to-kolder-fire px-4 py-2 rounded-full text-sm font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creators" element={<ContentCreators />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/guidelines" element={<CommunityGuidelines />} />
        <Route path="/affiliate-program" element={<AffiliateProgram />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-gray-900 to-transparent pt-16 sm:pt-24 pb-8 sm:pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-kolder-blue to-kolder-fire text-transparent bg-clip-text">KolderKid Universe</h3>
              <p className="text-gray-400 mb-4 sm:mb-6">Empowering creators to share their universe with the world.</p>
              <p className="text-gray-400 mb-4 sm:mb-6">Questions? Email Us at support@kolderkid.com</p>
              <div className="flex space-x-4">
                <a href="https://youtube.com/@kolderkid" className="text-gray-400 hover:text-kolder-blue transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-3">
                <li><Link to="/#features" className="text-gray-400 hover:text-kolder-fire transition-colors">Features</Link></li>
                <li><Link to="/affiliate-program" className="text-gray-400 hover:text-kolder-fire transition-colors">Affiliate Program</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <li><Link to="/help" className="text-gray-400 hover:text-kolder-fire transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-kolder-blue transition-colors">Contact Us</Link></li>
                <li><Link to="/guidelines" className="text-gray-400 hover:text-kolder-fire transition-colors">Community Guidelines</Link></li>
                <li><Link to="/terms-of-service" className="text-gray-400 hover:text-kolder-blue transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-kolder-fire transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-kolder-blue transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 sm:mb-0">© 2025 KolderKid Universe. All rights reserved.</p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-kolder-fire text-sm transition-colors">Privacy Policy</Link>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-kolder-blue text-sm transition-colors">Cookie Policy</Link>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-kolder-fire text-sm transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;