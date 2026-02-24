import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainHero = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center py-6 px-4 min-h-[calc(100vh-158px)]">
      <div className="flex justify-center items-center gap-2 py-1 px-10 rounded-[73px] border border-[#4A4A4A] backdrop-blur-[1px]">
        <Image src="/images/lock.svg" alt="lock" width={10} height={10} />
        <span className="text-[12px]">Confidential Human Intelligence</span>
      </div>
      <div className="text-center">
        <h1 className="text-[64px] font-bold leading-[1.2]">
          Human Risk <br /> Intelligence
        </h1>
        <h2 className="text-[64px] font-rockabilly leading-[1.2] text-[#60A5FA]">
          for Irreversible <br /> Decisions
        </h2>
        <p className="max-w-226 mx-auto text-sm sm:text-base mt-6">
          CAISRO provides advisory intelligence on leadership, authority, and
          behavioral risk in high-value decisions where human failure is the
          most underestimated threat.
        </p>
      </div>

      <div className="flex gap-4 items-center justify-center w-full py-7.75 px-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 bg-primary-blue text-[15px] text-white px-6 py-3 rounded-[22px]"
        >
          <span>Request a Confidential Briefing</span>{" "}
          <ChevronRight size={18} />
        </Link>
        <div className="w-px h-14 bg-white" />
        <p className="text-[13px] italic font-light">
          &quot;Our work is confidential, probabilistic, and
          <br /> institution-focused.&quot;
        </p>
      </div>
    </div>
  );
};

export default MainHero;
