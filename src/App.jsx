
import './App.css';
import NavBar from './components/navBar'; 
import Home from "./components/home";
import About from "./components/about";
import Footer from './components/footer';
import Search from './components/search';
 import MovieInfo from './components/movieInfo';
 import { Route,Routes } from 'react-router-dom';


function App() {
 

  return (
    <div className='d-flex flex-column min-vh-100' >
    <header>
      <NavBar/>
    </header>
    
    <main className='flex-fill container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />     
        <Route path="search" element={< Search/>} /> 
      </Routes>
    </main>

    <footer>
     <Footer/>
    </footer>
    </div>
   
  );
}

export default App;
