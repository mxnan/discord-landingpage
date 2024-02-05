import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import abouthero from "../assets/discordabouthero.webp";

const About = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  //scrollprogress setup

  const scale = useTransform(scrollYProgress, [0.3, 0.6, 0.9], [1, 1.5, 1.8]);
  const x = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8, 1],
    ["0%", "20%", "-20%", "60%", "-80%"]
  );
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);
  const textopacity = useTransform(
    scrollYProgress,
    [ 0.3, 0.6, 0.8, 1],
    [ 1, 0.6, 0.4, 0]
  );
  //animation settings

  return (
    <section className="mt-[-15vh]">
      <div ref={targetRef} className="h-[150vh] relative w-full">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div
              style={{ scale, x, opacity }}
              className=" relative overflow-hidden origin-top"
            >
              <img
                src={abouthero}
                alt="about"
                className="h-[75vh] max-h-[45vw] w-auto bg-cover bg-center"
              />
              <motion.div
                style={{textopacity}}
                className="absolute w-max  top-8 left-8 
               text-[200px] leading-none bg-transparent text-yellow-500 font-extrabold"
              >
                Stream <br />
                Chats <br />
                Calls
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
