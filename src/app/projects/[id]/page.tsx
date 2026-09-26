"use client";

import { use, useState, useEffect } from "react";
import { projects } from "@/data/portfolioData";
import { MobileHeader } from "@/components/ui/MobileHeader";
import { InfoSidebar } from "@/components/ui/InfoSidebar";
import { FadeIn } from "@/components/ui/FadeIn";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const proj = projects.find(p => p.id === unwrappedParams.id);

  if (!proj) {
    return notFound();
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-background overflow-hidden selection:bg-blue-500/30">
      <MobileHeader />
      <InfoSidebar />

      <main className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth no-scrollbar">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20 pb-32">
          
          <FadeIn>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8">
              <ArrowLeft size={16} /> Wróć do projektów
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-4 block">{proj.category}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">{proj.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {proj.tags.map(tag => (
                <span key={tag} className="text-sm px-3 py-1.5 rounded-full bg-white/10 text-white/80 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mb-16">
            <ParallaxImage src={proj.image} alt={proj.title} />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <FadeIn delay={0.3}>
                <h2 className="text-2xl font-bold text-white mb-6">O projekcie</h2>
                <div className="text-lg text-white/60 leading-relaxed space-y-6">
                  {proj.content ? (
                    <div dangerouslySetInnerHTML={{ __html: proj.content }} />
                  ) : (
                    <p>{proj.description}</p>
                  )}
                </div>
              </FadeIn>

              {proj.videoUrl && (
                <FadeIn delay={0.4} className="mt-16">
                  <h2 className="text-2xl font-bold text-white mb-6">Prezentacja Wideo</h2>
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
                    <iframe 
                      src={proj.videoUrl} 
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </FadeIn>
              )}
            </div>

            <div>
              <FadeIn delay={0.4}>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <h3 className="text-lg font-medium text-white mb-6">Informacje</h3>
                  
                  <div className="space-y-6">
                    {proj.githubUrl && (
                      <div>
                        <div className="text-sm text-white/40 mb-2">Kod Źródłowy</div>
                        <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                          <GithubIcon size={18} /> GitHub Repository
                        </a>
                      </div>
                    )}
                    
                    {proj.liveUrl && (
                      <div>
                        <div className="text-sm text-white/40 mb-2">Live Demo</div>
                        <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                          <ExternalLink size={18} /> Zobacz projekt
                        </a>
                      </div>
                    )}

                    {!proj.githubUrl && !proj.liveUrl && (
                      <div className="text-sm text-white/50">
                        Projekt prywatny lub w trakcie rozwoju.
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
