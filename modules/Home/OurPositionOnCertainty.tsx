import { Dot } from "lucide-react";
import Image from "next/image";

const OurPositionOnCertainty = () => {
  return (
    <div
      style={{ backgroundImage: "url('/images/bg-blue.png')" }}
      className="after-bg-blue relative bg-center bg-cover min-h-screen w-full text-white flex items-center justify-center py-4"
    >
      <div className="main-container relative z-10">
        <h5>Fundamental Axioms</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* COLUMN 1 */}
          <div>
            <h2>
              Our Position on <span>Certainty</span>
            </h2>
            <div>
              <h3>Human risk cannot be eliminated.</h3>
              <h4>It can only be misjudged or managed.</h4>
              <div className="line" />
            </div>
          </div>
          {/* COLUMN 2 */}
          <div>
            <div>
              <div>
                <Image
                  src="/images/principle.svg"
                  alt="principle 1"
                  width={19}
                  height={19}
                />
                <div>
                  <h5>Principle One</h5>
                  <h4>We do not predict behavior.</h4>
                  <h3>
                    We model <span>risk probability.</span>
                  </h3>
                </div>
              </div>
              <div className="line" />
              <p>
                Predicting specific outcomes is a fallacy of standard diligence.
                We provide a statistical framework for behavioral variance.
              </p>
            </div>
            <div>
              <div>
                <Image
                  src="/images/principle.svg"
                  alt="principle 1"
                  width={19}
                  height={19}
                />
                <div>
                  <h5>Principle Two</h5>
                  <h4>We do not determine decisions.</h4>
                  <h3>
                    We inform <span>consequences.</span>
                  </h3>
                </div>
              </div>
              <div className="line" />
              <p>
                Our intelligence is an instrument for leadership, not a
                replacement for it. We map the terrain; the path remains yours.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="line"/>
      <ul>
        <li>Probability Modeling</li>
        <li><Dot /></li>
        <li>Risk Visibility</li>
        <li><Dot /></li>
        <li>Institutional Security</li>
      </ul>
    </div>
  );
};

export default OurPositionOnCertainty;
