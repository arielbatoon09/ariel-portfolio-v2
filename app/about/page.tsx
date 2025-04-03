import { AboutDescription } from "@/components/content/AboutDescription";
import { AboutProfile } from "@/components/content/AboutProfile";

export default function About() {
  return (
    <>
      <AboutProfile className="pt-24 pb-20" />
      <AboutDescription className="pb-20" />
    </>
  );
}