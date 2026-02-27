import { Dot } from "lucide-react";
import Image from "next/image";

const OurPositionOnCertainty = () => {
  return (
    <div
      style={{ backgroundImage: "url('/images/bg-blue.png')" }}
      className="after-bg-blue relative bg-center bg-cover w-full text-white py-4"
    >
      <div className="flex relative z-10 flex-col justify-between pt-6 md:pt-12">
        <div className="main-container relative z-10">
          <h5 className="flex items-center gap-2 mb-10">
            {" "}
            <Image
              src="/images/fundamental-axioms.svg"
              alt="Fundamental Axioms"
              width={19}
              height={19}
            />{" "}
            <span className="text-[13px] font-medium tracking-[12%] uppercase text-primary-blue">
              Fundamental Axioms
            </span>
          </h5>
          <div>
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <h2 className="font-bold italic max-sm:text-[48px] max-md:text-[58px] max-md:leading-[59.62px] md:text-[64px] md:leading-[69.62px] lg:text-[85px] lg:leading-[79.62px] xl:text-[99px] xl:leading-[99.62px] max-w-[597px]">
                Our Position on{" "}
                <span className="text-primary-blue">Certainty</span>
              </h2>
              <div className="p-6 sm:p-8 relative z-10 overflow-hidden space-y-8 rounded-[44px] border border-[#323948] bg-white text-black">
                <div className="flex max-md:flex-col gap-4">
                  <div className="bg-[#0F172A] w-11.25 h-11.25 shrink-0 flex items-center justify-center rounded-xl">
                    <Image
                      src="/images/principle.svg"
                      alt="principle 1"
                      width={22}
                      height={22}
                    />
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium uppercase tracking-[12%] text-xs md:text-[13px] text-primary-blue">
                      Principle One
                    </h5>
                    <h4 className="font-semibold text-nowrap text-lg md:text-xl italic relative w-fit">
                      <span>We do not predict behavior.</span>
                      <div className="absolute top-1/2 right-3 -translate-y-1/2">
                        <Image
                          src="/images/curve-line.svg"
                          alt="curve line"
                          width={137}
                          height={10}
                        />
                      </div>
                    </h4>
                    <h3 className="uppercase italic text-[24px] md:text-[26px] xl:text-[32px] text-[#94A3B8] font-light leading-none">
                      We model{" "}
                      <span className="font-semibold">risk probability.</span>
                    </h3>
                  </div>
                </div>
                <div className="line h-px max-w-129.5 bg-[#DFE9F7]" />
                <p className="text-sm text-[#94A3B8]">
                  Predicting specific outcomes is a fallacy of standard
                  diligence. We provide a statistical framework for behavioral
                  variance.
                </p>
                <div className="circle absolute -top-10 -z-1 -right-10 w-[170px] h-[170px] rounded-full bg-[#D9E5FF]/30"/>
              </div>
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A2233]/55 space-y-4 p-6 sm:p-8 rounded-[44px] border border-[#323948]">
                <h3 className="italic font-bold text-[32px] md:text-[36px] xl:text-[48px] leading-none">
                  Human risk cannot be eliminated.
                </h3>
                <h4 className="font-medium uppercase text-[22px] md:text-[24px] xl:text-[26px] text-primary-blue">
                  It can only be misjudged or managed.
                </h4>
                <div className="line h-1.5 w-26.25 bg-primary-blue rounded-xl box-shadow-blue" />
              </div>
              <div className="p-6 sm:p-8 overflow-hidden relative z-10 space-y-8 rounded-[44px] border border-[#323948] bg-white text-black">
                <div className="flex max-md:flex-col gap-4">
                  <div className="bg-primary-blue shadow-blue w-11.25 h-11.25 flex shrink-0 items-center justify-center rounded-xl">
                    <Image
                      src="/images/principle.svg"
                      alt="principle 2"
                      width={22}
                      height={22}
                    />
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium uppercase tracking-[12%] text-sm md:text-[13px] text-primary-blue">
                      Principle Two
                    </h5>
                    <h4 className="font-semibold text-nowrap text-lg md:text-xl italic relative w-fit">
                      <span>We do not predict behavior.</span>
                      <div className="absolute top-1/2 right-3 -translate-y-1/2">
                        <Image
                          src="/images/curve-line.svg"
                          alt="curve line"
                          width={137}
                          height={10}
                        />
                      </div>
                    </h4>
                    <h3 className="uppercase italic text-[24px] md:text-[26px] xl:text-[32px] text-[#94A3B8] font-light leading-none">
                      We inform{" "}
                      <span className="font-semibold">consequences.</span>
                    </h3>
                  </div>
                </div>
                <div className="line h-px max-w-129.5 bg-[#DFE9F7]" />

                <p className="text-sm text-[#94A3B8]">
                  Our intelligence is an instrument for leadership, not a
                  replacement for it. We map the terrain; the path remains
                  yours.
                </p>
                <div className="circle absolute -bottom-10 -z-1 -left-10 w-[170px] h-[170px] rounded-full bg-[#D9E5FF]/30"/>
              </div>
            </div>
          </div>
        </div>
        <ul className="flex items-center justify-center font-medium text-[6px] sm:text-[10px] md:text-[13px] uppercase tracking-[26%] text-[#94A3B8] border-t border-t-[#323948] mt-12 sm:mt-32 pt-4">
          <li>Probability Modeling</li>
          <li>
            <Dot className="text-primary-blue"/>
          </li>
          <li>Risk Visibility</li>
          <li>
            <Dot className="text-primary-blue"/>
          </li>
          <li>Institutional Security</li>
        </ul>
        <div className="box-blur-4"/>
      </div>
    </div>
  );
};

export default OurPositionOnCertainty;
