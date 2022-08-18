import Editors from "./Editors";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import Recent from "./Recent";
import Testimonials from "./Testimonials";

function App() {
    return (
        <div className="  bg-slate-600">
            <Nav />
            <Header />
            <Main />
            <Editors />
            <Recent />
            <Testimonials />
        </div>
    );
}

export default App;
