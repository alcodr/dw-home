import "./carousel-style.css"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import mock_phone from '@/assets/phone_carousel/mockup_phone.webp'
import mock_1 from '@/assets/phone_carousel/mock_1.avif'
import mock_2 from '@/assets/phone_carousel/mock_2.avif'
import mock_3 from '@/assets/phone_carousel/mock_3.avif'
import mock_4 from '@/assets/phone_carousel/mock_4.avif'
import mock_5 from '@/assets/phone_carousel/mock_5.avif'

const Carousel = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const items = [mock_1, mock_2, mock_3, mock_4, mock_5];

  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 5 items visible at the same time
  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 5
  );
  const handleClick = (newDirection: any) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <div className="carousel-wrapper" style={{ position: "relative" }}>
      <div
        className="carousel"
        style={{ position: "relative", "zIndex": "1" }}
      >
        <img src={mock_phone} width={276} className="absolute" style={{ transform: "translateX(-50%)", left: "50%", zIndex: 5, height: '561px' }} />
        <div className="absolute top-0 bottom-0 left-0 right-0 circle-gradient"></div>
        {/*AnimatePresence is necessary to show the items after they are deleted because only max. 5 are shown*/}
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => {
            // The layout prop makes the elements change its position as soon as a new one is added
            // The key tells framer-motion that the elements changed its position
            return (
              <motion.div
                className="card"
                key={item}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return "farLeft";
                    } else if (item === visibleItems[1]) {
                      return "left";
                    } else if (item === visibleItems[2]) {
                      return "center";
                    } else if (item === visibleItems[3]) {
                      return "right";
                    } else {
                      return "farRight";
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div>
                  <img src={item} />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div
        className="buttons flex justify-between"
        style={{
          position: "absolute",
          "zIndex": 5,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(-1)}
          style={{ marginRight: "6rem" }}
          className="text-black dark:text-white bg-[#FFF4E0] flex justify-center items-center w-[42px] h-[42px] carousel-button"
        >
          <ChevronLeftIcon width={18} height={18} className="stroke-[#0d0d0d] stroke-1"></ChevronLeftIcon>
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(1)}
          style={{ marginLeft: "6rem" }}
          className="text-black dark:text-white bg-[#FFF4E0] flex justify-center items-center w-[42px] h-[42px] carousel-button"
        >
          <ChevronRightIcon width={18} height={18} className="stroke-[#0d0d0d] stroke-1"></ChevronRightIcon>
        </motion.button>
      </div>
    </div>
  );
}

const variants = {
  enter: ({ direction }: any) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }: any) => {
    return {
      scale: getScale({ position, direction }),
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1,
    };
  },
  exit: ({ direction }: any) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

function getZIndex({ position, direction }: any) {
  const indexes: any = {
    left: direction > 0 ? 3 : 2,
    farLeft: direction > 0 ? 2 : 1,
    center: 4,
    right: direction > 0 ? 2 : 3,
    farRight: direction > 0 ? 1 : 2,
  };
  return indexes[position()];
}

function getScale({ position, direction }: any) {
  const indexes: any = {
    left: 0.9,
    farLeft: 0.85,
    center: 1,
    right: 0.9,
    farRight: 0.85,
  };
  return indexes[position()];
}

export default Carousel