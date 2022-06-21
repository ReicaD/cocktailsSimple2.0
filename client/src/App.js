
// import './App.css';
import Cards from './components/Cards/Cards';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Article from './components/Article/Article';
// import Images from './components/Images/jennifer.png';

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/> 
     <Cards/>
     {/* <Images/> */}
     <Article/>
      
      <Footer/> 
    </div>
  );
}

export default App;
