import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Events from "./components/events";
import Workshops from "./components/workshops";
import AddEvent from "./components/addEvent";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/events" element={<Home />}>
          <Route index element={<Events />} />
          <Route path="addEvents" element={<AddEvent />} />
          <Route path="workshops" element={<Workshops />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
