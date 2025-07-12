import React from 'react';

const footerLinks = [
  ['All Departments', 'Store Directory', 'Careers', 'Our Company', 'Sell on Walmart.com', 'Help', 'Product Recalls', 'Accessibility', 'Tax Exempt Program', 'Get the Walmart App', 'Safety Data Sheet'],
  ['Terms of Use', 'Privacy Notice', 'California Supply Chain Act', 'Do Not Sell or Share My Personal Information', 'Request My Personal Information', 'California Privacy Rights', 'Your Privacy Choices', 'Returns and Exchanges', 'AdChoices', 'Government Health Data Privacy Notices', 'Brand Shop Directory'],
  ['Pharmacy', 'Walmart Business', 'Walmart+']
];

const Footer = () => (
  <footer className="bg-[#0047ba] w-full py-6 mt-12">
    <div className="max-w-screen-xl mx-auto flex flex-col items-center text-xs text-white">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-2">
        {footerLinks.flat().map((link, idx) => (
          <a
            key={idx}
            href="#"
            className="hover:underline"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="text-center text-[11px] text-white/80 mt-2">
        © 2025 Walmart. The trademarks Walmart and the Walmart Spark design are registered with the US Patent and Trademark Office. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;