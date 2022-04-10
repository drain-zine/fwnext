import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import useRaf from '@rooks/use-raf';
import Image from "next/image";

const baseWidth = 60;
const distanceLimit = baseWidth * 3;
const beyondTheDistanceLimit = distanceLimit + 1;
const distanceInput = [
  -distanceLimit,
  -distanceLimit / 1.25,
  -distanceLimit / 2,
  0,
  distanceLimit / 2,
  distanceLimit / 1.25,
  distanceLimit,
];
const widthOutput = [
  baseWidth,
  baseWidth * 1.3,
  baseWidth * 1.7,
  baseWidth * 2.5,
  baseWidth * 1.7,
  baseWidth * 1.3,
  baseWidth
];

const ImageMagnify = ({ mouseX, src, ...props }) => {
  const distance = useMotionValue(beyondTheDistanceLimit);
  const width = useSpring(useTransform(distance, distanceInput, widthOutput), {
    damping: 25,
    stiffness: 250,
  });

  const ref = useRef();

  useRaf(() => {
    const el = ref.current;
    const mouseXVal = mouseX.get();
    if (el && mouseXVal !== null) {
      const rect = el.getBoundingClientRect();

      // get the x coordinate of the img DOMElement's center
      // the left x coordinate plus the half of the width
      const imgCenterX = rect.left + rect.width / 2;

      // difference between the x coordinate value of the mouse pointer
      // and the img center x coordinate value
      const distanceDelta = mouseXVal - imgCenterX
      distance.set(distanceDelta);
      return;
    }

    distance.set(beyondTheDistanceLimit);
  }, true);

  return (
    <motion.div ref={ref} style={{ width }} {...props}>
        <Image 
            src={src}
            layout={"responsive"}
        />
    </motion.div>
);
};

export default ImageMagnify;