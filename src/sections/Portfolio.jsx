import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Works from "../components/Works";

function Portfolio() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".split-title", {
      scale: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".split-title",
        start: "top bottom",
        end: "top 40%",
        scrub: true,
      },
    });
  });

  return (
    <section id="portfolio" className="min-h-screen w-full bg-black text-white">
      <Works />
    </section>
  );
}

export default Portfolio;
