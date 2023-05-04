import { Outlet } from "react-router-dom"
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import CustomNavbar from "../components/CustomNavbar"
import { useEffect } from "react";
import { loadUsersStart } from "../redux/action";

const Home=()=>{

  // const dispatch=useDispatch();

  // const {users}=useSelector(state=>state.data)
  //  useEffect(()=>{
  //   dispatch(loadUsersStart());

  //  },[])
    return(
        <>

       
     
      <h1 style={{color:'lightseagreen',textAlign:'center',paddingTop:'50px'}}>Welcome To Home Page</h1>
      
      
        </>



       
    );

}

export default Home