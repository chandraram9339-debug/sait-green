import { Header } from "@/components/site/Header";
import { Hero } from "@/components/landing/Hero";
import { ProvenPerformance } from "@/components/landing/ProvenPerformance";
import { TechnologyExpertise } from "@/components/landing/TechnologyExpertise";
import { RiskManagement } from "@/components/landing/RiskManagement";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { TransparentFees } from "@/components/landing/TransparentFees";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-16 pb-24 pt-1 md:gap-24 md:pb-32">
        <Hero />

        <ProvenPerformance />
        <TechnologyExpertise />
        <RiskManagement />
        <HowItWorks />
        <TransparentFees />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}

