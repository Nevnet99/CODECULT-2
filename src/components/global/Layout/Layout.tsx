import { useEffect, useState } from "react";
import styles from "./Layout.module.scss";
import Navigation from "../Navigation/Navigation";
import { gsap } from "gsap";
import { useIsomorphicLayoutEffect } from "../../../hooks/useIsomorphicLayoutEffect";
import { SmootherContext } from "../../../context/SmootherContext";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Layout = ({ children }) => {
  const [smootherState, setSmoother] = useState();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
      smooth: 2,
      normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
      ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
      effects: true,
      preventDefault: true,
    });

    setSmoother(smoother);
  }, []);

  return (
    <SmootherContext.Provider value={smootherState}>
      <main id="smooth-wrapper" className={`${styles.layout} dark `}>
        <Navigation />
        <div id="smooth-content">{children}</div>
      </main>
    </SmootherContext.Provider>
  );
};

export default Layout;
