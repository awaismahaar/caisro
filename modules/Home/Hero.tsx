import MainHero from "@/components/Home/MainHero";
import Navbar from "@/components/Home/Navbar";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      className="bg-cover bg-center min-h-screen w-full"
    >
      <Navbar />
      <MainHero />
    </div>
  );
};

export default Hero;
