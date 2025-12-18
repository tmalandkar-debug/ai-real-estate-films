"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const plot = useRef<HTMLDivElement>(null);
  const construction = useRef<HTMLDivElement>(null);
  const tower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scene",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.fromTo(plot.current, { opacity: 1 }, { opacity: 0, duration: 1 })
      .fromTo(construction.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(construction.current, { opacity: 1 }, { opacity: 0, duration: 1 })
      .fromTo(tower.current, { opacity: 0 }, { opacity: 1, duration: 1 });
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
          {/* EMPTY PLOT */}
          <div
            ref={plot}
            style={{
              position: "absolute",
              width: "300px",
              height: "200px",
              background: "#2f2f2f",
            }}
          />

          {/* CONSTRUCTION */}
          <div
            ref={construction}
            style={{
              position: "absolute",
              width: "160px",
              height: "350px",
              background: "#555",
              opacity: 0,
            }}
          />

          {/* FINAL TOWER */}
          <div
            ref={tower}
            style={{
              position: "absolute",
              width: "180px",
              height: "450px",
              background: "#aaa",
              opacity: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
}
