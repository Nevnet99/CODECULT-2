import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../../hooks/useIsomorphicLayoutEffect";
import Text from "../../shared/Text/Text";

import styles from "./Intro.module.scss";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

const Intro = () => {
  const sectionRef = useRef(null);
  const maskRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    console.log(titleRef.current);
    const { chars } = new SplitText(titleRef.current, {
      type: "chars",
      charsClass: "char",
    });

    // const splitDescription = new SplitText(titleRef.current);

    let tl = gsap
      .timeline({
        scrollTrigger: {
          pin: true,
          trigger: sectionRef.current,
          start: "top top",
          end: "+=600",
          scrub: 1,
        },
      })
      .fromTo(
        maskRef.current,
        {
          width: "10vw",
        },
        {
          width: "100vw",
        }
      );

    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01,
      direction: "forwards",
    });
  }, []);

  return (
    <section ref={sectionRef} className={styles.introduction}>
      <div ref={maskRef} className={styles.mask}>
        <div className={styles.img__wrapper}>
          <img src="/art.png" />
        </div>
      </div>
      <div className={styles.content}>
        <Text ref={titleRef} as="h1" size="xxxl">
          CODECULT
        </Text>
        <Text ref={descriptionRef} as="h2" size="xxl">
          // FRONTEND DEVELOPMENT
        </Text>
      </div>
    </section>
  );
};

export default Intro;
