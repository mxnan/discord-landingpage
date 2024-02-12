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
  const opacity = useTransform(
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
    ["0%", "5%", "10%", "30%", "60%", "90%", "100%", "80%", "30%", "0%", "0%"]
  );
  //scrollprogress settings

  return (
    <section
      ref={targetRef}
      className="w-full h-[100vh] xl:my-24 flex items-center   justify-center  "
    >
      <motion.div
        style={{ opacity }}
        className=" relative w-full  h-4/5 bg-[#1a1919]  rounded-2xl overflow-hidden  flex items-center   justify-center
       xl:mx-48  "
      >
        <div
          className="relative h-2/3 w-full   rounded-2xl  p-2 
         xl:mx-60 
          bg-stone-300 "
        >
          <div className=" relative h-full  flex">
            {/*SVG 1*/}
            <div
              className="bottomleft h-max w-max
            absolute -bottom-0 left-0
            "
            >
              <svg width="80" height="80" stroke="#1d1d1d" strokeWidth={2} viewBox="0 0 80 80" fill="#2B449D">
                <path strokeWidth={2} d="M29.5956 18.7868C29.5956 16.9458 31.088 15.4535 32.9289 15.4535H61.2132C63.0541 15.4535 64.5465 16.9458 64.5465 18.7868V47.0711C64.5465 48.912 63.0541 50.4044 61.2132 50.4044C59.3722 50.4044 57.8799 48.912 57.8799 47.0711V26.8342L21.1438 63.5702C19.8421 64.872 17.7315 64.872 16.4298 63.5702C15.128 62.2685 15.128 60.1579 16.4298 58.8562L53.1658 22.1201H32.9289C31.088 22.1201 29.5956 20.6277 29.5956 18.7868Z" />
              </svg>
            </div>

            {/*SVG 2*/}
            <div
              className="downmiddle h-max w-max
            absolute bottom-0 right-1/2 translate-x-1/2
            "
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="#2B449D">
                <path
                  d="M37.643 7.64297C38.9447 6.34122 41.0553 6.34122 42.357 7.64297L62.357 27.643C63.6588 28.9447 63.6588 31.0553 62.357 32.357C61.0553 33.6588 58.9447 33.6588 57.643 32.357L43.3333 18.0474L43.3333 70C43.3333 71.8409 41.8409 73.3333 40 73.3333C38.159 73.3333 36.6667 71.8409 36.6667 70L36.6667 18.0474L22.357 32.357C21.0553 33.6588 18.9447 33.6588 17.643 32.357C16.3412 31.0553 16.3412 28.9447 17.643 27.643L37.643 7.64297Z"
                  fill="#2B449D"
                />
              </svg>
            </div>
            {/*SVG 3*/}
            <div
              className="bottomright h-max w-max
            absolute bottom-0 right-0
            "
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="#2B449D">
                <path d="M15.4535 18.7868C15.4535 16.9458 16.9459 15.4535 18.7868 15.4535H47.0711C48.912 15.4535 50.4044 16.9458 50.4044 18.7868C50.4044 20.6277 48.912 22.1201 47.0711 22.1201H26.8342L63.5703 58.8562C64.872 60.1579 64.872 62.2685 63.5703 63.5702C62.2685 64.872 60.158 64.872 58.8562 63.5702L22.1202 26.8342V47.0711C22.1202 48.912 20.6278 50.4044 18.7868 50.4044C16.9459 50.4044 15.4535 48.912 15.4535 47.0711V18.7868Z" />
              </svg>
            </div>
            {/*SVG 4*/}
            <div
              className="rightmiddle h-max w-max
            absolute bottom-1/2 right-0 translate-y-1/2
            "
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="#2B449D">
                <path d="M32.357 17.643C33.6588 18.9447 33.6588 21.0553 32.357 22.357L18.0474 36.6667H70C71.841 36.6667 73.3334 38.159 73.3334 40C73.3334 41.8409 71.841 43.3333 70 43.3333H18.0474L32.357 57.643C33.6588 58.9447 33.6588 61.0553 32.357 62.357C31.0553 63.6588 28.9447 63.6588 27.643 62.357L7.643 42.357C6.34125 41.0553 6.34125 38.9447 7.643 37.643L27.643 17.643C28.9447 16.3412 31.0553 16.3412 32.357 17.643Z" />
              </svg>
            </div>
            {/*SVG 5*/}
            <div
              className="topright h-max w-max
            absolute top-0 right-0
            "
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="#2B449D">
                <path d="M63.5703 16.4298C64.872 17.7316 64.872 19.8421 63.5703 21.1439L26.8342 57.8799H47.0711C48.912 57.8799 50.4044 59.3723 50.4044 61.2132C50.4044 63.0542 48.912 64.5466 47.0711 64.5466H18.7868C16.9459 64.5466 15.4535 63.0542 15.4535 61.2132V32.929C15.4535 31.088 16.9459 29.5956 18.7868 29.5956C20.6278 29.5956 22.1202 31.088 22.1202 32.929V53.1659L58.8562 16.4298C60.158 15.1281 62.2685 15.1281 63.5703 16.4298Z" />
              </svg>
            </div>
            {/*SVG 6*/}
            <div
              className="upmiddle h-max w-max
            absolute top-0 right-1/2 translate-x-1/2 
            "
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="#2B449D">
                <path d="M40 6.66667C41.8409 6.66667 43.3333 8.15906 43.3333 10L43.3333 61.9526L57.643 47.643C58.9447 46.3412 61.0553 46.3412 62.357 47.643C63.6588 48.9447 63.6588 51.0553 62.357 52.357L42.357 72.357C41.0553 73.6588 38.9447 73.6588 37.643 72.357L17.643 52.357C16.3412 51.0553 16.3412 48.9447 17.643 47.643C18.9447 46.3412 21.0553 46.3412 22.357 47.643L36.6667 61.9526L36.6667 10C36.6667 8.15906 38.159 6.66667 40 6.66667Z" />
              </svg>
            </div>
            {/*SVG 7*/}
            <div
              className="topleft h-max w-max
            absolute top-0 left-0
            "
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="#2B449D">
                <path
                  d="M16.4298 16.4298C17.7315 15.1281 19.8421 15.1281 21.1438 16.4298L57.8799 53.1659V32.929C57.8799 31.088 59.3722 29.5956 61.2132 29.5956C63.0541 29.5956 64.5465 31.088 64.5465 32.929V61.2132C64.5465 63.0542 63.0541 64.5466 61.2132 64.5466H32.9289C31.088 64.5466 29.5956 63.0542 29.5956 61.2132C29.5956 59.3723 31.088 57.8799 32.9289 57.8799H53.1658L16.4298 21.1439C15.128 19.8421 15.128 17.7316 16.4298 16.4298Z"
                  fill="#2B449D"
                />
              </svg>
            </div>
            {/*SVG 8*/}
            <div
              className="leftmiddle h-max w-max
            absolute bottom-1/2 left-0 translate-y-1/2
            "
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="#2B449D">
                <path d="M47.643 17.643C48.9447 16.3412 51.0553 16.3412 52.357 17.643L72.357 37.643C73.6588 38.9447 73.6588 41.0553 72.357 42.357L52.357 62.357C51.0553 63.6588 48.9447 63.6588 47.643 62.357C46.3412 61.0553 46.3412 58.9447 47.643 57.643L61.9526 43.3333H10C8.15906 43.3333 6.66667 41.8409 6.66667 40C6.66667 38.159 8.15906 36.6667 10 36.6667H61.9526L47.643 22.357C46.3412 21.0553 46.3412 18.9447 47.643 17.643Z" />
              </svg>
            </div>
          </div>

         
          <motion.button
            whileHover={{
              backgroundColor: "#0a3f94",
              opacity: 0.75,
              color: "whitesmoke",
              backgroundBlendMode: "soft-light",

              border: "2px  solid whitesmoke",
              transition: { duration: 0.2 },
            }}
            className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            flex items-center border-1 justify-center gap-2 text-4xl
             bg-[#0a3f94] rounded-3xl font-semibold px-6
              p-3"
          >
            Download for Windows <PiWindowsLogoFill />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Download;
