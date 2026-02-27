import { Users } from "lucide-react";
import Image from "next/image";

const EngagementTimeline = () => {
  return (
    <div className="w-full text-black py-10 sm:py-16 lg:py-28 relative z-10">
      <div className="space-y-16">
        <div className="text-center">
          <h6 className="blue-little-text">Seamless Advisory Integration</h6>
          <h2 className="heading-h2-lg">What We Actually Do</h2>
          <p className="light-paragraph">
            We surface human risks that financial, legal, and operational
            diligence cannot.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-md:gap-12 rounded-[71px] md:border md:box-shadow-2 md:border-[#E2E8F0]">
          {/* COLUMN 1 */}
          <div className="py-8 md:py-16 space-y-20 max-md:rounded-[45px] md:rounded-tl-[71px] md:rounded-bl-[71px] max-md:border bg-white max-md:box-shadow-2 max-md:border-[#E2E8F0]">
            <div className="flex flex-col gap-8 sm:gap-14 px-4 md:px-8 xl:px-12">
              <div className="flex gap-4 items-center">
                <div className="p-2 bg-primary-blue rounded-xl text-white">
                  <Image
                    src="/images/engagement-timeline.svg"
                    alt="Engagement Timeline"
                    width={19}
                    height={19}
                  />
                </div>
                <h3 className="heading-h3 italic">Engagement Timeline</h3>
              </div>
              <div className="flex flex-col gap-10 relative">
                <div className="absolute w-px h-3/4 bg-[#DFE9F7] left-4 top-8 md:top-8.75" />
                <div className="flex gap-2 sm:gap-4 items-center">
                  <div className="rounded-full relative shrink-0 z-10 w-8 h-8 md:w-8.75 md:h-8.75 box-shadow-blue  bg-primary-blue text-white flex items-center justify-center">
                    <span className="text-base italic font-semibold">1</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="heading-normal">
                      Pre-signing, during diligence
                    </h4>
                    <p className="paragraph-light-main">
                      Surface human risks that financial, legal, and operational
                      diligence cannot.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 sm:gap-4 items-center">
                  <div className="rounded-full relative z-10 bg-white shrink-0 w-8 h-8 md:w-8.75 md:h-8.75 border-2 border-[#DFE9F7] text-[#DFE9F7] flex items-center justify-center">
                    <span className="text-base italic font-semibold">2</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="heading-normal">Pre-board approval</h4>
                    <p className="paragraph-light-main">
                      Final verification of authority structures and leadership
                      behavior under stress.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 sm:gap-4 items-center">
                  <div className="rounded-full shrink-0 relative z-10 w-8 h-8 md:w-8.75 md:h-8.75 border-2 bg-white border-[#DFE9F7] text-[#DFE9F7] flex items-center justify-center">
                    <span className="text-base italic font-semibold">3</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="heading-normal">
                      During post-deal leadership transitions
                    </h4>
                    <p className="paragraph-light-main">
                      Ensuring stability during critical integration
                      expectations and power shifts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="left-line inline-block w-[178px] h-px bg-[#DFE9F7]" />
                <span className="inline-block shrink-0 pr-2 leading-none uppercase text-[24px] md:text-[32px] xl:text-[46px] italic font-semibold text-[#94A3B8]">
                  Never in place
                </span>
              </div>
              <div className="flex items-center w-full">
                <span className="inline-block leading-none shrink-0 pl-2 uppercase text-[24px] md:text-[30px] xl:text-[46px] ml-auto italic font-semibold text-[#94A3B8]">
                  of them.
                </span>
                <span className="right-line inline-block w-[58%] h-px bg-[#DFE9F7]" />
              </div>
            </div>
          </div>
          {/* COLUMN 2 */}
          <div className="flex flex-col relative overflow-hidden z-10 gap-8 bg-[#0E1628] max-md:rounded-[45px] md:rounded-tr-[71px] md:rounded-br-[71px] text-white px-4 md:px-8 xl:px-12 py-8 md:py-16">
            <div className="p-2 bg-[#323948] w-fit rounded-xl text-white">
              <Users size={18} color="#60A5FA" />
            </div>
            <div className="space-y-5">
              <h3 className="text-[38px] md:text-[36px] lg:text-[42px] xl:text-[52px] font-bold italic leading-none">
                Collaborative <br /> Ecosystem
              </h3>
              <h5 className="text-base md:text-lg xl:text-xl uppercase italic tracking-[32%] md:tracking-[62%]">
                We operate alongside
              </h5>
              <p className="text-base md:text-lg xl:text-xl text-[#94A3B8]">
                We operate{" "}
                <span className="text-white font-semibold">alongside</span>{" "}
                established advisors to provide the critical human layer of risk
                visibility.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4 rounded-[22px] border border-[#323948] bg-[#1A2233]/50 p-4">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/images/legal-counsel.svg"
                      alt="Legal Counsel"
                      width={19}
                      height={19}
                    />
                    <h5 className="text-base xl:text-lg font-semibold">Legal Counsel</h5>
                  </div>
                  <Image
                    src="/images/link-arrow.svg"
                    alt="Link Arrow"
                    width={10}
                    height={10}
                  />
                </div>
                <div className="flex items-center justify-between gap-4 rounded-[22px] border border-[#323948] bg-[#1A2233]/50 p-4">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/images/financial-advisors.svg"
                      alt="Financial Advisors"
                      width={19}
                      height={19}
                    />
                    <h5 className="text-base xl:text-lg font-semibold">
                      Financial Advisors
                    </h5>
                  </div>
                  <Image
                    src="/images/link-arrow.svg"
                    alt="Link Arrow"
                    width={10}
                    height={10}
                  />
                </div>
                <div className="flex items-center justify-between gap-4 rounded-[22px] border border-[#323948] bg-[#1A2233]/50 p-4">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/images/operating-partners.svg"
                      alt="Operating Partners"
                      width={19}
                      height={19}
                    />
                    <h5 className="text-base xl:text-lg font-semibold">
                      Operating Partners
                    </h5>
                  </div>
                  <Image
                    src="/images/link-arrow.svg"
                    alt="Link Arrow"
                    width={10}
                    height={10}
                  />
                </div>
              </div>
            </div>
            <div className="box-blur-3"/>
          </div>
        </div>
      </div>
      <div className="box-blur-2"/>
    </div>
  );
};

export default EngagementTimeline;
