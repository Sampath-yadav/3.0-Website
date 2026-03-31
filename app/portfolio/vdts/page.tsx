import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/Portfolio/VDTS/HeroSection";
import OverviewSection from "@/components/Portfolio/VDTS/OverviewSection";
import ProblemSection from "@/components/Portfolio/VDTS/ProblemSection";
import SolutionSection from "@/components/Portfolio/VDTS/SolutionSection";
import UsersSection from "@/components/Portfolio/VDTS/UsersSection";
import FeaturesSection from "@/components/Portfolio/VDTS/FeaturesSection";
import WorkflowSection from "@/components/Portfolio/VDTS/WorkflowSection";
import DesignApproachSection from "@/components/Portfolio/VDTS/DesignApproachSection";
import OutcomeSection from "@/components/Portfolio/VDTS/OutcomeSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <HeroSection />
      <OverviewSection />
      <ProblemSection />
      <SolutionSection />
      <UsersSection />
      <FeaturesSection />
      <WorkflowSection />
      <DesignApproachSection />
      <OutcomeSection />
      <Footer />
    </main>  );
}
