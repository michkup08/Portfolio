"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function DockItem({ children, mouseX, onClick }: { children: React.ReactNode, mouseX: any, onClick?: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [48, 80, 48]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onClick={onClick}
      className="aspect-square flex items-center justify-center rounded-2xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-md cursor-pointer hover:bg-white/20 transition-colors"
    >
      {children}
    </motion.div>
  );
}

export function MagnifyingDock({ items }: { items: { icon: React.ReactNode, id: string, onClick?: () => void }[] }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-16 items-end gap-3 rounded-3xl bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 px-4 pb-3 shadow-2xl"
      >
        {items.map((item) => (
          <DockItem key={item.id} mouseX={mouseX} onClick={item.onClick}>
            {item.icon}
          </DockItem>
        ))}
      </motion.div>
    </div>
  );
}
