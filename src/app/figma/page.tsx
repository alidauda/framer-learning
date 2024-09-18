"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Page() {
  const [isCopy, setIsCopy] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    setIsCopy(true);
    setCopied(true);

    setTimeout(() => {
      setIsCopy(false);
    }, 400);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden flex-col">
      <motion.div
        className="bg-green-300 px-4 py-2 rounded-lg flex items-center gap-2"
        initial={{
          y: 47,
          opacity: 0,
        }}
        animate={{
          y: copied ? -10 : 47,
          opacity: copied ? 1 : 0,
        }}
        exit={{
          y: 47,
          opacity: 0,
        }}
        transition={{ duration: 0.4, type: "spring", bounce: 0 }}
      >
        <motion.div
          className="bg-white w-5 h-5 rounded-full p-1 flex justify-center items-center "
          animate={{
            scale: isCopy ? 0.5 : 1,
          }}
        >
          <motion.svg
            initial={{
              transform: "rotate(-10deg)",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </motion.svg>
        </motion.div>
        Copied!
      </motion.div>
      <div className="bg-gray-200 rounded-t-lg">
        <div className="flex items-center justify-between p-3 ">
          <p>Solana address</p>
          <p>ssjbd...ssjjss</p>
        </div>

        <motion.button
          type="button"
          className="bg-black text-white p-3 w-96 rounded-lg"
          onClick={copyAddress}
        >
          <motion.div
            animate={{
              y: isCopy ? -17 : 0,

              filter: isCopy ? "blur(2px)" : "blur(0px)",
            }}
            transition={{ duration: 0.4, type: "spring", bounce: 0 }}
          >
            <motion.span>Copy Address</motion.span>
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
