"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Menu, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { InfoSidebarContent } from "./InfoSidebar";
import Image from "next/image";

export function MobileHeader() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeAll = () => {
    setIsProfileOpen(false);
    setIsNavOpen(false);
  };

  return (
    <>
      {/* Nieskrolowalny Pasek na górze */}
      <div className="lg:hidden w-full h-16 flex-shrink-0 bg-[#1a1a1a]/40 backdrop-blur-2xl border-b border-white/10 flex items-center justify-between px-4 z-40 sticky top-0 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <button 
          onClick={() => { setIsProfileOpen(true); setIsNavOpen(false); }}
          className="flex items-center gap-3 text-white/90 hover:text-white transition-colors cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden relative border border-white/10">
            <Image src="/images/profile.jpg" alt="Profile" fill className="object-cover" />
          </div>
          <span className="font-medium text-sm">{personalInfo.name}</span>
        </button>

        <button 
          onClick={() => { setIsNavOpen(true); setIsProfileOpen(false); }}
          className="p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Półprzezroczysty Panel Profilu (Drawer z lewej) */}
      <AnimatePresence>
        {isProfileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={closeAll}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 left-0 bottom-0 w-[85vw] max-w-[320px] bg-[#0a0a0a]/95 backdrop-blur-2xl border-r border-white/10 z-50 flex flex-col overflow-y-auto no-scrollbar"
            >
              <button onClick={closeAll} className="absolute top-4 right-4 p-2 text-white/50 hover:text-white z-10 bg-black/20 rounded-full">
                <X size={20} />
              </button>
              <InfoSidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Panel Menu Nawigacyjnego (Drawer z prawej) */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={closeAll}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[70vw] max-w-[280px] bg-[#0a0a0a]/95 backdrop-blur-2xl border-l border-white/10 z-50 flex flex-col p-8"
            >
              <button onClick={closeAll} className="self-end p-2 text-white/50 hover:text-white mb-8 bg-black/20 rounded-full">
                <X size={20} />
              </button>
              <nav className="flex flex-col gap-6 text-lg font-medium text-white/70">
                <a href="#home" onClick={closeAll} className="hover:text-white transition-colors cursor-pointer">Home</a>
                <a href="#services" onClick={closeAll} className="hover:text-white transition-colors cursor-pointer">Services</a>
                <a href="#portfolio" onClick={closeAll} className="hover:text-white transition-colors cursor-pointer">Portfolio</a>
                <a href="#resume" onClick={closeAll} className="hover:text-white transition-colors cursor-pointer">Resume</a>
                <a href="#contact" onClick={closeAll} className="hover:text-white transition-colors cursor-pointer">Contact</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
