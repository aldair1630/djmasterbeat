import "./App.css";
import { Route, Routes /*useLocation*/ } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Page from "./views/Page";
import Home from "./views/Home";
import About from "./views/About";

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      {/* {location.pathname !== "/" && <Navbar />} */}
      <Routes>
        {/* <Route path="/" element={<Page />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<About />} />
        {/* <Route />
        <Route /> */}
      </Routes>
    </div>
  );
}

export default App;
