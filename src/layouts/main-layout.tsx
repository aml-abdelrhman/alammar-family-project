import { Navbar } from "@/components/common/navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/common/footer";
import { PropsWithChildren } from "react";

const MainLayout = async ({ children }: PropsWithChildren) => {
  return (
    <div
      className="transition-colors bg-white min-h-svh dark:bg-zinc-900 max-w-screen"
      dir="rtl"
    >
      <Navbar />
      <main
        className={cn(
          "relative z-10 min-h-[70svh] transition-colors overflow-x-hidden",
        )}
      >
        {children}
      </main>
      <Footer />
      <svg className="hidden">
        <filter id="liquid-distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
        </filter>
      </svg>
    </div>
  );
};

export default MainLayout;