import React, { useEffect } from "react";
import { useHeader } from "../contexts/HeaderContext";
import { Linkedin } from "lucide-react";
import { getAssetPath } from "../utils/assetPath";

const AndrewLuu: React.FC = () => {
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
                Andrew Luu
              </h1>
              <p className="text-xl text-gray-600 mb-8">Founder and CEO</p>
              
              {/* LinkedIn Icon */}
              <a 
                href="https://www.linkedin.com/in/andrewluu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-[#0077b5] rounded-full text-white hover:bg-[#006399] transition-colors mb-8"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  As is typical with someone who has newfound health, Andrew set out 
                  to maximize his time and life experience, leveraging his health 
                  predicament to stay focused on impact and public service. After all, 
                  his mother donated her kidney to him when he was just 13 years old; 
                  he wasn't going to sit and do nothing with that second chance.
                </p>

                <p className="text-lg leading-relaxed">
                  Andrew started his career in corporate finance and hated it. The 
                  finance world was a far cry from the good feelings he derived from the 
                  mentorship program he had co-founded and ran for four years in 
                  college. He left and co-founded a social enterprise incubator. Over the 
                  following four years, Andrew managed a rapper, produced a feature 
                  film, interned with a Congressman, and worked on a start-up which 
                  would later pivot to be come a well-known e-bike brand.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={getAssetPath("/images/adrewluu.jpg")}
                  alt="Andrew Luu"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-12 space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Later, Andrew took an opportunity to get back into the nonprofit space by working in Experian's Corporate Social Responsibility group where he 
              managed its corporate matching programs and corporate volunteerism efforts. Andrew then went to work for the US federal government where he 
              focused on international affairs and managed various programs.
            </p>

            <p className="text-lg leading-relaxed">
              Andrew served on the Board of Trustees and as a volunteer for a local fire department in Virginia and sat on the Recruitment and Retention 
              Committee for the Fairfax County Volunteer Fire and Rescue Association.
            </p>

            <p className="text-lg leading-relaxed">
              Andrew graduated with degrees in Biological Sciences and Economics from University of California, Irvine and an MBA from Columbia University in 
              New York.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndrewLuu;