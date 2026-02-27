import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EngagementTypes = () => {
  return (
    <div className="pt-10 pb-24 sm:pb-32 sm:pt-16 lg:pt-28">
      <div className="">
        <h6 className="blue-little-text">
          Seamless Advisory Integration
        </h6>
        <h2 className="heading-h2-lg">What We Actually Do</h2>
        <p className="light-paragraph">
          We surface human risks that financial, legal, and operational
          diligence cannot.
        </p>
      </div>
      <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-6 sm:p-8 rounded-[44px] space-y-6 bg-white border border-[#BFDBFE] box-shadow">
          <div className="bg-[#2563EB] box-shadow-blue w-11.25 h-11.25 flex items-center justify-center rounded-xl">
            <Image
              src="/images/principle.svg"
              alt="principle 1"
              width={22}
              height={22}
            />
          </div>
          <h3 className="font-semibold text-xl">
            Deal & M&A Human Risk Briefs
          </h3>
          <div className="line h-px w-10 bg-[#DFE9F7]" />
          <p className="text-sm text-[#94A3B8]">
            Mapping behavioral variance in transaction frameworks.
          </p>
          <div className="flex gap-1.5 items-center">
            <Image src="/images/dot.svg" alt="dot" width={6} height={6} />
            <Image src="/images/dot.svg" alt="dot" width={6} height={6} />
            <Image src="/images/dot.svg" alt="dot" width={6} height={6} />
          </div>
        </div>
        <div className="p-6 sm:p-8 rounded-[44px] space-y-6 bg-white border border-[#F1F5F9]">
          <div className="bg-black box-shadow-black w-11.25 h-11.25 flex items-center justify-center rounded-xl">
            <Image
              src="/images/founder&leadership-risk.svg"
              alt="Founder & Leadership Risk Assessments"
              width={22}
              height={22}
            />
          </div>
          <h3 className="font-semibold text-xl">
            Founder & Leadership Risk Assessments
          </h3>
          <div className="line h-px w-10 bg-[#DFE9F7]" />
          <p className="text-sm text-[#94A3B8]">
            Analysis of authority continuity under extreme stress.
          </p>
          <div className="flex gap-1.5 items-center">
            <Image src="/images/gray-dot.svg" alt="dot" width={6} height={6} />
            <Image src="/images/gray-dot.svg" alt="dot" width={6} height={6} />
            <Image src="/images/gray-dot.svg" alt="dot" width={6} height={6} />
          </div>
        </div>
        <div className="p-6 sm:p-8 rounded-[44px] space-y-6 bg-white border border-[#F1F5F9]">
          <div className="bg-black box-shadow-black w-11.25 h-11.25 flex items-center justify-center rounded-xl">
            <Image
              src="/images/post-deal-stability&transition.svg"
              alt="Post-Deal Stability & Transition Advisory"
              width={22}
              height={22}
            />
          </div>
          <h3 className="font-semibold text-xl">
            Post-Deal Stability & Transition Advisory
          </h3>
          <div className="line h-px w-10 bg-[#DFE9F7]" />
          <p className="text-sm text-[#94A3B8]">
            Strategic monitoring during authority reconfiguration phases.
          </p>
          <div className="flex gap-1.5 items-center">
            <Image src="/images/gray-dot.svg" alt="dot" width={6} height={6} />
            <Image src="/images/gray-dot.svg" alt="dot" width={6} height={6} />
            <Image src="/images/gray-dot.svg" alt="dot" width={6} height={6} />
          </div>
        </div>
      </div>
      <div
        style={{ background: "url('/images/strategic-notice-short.png')" }}
        className="max-w-[1253px] h-[198px] bg-cover bg-bottom! md:bg-center rounded-[44px] flex items-center justify-center text-center text-white px-8 py-8 mx-auto mt-6"
      >
        <div className="">
          <h6 className="text-primary-blue uppercase tracking-[12%] font-medium text-sm sm:text-[13px]">
            Strategic Notice
          </h6>
          <h2 className="font-semibold text-[24px] md:text-[34px] xl:text-[42px] uppercase">
            Engagements are selective.
          </h2>
          <p className="text-xs sm:text-sm font-light text-[#94A3B8]">
            CAISRO does not accept all engagements to maintain high-precision
            focus on irreversible outcomes.
          </p>
        </div>
      </div>
      <div
        style={{ backgroundImage: "url('/images/bg-blue.png')" }}
        className="after-bg-blue-lines-group relative overflow-hidden sm:h-[582px] bg-center rounded-[44px] bg-cover max-w-[1253px] text-white px-8 py-12 mt-24"
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[44px]">
          <Image src="/images/smoke.png" alt="smoke" fill />
        </div>
        <div className="flex items-center justify-center h-full w-full text-center">
          <div className="relative z-10 flex items-center justify-center flex-col gap-10">
            <h2 className="font-semibold text-[28px] md:text-[36px] xl:text-[42px] leading-none uppercase max-w-[600px] mx-auto">
              Ready to Access{" "}
              <span className="text-primary-blue">Human Certainty</span>?
            </h2>
            <p className="text-sm font-light text-[#94A3B8] max-w-[267px] mx-auto">
              &quot;CAISRO does not accept all engagements. Start with a secure
              inquiry.&quot;
            </p>
            <Link
              href="/"
              className="main-btn bg-white text-black hover:shadow-white group"
            >
              <span>Request a Confidential Briefing</span>{" "}
              <ChevronRight size={18} className="text-primary-blue group-hover:translate-x-2 transition-all duration-300"/>
            </Link>
            <p className="font-medium uppercase tracking-[26%] text-sm sm:text-[13px] text-[#94A3B8]">
              institutional selective intake only 
            </p>
          </div>
        </div>
        <div className="box-blur-5"/>
      </div>
    </div>
  );
};

export default EngagementTypes;
