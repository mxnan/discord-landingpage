import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Intro = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  //scrollprogress setup

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 0.9, 0.6, 0.4, 0, 0]
  );
  //scrollprogress settings

  return (
    <section ref={targetRef}>
      {/*wrapper*/}
      <div className="relative flex flex-col h-[80vh]">
        {/*content wrap*/}
        <div className="w-full h-full relative flex flex-row">
          {/* img div */}
          <div className="absolute w-1/2 left-0 top-1/2">
            <img src="" alt="" />
          </div>
          {/*text div*/}
          <div className="absolute right-0 w-1/2 top-1/2 -translate-y-1/2 flex flex-col">
            <p>Create an invite-only place where you belong</p>
            <p>
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
