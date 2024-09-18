"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Page() {
  const { scrollY } = useScroll();

  // Make the effect occur over a larger scroll range
  const y = useTransform(scrollY, [0, 500], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      console.log("scrollY", latest);
    });

    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="relative">
      <div className="bg-yellow-200 w-full h-screen flex items-center justify-center absolute">
        1
      </div>
      <motion.div
        style={{ opacity: y }}
        className="bg-red-200 w-full h-screen flex items-center justify-center absolute top-0 left-0"
      >
        2
      </motion.div>
    </div>
  );
}
