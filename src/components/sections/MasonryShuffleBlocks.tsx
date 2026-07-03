"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Tile = { id: number; bg: string };
type Slot = { slotId: string; className: string };
type AssignedTile = { tile: Tile; slot: Slot };

const tileData: Tile[] = [
  { id: 1, bg: "bg-[#FFFFFF14]" },
  { id: 2, bg: "bg-[#FFFFFF1A]" },
  { id: 3, bg: "bg-[#FFFFFF12]" },
  { id: 4, bg: "bg-[#FFFFFF1F]" },
  { id: 5, bg: "bg-[#FFFFFF18]" },
];

const slots: Slot[] = [
  { slotId: "large", className: "col-span-3 row-span-2 col-start-4 row-start-1" },
  { slotId: "mid-small", className: "col-span-2 row-span-1 col-start-2 row-start-2" },
  { slotId: "bottom-right", className: "col-span-2 row-span-1 col-start-5 row-start-3" },
  { slotId: "bottom-long", className: "col-span-3 row-span-1 col-start-2 row-start-3" },
  { slotId: "extra", className: "hidden" },
];

const shuffle = <T,>(arr: T[]) => {
  const a = [...arr];
  let i = a.length;
  while (i) {
    const j = Math.floor(Math.random() * i--);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const createInitialAssignments = (): AssignedTile[] =>
  tileData.map((tile, i) => ({ tile, slot: slots[i] }));

const createNextAssignments = (prev: AssignedTile[]): AssignedTile[] => {
  let next: AssignedTile[] = [];
  let tries = 0;

  do {
    const shuffledSlots = shuffle(slots);
    next = tileData.map((tile, i) => ({ tile, slot: shuffledSlots[i] }));
    tries++;
  } while (tries < 6 && next.every((item, i) => item.slot.slotId === prev[i]?.slot.slotId));

  return next;
};

export default function MasonryShuffleBlocks() {
  const [assigned, setAssigned] = useState<AssignedTile[]>(createInitialAssignments());
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setAssigned(prev => createNextAssignments(prev));
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="hidden md:grid grid-cols-6 grid-rows-3 gap-5 h-[360px] w-full md:-ms-8">
      {assigned.map(({ tile, slot }) => (
        <motion.div
          key={tile.id}
          layout
          transition={{
            layout: { duration: 1.1, type: "spring", stiffness: 180, damping: 20 },
          }}
          className={`relative rounded-2xl ${tile.bg} ${slot.className} border border-white/10`}
        />
      ))}
    </div>
  );
}
