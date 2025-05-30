import Link from 'next/link';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube,FaTiktok  } from 'react-icons/fa';

const Footer = () => {
  const linkSections = [
    {
      title: 'Explore Myanmar',
      links: [
        { label: 'Yangon', href: '/destinations/yangon' },
        { label: 'Mandalay', href: '/destinations/mandalay' },
        { label: 'Bagan', href: '/destinations/bagan' },
        { label: 'Inle Lake', href: '/destinations/inle-lake' },
        { label: 'Ngapali Beach', href: '/destinations/ngapali' },
      ],
    },
    {
      title: 'Travel Info',
      links: [
        { label: 'Things to Do', href: '/travel-info/things-to-do' },
        { label: 'Local Cuisine', href: '/travel-info/cuisine' },
        { label: 'Shopping Guide', href: '/travel-info/shopping' },
        { label: 'Festivals & Events', href: '/travel-info/festivals' },
        { label: 'Culture & Heritage', href: '/travel-info/culture' },
      ],
    },
    {
      title: 'Plan Your Trip',
      links: [
        { label: 'Getting to Myanmar', href: '/plan/getting-here' },
        { label: 'Visa Information', href: '/plan/visa' },
        { label: 'Accommodation', href: '/plan/stays' },
        { label: 'Transportation', href: '/plan/transportation' },
        { label: 'Travel Tips', href: '/plan/tips' },
      ],
    },
    {
      title: 'Helpful Links',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQs', href: '/faq' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms-of-service' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={24} />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram size={24} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTwitter size={24} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaYoutube size={24} />, href: 'https://youtube.com', label: 'YouTube' },
    { icon: <FaTiktok size={24} />, href: 'https://tiktok.com', label: 'TikTok' }
    // { label: 'Facebook', href: 'https://facebook.com' },
    // { label: 'Instagram', href: 'https://instagram.com' },
    // { label: 'Twitter', href: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {linkSections.map((section) => (
            <div key={section.title}>
              <h5 className="text-lg font-semibold text-white mb-4">{section.title}</h5>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white hover:underline transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Bottom Section: Contact, Social, Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h6 className="text-md font-semibold text-white mb-2">Ministry of Hotels & Tourism (Myanmar)</h6>
            <p className="text-sm">Contact: +959 123 4567</p>
            <p className="text-sm">Call Center: 067-1234 (Local)</p>
            <p className="text-sm">Email: info@tourismmyanmar.gov.mm</p>
          </div>

          <div className="mb-6 md:mb-0">
            <h6 className="text-md font-semibold text-white mb-3">Follow Us</h6>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {social.icon}
                  
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Myanmar Tourism. All Rights Reserved.</p>
          <p className="mt-1">
            <Link href="/privacy-notice" className="hover:text-white underline">Privacy Policy</Link> |
            <Link href="/data-subject-request" className="hover:text-white underline ml-2">Terms of use</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;