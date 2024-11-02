import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import LoadingSpinner from "../shared/spinner/LoadingSpinner";

const Main = () => {
    const location = useLocation();

    const hideHeaderFooterPaths = ["blogDetails"]; 

    const shouldHideHeaderFooter = hideHeaderFooterPaths.includes(location.pathname);

    return (
        <div>
            {!shouldHideHeaderFooter && <Navbar />}
            <Suspense fallback={<LoadingSpinner />}>
                <Outlet />
            </Suspense>
            {!shouldHideHeaderFooter && <Footer />}
        </div>
    );
};

export default Main;
