"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useProgress, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import textureImage from "./tex1.jpg";
import Image from "next/image";
import initImage from "./initImage.webp";
import { useMediaWidth } from "@/utils/useMediaWidth";
import cn from "@/utils";

function GlobeSphere() {
  const sphereRef = useRef<Mesh>(null);
  const texture = useTexture(textureImage.src);
  const { loaded } = useProgress();

  useEffect(() => {
    if (loaded) {
      document.querySelector(".init_image")?.classList.add("hidden");
      (document.querySelector(
        "#land_globe"
      ) as HTMLCanvasElement)!.style.zIndex = "30";
    }
  }, [loaded]);

  return (
    <mesh
      ref={sphereRef}
      position={[0, -1.4, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} opacity={1} />
    </mesh>
  );
}

const Globe = () => {
  const width = useMediaWidth();
  const isWeb = width && width > 1024;

  return (
    <div className="relative h-full max-w-3xl w-full">
      <Canvas
        id="land_globe"
        camera={
          isWeb
            ? { position: [0, 0, 5], fov: 26 }
            : { position: [0, 0, 4], fov: 26 }
        }
        className="w-full h-full bg-transparent cursor-grab"
      >
        <ambientLight intensity={5} />
        <GlobeSphere />

        <OrbitControls
          enableZoom={false}
          autoRotate
          enablePan={false}
          enableRotate={isWeb ? true : false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          autoRotateSpeed={0.5}
          rotateSpeed={0.7}
        />
      </Canvas>

      <div className="absolute top-0 left-0 z-40 w-full h-full lg:hidden" />

      <div
        className={cn(
          "absolute bottom-0 z-40 pointer-events-none w-full h-32  bg-gradient-to-t from-white to-transparent"
        )}
      />

      <div className="init_image absolute top-0 z-10 left-0 w-full h-full">
        <Image
          src={initImage}
          alt="globe"
          className="w-full h-full object-cover"
        ></Image>
      </div>
    </div>
  );
};

export default Globe;
