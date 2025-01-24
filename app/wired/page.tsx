"use client";

import { useState, useEffect } from "react";
import { Shield, Zap, Tv, Thermometer, Video, Music } from "lucide-react";
import Link from "next/link";
import LoadingScreen from "../components/loading";
import Navbar from "../components/navbar";

const features = [
  {
    icon: <Shield className="w-8 h-8 text-[#4169E1]" />,
    title: "Enhanced Security",
    description: "Robust and tamper-proof security systems with direct wiring.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#4169E1]" />,
    title: "Reliable Power",
    description:
      "Stable power supply with backup options for uninterrupted operation.",
  },
  {
    icon: <Tv className="w-8 h-8 text-[#4169E1]" />,
    title: "Entertainment Systems",
    description: "High-speed connections for seamless multimedia experiences.",
  },
  {
    icon: <Thermometer className="w-8 h-8 text-[#4169E1]" />,
    title: "Climate Control",
    description: "Precise temperature management throughout your home.",
  },
  {
    icon: <Video className="w-8 h-8 text-[#4169E1]" />,
    title: "Video Surveillance",
    description: "High-definition security cameras with reliable feeds.",
  },
  {
    icon: <Music className="w-8 h-8 text-[#4169E1]" />,
    title: "Audio Distribution",
    description:
      "Whole-house audio with zero latency and perfect synchronization.",
  },
];

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="bg-white/50 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4">
      {icon}
    </div>
    <h3 className="text-base md:text-xl font-bold text-black mb-1 md:mb-2">
      {title}
    </h3>
    <p className="text-sm md:text-base text-gray-600">{description}</p>
  </div>
);

export default function WiredAutomation() {
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
      <Navbar />

      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-4 md:mb-8 text-sm md:text-base">
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
            <span className="text-[#4169E1]">Wired Home Automation</span>
          </div>

          {/* Hero Section */}
          <div className="mb-8 md:mb-16">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
              Wired Home Automation
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  Wired Home Automation offers unmatched reliability and
                  performance by integrating directly into your home's
                  infrastructure. Enjoy consistent and secure control over your
                  lighting, security, and entertainment systems with minimal
                  interference.
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  Ideal for new constructions or major renovations, it provides
                  a stable, high-speed connection that can handle the most
                  demanding smart home setups.
                </p>
              </div>
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden">
                <img
                  src="https://www.homeautomat.in/images/wired-home-automation.webp"
                  alt="Wired Home Automation"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
