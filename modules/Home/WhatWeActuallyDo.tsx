import { Shield } from "lucide-react";
import Image from "next/image";

const WhatWeActuallyDo = () => {
  return (
    <div
      style={{ backgroundImage: "url('/images/intellegence-pillar-main.png')" }}
      className="after-bg-layer relative z-50 bg-center bg-cover w-full text-white py-10 sm:py-16 lg:py-20"
    >
      <div className="main-container relative z-20 text-center">
        <div className="flex flex-col gap-10">
          <div>
            <h6 className="blue-little-text">Intelligence Pillars</h6>
            <h2 className="heading-h2-lg">What We Actually Do</h2>
            <p className="light-paragraph">
              We surface human risks that financial, legal, and operational
              diligence cannot.
            </p>
          </div>

          <h5 className="uppercase tracking-[24%] sm:tracking-[74%] lg:tracking-[114%] text-sm sm:text-base md:text-lg">
            Specifically, we assess
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="flex flex-col items-start gap-2 p-5 bg-white text-black rounded-[22px] border border-[#F1F5F9] box-shadow-2">
              <div className="p-3 bg-primary-blue rounded-xl text-white">
                <Shield size={18} />
              </div>
              <h4 className="font-semibold text-lg">Authority Risk</h4>
              <p className="text-sm text-[#94A3B8]">
                Authority reconfiguration risk
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 p-5 bg-white text-black rounded-[22px] border border-[#F1F5F9] box-shadow-2">
              <div className="p-3 bg-[#EFF6FF] rounded-xl text-primary-blue">
                <Image
                  src="/images/stress-behavior.svg"
                  alt="Stress Behavior"
                  width={19}
                  height={19}
                />
              </div>
              <h4 className="font-semibold text-lg">Stress Behavior</h4>
              <p className="text-sm text-[#94A3B8]">
                Leadership behavior under stress
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 p-5 bg-white text-black rounded-[22px] border border-[#F1F5F9] box-shadow-2">
              <div className="p-3 bg-[#EFF6FF] rounded-xl text-primary-blue">
                <Image
                  src="/images/breakdown-odds.svg"
                  alt="Breakdown Odds"
                  width={19}
                  height={19}
                />
              </div>
              <h4 className="font-semibold text-lg">Breakdown Odds</h4>
              <p className="text-sm text-[#94A3B8]">
                Decision-making breakdown probability
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 p-5 bg-white text-black rounded-[22px] border border-[#F1F5F9] box-shadow-2">
              <div className="p-3 bg-[#EFF6FF] rounded-xl text-primary-blue">
                <Image
                  src="/images/value-erosion.svg"
                  alt="Value Erosion"
                  width={19}
                  height={19}
                />
              </div>
              <h4 className="font-semibold text-lg">Value Erosion</h4>
              <p className="text-sm text-[#94A3B8]">
                Post-deal value erosion scenarios
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 text-left">
            <div className="col-span-12 md:col-span-6 flex flex-col items-start gap-2 p-5 bg-white text-black rounded-[22px] border border-[#F1F5F9] box-shadow-3">
              <h4 className="font-semibold text-lg">Our work informs</h4>
              <div className="flex gap-2 w-full items-center flex-wrap">
                <div className="p-3 rounded-xl bg-[#EFF6FF] uppercase text-primary-blue text-sm">
                  deal structure
                </div>
                <div className="p-3 rounded-xl bg-[#EFF6FF] uppercase text-primary-blue text-sm">
                  governance design
                </div>
                <div className="p-3 rounded-xl bg-[#EFF6FF] uppercase text-primary-blue text-sm">
                  integration expectations
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col items-start gap-2 p-5 text-white rounded-[22px] box-shadow-blue linear-g-blue">
              <h4 className="font-semibold text-lg uppercase tracking-[20%]">
                Our Core Position
              </h4>
              <p className="text-xl font-sansita-one font-normal leading-[136%]">
                &quot;We do not predict behavior. We model risk <br />
                probability.&quot;
              </p>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2 relative max-h-[109px] max-w-214 mx-auto">
            <p className="font-inter font-semibold text-[22px] sm:text-[28px] md:text-[34px] leading-none uppercase opacity-24">
              Not outcomes. Not recommendations. <br />
              <span className="text-[24px] leading-[134%] font-normal font-sansita-one">
                Risk visibility.
              </span>
            </p>
            <Image
              src="/images/left-lines.svg"
              alt="lines"
              width={732}
              height={109}
              className="max-w-[732px] w-full absolute top-0 left-0 hidden sm:block"
            />
            <Image
              src="/images/right-lines.svg"
              alt="lines"
              width={293}
              height={109}
              className="max-w-[293px] w-full absolute top-0 right-0 hidden sm:block"
            />
          </div>
        </div>
      </div>
      <div className="box-blur-6"/>
    </div>
  );
};

export default WhatWeActuallyDo;
