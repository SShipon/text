import { useContext } from "react";
import { AuthContext } from "../../context/useContextProjects";
import { motion } from "framer-motion";
import { fadeIn } from '../../hooks/variant';
import Blog from "./Blog";

const Blogs = () => {
  const { blogs } = useContext(AuthContext);
  console.log(blogs)
  return (
    <div id="blogs" className="my-20 mx-2 lg:mx-0">
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
                        <h2
        className="text-white text-center [leading-trim:both] [text-edge:cap] lg:text-5xl text-xl not-italic font-semibold leading-[normal] font-outfit relative my-10 uppercase"
      >
   Explore Our Blogs
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
            stroke-linecap="round"></path>
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
        {/* imageUrl description title */}
      <div className="flex flex-col lg:flex-row justify-center items-center">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 my-12">
                {
                   blogs?.slice(0,6).map((blog)=><Blog
                    key={blog._id}   blog={blog}
                   ></Blog>)
                }
           </div>
      </div>
    </div>
  );
};

export default Blogs;
