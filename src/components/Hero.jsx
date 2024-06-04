import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth > 765 ? 
    heroVideo : smallHeroVideo)
  
    const handleVideo = () => {
      if (window.innerWidth <= 765) {
        setVideoSrc(smallHeroVideo);
      } else {
        setVideoSrc(heroVideo);
      }
    }
    
    useEffect(() => {
      window.addEventListener('resize', handleVideo);

      return () => {
        window.removeEventListener('resize', handleVideo)
      }
    }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1 });
  }, []);

  useGSAP(() => {
    gsap.to('#hero', {opacity: 1, delay: 2})
    gsap.to('#cta', {opacity: 1, y:-10, delay: 2, ease: 'sine.inOut'}, []);
  });

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15
        </p>
        <div className="md:w-10/12 w-9/12">
          <video src={videoSrc} type="video/mp4" 
          autoPlay muted className="pointer-events-none" 
          playsInline={true} key={videoSrc}/>
        </div>
      </div>

      <div id="cta" 
      className="flex flex-col items-center
      translate-y-20 opacity-0">
        <a href="#highlights" id="buy-btn" className="btn">Buy</a>
        <p id="sub-btn" className="font-normal text-xl text-white">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
