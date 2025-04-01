import { HeroBanner } from "@/components/content/Hero-banner";
import { RecentProjects } from "@/components/content/RecentProjects";
import { CTASection } from "@/components/content/CTASection";

export default function Home() {
  return (
    <>
      <HeroBanner className="py-32 md:py-40" />
      <RecentProjects className="py-10 md:py-20" />
      <CTASection />
    </>
  );
}