import React from "react";
import Logo from "./logo";
import Button from "./button";

export default function Hero() {
  return (
    <div className="flex w-screen h-screen bg-black">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ filter: "blur(4px)" }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 ml-16 mt-16">
        <Logo />
      </div>

      <div className="absolute top-1/4 left-16">
        <p className="text-yellow-200 font-bold text-6xl mb-8">
          First Annual Conference of FOSSCU
        </p>
      </div>

      <div className="absolute bottom-16 left-16 flex space-x-4">
        <div className="absolute bottom-16 left-16 flex space-x-4">
          <Button text="Tickets" href="#" />
          <Button text="Get Involved" href="#" />
        </div>
      </div>
    </div>
  );
}
