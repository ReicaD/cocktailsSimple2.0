// import './App.css';
import Cards from "./components/Cards/Cards";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Article from "./components/Article/Article";
import Drinks from "./components/pages/Home/Drinks";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import New from "./components/pages/New";
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
        <Link to="new">New</Link>
      </nav>
      {/* //<Navbar /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/drinks" element={<Drinks />}/>
        <Route path="/new" element={<New/>}/>
      </Routes>
    </div>
  );
}

export default App;
