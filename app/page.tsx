"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import LoadingScreen from "./components/loading";
import Navbar from "./components/navbar";

const categories = [
  {
    title: "Wireless Home Automation",
    image: "https://www.homeautomat.in/images/wireless-home-automation.webp",
    link: "/wireless",
  },
  {
    title: "Wired Home Automation",
    image: "https://www.homeautomat.in/images/wired-home-automation.webp",
    link: "/wired",
  },
];

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard = ({ title, image, link }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={link}>
      <div
        className="relative group bg-white rounded-xl md:rounded-2xl overflow-hidden cursor-pointer aspect-[332/187]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background image */}
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {/* Blended overlay */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isHovered
              ? "opacity-100 bg-[#4169E1] mix-blend-soft-light"
              : "opacity-0"
          }`}
        />

        {/* Dark overlay for text contrast - fades out on hover */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Content */}
        <div className="absolute inset-0 z-20 p-4 md:p-6 flex flex-col justify-between">
          {/* Title */}
          <h2
            className={`text-lg md:text-2xl font-bold transition-colors duration-300 ${
              isHovered ? "text-white" : "text-white"
            }`}
          >
            {title}
          </h2>

          {/* Plus icon and Read More */}
          <div className="flex items-center">
            {/* Combined Plus icon and Read More with black background on hover */}
            <div
              className={`flex items-center transition-all duration-300 ${
                isHovered
                  ? "bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-full"
                  : "bg-[#4169E1] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center"
              }`}
            >
              <Plus
                className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                  isHovered ? "text-[#4169E1]" : "text-white"
                }`}
              />
              <span
                className={`font-medium text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                  isHovered
                    ? "opacity-100 ml-2 text-[#4169E1]"
                    : "opacity-0 w-0 ml-0"
                }`}
              >
                Read More
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Home() {
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
          <div className="flex items-center space-x-2 mb-8">
            <Link
              href="/"
              className="text-sm md:text-base hover:text-[#4169E1] transition-colors"
            >
              Home
            </Link>
            <span className="text-black">›</span>
            <span className="text-sm md:text-base text-[#4169E1]">
              Home Automation Categories
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-black">
            Home Automation Categories
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
