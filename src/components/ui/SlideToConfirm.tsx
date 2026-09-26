"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";

export function SlideToConfirm({ onConfirm, text = "Slide to confirm" }: { onConfirm: () => void, text?: string }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const controls = useAnimation();
  
  const backgroundWidth = useTransform(dragX, [0, 200], ["0%", "100%"]);
  
  useEffect(() => {
    return dragX.onChange((latest) => {
      if (latest > 180 && !isConfirmed) {
        setIsConfirmed(true);
        onConfirm();
      }
    });
  }, [dragX, isConfirmed, onConfirm]);

  const handleDragEnd = () => {
    if (!isConfirmed) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 400, damping: 30 } });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-14 rounded-full bg-white/5 border border-white/10 overflow-hidden flex items-center"
    >
      <motion.div 
        className="absolute left-0 top-0 bottom-0 bg-blue-500/20"
        style={{ width: backgroundWidth }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-sm font-medium text-white/50">
          {isConfirmed ? "Confirmed" : text}
        </span>
      </div>
      <motion.div
        drag={isConfirmed ? false : "x"}
        dragConstraints={containerRef}
        dragElastic={0}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        animate={controls}
        style={{ x: dragX }}
        className={`absolute left-1 h-12 w-12 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg ${
          isConfirmed ? "bg-green-500 text-white" : "bg-white text-black"
        }`}
      >
        {isConfirmed ? <Check size={20} /> : <ChevronRight size={20} />}
      </motion.div>
    </div>
  );
}
