import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'reactstrap';
import { BrowserRouter,Route,Routes ,Router,Switch} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from './pages/User-operation/UserDashboard';
import PrivateRoute from './components/PrivateRoute';
import AddUser from './pages/User-operation/AddUser';



function App() {
  return (
    
  


   
       <BrowserRouter>
       <ToastContainer position='bottom-center'/>
        <Routes>
              
                    
                    <Route  path='/' element={<Home/>} />
                    <Route  path='/login' element={<Login/>} />
                   <Route  path='/signUp' element={<SignUp/>} />

                   {/* <Route  path='/user' element={<PrivateRoute/>} >
                   <Route  path='dashboard' element={<UserDashboard/>} />

                   <Route  path='add' element={<AddUser/>} />
                   </Route> */}
                    <Route  path='/user/dashboard' element={<UserDashboard/>} />
                    <Route  path='/user/add' element={<AddUser/>} />
                    <Route  path='/user/edit/:id' element={<AddUser/>} />
                  
                    
                   
                 
        </Routes>
        </BrowserRouter>
   
    
   
    
   
  );
}

export default App;
