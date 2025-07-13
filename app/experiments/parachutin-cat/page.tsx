"use client";

import React from "react";
import moon from "@/public/moon.png";
import cat from "@/public/cat.gif";
import land from "@/public/land.png";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

const ParachuteWeee = () => {
  return (
    <div className="bg-black min-h-svh">
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon.src})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land.src})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer sticky={{ start: 0.6, end: 2.7 }}>
          <Image src={cat} alt="cat." />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.05}>
          <h1 className="text-white text-8xl text-center font-bold">
            WEEEEEEEEEEEEEEEEEEEEE
          </h1>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={2}>
          <h1 className="text-white text-8xl text-center font-bold">yippie.</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParachuteWeee;
