import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { PiWindowsLogoFill } from "react-icons/pi";
import { PiBrowsersBold } from "react-icons/pi";
import DiscordBG from "../assets/discordbg.svg";
import discordleft from "../assets/discordleft.svg";
import discordright from "../assets/discordright.svg";

{
  /* const slidervariants = {
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
*/
}

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  //scrollprogress setup

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 0.9, 0.6, 0.4, 0, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 0.9, 0.6, 0.4, 0, 0]
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
      <motion.div
      
        initial={{ x: -1000 }}
        animate={{ x: 0 - 300 }}
        transition={{
          duration: 1.3,
          type: "spring",
          staggerChildren: 0.1,

        }}
        className="absolute left-1/2  z-10 top-10
      flex flex-row gap-4  "
      >
        <p className="text-2xl font-semibold">hendn</p>
        <p className="text-2xl font-semibold">hendn</p>
        <p className="text-2xl font-semibold">hendn</p>
        <p className="text-2xl font-semibold">hendn</p>
        <p className="text-2xl font-semibold">hendn</p>
        <p className="text-2xl font-semibold">hendn</p>
      </motion.div>
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
          className=" left-1/2 lg:py-12   lg:gap-5 flex flex-col justify-center items-center lg:mb-[200px]"
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
          <div className="flex text-xl p-4 flex-row items-center lg:gap-16">
            <motion.button
              whileHover={{
                
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
        <img
          src={discordright}
          alt="heroright"
          className="cover max-md:hidden absolute -right-36 bottom-0 "
        />
        <img
          src={discordleft}
          alt="heroleft"
          className="cover max-md:hidden absolute -left-48 bottom-0 "
        />
        {/*
        <motion.h1
          style={{ opacity, scale }}
          variants={slidervariants}
          initial="initial"
          animate="animate"
        className="absolute font-semibold text-purple-400 leading-none whitespace-nowrap bottom-10  text-[300px]">
          DISCORD  DISCORD  DISCORD  DISCORD  DISCORD DISCORD DISCORD DISCORD DISCORD DISCORD
          </motion.h1>
          */}
      </motion.div>
    </motion.section>
  );
};

export default Home;
