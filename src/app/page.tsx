import { Hero } from "@/components/pages/Home/Hero";
import { UshaigerHeritage } from "@/components/pages/Home/UshaigerHeritage";
import { AlQaraeenVillage } from "@/components/pages/Home/AlQaraeenVillage";
import { DigitalLibrary } from "@/components/pages/Home/DigitalLibrary";
import { QuranFigures } from "@/components/pages/Home/QuranFigures";
import { ConnectedPrinces } from "@/components/pages/Home/ConnectedPrincess";
import { ScholarsSection } from "@/components/pages/Home/ScholarsSection";
import { CharityInitiatives } from "@/components/pages/Home/CharityInitiatives";
import { QuranMemorySection } from "@/components/pages/Home/QuranMemorySection";

const HomePage = async () => {
  return (
    <main className="relative">
      <Hero />
      
      {/* استخدمنا scroll-mt-24 لضمان أن القسم لا يختفي خلف الـ Navbar الثابت عند الانتقال */}
      <div id="ushaiger" className="scroll-mt-20"><UshaigerHeritage /></div>
      <div id="village" className="scroll-mt-20"><AlQaraeenVillage /></div>
      <div id="figures" className="scroll-mt-20"><QuranFigures /></div>
      <div id="princes" className="scroll-mt-20"><ConnectedPrinces /></div>
      <div id="scholars" className="scroll-mt-20"><ScholarsSection /></div>
      <div id="charity" className="scroll-mt-20"><CharityInitiatives /></div>
      <div id="library" className="scroll-mt-20"><DigitalLibrary /></div>
      
      <QuranMemorySection />
    </main>
  );
};

export default HomePage;