// import './App.css';
import Cards from "./components/Cards/Cards";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Article from "./components/Article/Article";
import Drinks from "./components/pages/Home/Drinks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
// import Images from './components/Images/jennifer.png';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinks" element={<Drinks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
