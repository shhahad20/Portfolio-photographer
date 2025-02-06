import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/works.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const racesRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!racesRef.current) return;
    const races = racesRef.current;

    // Calculate how far to scroll horizontally:
    const getScrollAmount = () => -(races.scrollWidth - window.innerWidth);

    // Create GSAP tween for horizontal movement
    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    // Set up ScrollTrigger on the wrapper element
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: () => `+=${Math.abs(getScrollAmount())}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true, // Remove or disable markers for production
    });

    return () => {
      // Kill all ScrollTriggers and the tween on cleanup
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tween.kill();
    };
  }, []);

  return (
    <section id="works">
      <div className="body">
        <div className="races-wrapper" ref={wrapperRef}>
          {/* <div className="works-header">
            <h2>Works</h2>
          </div> */}
          {/* Horizontal scroll container */}
          <div className="races" ref={racesRef}>
            {/* Panel 1 */}
            <div className="panel-space"/>
            <div className="panel blue">
              <div className="container">
                <div className="panel-content">
                  <div className="left-content">
                    <div className="title-date">
                      <h3>Freelance Photographer</h3>
                      <p className="date">2016 - Present</p>
                    </div>
                    <p className="descrption">
                      Captured diverse moments for clients across a variety of
                      events, including weddings, corporate events, and fashion
                      shows. Collaborated with brands to create engaging visual
                      stories.
                    </p>
                  </div>
                </div>
                <div className="panel-bg">
                  <img src="/f1.svg" alt="Background" />
                </div>
              </div>
            </div>
            {/* Panel 2 */}
            <div className="panel red">
              <div className="container">
                <div className="panel-content">
                  <div className="left-content">
                    <div className="title-date">
                      <h3>In-house Photographer</h3>
                      <p className="date">
                        2014 - 2016 <span>Studio X</span>
                      </p>
                    </div>
                    <p className="descrption">
                      Worked with creative teams to produce high-quality imagery
                      for advertising and editorial campaigns.
                    </p>
                  </div>
                </div>
                <div className="panel-bg">
                  <img src="/f2.svg" alt="Background" />
                </div>
              </div>
            </div>
            {/* Panel 3 */}
            <div className="panel orange">
              <div className="container">
                <div className="panel-content">
                  <div className="left-content">
                    <div className="title-date">
                      <h3>Assistant Photographer</h3>
                      <p className="date">
                        2012 - 2014 <span>XYZ Agency</span>
                      </p>
                    </div>
                    <p className="descrption">
                      Assisted senior photographers in studio sessions and on-location
                      shoots, gaining experience in professional photography workflows.
                    </p>
                  </div>
                </div>
                <div className="panel-bg">
                  <img src="/f4.svg" alt="Background" />
                </div>
              </div>
            </div>

          

          </div>
        </div>
      </div>
      {/* <div className="space-100vh lightBG"></div> */}
    </section>
  );
}
