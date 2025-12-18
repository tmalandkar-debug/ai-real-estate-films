"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const plot = useRef<HTMLImageElement>(null);
  const construction = useRef<HTMLImageElement>(null);
  const tower = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scene",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(plot.current, { opacity: 0, duration: 1 })
      .to(construction.current, { opacity: 1, duration: 1 })
      .to(construction.current, { opacity: 0, duration: 1 })
      .to(tower.current, { opacity: 1, duration: 1 });
  }, []);

  return (
    <div className="scene" style={{ height: "300vh", background: "black" }}>
      <div
        style={{
          display: "flex",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        {/* LEFT TEXT */}
        <div
          style={{
            width: "40%",
            padding: "80px",
            color: "white",
            fontSize: "32px",
          }}
        >
          From empty land to luxury living.
        </div>

        {/* RIGHT VISUAL */}
        <div
          style={{
            width: "60%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            ref={plot}
            src="/images/plot.png"
            style={{ position: "absolute", width: "60%" }}
          />

          <img
            ref={construction}
            src="/images/construction.png"
            style={{ position: "absolute", width: "45%", opacity: 0 }}
          />

          <img
            ref={tower}
            src="/images/tower.png"
            style={{ position: "absolute", width: "50%", opacity: 0 }}
          />
        </div>
      </div>
    </div>
  );
}
