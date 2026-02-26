import { ArrowRight } from "lucide-react";
import Image from "next/image";

const WhenCAISROIsEngaged = () => {
  return (
    <div className="w-full relative z-10 text-black py-10 sm:py-16 lg:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-20">
        {/* COLUMN 1 */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="heading-h2">
              When CAISRO Is Engaged
            </h2>
            <div className="flex gap-2 items-center">
              <Image
                src="/images/success.svg"
                alt="success icon"
                width={19}
                height={19}
              />
              <span className="uppercase text-xs lg:text-[13px] font-medium text-primary-blue tracking-[12%]">
                CAISRO is typically engaged when:
              </span>
            </div>
          </div>
          <div className="py-4 flex flex-col gap-4">
            <div className="flex items-center gap-4 p-5 bg-white rounded-[22px] border border-[#BFDBFE] box-shadow">
              <div className="p-3 bg-primary-blue rounded-xl text-white">
                <ArrowRight size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-[18px]">Material Impact</h4>
                <p className="text-sm text-[#94A3B8]">
                  Leadership behavior materially affects deal outcomes
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-[22px] border border-[#F1F5F9]">
              <div className="p-3 bg-[#EFF6FF] rounded-xl text-primary-blue">
                <ArrowRight size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-[18px]">Control Shifts</h4>
                <p className="text-sm text-[#94A3B8]">
                  Authority or control structures are undergoing change
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-[22px] border border-[#F1F5F9]">
              <div className="p-3 bg-[#EFF6FF] rounded-xl text-primary-blue">
                <ArrowRight size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-[18px]">Legacy Power</h4>
                <p className="text-sm text-[#94A3B8]">
                  Founders, families, or legacy power dynamics are involved
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-[22px] border border-[#F1F5F9]">
              <div className="p-3 bg-[#EFF6FF] rounded-xl text-primary-blue">
                <ArrowRight size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-[18px]">High Cost Failure</h4>
                <p className="text-sm text-[#94A3B8]">
                  The cost of human failure is non-trivial and irreversible
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* COLUMN 2 */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="heading-h2">
              When We Are Not Appropriate
            </h2>
            <div className="flex gap-2 items-center">
              <Image
                src="/images/alert.svg"
                alt="alert icon"
                width={19}
                height={19}
              />
              <span className="uppercase text-xs lg:text-[13px] font-medium text-[#94A3B8] tracking-[12%]">
                CAISRO is not designed for:
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-[50px_25px_35px_25px] rounded-[22px] bg-[#F8FAFC] border border-[#F1F5F9]">
            <div className="flex items-center gap-4 pb-3 border-b border-[#E2E8F0]">
              <Image
                src="/images/cancel.svg"
                alt="cancel icon"
                width={19}
                height={19}
              />
              <span className="text-[14px] italic text-[#65758C]">
                Small or reversible decisions
              </span>
            </div>
            <div className="flex items-center gap-4 pb-3 border-b border-[#E2E8F0]">
              <Image
                src="/images/cancel.svg"
                alt="cancel icon"
                width={19}
                height={19}
              />
              <span className="text-[14px] italic text-[#65758C]">
                Consumer psychology or personality testing
              </span>
            </div>
            <div className="flex items-center gap-4 pb-3 border-b border-[#E2E8F0]">
              <Image
                src="/images/cancel.svg"
                alt="cancel icon"
                width={19}
                height={19}
              />
              <span className="text-[14px] italic text-[#65758C]">
                Diagnostic or therapeutic assessments
              </span>
            </div>
            <div className="flex items-center gap-4 pb-3 border-b border-[#E2E8F0]">
              <Image
                src="/images/cancel.svg"
                alt="cancel icon"
                width={19}
                height={19}
              />
              <span className="text-[14px] italic text-[#65758C]">
                Speed-only transactions
              </span>
            </div>
            <div className="p-[26px_20px] rounded-[22px] bg-[#101A33] mt-8">
              <p className="text-white text-lg font-sansita-one leading-[136%]">
                Human risk intelligence is not always necessary. <br /> Ignoring it
                when it is can be expensive.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-blur-1"/>
    </div>
  );
};

export default WhenCAISROIsEngaged;
