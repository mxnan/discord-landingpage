import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

const Product = [
  {
    id: 1,
    title: "Download",
    link: "/",
  },
  {
    id: 2,
    title: "Nitro",
    link: "link",
  },
  {
    id: 3,
    title: "Status",
    link: "link",
  },
  {
    id: 4,
    title: "app directory",
    link: "link",
  },
];
const Company = [
  {
    id: 1,
    title: "About",
    link: "link",
  },
  {
    id: 2,
    title: "jobs",
    link: "link",
  },
  {
    id: 3,
    title: "brand",
    link: "link",
  },
  {
    id: 4,
    title: "newsroom",
    link: "link",
  },
];
const Resources = [
  {
    id: 1,
    title: "college",
    link: "link",
  },
  {
    id: 2,
    title: "support",
    link: "link",
  },
  {
    id: 3,
    title: "safety",
    link: "link",
  },
  {
    id: 4,
    title: "streamkit",
    link: "link",
  },
  {
    id: 5,
    title: "gaming",
    link: "link",
  },
  {
    id: 6,
    title: "community",
    link: "link",
  },
  {
    id: 7,
    title: "creators",
    link: "link",
  },
];

const Policies = [
  {
    id: 1,
    title: "terms",
    link: "link",
  },
  {
    id: 2,
    title: "privacy",
    link: "link",
  },
  {
    id: 3,
    title: "guidelines",
    link: "link",
  },
  {
    id: 4,
    title: "licenses",
    link: "link",
  },
  {
    id: 5,
    title: "acknowledgements",
    link: "link",
  },
];

const footvariant = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      duration: 2,

      type: "tween",
    },
  },
};

const contentvariant = {
  initial: {
    y: -600,
  },
  animate: {
    y: 0,
    transition: {
      duration: 3,
      ease: "easeInOut",
      type: "spring",
      staggerChildren: 0.8,
      delayChildren: 0.2,
    },
  },
};

const Contact = () => {
  // for using animation each time inview
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-30px" });
  // for using animation each time inview

  return (
    <section className="w-full  h-full">
      {/** wrapper div **/}
      <div
        ref={ref}
        className="relative  h-[80vh]  bg-[#d9d9eb]
        rounded-t-3xl mx-6 
        flex flex-col overflow-hidden
        border-2 border-stone-100
        text-black
      "
      >
        {/** content div **/}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={contentvariant}
          className="w-full h-3/4   "
        >
          {/** content wrapper **/}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={contentvariant}
            className="flex h-full w-full 
          
          xl:gap-12 xl:px-16 xl:pt-24"
          >
            {/** left content **/}
            <motion.div
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={contentvariant}
              className="flex flex-col items-start
             xl:w-1/3 xl:h-1/2 xl:gap-8 "
            >
              <motion.span
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={contentvariant}
                className="text-4xl uppercase font-bold text-[#4447ca]"
              >
                discord
              </motion.span>
              <motion.div
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={contentvariant}
                className="flex items-center justify-center
              xl:gap-6 text-4xl "
              >
                <FaXTwitter />
                <FaInstagram />
                <FaFacebook />
                <FaYoutube />
                <FaTiktok />
              </motion.div>
            </motion.div>
            {/** right content **/}
            <motion.div
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={contentvariant}
              className="flex flex-row justify-evenly 
            xl:w-2/3 xl:h-full"
            >
              {/** Products **/}
              <motion.div
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={contentvariant}
                className="flex flex-col uppercase gap-8"
              >
                <motion.p
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  variants={contentvariant}
                  className="text-2xl font-semibold text-[#4447ca]"
                >
                  Products
                </motion.p>
                {Product.map((item) => {
                  return (
                    <motion.div
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      variants={contentvariant}
                      key={item.id}
                      className="flex flex-col items-start justify-start"
                    >
                      <motion.span
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        variants={contentvariant}
                        className=" text-base font-normal"
                      >
                        {item.title}
                      </motion.span>
                    </motion.div>
                  );
                })}
              </motion.div>
              {/** Company **/}
              <motion.div
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={contentvariant}
                className="flex flex-col uppercase gap-8"
              >
                <motion.p
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  variants={contentvariant}
                  className="text-2xl font-semibold text-[#4447ca]"
                >
                  Company
                </motion.p>
                {Company.map((item) => {
                  return (
                    <motion.div
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      variants={contentvariant}
                      key={item.id}
                      className="flex flex-col items-start justify-start"
                    >
                      <motion.span
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        variants={contentvariant}
                        className=" text-base font-normal"
                      >
                        {item.title}
                      </motion.span>
                    </motion.div>
                  );
                })}
              </motion.div>
              {/** Resources **/}
              <motion.div
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={contentvariant}
                className="flex flex-col uppercase  gap-8"
              >
                <motion.p
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  variants={contentvariant}
                  className="text-2xl font-semibold text-[#4447ca]"
                >
                  Resources
                </motion.p>
                {Resources.map((item) => {
                  return (
                    <motion.div
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      variants={contentvariant}
                      key={item.id}
                      className="flex flex-col items-start justify-start"
                    >
                      <motion.span
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        variants={contentvariant}
                        className=" text-base font-normal"
                      >
                        {item.title}
                      </motion.span>
                    </motion.div>
                  );
                })}
              </motion.div>
              {/** Policies **/}
              <motion.div
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={contentvariant}
                className="flex flex-col uppercase  gap-8"
              >
                <motion.p
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  variants={contentvariant}
                  className="text-2xl font-semibold text-[#4447ca]"
                >
                  Policies
                </motion.p>
                {Policies.map((item) => {
                  return (
                    <motion.div
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      variants={contentvariant}
                      key={item.id}
                      className="flex flex-col items-start justify-start"
                    >
                      <motion.span
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        variants={contentvariant}
                        className=" text-base font-normal"
                      >
                        {item.title}
                      </motion.span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/** foot div **/}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={footvariant}
          className="flex flex-col h-1/4 
        xl:px-16 xl:gap-10"
        >
          <div className="w-full mt-10 p-[1px] bg-[#4447ca] "></div>
          <div className="flex justify-between">
            <span className="flex items-center justify-center">
              <FaDiscord className="text-5xl" />
            </span>
            <motion.button
              whileHover={{
                backgroundColor: "#0a3f94",
                color: "whitesmoke",
                fontWeight: "normal",
                border: "1px  blue",
                transition: { duration: 0.2 },
              }}
              className="flex items-center border-1 justify-center gap-2 
                bg-blue-800 bg-opacity-40 rounded-3xl font-semibold px-6 p-3
                xl:text-xl"
            >
              Open Discord
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
