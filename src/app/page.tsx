import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
}
