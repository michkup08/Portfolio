"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25; // adjust sensitivity
    const y = (e.clientY - top - height / 2) / 25;
    setPosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? -position.y : 0,
        rotateY: isHovered ? position.x : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={cn(
        "relative rounded-3xl overflow-hidden glass-panel",
        "transform-gpu will-change-transform",
        className
      )}
      style={{
        transformPerspective: 1000,
      }}
    >
      {/* Glare effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-50 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${position.x * 25 + ref.current?.getBoundingClientRect().width! / 2}px ${
              position.y * 25 + ref.current?.getBoundingClientRect().height! / 2
            }px, rgba(255,255,255,0.15), transparent 40%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
