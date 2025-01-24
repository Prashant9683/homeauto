"use client";

import { useState, useEffect } from "react";
import { Music, Film, Speaker, Tv, Gamepad, Sliders } from "lucide-react";
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
    icon: <Film className="w-8 h-8 text-[#4169E1]" />,
    title: "4K/8K Video",
    description:
      "Experience ultra-high-definition video with crystal clear picture quality and vibrant colors. Our systems support the latest video standards for the ultimate viewing experience.",
  },
  {
    icon: <Speaker className="w-8 h-8 text-[#4169E1]" />,
    title: "Surround Sound",
    description:
      "Immerse yourself in Dolby Atmos and DTS:X surround sound systems that deliver three-dimensional audio for a true cinema experience at home.",
  },
  {
    icon: <Sliders className="w-8 h-8 text-[#4169E1]" />,
    title: "Acoustic Treatment",
    description:
      "Professional acoustic treatments and sound isolation to optimize your room's acoustics and prevent sound leakage to other areas of your home.",
  },
  {
    icon: <Tv className="w-8 h-8 text-[#4169E1]" />,
    title: "Smart Controls",
    description:
      "Integrated control systems for lighting, sound, video, and room ambiance. Control everything from a single remote or your smartphone.",
  },
  {
    icon: <Music className="w-8 h-8 text-[#4169E1]" />,
    title: "Multi-Room Audio",
    description:
      "Extend your audio system throughout your home with synchronized multi-room audio capabilities for seamless entertainment everywhere.",
  },
  {
    icon: <Gamepad className="w-8 h-8 text-[#4169E1]" />,
    title: "Gaming Integration",
    description:
      "Dedicated gaming setup with low latency displays and optimized audio settings for an immersive gaming experience.",
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

export default function SmartHomeTheater() {
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
            <span className="text-[#4169E1]">Smart Home Theater</span>
          </div>

          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-black mb-6">
              Transform Your Space into an Entertainment Paradise
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#4169E1] mb-4">
                  Smart Home Theater
                </h2>
                <p className="text-gray-600 mb-6">
                  Experience cinema-quality entertainment in the comfort of your
                  home with our smart home theater solutions. From stunning
                  4K/8K displays to immersive surround sound systems, we create
                  the perfect entertainment space tailored to your preferences.
                  Our integrated control systems make it easy to manage your
                  entire home theater experience with just a touch.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://www.homeautomat.in/images/home-theator-system.webp"
                  alt="Smart Home Theater"
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
