
import './App.css';
import NavBar from './components/navBar'; 
import Home from "./components/home";
import About from "./components/about";
import Footer from './components/footer';
import Search from './components/search';
import FavouritList from './components/FavouritList';
import { Route,Routes } from 'react-router-dom';
import SingUp from './components/singUp';
import SingIn from './components/singin';
import CreateCard from './components/createCard';
 import ProtectedRoute from "./components/protectedRoute";
import MyCards from './components/myCards';
import SingUpbiz from './components/SignUpBiz';
import DeleteCard from './components/deleteCard';
import EditCard from './components/editCard';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";
//  npm i react-router-dom

function App() {
  
  return (
    <div className='d-flex flex-column min-vh-100' >
    <header>
      <NavBar/>
    </header>
    
    <main className='flex-fill container'>
    <ToastContainer/>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="#/about" element={<About />} />     
        <Route path="search" element={< Search/>} /> 
        <Route path="favourit" element={<FavouritList />} />
        <Route path="signin" element={<SingIn />} />
        <Route path="singup" element={<SingUp />} />
        <Route path="singupBiz" element={<SingUpbiz />} />
        <Route path="/my-cards/edit/:id" element={ <ProtectedRoute onlyBiz> <EditCard /></ProtectedRoute> }/>
        <Route path="/my-cards/delete/:id" element={ <ProtectedRoute onlyBiz> <DeleteCard /></ProtectedRoute> }/>
        <Route path="create-card" element={<ProtectedRoute onlyBiz> <CreateCard /></ProtectedRoute>} />
        <Route path="my-cards" element={<ProtectedRoute onlyBiz> <MyCards /></ProtectedRoute>} />
      </Routes>
    </main>

    <footer>
     <Footer/>
    </footer>
    </div>
   
  );
}

export default App;
