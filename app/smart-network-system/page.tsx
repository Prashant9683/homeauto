"use client";

import { useState, useEffect } from "react";
import { Wifi, Network, Phone, Tv } from "lucide-react";
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
    title: "Wi-Fi",
    description:
      "Wi-Fi is a wireless networking technology that allows devices like smartphones, computers, and smart home devices to connect to the internet and communicate with each other without physical cables.",
  },
  {
    icon: <Network className="w-8 h-8 text-[#4169E1]" />,
    title: "Networking",
    description:
      "Home networking involves connecting various digital devices within a household, such as computers, smartphones, tablets, smart TVs, and smart home devices, to a central network.",
  },
  {
    icon: <Phone className="w-8 h-8 text-[#4169E1]" />,
    title: "Intercom",
    description:
      "A home intercom system is a communication network within a residence that allows individuals in different rooms or areas to communicate with each other.",
  },
  {
    icon: <Tv className="w-8 h-8 text-[#4169E1]" />,
    title: "Centralized media room",
    description:
      "A centralized media room is a dedicated space in a home designed to offer an immersive entertainment experience by consolidating various media sources and control systems.",
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

export default function SmartNetworkSystem() {
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
            <span className="text-[#4169E1]">Smart Network System</span>
          </div>

          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-black mb-6">
              Behind Every Smart Home Is a Network Mastermind
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#4169E1] mb-4">
                  Smart Home Network
                </h2>
                <p className="text-gray-600 mb-6">
                  A smart home network connects and automates devices such as
                  lights, cameras, and thermostats, allowing for remote control
                  and greater convenience through a central hub or app. Key
                  components of your network include Wi-Fi for seamless
                  connectivity and intercom systems for easy communication
                  throughout your home.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://www.homeautomat.in/images/smart-home-network-solutions.webp"
                  alt="Smart Network System"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
