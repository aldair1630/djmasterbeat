import "./App.css";
import { Route, Routes /*useLocation*/ } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Page from "./views/Page";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      {/* {location.pathname !== "/" && <Navbar />} */}
      <Routes>
        {/* <Route path="/" element={<Page />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />

        {/* <Route />
        <Route /> */}
      </Routes>
    </div>
  );
}

export default App;
