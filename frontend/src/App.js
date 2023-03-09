import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'reactstrap';
import { BrowserRouter,Route,Routes ,Router,Switch} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import CustomNavbar from './components/CustomNavbar';



function App() {
  return (
    
  


   
       <BrowserRouter>
        <Routes>
              
                    
                    <Route  path='/' element={<Home/>} />
                    <Route  path='/login' element={<Login/>} />
                   <Route  path='/signUp' element={<SignUp/>} />
                 
        </Routes>
        </BrowserRouter>
   
    
   
    
   
  );
}

export default App;
