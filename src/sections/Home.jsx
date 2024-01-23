import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { PiWindowsLogoFill } from "react-icons/pi";
import { PiBrowsersBold } from "react-icons/pi";

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  //scrollprogress setup

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.6, 1],
    [1, 0.6, 0.5, 0.3, 0]
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
      className=" relative w-full z-10 h-screen lg:py-32 bg-zinc-600  "
    >
      <motion.div
        style={{ scale, x: "-50%", position }}
        className=" left-1/2  gap-4 flex flex-col items-center"
      >
        <h1 className="text-9xl font-extrabold whitespace-nowrap">IMAGINE A PLACE...</h1>
        <p className="text-2xl font-extralight text-center ">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="flex text-xl flex-row items-center lg:gap-16">
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "white",
              color: "black",
            }}
            className="flex items-center justify-center gap-2
             bg-[#1c1c1c] bg-opacity-40 rounded-3xl
              border-black border-2 p-3"
          >
            Download for Windows <PiWindowsLogoFill />
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "white",
              color: "black",
            }}
            className="flex items-center justify-center gap-2 
            bg-[#1c1c1c] bg-opacity-40 rounded-3xl border-black
             border-2 p-3"
          >
            Open in Browser <PiBrowsersBold />
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
