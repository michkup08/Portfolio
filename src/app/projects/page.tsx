import { projects } from "@/data/portfolioData";
import { MobileHeader } from "@/components/ui/MobileHeader";
import { InfoSidebar } from "@/components/ui/InfoSidebar";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-background overflow-hidden selection:bg-blue-500/30">
      <MobileHeader />
      <InfoSidebar />

      <main className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth no-scrollbar">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20 pb-32">
          
          <FadeIn>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8">
              <ArrowLeft size={16} /> Wróć do strony głównej
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">Wszystkie Projekty</h1>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <FadeIn key={proj.id} delay={0.1 * (idx % 2)}>
                <Link href={`/projects/${proj.id}`} className="group block cursor-pointer">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5 mb-4 border border-white/10">
                    {proj.image ? (
                      <Image 
                        src={proj.image} 
                        alt={proj.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={85}
                        className="object-cover w-full h-full opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out will-change-transform transform-gpu" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/20">No image</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                       <span className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20 hover:bg-white/30 hover:border-white/50 transition-all">Zobacz szczegóły</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1 block">{proj.category}</span>
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-300 transition-colors">{proj.title}</h3>
                </Link>
              </FadeIn>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
