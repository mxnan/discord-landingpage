import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PiWindowsLogoFill } from "react-icons/pi";

const animationOrderone = {
  initial: 0.1,
  first: 0.1,
  second: 0.2,
  third: 0.3,
  fourth: 0.4,
  fifth: 0.5,
  sixth: 0.6,
  seven: 0.7,
  eight: 0.8,
  nine: 0.9,
  end: 0.99,
};

const Download = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  //scrollprogress setup

  const bgscale = useTransform(
    scrollYProgress,
    [
      animationOrderone.initial,
      animationOrderone.first,
      animationOrderone.second,
      animationOrderone.third,
      animationOrderone.fourth,
      animationOrderone.fifth,
      animationOrderone.sixth,
      animationOrderone.seven,
      animationOrderone.eight,
      animationOrderone.nine,
      animationOrderone.end,
    ],
    [
      "120%",
      "110%",
      "100%",
      "90%",
      "80%",
      "70%",
      "60%",
      "50%",
      "40%",
      "30%",
      "30%",
    ]
  );
  const contentopacity = useTransform(
    scrollYProgress,
    [
      animationOrderone.initial,
      animationOrderone.first,
      animationOrderone.second,
      animationOrderone.third,
      animationOrderone.fourth,
      animationOrderone.fifth,
      animationOrderone.sixth,
      animationOrderone.seven,
      animationOrderone.eight,
      animationOrderone.nine,
      animationOrderone.end,
    ],
    [
      "0%",
      "0%",
      "0%",
      "100%",
      "100%",
      "100%",
      "100%",
      "100%",
      "0%",
      "0%",
      "0%",
    ]
  );

  //scrollprogress settings

  return (
    <section ref={targetRef} className="relative w-full  h-[100vh]   ">
      {" "}
      {/** white div **/}
      <motion.div
        style={{ scale: bgscale }}
        initial={{ backgroundColor: "whitesmoke" }}
        animate={{ backgroundColor: "khaki" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className=" 
        w-full h-full
        rounded-full bg-stone-400  "
      >
        {/** white div end **/}
      </motion.div>
      {/* content div*/}
      <motion.div
      style={{ opacity: contentopacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-transparent flex flex-col gap-12
      "
      >
        <motion.p className="text-6xl font-medium text-sky-700 capitalize text-center">
          Ready to <br />
          <strong className="text-7xl">start</strong>
          <br /> your journey ?
        </motion.p>
        <motion.button
          whileHover={{
            scale: 1.2,
            backgroundColor: "#0a3f94",
            opacity: 1,
            color: "whitesmoke",
            backgroundBlendMode: "soft-light",

            border: "2px  solid whitesmoke",
            transition: { duration: 0.2 },
          }}
          className="
            text-[#282f74] whitespace-nowrap
            flex items-center border-1 justify-center gap-2 text-4xl
             bg-[#0a3f94] bg-opacity-50 rounded-3xl font-semibold
              p-4 px-12"
        >
          Download for Windows <PiWindowsLogoFill />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Download;
