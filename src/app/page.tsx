"use client";

import { personalInfo, projects, services, experience } from "@/data/portfolioData";
import { InfoSidebar } from "@/components/ui/InfoSidebar";
import { MobileHeader } from "@/components/ui/MobileHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-background overflow-hidden selection:bg-blue-500/30">
      
      {/* Mobilny pasek i rozsuwane menu */}
      <MobileHeader />

      {/* Lewy stały panel informacyjny - Wzór smartmatt.pl */}
      <InfoSidebar />

      {/* Główna sekcja przewijana */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth no-scrollbar" id="home">
        
        {/* Proste menu górne na desktopy */}
        <nav className="hidden lg:flex sticky top-0 z-40 bg-[#1a1a1a]/40 backdrop-blur-2xl border-b border-white/10 px-10 py-5 justify-end gap-8 text-sm font-medium text-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <a href="#home" className="hover:text-white transition-colors cursor-pointer">Home</a>
          <a href="#services" className="hover:text-white transition-colors cursor-pointer">Services</a>
          <a href="#portfolio" className="hover:text-white transition-colors cursor-pointer">Portfolio</a>
          <a href="#resume" className="hover:text-white transition-colors cursor-pointer">Resume</a>
          <a href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a>
        </nav>

        <div className="max-w-5xl mx-auto px-6 lg:px-12 pb-32">
          
          {/* HERO */}
          <section className="min-h-[85vh] flex flex-col justify-center py-20">
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
                Welcome to my <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Portfolio!</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-2xl text-lg text-white/50 leading-relaxed mb-10">
                {personalInfo.bio}
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="flex gap-4">
              <a href="#portfolio" className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors">
                Explore now
              </a>
              <a href="#contact" className="px-6 py-3 bg-white/5 border border-white/10 rounded-full font-medium text-white hover:bg-white/10 transition-colors">
                Get in touch
              </a>
            </FadeIn>

            {/* Liczniki (Counter Stats) */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20 border-t border-white/5 pt-12">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">{personalInfo.stats.yearsExperience}+</div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">{personalInfo.stats.completedSoftware}</div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">Completed Software</div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* SERVICES */}
          <section id="services" className="py-20 border-t border-white/5">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-12">My Services</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((svc, idx) => (
                <FadeIn key={svc.id} delay={0.1 * (idx % 2)}>
                  <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors h-full flex flex-col group">
                    <h3 className="text-xl font-medium text-white mb-4">{svc.title}</h3>
                    <p className="text-sm text-white/50 flex-grow mb-6 leading-relaxed">
                      {svc.description}
                    </p>
                    <a href="#contact" className="flex items-center gap-1 text-sm font-medium text-blue-400 group-hover:gap-2 transition-all">
                      Order now <ChevronRight size={16} />
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* PORTFOLIO */}
          <section id="portfolio" className="py-20 border-t border-white/5">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-12">Portfolio</h2>
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
                         <span className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20 hover:bg-white/30 hover:border-white/50 transition-all cursor-pointer">View Project</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1 block">{proj.category}</span>
                    <h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-300 transition-colors">{proj.title}</h3>
                  </Link>
                </FadeIn>
              ))}
            </div>
            <FadeIn className="mt-12 text-center">
               <Link href="/projects" className="inline-block px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer">
                 Show all projects
               </Link>
            </FadeIn>
          </section>

          {/* RESUME / TIMELINE */}
          <section id="resume" className="py-20 border-t border-white/5">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-12">Experience & Education</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              <div>
                <FadeIn><h3 className="text-xl font-medium text-white/80 mb-8">Work History</h3></FadeIn>
                <div className="flex flex-col gap-8 border-l border-white/10 pl-6 ml-2">
                  {experience.filter(e => e.roleType === 'work').map((item, idx) => (
                    <FadeIn key={item.id} delay={0.1 * idx} className="relative">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[30px] top-1.5 ring-4 ring-background" />
                      <div className="text-sm font-mono text-blue-400 mb-1">{item.period}</div>
                      <h4 className="text-lg font-medium text-white">{item.title}</h4>
                      <div className="text-sm text-white/50 mb-3">{item.organization}</div>
                      <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                    </FadeIn>
                  ))}
                </div>
              </div>

              <div>
                <FadeIn><h3 className="text-xl font-medium text-white/80 mb-8">Education</h3></FadeIn>
                <div className="flex flex-col gap-8 border-l border-white/10 pl-6 ml-2">
                  {experience.filter(e => e.roleType === 'education').map((item, idx) => (
                    <FadeIn key={item.id} delay={0.1 * idx} className="relative">
                      <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[30px] top-1.5 ring-4 ring-background" />
                      <div className="text-sm font-mono text-indigo-400 mb-1">{item.period}</div>
                      <h4 className="text-lg font-medium text-white">{item.title}</h4>
                      <div className="text-sm text-white/50 mb-3">{item.organization}</div>
                      <p className="text-sm text-white/60 leading-relaxed mb-3">{item.description}</p>
                      {item.link && (
                        <a href={item.link} className="flex items-center gap-1 text-sm font-medium text-indigo-400 hover:gap-2 transition-all">
                          {item.linkText || "View"} <ChevronRight size={16} />
                        </a>
                      )}
                    </FadeIn>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-20 border-t border-white/5">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-12">Contact Information</h2>
            </FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FadeIn delay={0.1} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-sm text-white/50 mb-1">Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-blue-400 transition-colors break-words">{personalInfo.email}</a>
                </FadeIn>
                <FadeIn delay={0.2} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-sm text-white/50 mb-1">Discord</div>
                  <div className="text-white">{personalInfo.socials.discord}</div>
                </FadeIn>
                <FadeIn delay={0.3} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-sm text-white/50 mb-1">LinkedIn</div>
                  <a href={personalInfo.socials.linkedin} className="text-white hover:text-blue-400 transition-colors">View Profile</a>
                </FadeIn>
                <FadeIn delay={0.4} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-sm text-white/50 mb-1">GitHub</div>
                  <a href={personalInfo.socials.github} className="text-white hover:text-blue-400 transition-colors">View Repositories</a>
                </FadeIn>
              </div>

              <FadeIn delay={0.3}>
                <form className="flex flex-col gap-4">
                  <h3 className="text-xl font-medium text-white mb-2">Get in touch</h3>
                  <div className="flex gap-4">
                    <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                    <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <textarea placeholder="Message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" />
                  <button type="button" className="w-full bg-white text-black font-medium rounded-xl px-4 py-3 hover:bg-white/80 transition-colors cursor-pointer">
                    Send Message
                  </button>
                </form>
              </FadeIn>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
            <div>© {new Date().getFullYear()} All Rights Reserved.</div>
            <div className="mt-4 md:mt-0">Email: <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">{personalInfo.email}</a></div>
          </footer>

        </div>
      </main>
    </div>
  );
}
