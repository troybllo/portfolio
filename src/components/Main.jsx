import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import React from "react";
import "../App.css";

export default function Main() {
  const { isDark } = useTheme();

  const containerStyle = {
    color: isDark ? "white" : "#37393F",
  };

  const textStyle = {
    color: isDark ? "#FFFFFFEB" : "#1A202C",
  };

  return (
    <div className="Jakarta" style={containerStyle}>
      <div
        style={{ height: "calc(80vh)" }}
        className="flex flex-col items-start mt-56 ml-28 mb-32 justify-start gap-16 m-5 sm:ml-20 sm:mt-16 sm:m-0 sm:flex-col md:flex-row lg:flex-row xl:flex-row xl:mt-40 "
      >
        <div className=" font-bold  lg:ml-[76px] flex-col items-start gap-0 w-[500px] text-[64px] sm:text-[64px] md:text-[164px] lg:text-[164px] xl:text-[164px] ">
          <h1 className="text-[64px] mb-0 sm:text-[64px] md:text-[164px] lg:text-[164px] xl:text-[164px]">
            Troy
          </h1>
          <h1>Bello</h1>
          <h2 className=" text-gray-500  text-[30px] sm:text-[30px] md:text-[36px] lg:text-[36px] xl:text-[36px]">
            Software Developer
          </h2>
        </div>
        <motion.div
          initial={{ x: 500, opacity: 1 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-[20px] mt-6"
          style={textStyle}
        >
          <div className="block box-border w-[400px] text-[18px] sm:text-[18px] md:text-[20px] lg:text-[20px] sm:w-[400px] md:w-[600px] lg:w-[600px] xl:w-[600px]">
            <p className="mb-8 mt-7">
              I possess an insatiable curiosity for the complexities of our
              world and the remarkable innovations that shape it. I view the
              world through the lens of engineering, particularly software, with
              curiosity as my &apos;focus ring&apos;. Whether I am peering
              through the software engineering lens or using another as the
              situation demands, my goal remains the same: to uncover the
              world&apos;s ingenious marvels
            </p>
            <p className="mb-8">
              So far, I have developed a profound connection with electronics,
              mechanical architectures, music, art, philosophy, and others.
              These diverse interests allow me to share a rich tapestry of
              experiences with you in my distinct and unconventional way.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
