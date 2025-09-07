import React, { useEffect } from "react";
import { useHeader } from "../../contexts/HeaderContext";
import { getAssetPath } from "../../utils/assetPath";
import LazyImage from "../../components/LazyImage";
import { Button, Container, Section } from "../../components/ui";

const MariaAnaStory: React.FC = () => {
  const { setIsTransparent } = useHeader();

  useEffect(() => {
    setIsTransparent(false);
    return () => setIsTransparent(false);
  }, [setIsTransparent]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="py-16 bg-gradient-to-br from-secondary-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-secondary-600 text-sm font-semibold uppercase tracking-wide mb-4">
                STORY OF HOPE
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                A Mother's Gift
              </h1>
              <p className="text-xl text-slate-600">
                The unbreakable bond between a mother and daughter through
                living donation
              </p>
            </div>

            {/* Story Image */}
            <div className="mb-12">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <LazyImage
                  src={getAssetPath("/images/momdaughter.webp")}
                  alt="Maria and Ana together"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  When Maria Rodriguez's daughter Ana was diagnosed with
                  polycystic kidney disease at age 28, her world turned upside
                  down. The genetic condition had already taken Maria's mother,
                  and now it was threatening her only child.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  "I remember the day the doctor told us Ana's kidneys were
                  failing," Maria says, her voice steady but emotional. "I
                  looked at my daughter, who was just starting her career as a
                  teacher, and I knew I would do anything to save her life."
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Ana had been experiencing fatigue and high blood pressure for
                  months before the diagnosis. As a kindergarten teacher, she
                  was used to being energetic and patient with her students, but
                  she found herself struggling to keep up. When blood tests
                  revealed her kidney function was declining rapidly, the family
                  knew they needed to act fast.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  "My mom didn't even hesitate," Ana recalls with tears in her
                  eyes. "The moment the doctor mentioned living donation, she
                  said, 'Test me. I want to give her my kidney.' I tried to talk
                  her out of it - I was worried about her health, about the
                  surgery. But she wouldn't hear it."
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Maria, a 52-year-old office manager, underwent extensive
                  testing to ensure she was a suitable donor. The process was
                  rigorous - blood tests, imaging studies, psychological
                  evaluations, and meetings with the transplant team. Throughout
                  it all, Maria remained determined.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  "I wasn't scared," Maria says firmly. "I was scared of losing
                  my daughter. The surgery was nothing compared to that fear. I
                  would have given both kidneys if I could have."
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  The transplant surgery took place on September 8th, 2023. Both
                  mother and daughter were in adjacent operating rooms, with
                  Maria's left kidney being carefully transplanted into Ana's
                  body. The surgery was successful, and Ana's new kidney began
                  working immediately.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  "The first thing I remember after waking up was asking about
                  Ana," Maria says. "When they told me she was doing well and
                  her new kidney was working, I felt such relief. I knew
                  everything was going to be okay."
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Ana's recovery was remarkable. Within weeks, she was back to
                  her energetic self, teaching her kindergarten class with
                  renewed vigor. Her students noticed the difference
                  immediately.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  "My kids kept saying, 'Miss Ana, you have so much energy
                  now!'" Ana laughs. "I could finally be the teacher I wanted to
                  be. I could run around with them, play games, and not worry
                  about getting tired."
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  Today, both Maria and Ana are thriving. Maria has returned to
                  her full-time job and volunteers with Kidney Forward, sharing
                  their story to encourage other families. Ana continues to
                  teach and has become an advocate for organ donation education
                  in her school.
                </p>

                <div className="border-t pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        Maria's Journey
                      </h3>
                      <ul className="space-y-2 text-slate-600">
                        <li>• 52-year-old mother and office manager</li>
                        <li>• Donated left kidney to daughter Ana</li>
                        <li>• Transplant date: September 8, 2023</li>
                        <li>• Now 1+ year post-donation</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        Ana's Journey
                      </h3>
                      <ul className="space-y-2 text-slate-600">
                        <li>• 28-year-old kindergarten teacher</li>
                        <li>• Diagnosed with polycystic kidney disease</li>
                        <li>• Received kidney from mother Maria</li>
                        <li>• Back to full-time teaching</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-secondary-50 rounded-xl">
                  <p className="text-lg text-slate-700 italic text-center">
                    "We both have our lives back. I have my daughter, and she
                    has her future. That's all a mother could ask for." - Maria
                    Rodriguez
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-secondary-600 to-primary-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">
                  Inspired by Maria and Ana's Story?
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  Learn how living donation can save a loved one's life
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    href="/donors"
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-secondary-600"
                  >
                    Learn About Living Donation
                  </Button>
                  <Button
                    href="/stories"
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-secondary-600"
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

export default MariaAnaStory;
