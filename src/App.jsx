import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes /*useLocation*/ } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Page from "./views/Page";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Services from "./views/Services";

function App() {
  useEffect(() => {
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    document.body.appendChild(follower);

    const moveFollower = (e) => {
      follower.style.left = e.clientX + 'px';
      follower.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', moveFollower);
    return () => {
      window.removeEventListener('mousemove', moveFollower);
      document.body.removeChild(follower);
    };
  }, []);

  return (
    <div className="App">
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <Navbar />
      {/* {location.pathname !== "/" && <Navbar />} */}
      <Routes>
        {/* <Route path="/" element={<Page />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        {/* <Route exact path="/contact" element={<Contact />} /> */}

        {/* <Route />
        <Route /> */}
      </Routes>
    </div>
  );
}

export default App;
