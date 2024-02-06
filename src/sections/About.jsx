import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import abouthero from "../assets/discordabouthero.svg";

const animationOrder = {
  initial: 0,
  fiximagecenter: 0.1,
  fiximageleft: 0.2,
  textappearright: 0.3,
  righttextgone: 0.4,
  fiximageright: 0.5,
  textappearleft: 0.6,
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
    [animationOrder.initial],
    ["100%"]
  );
  const x = useTransform(scrollYProgress, [animationOrder.initial], ["0%"]);
  const y = useTransform(scrollYProgress, [animationOrder.initial], ["0%"]);

  const opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.righttextgone,
      animationOrder.lefttextgone,
      animationOrder.fadeout,
    ],
    [1, 1, 1, 0]
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
                className="h-[75vh] max-h-[45vw] w-auto bg-cover bg-center"
              />
            </motion.div>
          </div>
        </div>

        {/*textdiv*/}

        <motion.div
          className=" absolute right-10 top-[50vh]
               text-xl "
        >
          <p className="uppercase text-end">
            Discord <br /> for <br /> every <br /> device
          </p>
          
        </motion.div>
        <motion.div
          className=" absolute left-10 top-[180vh]
               text-xl "
        >
          <p className="uppercase text-start">
          Low-latency voice and video feels like you’re in the same
            room.<br />
            Wave hello over video, watch friends stream their games, or gather
            up and have a drawing session with screen share.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
