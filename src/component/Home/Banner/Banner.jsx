import { Cursor, useTypewriter } from "react-simple-typewriter";
import resume from "../../../assets/Shipon resume (3).pdf";
import BannerAnimate from "./BannerAnimate";
import Icons from "../../../shared/Icons/Icons";
import { motion } from "framer-motion";
import { fadeIn } from "../../../hooks/variant";
import { div } from "framer-motion/client";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "I am Shipon ",
      "Professional Developer specializing",
      "Frontend Development ",
      "Backend Development",
      "JavaScript Enthusiast",
    ],
    loop: 0,
  });

  return (
    <div className="mx-4 lg:mx-0">
      <div
        id="home"
        className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between items-center"
      >
        <div>
          <h1 className="text-xl lg:text-3xl font-extrabold mt-20 lg:mt-8 text-white">
            Hey There {""}
            <span
              className="text-gradient text-xl lg:text-3xl font-extrabold"
              style={{ fontWeight: "bold" }}
            >
              {text}
            </span>
            <span className="text-3xl text-sky-600">
              <Cursor cursorStyle="//" />
            </span>
          </h1>
          <br />
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="my-2"
          >
            <p className="text-white lg:w-2/3 text-lg  lg:text-xl">
              I am Professional{" "}
              <span
                className="font-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, #3f1eff, #f459ff, #fc6a93, #fff2a2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                JavaScript developer
              </span>{" "}
              With Frontend and Backend Web Development Skills Based on Client
              Desire.
            </p>
          </motion.div>
             
          <br />
          <div>
            <a href={resume} download>
              <button className="about__hero__btn about__hero__btn:hover gradient-border  font-bold">
                <i className="fa-solid fa-download"></i> Resume
              </button>
            </a>
          </div>
          <div>
            <Icons></Icons>
          </div>
        </div>

        <div className="w-3/2 mb-9">
          <BannerAnimate></BannerAnimate>
        </div>
      </div>
    </div>
  );
};

export default Banner;
