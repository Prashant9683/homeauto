import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="relative">
        <div className="flex flex-col items-center gap-1">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="h-[2px] bg-[#4169E1] rounded-full animate-wifi-pulse"
              style={{
                width: `${index * 16}px`,
                animationDelay: `${(index - 1) * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>
      <span className="mt-8 text-[#4169E1] text-sm font-light tracking-[0.2em] uppercase">
        Loading
      </span>
    </div>
  );
};

export default LoadingScreen;
