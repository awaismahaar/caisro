import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t border-t-[#F1F5F9] pt-16">
      <div className="main-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-16">
          <div className="space-y-6">
            <Image
              src="/images/black-logo.svg"
              alt="CAISRO logo"
              width={120}
              height={24}
            />
            <p className="text-sm text-[#94A3B8]">
              Global Human Risk Advisory.Confidential. Probabilistic. Necessary.
            </p>
            <div className="flex gap-3 items-center">
              <div className="bg-[#2563EB] cursor-pointer box-shadow-blue w-11 h-11 flex items-center justify-center rounded-xl">
                <Image
                  src="/images/twitter.svg"
                  alt="twitter"
                  width={22}
                  height={22}
                />
              </div>
              <div className="bg-black box-shadow-black cursor-pointer w-11 h-11 flex items-center justify-center rounded-xl">
                <Image
                  src="/images/facebook.svg"
                  alt="facebook"
                  width={13}
                  height={15}
                />
              </div>
              <div className="bg-black box-shadow-black cursor-pointer w-11 h-11 flex items-center justify-center rounded-xl">
                <Image
                  src="/images/linkedin.svg"
                  alt="linkedin"
                  width={18}
                  height={19}
                />
              </div>
              <div className="bg-black box-shadow-black cursor-pointer w-11 h-11 flex items-center justify-center rounded-xl">
                <Image
                  src="/images/instagram.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-sm uppercase tracking-[12%]">Intelligence</h5>
            <div className="flex flex-col gap-3">
              <Link href="/what-we-assess">
                <span className="text-sm text-[#94A3B8] hover:text-[#2563EB] cursor-pointer">
                  What We Assess
                </span>
              </Link>
              <Link href="/what-we-assess">
                <span className="text-sm text-[#94A3B8] hover:text-[#2563EB] cursor-pointer">
                  Engagement Type
                </span>
              </Link>
              <Link href="/what-we-assess">
                <span className="text-sm text-[#94A3B8] hover:text-[#2563EB] cursor-pointer">
                  Ethics & Limitations
                </span>
              </Link>
              <Link href="/what-we-assess">
                <span className="text-sm text-[#94A3B8] hover:text-[#2563EB] cursor-pointer">
                  Anonymized Cases
                </span>
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-sm uppercase tracking-[12%] text-white invisible">
              Resources
            </h5>
            <div className="flex flex-col gap-3">
              <Link href="/what-we-assess">
                <span className="text-sm text-[#94A3B8] hover:text-[#2563EB] cursor-pointer">
                  About CAISRO
                </span>
              </Link>
              <Link href="/what-we-assess">
                <span className="text-sm text-[#94A3B8] hover:text-[#2563EB] cursor-pointer">
                  How We Work
                </span>
              </Link>
              <Link href="/what-we-assess">
                <span className="text-sm text-[#94A3B8] hover:text-[#2563EB] cursor-pointer">
                  Contact
                </span>
              </Link>
              <Link href="/what-we-assess">
                <span className="text-sm text-[#94A3B8] hover:text-[#2563EB] cursor-pointer">
                  Anonymized Cases
                </span>
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-sm uppercase tracking-[12%]">Security</h5>
            <div className="p-4 rounded-[22px] border border-[#F1F5F9] box-shadow-2">
              <div className="flex gap-2 items-center">
                <Image
                  src="/images/institutional-protocol.svg"
                  alt="Institutional Protocol"
                  width={22}
                  height={20}
                />
                <span className="font-semibold text-lg">
                  Institutional Protocol
                </span>
              </div>
              <p className="text-sm text-[#94A3B8] mt-1">
                Client interactions are handled via encrypted channels and
                managed with strict non-disclosure legal standards.
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="border-t border-t-[#F1F5F9] py-6">
          <ul className="main-container text-[#94A3B8] text-[13px] tracking-[45%] leading-[25px] font-dm-sans flex justify-between items-center gap-4">
            <li>© 2026 CAISRO LLC</li>
            <ul className="flex gap-4">
              <li className="cursor-pointer hover:text-primary-blue">PRIVACY POLICY</li>
              <li className="cursor-pointer hover:text-primary-blue">TERMS OF USE</li>
            </ul>
          </ul>
        </div>
    </div>
  );
};

export default Footer;
