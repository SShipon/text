import Portfolio from "../../assets/shipon.png";
import aboutMe from "../../assets/Portfolio/aboutMe.jpg";
import active  from '../../assets/Portfolio/shiponActive.svg'
import { motion } from "framer-motion";
import { fadeIn } from "../../hooks/variant";
import TechnologyList from "./TechnologyList";


const About = () => {
  return (
    <>
        <section className="mx-2 lg:mx-0">
            <div id="about" className="my-8">
      <br />
      <br />

      <div className="my-12">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="my-10"
        >
          <h2 className="text-white text-center [leading-trim:both] [text-edge:cap] lg:text-5xl text-xl not-italic font-semibold leading-[normal] font-outfit relative my-10 uppercase">
            ABOUT ME
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="256"
              height="18"
              viewBox="0 0 256 18"
              fill="none"
              className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2"
            >
              <path
                d="M253 15.0003C192 0.000329018 75 0.000244617 3 11.0003"
                stroke="url(#paint0_linear_22_140)"
                stroke-width="5"
                stroke-linecap="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_22_140"
                  x1="264"
                  y1="15.3887"
                  x2="-13.4"
                  y2="23.754"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3F1EFF"></stop>
                  <stop offset="0.415" stop-color="#F459FF"></stop>
                  <stop offset="0.69" stop-color="#FC6A93"></stop>
                  <stop offset="1" stop-color="#FFF2A2"></stop>
                </linearGradient>
              </defs>
            </svg>
          </h2>
        </motion.div>
      </div>
  
    

      <div className="flex  flex-col lg:flex-row justify-center gap-6 w-full  items-center lg:my-10 my-8 bg-[#ffffff13] lg:p-8 p-4 shadow-xl rounded-xl">
        <div>
          <img
            className="lg:w-[420px] lg:h-[432px] w-full rounded-2xl "
            src={Portfolio}
            alt=""
          />
        </div>

        <div>
          <img
            className="lg:w-[950px] w-full rounded-r-2xl"
            src={aboutMe}
            alt=""
          />
        </div>
      </div>
    </div>
    </section>


    <section className="mx-2 lg:mx-0">
          <div className="bg-[#ffffff13] lg:p-8 p-4 shadow-xl rounded-xl">
           <div>
           <h
            className="font-semibold  text-3xl"
            style={{
              
              background:
                "linear-gradient(90deg, #3f1eff, #f459ff, #fc6a93, #fff2a2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
          Activity
          </h>{" "}
              <div className="my-10">
              <img className="lg:w-[1200px] w-[100%]" src={active} alt="" srcset="" />
              </div>
           </div>
              <div className="my-8">
              <h
            className="font-semibold mt-10 text-3xl"
            style={{
              
              background:
                "linear-gradient(90deg, #3f1eff, #f459ff, #fc6a93, #fff2a2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
           Opening
          </h>{" "}
              <p className="text-[#ffffffbe] mt-10">I'm a Shipon passionate MERN stack developer with a strong command of modern web technologies and a keen eye for detail. With expertise in HTML, CSS, JavaScript, and front-end frameworks like React.js and Redux, I bring user interfaces to life with clean, responsive, and dynamic designs. On the back-end, I harness the power of Node.js, Express.js, and TypeScript to build robust, scalable applications. My experience with Next.js enhances my ability to deliver fast, SEO-optimized solutions, while my proficiency in Git and version control ensures smooth collaboration in any team environment. I thrive on problem-solving, continuously learning, and staying up-to-date with the latest trends in web development to create innovative solutions that meet both user needs and business goals. Let’s build something exceptional together!</p>
          </div>
          </div>
    </section>
      <section>
           <TechnologyList />
      </section>
    </>
    

    
  );
};

export default About;
