import React from 'react';
function Footer() {
  return (
      <footer className="bg-[#DFDFDF] text-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-teal-700 font-bold text-sm">U</span>
              </div>
              <span className="font-bold text-xl">UANE</span>
            </div>

            {/* Information */}
            <div>
              <h5 className="font-semibold mb-4">Information</h5>
              <div className="space-y-3">
                <a href="#" className="block text-teal-200 hover:text-white transition-colors text-sm">
                  Frequently Asked Questions
                </a>
                <a href="#" className="block text-teal-200 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h5 className="font-semibold mb-4">Get to know us</h5>
              <p className="text-teal-200 font-semibold mb-4 text-sm">
                📞 (85) 99332-8888
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-4">Follow us on social media</h5>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  {/* <Facebook size={16} /> */}
                </a>
                <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  {/* <Instagram size={16} /> */}
                </a>
                <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  {/* <Youtube size={16} /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
