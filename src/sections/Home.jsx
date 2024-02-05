import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { PiWindowsLogoFill } from "react-icons/pi";
import { PiBrowsersBold } from "react-icons/pi";
import DiscordBG from "../assets/discordbg.svg";

const slidervariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: -300,
    transition: {
      repeat: Infinity,

      repeatType: "reverse",
      ease: "linear",

      duration: 8,
      type: "tween",
    },
  },
};

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  //scrollprogress setup

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.8],
    [1, 0.8, 0.6, 0.4]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.6, 1],
    [1, 0.6, 0.5, 0.3, 0]
  );

  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });
  //scrollprogress used

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className=" relative overflow-x-clip w-full z-10 h-[80vh]  "
    >
      {/* Nav icons */}
      <div
        className="absolute left-1/2 -translate-x-1/2  z-10 top-10
      flex flex-row  "
      >
        <p className="text-3xl text-black">hendn</p>
        <p className="text-3xl">hendn</p>
      </div>
      <motion.div
        className=" relative overflow-hidden h-full flex items-center justify-center
       bg-sky-800 m-3 rounded-3xl"
      >
        <img
          src={DiscordBG}
          alt="HomeBG"
          className="cover absolute max-lg:hidden  w-full h-full"
        />
        <motion.div
          style={{ scale, x: "-50%", position }}
          className=" left-1/2 lg:py-12  lg:gap-5 flex flex-col justify-center items-center lg:mb-[200px]"
        >
          <h1 className="text-7xl  font-black tracking-wide whitespace-nowrap">
            IMAGINE A PLACE...
          </h1>
          <p className="text-2xl font-extralight text-center ">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className="flex text-xl flex-row items-center lg:gap-16">
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "white",
                color: "black",
                border: "2px solid black",
                transition: { duration: 0.2 },
              }}
              className="flex items-center justify-center gap-2
             bg-[#1c1c1c] bg-opacity-40 rounded-3xl
              p-3"
            >
              Download for Windows <PiWindowsLogoFill />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "white",
                color: "black",
                border: "2px solid black",
                transition: { duration: 0.2 },
              }}
              className="flex items-center justify-center gap-2 
            bg-[#1c1c1c] bg-opacity-40 rounded-3xl 
             p-3"
            >
              Open in Browser <PiBrowsersBold />
            </motion.button>
          </div>
        </motion.div>
        <motion.h1
          style={{ opacity, scale }}
          variants={slidervariants}
          initial="initial"
          animate="animate"
        className="absolute font-semibold text-purple-400 leading-none whitespace-nowrap bottom-10  text-[300px]">
          DISCORD  DISCORD  DISCORD  DISCORD  DISCORD DISCORD DISCORD DISCORD DISCORD DISCORD
          </motion.h1>
      </motion.div>
    </motion.section>
  );
};

export default Home;
