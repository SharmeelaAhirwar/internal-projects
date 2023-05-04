
import React from "react";
import { NavLink } from "react-router-dom";
import { Button, NavItem } from "reactstrap";

const Error=()=>{

    return(
        <>

        <div className="err">
            <h1>404 Error page</h1>
            <p>sorry,this page does not exist</p>

            <NavLink to="/">
            <Button className="btn" color="primary">Go back</Button>
            </NavLink>
            
            
           
        </div>
        </>

    );
}

export default Error;