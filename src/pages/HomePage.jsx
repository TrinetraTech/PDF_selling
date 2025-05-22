import React from "react";

const HomePage = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#383838]">
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ace Your Exams with Expert-Curated PDF Notes
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              Access high-quality study materials created by top students and
              professors. Save time and boost your grades with our comprehensive
              collection.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#featured-categories"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Browse Notes
              </a>
              <a
                href="#how-it-works"
                className="inline-block bg-transparent hover:bg-gray-700 text-blue-400 border border-blue-500 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-300/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400/30 rounded-full blur-xl"></div>

              <div className="relative bg-[#444] border border-gray-600 rounded-xl overflow-hidden shadow-2xl">
                {/* Mock Window Header */}
                <div className="p-2 bg-gray-700 flex items-center">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-gray-300 text-xs">
                    Premium Study Notes
                  </div>
                </div>

                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1495522097160-b7d527cc67f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZGlnaXRhbCUyMG5vdGVzJTIwbWFya2V0cGxhY2UlMjBlZHVjYXRpb25hbCUyMGJyaWdodHxlbnwwfDB8fHwxNzQ2OTA2MTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="PDF Notes preview"
                  className="w-full h-64 object-cover"
                />

                {/* Description */}
                <div className="p-5 bg-[#444]">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-white font-medium">
                      Advanced Biology Notes
                    </div>
                    <div className="text-blue-400 font-bold">₹2.99</div>
                  </div>

                  {/* Star Ratings */}
                  <div className="flex items-center mb-4 text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
