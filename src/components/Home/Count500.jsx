"use client";

import { animate, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";

const Count500 = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 3,
      onUpdate: (latest) => {
        setDisplay(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [value, count]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

export default Count500;