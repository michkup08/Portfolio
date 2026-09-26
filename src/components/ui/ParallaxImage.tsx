"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="relative w-full h-[60vh] min-h-[400px] overflow-hidden rounded-3xl border border-white/10">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[150%] -top-[25%]">
        <Image src={src} alt={alt} fill className="object-cover" quality={90} priority />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
    </div>
  );
}
