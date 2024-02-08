import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { PiWindowsLogoFill } from "react-icons/pi";
import { PiBrowsersBold } from "react-icons/pi";
import { FaAnglesDown } from "react-icons/fa6";
import { discordbg, discordleft, discordright } from "../assets";

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
    [1, 0.8, 0.7, 0, 0, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 0.9, 0.9, 0.6, 0.4, 0, 0]
  );

  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });
  //scrollprogress used

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className=" relative overflow-x-clip w-full   h-[80vh]  "
    >
      {/* Nav icons */}
      <motion.div
        initial={{ y: "-200%", x: "-50%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 1,
          type: "spring",
        }}
        className="absolute left-1/2  z-10 top-6
      flex flex-row gap-4  "
      >
        <p className="text-xl font-normal">hendn</p>
        <p className="text-xl font-normal">hendn</p>
        <p className="text-xl font-normal">hendn</p>
        <p className="text-xl font-normal">hendn</p>
        <p className="text-xl font-normal">hendn</p>
        <p className="text-xl font-normal">hendn</p>
      </motion.div>
      <motion.div
        className=" relative border-8 border-white overflow-hidden h-full flex items-center justify-center
       bg-sky-500/60 m-6 rounded-3xl"
      >
        <motion.img
          initial={{ y: "-200%", scale: 0.5 }}
          animate={{ y: "-2%", scale: 1 }}
          transition={{ duration: 2, type: "spring" }}
          style={{ scale, position }}
          src={discordbg}
          alt="HomeBG"
          className=" bg-bottom absolute -bottom-[79px] max-xl:-bottom-[150px]  max-lg:hidden  w-full h-full"
        />
        <motion.div
          initial={{ y: "-200%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, type: "spring", delay: 0.7 }}
          style={{ scale, x: "-50%", position }}
          className=" left-1/2 lg:py-12 z-30   lg:gap-3 flex flex-col justify-center items-center lg:mb-[200px]"
        >
          <h1 className="text-[140px] leading-none  font-semibold tracking-wider whitespace-nowrap">
            IMAGINE A PLACE...
          </h1>

          <p className="text-2xl p-2 px-5 py-3 perspective-100 rounded-2xl bg-[#0a3f94] bg-opacity-60 leading-normal font-normal text-center ">
            <span className="text-2xl">
              Where you can belong to a school club, a gaming group, or a
              worldwide art community.
            </span>
            <span className="text-2xl">
              <br /> Where just you and a handful of friends can spend time
              together.
            </span>
            <span className="text-xl">
              <br /> A place that makes it easy to talk every day and hang out
              more often.
            </span>
          </p>
          <div className="flex text-xl p-4 my-2 flex-row items-center lg:gap-16">
            <motion.button
              whileHover={{
                backgroundColor: "#0a3f94",
                color: "whitesmoke",
                fontWeight: "normal",
                border: "1px  blue",
                transition: { duration: 0.2 },
              }}
              className="flex items-center border-1 justify-center gap-2
             bg-blue-800 bg-opacity-40 rounded-3xl font-semibold px-6
              p-3"
            >
              Download for Windows <PiWindowsLogoFill />
            </motion.button>
            <motion.button
              whileHover={{
                backgroundColor: "#0a3f94",
                color: "whitesmoke",
                fontWeight: "normal",
                border: "1px  blue",
                transition: { duration: 0.2 },
              }}
              className="flex items-center border-1 justify-center gap-2 
              bg-blue-800 bg-opacity-40 rounded-3xl font-semibold px-6 
             p-3"
            >
              Open in Browser <PiBrowsersBold />
            </motion.button>
          </div>
        </motion.div>
        <motion.img
          initial={{ x: "200%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 3, type: "spring", delay: 1 }}
          src={discordright}
          alt="heroright"
          className="cover w-[40vw] max-md:hidden absolute -right-40 bottom-0 "
        />
        <motion.img
          initial={{ x: "-200%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 3, type: "spring", delay: 1 }}
          src={discordleft}
          alt="heroleft"
          className="cover w-[40vw] max-md:hidden absolute -left-52 bottom-0 "
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            repeatType: "reverse",
            repeat: Infinity,
          }}
          className="absolute bottom-[10px] p-2 left-1/2 -translate-x-1/2"
        >
          <p className="flex items-center font-bold text-xl gap-2 justify-center">
            Scroll Down <FaAnglesDown className="w-5 h-5 font-bold" />
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
