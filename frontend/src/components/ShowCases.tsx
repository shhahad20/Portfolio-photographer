import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "../styles/showcases.scss";

gsap.registerPlugin(ScrollTrigger);

export default function ShowCases() {
  const racesRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!racesRef.current) return;

    const races = racesRef.current;

    function getScrollAmount() {
      return -(races.scrollWidth - window.innerWidth);
    }

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tween.kill();
    };
  }, []);

  return (
    <div className="body">

    
    <div className="races-wrapper" ref={wrapperRef}>

      {/* Horizontal Scroll Section */}
      <div className="races" ref={racesRef}>
        <h2 className="panel blue">
            SCROLL DOWN
        </h2>
        <h2 className="panel red">ONE</h2>
        <h2 className="panel orange">TWO</h2>
        <h2 className="panel purple">THREE</h2>
      </div>

    </div>
    </div>
  );
}
