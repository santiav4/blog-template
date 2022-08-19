import Editors from "./Editors";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import Recent from "./Recent";
import Testimonials from "./Testimonials";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

function App() {
    return (
        <div className="  bg-[#121212]  w-screen box-border relative">
            <Nav />
            <Main />
            <Editors />
            <Recent />
            <Testimonials />

            <button className=" fixed bottom-5 right-5  bg-white">
                <Link
                    className=" relative"
                    activeClass="active"
                    to="test1"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    Back to Top
                </Link>
            </button>
        </div>
    );
}

export default App;
