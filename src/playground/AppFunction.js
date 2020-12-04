import React, { useRef, useEffect, useState } from "react";
import getDimensions from "./components/GetDimensions.js";
import scrollTo from "./components/ScrollTo.js";

const AppFunction = () => {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "Portfolio", ref: portfolioRef },
    { section: "Contact", ref: contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);
}

export default AppFunction;
