import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Approach from "../components/Approach/Approach";
import Testimonials from "../components/Testimonials/Testimonials";
import Innovation from "../components/Innovation/Innovation";
import Team from "../components/Team/Team";
import Portfolio from "../components/Portfolio/Portfolio";
import BottomHero from "../components/BottomHero/BottomHero";
import Footer from "../components/Footer/Footer";
import SectionReveal from "../components/SectionReveal/SectionReveal";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SectionReveal>
        <Approach />
      </SectionReveal>
      <SectionReveal>
        <Testimonials />
      </SectionReveal>
      <SectionReveal>
        <Innovation />
      </SectionReveal>
      <SectionReveal>
        <Team />
      </SectionReveal>
      <SectionReveal>
        <Portfolio />
      </SectionReveal>
      <SectionReveal>
        <BottomHero />
      </SectionReveal>
      <Footer />
    </main>
  );
}
