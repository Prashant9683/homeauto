import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const faqs = [
  {
    question: "Do I need to bring my own model/LLM key(s) to use Databutton?",
    link: "/faq#models",
  },
  {
    question: "What if I want to make an AI-driven app?",
    link: "/faq#ai-app",
  },
  {
    question: "Who owns my app's code and IP?",
    link: "/faq#ownership",
  },
];

const socialLinks = [
  { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
  { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-[#E5E4E2] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Frequently asked questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Link
                  key={index}
                  href={faq.link}
                  className="flex items-center group"
                >
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#4169E1] transition-colors" />
                  <span className="text-gray-600 group-hover:text-[#4169E1] transition-colors">
                    {faq.question}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
            <div className="space-y-2 text-gray-600">
              <p>Email: abc@example.com</p>
              <p>Phone: +91 9876543210</p>
              <p>Address: St 123, unknown, unknown, India 99999</p>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow us on</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-[#4169E1] hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Home Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
