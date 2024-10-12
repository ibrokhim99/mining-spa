"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Marquee from "react-fast-marquee"

import { partners } from "./constans"
import { containerVariants, itemVariants } from "./motion"

export const Gallery = () => (
  <motion.section
    initial="hidden"
    animate="visible"
    variants={containerVariants}>
    <Marquee gradient gradientWidth={80} speed={70}>
      <motion.div
        className="flex w-full items-center justify-center gap-8 bg-background py-8 px-2"
        variants={itemVariants}>
        {partners.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="h-40 w-60 sm:h-60 sm:w-80 rounded-xl overflow-hidden relative">
              <Image
                src={item.logo}
                alt="motion"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Marquee>
  </motion.section>
)
