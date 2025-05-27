import React from 'react';
import { useScrollToTop } from './hooks/useScrollToTop';
import { Mail, Phone, MapPin } from 'lucide-react';

function ContactUs() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-kolder-blue to-kolder-fire text-transparent bg-clip-text">
          Contact Us
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Have questions? We're here to help. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-kolder-fire mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-300">support@kolderkid.com</p>
                  <p className="text-gray-300">kolderkid@icloud.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-kolder-blue mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-300">205-910-3493</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-kolder-fire mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Visit Us Online</h3>
                  <p className="text-gray-300">www.kolderkiduniverse.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Support Hours</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-semibold mb-2">Monday - Friday</h3>
                <p>9:00 AM - 6:00 PM CST</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Saturday</h3>
                <p>10:00 AM - 4:00 PM CST</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sunday</h3>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;