import React from 'react';
import { useScrollToTop } from './hooks/useScrollToTop';

function CookiePolicy() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-kolder-blue to-kolder-fire text-transparent bg-clip-text">
          Cookie Policy
        </h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Use of Cookies</h2>
            <p className="leading-relaxed">
              The Company's website may use "cookies" to help you personalize your online experience. A
              cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be
              used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you,
              and can only be read by a web server in the domain that issued the cookie to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Purpose of Cookies</h2>
            <p className="leading-relaxed">
              One of the primary purposes of cookies is to provide a convenience feature to save you time. The
              purpose of a cookie is to tell the web server that you have returned to a specific page. For
              example, if you personalize the Company's pages, or register with Company's site or services, a
              cookie helps the Company to recall your specific information on subsequent visits. This simplifies
              the process of recording your personal information, such as billing addresses, shipping addresses,
              and so on. When you return to the same website, the information you previously provided can be
              retrieved, so you can easily use the Company's features that you customized.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Your Cookie Choices</h2>
            <p className="leading-relaxed">
              You have the ability to accept or decline cookies. Most web browsers automatically accept
              cookies, but you can usually modify your browser settings to decline cookies if you prefer. If you
              choose to decline cookies, you may not be able to fully experience the interactive features of the
              Company's services or websites you visit.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;