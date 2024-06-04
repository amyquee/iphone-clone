import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen h-full bg-zinc 
    overflow-hidden common-padding"
    >
      <div className="screen-max-width">
        <div
          className="md:flex justify-between 
        items-center mb-12"
        >
          <h1 id="title" className="section-heading">
            Get the Highlight
          </h1>

          <div className="flex flex-wrap gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} className="ml-2" alt="watch" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} className="ml-2" alt="right" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
