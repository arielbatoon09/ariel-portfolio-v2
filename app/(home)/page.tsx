import { HeroBanner } from "@/components/content/HeroBanner";
import { RecentProjects } from "@/components/content/RecentProjects";
import { CTASection } from "@/components/content/CTASection";

export default function Home() {
  return (
    <>
      <HeroBanner className="pt-32 pb-10 md:pb-24 md:pt-40" />
      <RecentProjects className="py-10 md:py-20" />
      <CTASection />
    </>
  );
}