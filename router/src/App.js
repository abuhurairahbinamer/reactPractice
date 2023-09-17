// import ReactDOM from "react-dom/client";
import { Route,BrowserRouter ,Routes} from 'react-router-dom';
import './App.css';
import Home from './component/pages/home';
import Fun from './component/pages/layout';
import About from './component/pages/about';
import Contact from './component/pages/contact';
function App() {
  return (
    <>
 

 <BrowserRouter>
 <Routes>
  
 <Route path='/' element={<Fun/>}/>
 <Route path='/home' element={<Home/>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='/contacts' element={<Contact/>}/>
 
 </Routes>
 </BrowserRouter>
 
 </>
  );
}

export default App;
