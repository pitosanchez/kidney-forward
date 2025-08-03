import React, { useEffect } from "react";
import { useHeader } from "../contexts/HeaderContext";
import { Linkedin } from "lucide-react";
import { getAssetPath } from "../utils/assetPath";

const RobertSanchez: React.FC = () => {
  const { setIsTransparent } = useHeader();

  useEffect(() => {
    setIsTransparent(false);
    return () => setIsTransparent(false);
  }, [setIsTransparent]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-2">
                Robert Sanchez
              </h1>
              <p className="text-xl text-gray-600 mb-8">Director of the Jentosy Project</p>
              
              {/* LinkedIn Icon */}
              <a 
                href="https://www.linkedin.com/in/robertsanchez/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-[#0077b5] rounded-full text-white hover:bg-[#006399] transition-colors mb-8"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Robert joined Kidney Forward after having formed his own nonprofit.
                </p>

                <p className="text-lg leading-relaxed">
                  Robert's mission is to improve access to kidney transplants and 
                  promote living donations, drawing from his personal experience with 
                  chronic kidney disease and navigating the challenging transplant 
                  process.
                </p>

                <p className="text-lg leading-relaxed">
                  Robert's journey towards advocacy began at 18 years old when he 
                  was arrested for being in a friend's apartment that contained drugs. 
                  While Robert had no criminal history, didn't possess drugs on his 
                  person and recorded no sale, he was sentenced to 15 years to life 
                  mandatory minimum sentence under the draconian Rockefeller Drug 
                  Laws.
                </p>

                <p className="text-lg leading-relaxed">
                  While imprisoned, he obtained a bachelor's degree in behavioral 
                  science and a master's degree in theology from New York Theological 
                  Seminary.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={getAssetPath("/images/robertBlueSuit.webp")}
                  alt="Robert Sanchez"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-12 space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              He co-founded the Rehabilitation Through The Arts Program (RTA) which affords incarcerated individuals artistic expression and creative outlets. 
              Now running for 25+ years, it is currently functioning in multiple prisons in New York State and is the subject of a feature film called <span className="text-blue-600">Sing Sing</span> 
              released by <span className="text-blue-600">A24</span> in July 2024. After his release, Robert completed two years of accelerated clinical social work courses at the Silberman School of 
              Social Work but was unable to complete the program due to kidney failure.
            </p>

            <p className="text-lg leading-relaxed">
              In 2007, Robert was diagnosed with chronic kidney disease and immediately started dialysis. Two years later, a friend donated a kidney which failed in 
              five years, forcing him back on dialysis. Six and a half years later, in October 2020, he received another kidney transplant. These healthcare struggles 
              led Robert to found The Jentosy Project, an organization which aims to increase the living donation match rate among Black and Brown people and to 
              assist in the navigation of the organ transplant process.
            </p>

            <p className="text-lg leading-relaxed">
              Robert currently resides in New York City. He expresses creativity as a poet, illustrator, and painter. He finds joy in sports, music, and spending 
              quality time with friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobertSanchez;