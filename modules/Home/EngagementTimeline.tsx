import { Users } from "lucide-react";
import Image from "next/image";

const EngagementTimeline = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full text-black py-10">
      <div className="space-y-16">
        <div className="text-center">
          <h6 className="text-primary-blue uppercase tracking-[12%] font-medium text-[13px]">
            Seamless Advisory Integration
          </h6>
          <h2 className="font-semibold text-[42px]">What We Actually Do</h2>
          <p className="text-sm font-light">
            We surface human risks that financial, legal, and operational
            diligence cannot.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 rounded-[71px] border box-shadow-2 border-[#E2E8F0]">
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-14 p-12">
            <div className="flex gap-4 items-center">
              <div className="p-2 bg-primary-blue rounded-xl text-white">
                <Image
                  src="/images/engagement-timeline.svg"
                  alt="Engagement Timeline"
                  width={19}
                  height={19}
                />
              </div>
              <h3 className="font-semibold text-[42px] italic">
                Engagement Timeline
              </h3>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex gap-4 items-center">
                <div className="rounded-full relative z-10 w-8.75 box-shadow-blue h-8.75 bg-primary-blue text-white flex items-center justify-center">
                  <span className="text-base italic font-semibold">1</span>
                  <div className="absolute w-px h-14.5 bg-[#DFE9F7] top-8.75" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">
                    Pre-signing, during diligence
                  </h4>
                  <p className="text-sm text-[#94A3B8]">
                    Surface human risks that financial, legal, and operational
                    diligence cannot.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="rounded-full relative z-10 w-8.75 h-8.75 border-2 border-[#DFE9F7] text-[#DFE9F7] flex items-center justify-center">
                  <span className="text-base italic font-semibold">2</span>
                  <div className="absolute w-px h-14.5 bg-[#DFE9F7] top-8.75" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">Pre-board approval</h4>
                  <p className="text-sm text-[#94A3B8]">
                    Final verification of authority structures and leadership
                    behavior under stress.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="rounded-full relative z-10 w-8.75 h-8.75 border-2 border-[#DFE9F7] text-[#DFE9F7] flex items-center justify-center">
                  <span className="text-base italic font-semibold">3</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">
                    During post-deal leadership transitions
                  </h4>
                  <p className="text-sm text-[#94A3B8]">
                    Ensuring stability during critical integration expectations
                    and power shifts.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="left-line inline-block w-[178px] h-px bg-[#DFE9F7]" />
                <span className="inline-block leading-none uppercase text-[40px] italic font-semibold text-[#94A3B8]">
                  Never in place
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block leading-none uppercase text-[40px] italic font-semibold text-[#94A3B8]">
                  of them.
                </span>
                <span className="right-line inline-block w-[322px] h-px bg-[#DFE9F7]" />
              </div>
            </div>
          </div>
          {/* COLUMN 2 */}
          <div className="flex flex-col gap-8 bg-[#0E1628] rounded-tr-[71px] rounded-br-[71px] text-white p-12">
            <div className="p-2 bg-[#323948] w-fit rounded-xl text-white">
              <Users size={18} color="#60A5FA" />
            </div>
            <div className="space-y-5">
              <h3 className="text-[52px] font-bold italic leading-none">
                Collaborative <br /> Ecosystem
              </h3>
              <h5 className="text-xl uppercase italic tracking-[62%]">
                We operate alongside
              </h5>
              <p className="text-xl text-[#94A3B8]">
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
                    <h5 className="text-lg font-semibold">Legal Counsel</h5>
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
                    <h5 className="text-lg font-semibold">
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
                    <h5 className="text-lg font-semibold">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementTimeline;
