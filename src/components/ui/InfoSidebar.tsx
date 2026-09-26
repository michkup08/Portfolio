"use client";

import { personalInfo } from "@/data/portfolioData";
import { Download, MapPin, Globe } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function InfoSidebarContent() {
  return (
    <>
      <div className="p-8 flex flex-col items-center text-center border-b border-white/10 relative">
        <div className="w-28 h-28 rounded-full mb-5 relative overflow-hidden border border-white/10">
          <Image src="/images/profile.jpg" alt="Profile" fill className="object-cover" />
        </div>
        <h2 className="text-xl font-semibold text-white/90">{personalInfo.name}</h2>
        <p className="text-sm text-white/50 mt-2 flex flex-col gap-1">
          {personalInfo.titles.map((title, i) => (
            <span key={i}>{title}</span>
          ))}
        </p>
      </div>

      <div className="p-8 flex flex-col gap-6 pb-20">
        <div className="flex flex-col gap-4 text-sm text-white/60">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2"><MapPin size={16} /> Residence:</span>
            <span className="text-white/90">{personalInfo.residence}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2"><Globe size={16} /> Region:</span>
            <span className="text-white/90">{personalInfo.location}</span>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex justify-center gap-6 text-white/50">
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all"><LinkedinIcon size={20} /></a>
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all"><GithubIcon size={20} /></a>
        </div>

        <div className="h-px w-full bg-white/10" />

        <a href="#" className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 rounded-full transition-all text-sm font-medium hover:shadow-lg">
          Download CV <Download size={16} />
        </a>
      </div>
    </>
  );
}

export function InfoSidebar() {
  return (
    <div className="w-[300px] xl:w-[340px] h-screen sticky top-0 flex-shrink-0 bg-white/[0.02] border-r border-white/10 overflow-y-auto no-scrollbar hidden lg:flex flex-col">
      <InfoSidebarContent />
    </div>
  );
}
