import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { introTwohero } from "../assets";

const animationOrderleft = {
  initial: 0,
  first: 0.1,
  second: 0.2,
  third: 0.3,
  fourth: 0.4,
  fifth: 0.5,
  sixth: 0.6,
  seventh: 0.7,
  eigth: 0.8,
  ninth: 0.9,
  end: 1,
};
const animationOrderright = {
  initial: 0,
  first: 0.1,
  second: 0.2,
  third: 0.3,
  fourth: 0.4,
  fifth: 0.5,
  sixth: 0.6,
  seventh: 0.7,
  eigth: 0.8,
  ninth: 0.9,
  end: 1,
};

const IntroOne = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  //scrollprogress setup

  const x = useTransform(
    scrollYProgress,
    [
      animationOrderright.initial,
      animationOrderright.first,
      animationOrderright.second,
      animationOrderright.third,
      animationOrderright.fourth,
      animationOrderright.fifth,
      animationOrderright.sixth,
      animationOrderright.seventh,
      animationOrderright.eigth,
      animationOrderright.ninth,
      animationOrderright.end,
    ],
    ["0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"]
  );

  const y = useTransform(
    scrollYProgress,
    [
      animationOrderleft.initial,
      animationOrderleft.first,
      animationOrderleft.second,
      animationOrderleft.third,
      animationOrderleft.fourth,
      animationOrderleft.fifth,
      animationOrderleft.sixth,
      animationOrderleft.seventh,
      animationOrderleft.eigth,
      animationOrderleft.ninth,
      animationOrderleft.end,
    ],
    [
      "-30%",
      "-20%",
      "0%",
      "50%",
      "80%",
      "125%",
      "130%",
      "150%",
      "180%",
      "205%",
      "210%",
    ]
  );

  const opacity = useTransform(
    scrollYProgress,
    [
      animationOrderleft.initial,
      animationOrderleft.first,
      animationOrderleft.second,
      animationOrderleft.third,
      animationOrderleft.fourth,
      animationOrderleft.fifth,
      animationOrderleft.sixth,
      animationOrderleft.seventh,
      animationOrderleft.eigth,
      animationOrderleft.ninth,
      animationOrderleft.end,
    ],
    [
      "0%",
      "5%",
      "10%",
      "30%",
      "60%",
      "90%",
      "100%",
      "100%",
      "50%",
      "20%",
      "10%",
    ]
  );
  //scrollprogress settings

  return (
    <section ref={targetRef}>
      {/*wrapper*/}
      <div className=" flex w-full   h-[150vh]">
        {/*content wrap*/}
        <div className="sticky top-0 w-full ">
          {/* img div */}
          <motion.div
            style={{ x, y, opacity }}
            className=" flex flex-row-reverse justify-center px-12"
          >
            <img
              src={introTwohero}
              alt="introTwohero"
              className="bg-cover bg-center m-2 border-2 border-white rounded-3xl"
            />
            {/*text div*/}
            <motion.div className="w-full gap-6 border-white border-l-2 flex flex-col items-start px-24 justify-center">
              <p className="text-4xl font-medium">Where hanging out is easy</p>
              <p className="text-2xl font-extralight">
                Grab a seat in a voice channel when you’re free. Friends in your
                server can see you’re around and instantly pop in to talk
                without having to call.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroOne;
