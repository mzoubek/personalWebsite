import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className='bg-gradient-to-br from-lightGreen to-darkGreen relative'>
      <div className='flex justify-center'>
        <Navbar />
      </div>
      <Routes>
        <Route
          path='/personalWebsite/'
          element={<Home />}
        />
        <Route
          path='/personalWebsite/about'
          element={<About />}
        />
        <Route
          path='/personalWebsite/projects'
          element={<Projects />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <div className='pb-[64px]'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
