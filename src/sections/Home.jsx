import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { PiWindowsLogoFill } from "react-icons/pi";
import { PiBrowsersBold } from "react-icons/pi";
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
    [1, 0.8, 0.6, 0.2, 0, 0]
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
      className=" relative overflow-x-clip w-full  h-[80vh]  "
    >
      {/* Nav icons */}
      <motion.div
        initial={{ y: "-200%", x: "-50%" }}
        animate={{ y: "0%",  }}
        transition={{
          duration: 1,
          type: "spring",
          
        }}
        className="absolute left-1/2  z-10 top-10
      flex flex-row gap-4  "
      >
        <p className="text-2xl font-normal">hendn</p>
        <p className="text-2xl font-normal">hendn</p>
        <p className="text-2xl font-normal">hendn</p>
        <p className="text-2xl font-normal">hendn</p>
        <p className="text-2xl font-normal">hendn</p>
        <p className="text-2xl font-normal">hendn</p>
        
        
      </motion.div>
      <motion.div
        className=" relative overflow-hidden h-full flex items-center justify-center
       bg-sky-800 m-3 rounded-3xl"
      >
        <motion.img
         initial={{ y: "-200%", scale: 0.5 }}
         animate={{ y: "0%", scale: 0.9 }}
         transition={{ duration: 2, type: "spring" }}
          
          style={{ scale, position }}
          src={discordbg}
          alt="HomeBG"
          className=" bg-bottom absolute -bottom-[72px] max-lg:hidden  w-full h-full"
        />
        <motion.div
          initial={{ y: "-200%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, type: "spring" ,delay:0.7 }}
          style={{ scale, x: "-50%", position }}
          className=" left-1/2 lg:py-12 z-30   lg:gap-5 flex flex-col justify-center items-center lg:mb-[200px]"
        >
          <h1 className="text-7xl  font-bold tracking-wide whitespace-nowrap">
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
        <motion.img
         initial={{ x: "200%" }}
         animate={{ x: "0%" }}
         transition={{ duration: 3, type: "spring",delay:1 }}
          src={discordright}
          alt="heroright"
          className="cover w-[40vw] max-md:hidden absolute -right-36 bottom-0 "
        />
        <motion.img
         initial={{ x: "-200%" }}
         animate={{ x: "0%" }}
         transition={{ duration: 3, type: "spring",delay:1 }}
          src={discordleft}
          alt="heroleft"
          className="cover w-[40vw] max-md:hidden absolute -left-48 bottom-0 "
        />
      </motion.div>
    </motion.section>
  );
};

export default Home;
