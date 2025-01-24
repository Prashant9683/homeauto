"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question:
      "What is the difference between wired and wireless home automation systems, and which one is better for my home?",
    answer:
      "Wired systems offer more reliable and faster communication but require extensive installation and wiring. Wireless systems are easier to install and more flexible but may have slight latency. The best choice depends on your home's construction, budget, and specific needs. Wired is ideal for new constructions, while wireless suits existing homes better.",
  },
  {
    question:
      "How much does it cost to install a home automation system, and are there any ongoing fees?",
    answer:
      "The cost varies based on system complexity, ranging from basic setups ($500-$1,500) to comprehensive solutions ($5,000+). Installation costs depend on your home's size and chosen features. Monthly fees may apply for cloud services or advanced features, typically $10-$30/month, though many basic functions work without subscription.",
  },
  {
    question:
      "Can I control my home automation system remotely (e.g., via smartphone or voice assistants)?",
    answer:
      "Yes, our home automation systems can be controlled remotely through our secure mobile app. You can manage lights, security, temperature, and other connected devices from anywhere with an internet connection. The systems are also compatible with popular voice assistants like Alexa and Google Assistant.",
  },
  {
    question:
      "What happens if the internet or power goes out? Will my system still work?",
    answer:
      "Most critical functions continue working during internet outages as they operate on local networks. During power outages, essential features remain operational through backup batteries. Security systems typically have 24-48 hour backup power. We recommend having a backup power supply for critical systems.",
  },
];

const socialLinks = [
  { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
  { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
];

const FAQItem = ({ question, answer }: FAQ) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#E5E4E2]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between py-4 text-left group"
      >
        <span className="text-gray-600 group-hover:text-[#4169E1] transition-colors pr-8">
          {question}
        </span>
        <ChevronRight
          className={`w-5 h-5 text-gray-400 group-hover:text-[#4169E1] transition-all mt-1 flex-shrink-0
            ${isOpen ? "transform rotate-90" : ""}`}
        />
      </button>
      {isOpen && <div className="pb-4 text-gray-600 pl-4">{answer}</div>}
    </div>
  );
};

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
            <div className="bg-[#E5E4E2] rounded-xl">
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
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
