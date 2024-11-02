import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../services/Services";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="mx-2 lg:mx-20 sm:my-12">
            <Banner />
            <Portfolio />
            <Blogs />
            <Services />
            <About/>
            <Contact />
        </div>
    );
};

export default Home;