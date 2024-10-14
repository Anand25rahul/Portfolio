import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/account' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
       
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
