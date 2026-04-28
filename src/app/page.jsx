"use client"
import Banner from "@/components/Home/Banner";
import Trust from "@/components/Home/Trust";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Banner></Banner>
        <Trust></Trust>
      </motion.div>
    </div>
  );
}
