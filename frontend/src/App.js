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
import CustomNavbar from './components/CustomNavbar';

import EmployeeList from './EmployeeList';
import Error from './pages/Error';
import ErrorBoundary from './pages/ErrorBoundary';
import UploadFile from './pages/UploadFile';



function App() {
  return (
    
  


   
       <BrowserRouter>
       <CustomNavbar></CustomNavbar>
       <ToastContainer position='bottom-center'/>
       <ErrorBoundary>
        <Routes>
              
                    
                    <Route  path='/' element={<Home/>} />
                    <Route  path='/virtualized' element={<EmployeeList/>} />
                    
                    <Route  path='/login' element={<Login/>} />
                   <Route  path='/signUp' element={<SignUp/>} />

                   {/* <Route  path='/user' element={<PrivateRoute/>} >
                   <Route  path='dashboard' element={<UserDashboard/>} />

                   <Route  path='add' element={<AddUser/>} />
                   </Route> */}
                    <Route  path='/users' element={<UserDashboard/>} />
                    <Route  path='/users/add' element={<AddUser/>} />
                    <Route  path='/users/edit/:id' element={<AddUser/>} />
                    <Route path='/users/upload' element={<UploadFile/>}/>
                    <Route path="*" element={<Error/>} />
                  
                    
                   
                 
        </Routes>
        </ErrorBoundary>
        </BrowserRouter>
   
    
   
    
   
  );
}

export default App;


