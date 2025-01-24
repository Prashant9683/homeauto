"use client";

import { useState, useEffect } from "react";
import { Wifi, Smartphone, Settings, Lock, Zap } from "lucide-react";
import Link from "next/link";
import LoadingScreen from "../components/loading";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Wifi className="w-8 h-8 text-[#4169E1]" />,
    title: "Wireless Connectivity",
    description:
      "Connect and control your devices seamlessly through wireless networks.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#4169E1]" />,
    title: "Mobile Control",
    description:
      "Control your home automation system from anywhere using your smartphone.",
  },
  {
    icon: <Lock className="w-8 h-8 text-[#4169E1]" />,
    title: "Security",
    description:
      "Advanced security features to protect your home automation system.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#4169E1]" />,
    title: "Energy Management",
    description: "Monitor and optimize your home's energy consumption.",
  },
  {
    icon: <Settings className="w-8 h-8 text-[#4169E1]" />,
    title: "Flexible Configuration",
    description: "Easily add, remove, or relocate devices as needed.",
  },
  {
    icon: <Lock className="w-8 h-8 text-[#4169E1]" />,
    title: "Secure Connection",
    description: "Advanced encryption for safe and private automation.",
  },
];

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="bg-white/50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function WirelessAutomation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8">
            <Link
              href="/"
              className="text-black hover:text-[#4169E1] transition-colors"
            >
              Home
            </Link>
            <span className="text-black">›</span>
            <Link
              href="/"
              className="text-black hover:text-[#4169E1] transition-colors"
            >
              Home Automation Categories
            </Link>
            <span className="text-black">›</span>
            <span className="text-[#4169E1]">Wireless Home Automation</span>
          </div>

          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-black mb-6">
              Wireless Home Automation
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 mb-6">
                  Experience the future of home automation with our wireless
                  solutions. Perfect for existing homes, our wireless systems
                  offer flexibility and convenience without compromising on
                  performance or reliability.
                </p>
                <p className="text-gray-600">
                  With easy installation and no structural changes required, you
                  can transform your home into a smart living space within
                  hours. Control everything from your smartphone, anywhere,
                  anytime.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://www.homeautomat.in/images/wireless-home-automation.webp"
                  alt="Wireless Home Automation"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
