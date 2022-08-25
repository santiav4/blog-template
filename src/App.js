import Editors from "./Editors";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import Recent from "./Recent";
import Testimonials from "./Testimonials";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

import { useState, useEffect } from "react";

function App() {
    const [isVisible, setIsVisible] = useState(false);

    const listenToScroll = () => {
        let showDistance = 100;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > showDistance) {
            !isVisible && setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);
    return (
        <div className="  bg-[#121212]  w-screen max-w-[1289px] lg:mx-auto box-border relative m-0 p-0">
            <Nav />
            <Main />
            <Editors />
            <Recent />
            <Testimonials />

            {isVisible && (
                <button
                    id="hide"
                    className="  fixed bottom-5 right-5 font-bold text-sm text-slate-500 p-[10px] rounded-md  bg-white drop-shadow-md">
                    <Link
                        className=" relative flex items-center"
                        activeClass="active"
                        to="test1"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <p className=" mr-2">Back to Top</p>
                        <FaArrowUp size={12} className="  " />
                    </Link>
                </button>
            )}
        </div>
    );
}

export default App;
