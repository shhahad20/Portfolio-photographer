import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "../styles/works.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
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
      start: "top top",
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
    <section id="works">
      {/* <div className="space-50vh lightBG">
        <div className="works-header"><h2>Works</h2></div>
      </div> */}
      <div className="body">
        <div className="races-wrapper" ref={wrapperRef}>
          <div className="works-header">
            <h2>Works</h2>
          </div>
          {/* Horizontal Scroll Section */}
          <div className="races" ref={racesRef}>
            <div className="panel blue">
             <div className="container">
             <div className="panel-content">

              <div className="left-content">
              <div className="title-date">
                <h3>Freelance Photographer</h3>
                <p className="date">2016 - Present</p>
                </div>
                <p className="descrption">
                Captured diverse moments for clients across a variety of events,
                including weddings, corporate events, and fashion shows.
                Collaborated with brands to create engaging visual stories.
              </p>
              </div>


              </div>
              <div className="panel-bg"><img  src="/f1.svg" alt="Background" /></div>
             </div>

            </div>
            <div className="panel red">
            <div className="container">
            <div className="panel-content">
              <div className="left-content">
                <div className="title-date">
                <h3>In-house Photographer</h3>
                <p className="date">2014 - 2016  <span>Studio X</span></p>
                </div>
                <p className="descrption">
                Worked with creative teams to produce high-quality imagery for
                advertising and editorial campaigns.
              </p>
              </div>

              </div>
              <div className="panel-bg"><img  src="/f2.svg" alt="Background" /></div>
              </div>
            </div>
            <div className="panel orange">
            <div className="container">
            <div className="panel-content">
              <div className="left-content">
              <div className="title-date">
                <h3>Assistant Photographer</h3>
                <p className="date">2012 - 2014 <span>XYZ Agency</span></p>
                </div>
                <p className="descrption">
                Assisted senior photographers in studio sessions and on-location
                shoots, gaining experience in professional photography
                workflows.
              </p>
              </div>

            </div>
            <div className="panel-bg"><img  src="/f4.svg" alt="Background" /></div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-100vh lightBG"></div>
    </section>
  );
}
