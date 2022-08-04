// import './App.css';
import Cards from "./pages/Home/Components/Cards/Cards";
import Hero from "./pages/Home/Components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Article from "./pages/Home/Components/Article/Article";
import Drinks from "./pages/Drinks/Drinks";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import New from "./pages/Promotions/New"
import About from "./pages/About/About"   
import Introverts from "./pages/Home/Components/Cards/CategoryDrinks/Introverts";
import Oldfashion from "./pages/Home/Components/Cards/CategoryDrinks/Oldfashion";                                      
import Catalyzer from "./pages/Home/Components/Cards/CategoryDrinks/Catalyzer";
// import Images from './components/Images/jennifer.png';

function App() {
  return (
    <div>
      <nav style={{ margin: 10 }}>
        <Link to="/home" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/drinks" style={{ padding: 5 }}>
          Drinks
        </Link>
        <Link to="/new">New</Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
      </nav>

      {/* //<Navbar /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/drinks" element={<Drinks />}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Catalyzer" element={<Catalyzer/>}/>
        <Route path="/Introverts" element={<Introverts/>}/>
        <Route path="/Oldfashion" element={<Oldfashion/>}/>
      </Routes>
    </div>
  );
}

export default App;
