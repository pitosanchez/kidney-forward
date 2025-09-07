import React, { useEffect } from "react";
import { useHeader } from "../../contexts/HeaderContext";
import { getAssetPath } from "../../utils/assetPath";
import LazyImage from "../../components/LazyImage";
import { Button, Container, Section } from "../../components/ui";

const JamesStory: React.FC = () => {
  const { setIsTransparent } = useHeader();

  useEffect(() => {
    setIsTransparent(false);
    return () => setIsTransparent(false);
  }, [setIsTransparent]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="py-16 bg-gradient-to-br from-accent-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-accent-600 text-sm font-semibold uppercase tracking-wide mb-4">
                STORY OF HOPE
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                The Chain of Life
              </h1>
              <p className="text-xl text-slate-600">
                How one altruistic donor started a chain that saved three lives
              </p>
            </div>

            {/* Story Image */}
            <div className="mb-12">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <LazyImage
                  src={getAssetPath("/images/womanlaugh.webp")}
                  alt="James celebrating with transplant recipients"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  James Thompson never expected to become a hero. A 34-year-old
                  software engineer from Seattle, he was living a quiet life
                  focused on his career and hobbies. But when he learned about
                  the kidney transplant waitlist and the thousands of people
                  dying while waiting, something clicked.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  "I was reading an article about organ donation, and I saw that
                  17 people die every day waiting for a kidney," James recalls.
                  "I thought, 'I have two kidneys, and I only need one. Why not
                  help someone who needs it more than I do?'"
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  James began researching living donation and discovered the
                  concept of paired exchange programs. He learned that even if
                  he wasn't a match for someone he knew, he could still help by
                  donating to a stranger, potentially starting a chain that
                  could save multiple lives.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  "The more I learned, the more I realized this was something I
                  had to do," James says. "I was healthy, I had good insurance,
                  and I had the support of my family. There was no reason not to
                  help."
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  After months of testing and evaluation, James was approved as
                  an altruistic donor. The transplant team explained that his
                  donation would likely start a chain - his kidney would go to
                  someone whose loved one couldn't donate to them directly, and
                  that person's loved one would donate to someone else, and so
                  on.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  On November 12th, 2023, James underwent surgery to donate his
                  left kidney. The procedure went smoothly, and James was back
                  to work within three weeks. But the real magic happened in the
                  operating rooms across the country.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  "I got a call from the transplant coordinator about a month
                  after my surgery," James says, his face lighting up. "She told
                  me that my donation had started a chain that saved three
                  lives. Three people who were on dialysis, waiting and hoping,
                  now had functioning kidneys."
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  The chain worked like this: James donated to Sarah, a
                  45-year-old mother of three whose husband wasn't a match.
                  Sarah's husband then donated to Michael, a 29-year-old teacher
                  whose sister wasn't compatible. Michael's sister donated to
                  Lisa, a 38-year-old nurse who had been on the waitlist for
                  three years.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  "I never met any of them, but knowing that three families are
                  whole again because of my decision is incredible," James says.
                  "Sarah can watch her kids grow up. Michael can continue
                  teaching. Lisa can go back to caring for patients. It's like a
                  ripple effect of hope."
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  James has since become an advocate for living donation,
                  speaking at community events and sharing his story online.
                  He's helped several friends and colleagues understand the
                  process and has inspired others to consider donation.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  "People ask me if I miss my kidney, and I honestly don't,"
                  James says with a laugh. "I feel exactly the same as before,
                  but now I know that somewhere out there, three people are
                  living their best lives because of a decision I made. That's
                  worth more than any kidney."
                </p>

                <div className="border-t pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        James's Journey
                      </h3>
                      <ul className="space-y-2 text-slate-600">
                        <li>• 34-year-old software engineer</li>
                        <li>• Altruistic living donor</li>
                        <li>• Donation date: November 12, 2023</li>
                        <li>• Started a 3-person donation chain</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        Chain Impact
                      </h3>
                      <ul className="space-y-2 text-slate-600">
                        <li>• Sarah: 45-year-old mother of 3</li>
                        <li>• Michael: 29-year-old teacher</li>
                        <li>• Lisa: 38-year-old nurse</li>
                        <li>• All now living healthy lives</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-accent-50 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    The Chain of Life
                  </h3>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                        1
                      </div>
                      <p>James donates to Sarah</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-accent-300 mx-4"></div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                        2
                      </div>
                      <p>Sarah's husband donates to Michael</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-accent-300 mx-4"></div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                        3
                      </div>
                      <p>Michael's sister donates to Lisa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-accent-600 to-primary-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">
                  Inspired by James's Story?
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  Learn how you can become an altruistic donor and start your
                  own chain of life
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    href="/donors"
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-accent-600"
                  >
                    Become an Altruistic Donor
                  </Button>
                  <Button
                    href="/stories"
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-accent-600"
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

export default JamesStory;
