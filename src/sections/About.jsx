import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { abouthero } from "../assets";

const animationOrder = {
  initial: 0,
  fiximagecenter: 0.1,
  fiximageleft: 0.2,
  textappearright: 0.3,
  righttextgone: 0.4,
  fiximageright: 0.5,
  textappearbottomleft: 0.6,
  lefttextgone: 0.7,
  imagecenterbottom: 0.8,
  textcentertop: 0.9,
  fadeout: 0.95,
  end: 1,
};

const About = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  //scrollprogress setup

  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fiximagecenter,
      animationOrder.fiximageleft,
      animationOrder.textappearright,
      animationOrder.righttextgone,
      animationOrder.fiximageright,
      animationOrder.textappearbottomleft,
      animationOrder.lefttextgone,
      animationOrder.imagecenterbottom,
      animationOrder.textcentertop,
      animationOrder.fadeout,
    ],
    [
      "130%",
      "130%",
      "130%",
      "70%",
      "70%",
      "70%",
      "70%",
      "70%",
      "70%",
      "60%",
      "40%",
    ]
  );
  const x = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fiximagecenter,
      animationOrder.fiximageleft,
      animationOrder.textappearright,
      animationOrder.righttextgone,
      animationOrder.fiximageright,
      animationOrder.textappearbottomleft,
      animationOrder.lefttextgone,
      animationOrder.imagecenterbottom,
      animationOrder.textcentertop,
      animationOrder.fadeout,
    ],
    ["0%", "0%", "0%", "0%", "-30%", "-30%", "30%", "30%", "30%", "30%", "30%"]
  );
  const y = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fiximagecenter,
      animationOrder.fiximageleft,
      animationOrder.textappearright,
      animationOrder.righttextgone,
      animationOrder.fiximageright,
      animationOrder.textappearbottomleft,
      animationOrder.lefttextgone,
      animationOrder.imagecenterbottom,
      animationOrder.textcentertop,
      animationOrder.fadeout,
    ],
    [
      "0%",
      "-10%",
      "-20%",
      "-30%",
      "-30%",
      "0%",
      "0%",
      "5%",
      "20%",
      "20%",
      "20%",
    ]
  );

  const opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fiximagecenter,
      animationOrder.fiximageleft,
      animationOrder.textappearright,
      animationOrder.righttextgone,
      animationOrder.fiximageright,
      animationOrder.textappearbottomleft,
      animationOrder.lefttextgone,
      animationOrder.imagecenterbottom,
      animationOrder.textcentertop,
      animationOrder.fadeout,
    ],
    [
      "-10%",
      "-10%",
      "100%",
      "100%",
      "100%",
      "100%",
      "100%",
      "100%",
      "90%",
      "50%",
      "0%",
    ]
  );

  //animation settings

  return (
    <section className="mt-[-15vh]">
      <div ref={targetRef} className="h-[200vh] relative w-full">
        {/*imagediv*/}
        <div className="sticky top-[30vh]">
          <div className="flex justify-center">
            <motion.div
              style={{ scale, x, y, opacity }}
              className=" relative overflow-hidden origin-top"
            >
              <img
                src={abouthero}
                alt="about"
                className="h-[75vh] max-h-[45vw] border-b-[1px]  border-white w-auto bg-cover bg-center"
              />
            </motion.div>
          </div>
        </div>

        {/*textdiv*/}

        <motion.div
          style={{ opacity }}
          className=" absolute right-10 top-[60vh]
               text-xl font-semibold "
        >
          <p className="uppercase text-8xl text-end">
            For <br /> Your <br /> every <br /> device .
          </p>
        </motion.div>
        <motion.div
          style={{ opacity }}
          className=" absolute left-10 top-[150vh]
               text-xl font-semibold "
        >
          <p className="uppercase text-7xl text-end">
            Low-latency , <br /> streams , <br /> video , <br /> voice .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
