import "./carousel-style.css"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import mock_phone from '@/assets/phone_carousel/mockup_phone.webp'

import mock_1 from '@/assets/phone_carousel/mock_1.png'
import mock_2 from '@/assets/phone_carousel/mock_2.png'
import mock_3 from '@/assets/phone_carousel/mock_3.png'
import mock_4 from '@/assets/phone_carousel/mock_4.png'
import mock_5 from '@/assets/phone_carousel/mock_5.png'

const Carousel = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  // const items = ["A", "B", "C"];
  const items = [mock_1, mock_2, mock_3, mock_4, mock_5];

  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 3 items visible at the same time
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
        <img src={mock_phone} width={276} className="absolute" style={{ transform: "translateX(-50%)", left: "50%", zIndex: 4, height: '562px' }} />
        {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
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
                transition={{ duration: 0.55 }}
              >
                <img src={item} style={{ borderRadius: '32px', height: '96%' }} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div
        className="buttons"
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
          style={{ marginRight: "3rem", border: "1px solid black" }}
          className="text-black dark:text-white dark:bg-transparent"
        >
          ◀︎
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(1)}
          style={{ marginLeft: "3rem", border: "1px solid black" }}
          className="text-black dark:text-white dark:bg-transparent"
        >
          ▶︎
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
      scale: position() === "center" ? 1 : 0.7,
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
    left: direction > 0 ? 2 : 1,
    farLeft: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2,
    farRight: direction > 0 ? 1 : 2,
  };
  return indexes[position()];
}

export default Carousel