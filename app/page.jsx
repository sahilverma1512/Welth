import Hero from "@/components/Hero";
import LandingPageData from "@/components/LandingPageData";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
export default function Home() {
  return (
    <div className="mt-40">
      {/* Hero image with animation */}
      <Hero/>

      {/* Landing page content like testimonials ,etc. */}
      <LandingPageData/>





      
    </div>
  );
}
