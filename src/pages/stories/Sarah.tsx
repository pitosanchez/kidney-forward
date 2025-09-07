import React, { useEffect } from "react";
import { useHeader } from "../../contexts/HeaderContext";
import { getAssetPath } from "../../utils/assetPath";
import LazyImage from "../../components/LazyImage";
import { Button, Container, Section } from "../../components/ui";

const SarahStory: React.FC = () => {
  const { setIsTransparent } = useHeader();

  useEffect(() => {
    setIsTransparent(false);
    return () => setIsTransparent(false);
  }, [setIsTransparent]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-primary-600 text-sm font-semibold uppercase tracking-wide mb-4">
                STORY OF HOPE
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Sarah's Second Chance
              </h1>
              <p className="text-xl text-slate-600">
                A grandmother's journey from dialysis to watching her
                grandchildren grow
              </p>
            </div>

            {/* Story Image */}
            <div className="mb-12">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <LazyImage
                  src={getAssetPath("/images/happymom.webp")}
                  alt="Sarah with her grandchildren"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Sarah Martinez never imagined that a simple conversation with
                  her neighbor would change her life forever. At 58, she had
                  been on dialysis for four long years, watching her energy fade
                  and her dreams of seeing her grandchildren grow up slip away.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  "I was losing hope," Sarah recalls, her eyes filling with
                  tears. "Every Tuesday, Thursday, and Saturday, I'd spend four
                  hours hooked up to that machine. I was exhausted all the time.
                  I couldn't play with my grandkids the way I wanted to. I felt
                  like I was just waiting to die."
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Sarah's neighbor, Jennifer, had noticed her struggling. One
                  day, while Sarah was gardening in her front yard, Jennifer
                  approached her with a question that would change everything:
                  "Sarah, have you ever considered a living donor?"
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  "I didn't even know that was possible," Sarah says. "I thought
                  I had to wait for someone to die. Jennifer explained that
                  living donation was not only possible but often better for
                  recipients. She said she wanted to be tested to see if she
                  could donate to me."
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  The testing process was thorough, but Jennifer was a perfect
                  match. On March 15th, 2022, Sarah received Jennifer's kidney
                  in a successful transplant surgery. The recovery was
                  challenging, but Sarah's new kidney began working immediately.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  "The first time I could eat without restrictions, the first
                  time I had energy to play with my grandchildren, the first
                  time I could travel to visit family - these moments were pure
                  joy," Sarah says with a radiant smile.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Today, Sarah is thriving. She volunteers at her local dialysis
                  center, sharing her story with other patients and encouraging
                  them not to lose hope. She's planning a family reunion that
                  she never thought she'd live to see.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  "Jennifer didn't just give me a kidney," Sarah says. "She gave
                  me my life back. She gave me the chance to be the grandmother
                  I always wanted to be. I will never be able to thank her
                  enough."
                </p>

                <div className="border-t pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        Sarah's Journey
                      </h3>
                      <ul className="space-y-2 text-slate-600">
                        <li>• 4 years on dialysis</li>
                        <li>• Received kidney from neighbor Jennifer</li>
                        <li>• Transplant date: March 15, 2022</li>
                        <li>• Now 2+ years post-transplant</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        Impact
                      </h3>
                      <ul className="space-y-2 text-slate-600">
                        <li>• Volunteers at dialysis center</li>
                        <li>• Active grandmother to 4 grandchildren</li>
                        <li>• Advocates for living donation</li>
                        <li>• Plans family reunions and travels</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">
                  Inspired by Sarah's Story?
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  Learn how you can help save a life through living donation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    href="/donors"
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary-600"
                  >
                    Become a Donor
                  </Button>
                  <Button
                    href="/stories"
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary-600"
                  >
                    Read More Stories
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default SarahStory;
