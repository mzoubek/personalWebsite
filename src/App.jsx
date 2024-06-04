import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='bg-gradient-to-br from-lightGreen to-darkGreen relative'>
      <div className='flex justify-center'>
        <Navbar />
      </div>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/projects'
          element={<Projects />}
        />
      </Routes>
      <div className='pb-[64px]'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
