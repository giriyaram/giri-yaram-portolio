import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { Caveat } from "next/font/google";
import Image from "next/image";

const caveat = Caveat({
  weight: ["500"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className="pb-30 pt-36">
      {/* spotlight div */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="grid md:grid-cols-2 md:items-center and md:text-left justify-center gap-10 relative my-20 z-10 px-10">
        {/* Left Div */}
        <div className=" flex flex-col items-start justify-center pb-10 ">
          <div className={caveat.className}>
            <h2 className="text-5xl text-left text-blue-100">Hello, I am</h2>
          </div>

          <TextGenerateEffect
            className=" tracking-widest text-center text-[40px] md:text-5xl lg:text-6xl xl:text-8xl"
            words="Giri Yaram"
          />

          <div className="flex items-center justify-center gap-6 ">
            <div className="h-[2px] w-20 lg:w-40 bg-white-100 -mt-4 "> </div>
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl xl:text-2xl">
              Aspiring Full Stack Developer
            </p>
          </div>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia?.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <a href={info.href}>
                  <img src={info.img} alt="icons" width={20} height={20} />
                </a>
              </div>
            ))}
          </div>

          {/* <a href="#about">
            <MagicButton 
                title="Show my work"
                icon= {<FaLocationArrow />}
                position="right" />
            </a> */}
        </div>

        {/* Right Div */}
        <div className=" flex items-center justify-center">
          <div className="h-[350px] w-[350px] lg:h-[450px] lg:w-[450px] flex items-center justify-center">
            <Image
              className=" object-cover rounded-full border-4 border-white-200"
              alt=""
              src="/giric.png"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
