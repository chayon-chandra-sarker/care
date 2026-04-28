import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* 🎬 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2024/08/31/229071_large.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🌑 Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>

      {/* ✨ Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="text-white max-w-3xl backdrop-blur-sm bg-white/10 p-6 md:p-10 rounded-2xl shadow-2xl">

          {/* Heading */}
          <h2 className="font-extrabold text-3xl md:text-6xl mb-4 leading-tight">
            Compassion Redefined.
          </h2>

          {/* Paragraph */}
          <p className="text-sm md:text-xl mb-6 opacity-90">
            Experience peace of mind with vetted, professional caregivers <br />
            dedicated to the safety and well-being of your loved ones.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold transition hover:bg-gray-200">
              Find a Caregiver
            </button>

            <button className="border border-white px-6 py-3 rounded-xl transition hover:bg-white hover:text-black">
              Safety Standards
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Banner;