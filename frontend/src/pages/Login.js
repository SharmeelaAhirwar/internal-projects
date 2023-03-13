import CustomNavbar from "../components/CustomNavbar"
import { Card, CardBody, CardHeader, CardTitle, Container, Form, FormGroup, Label, Input, Row,Col, Button } from "reactstrap"
import { useState,useEffect } from "react"
import{login} from "../services/UserService"
import { toast, ToastContainer } from 'react-toastify';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';










const Login=()=>{

 

    const navigate = useNavigate();


 
    
    const [data,setData]=useState({
        
        email:'',
        password:'',
       
    
    })

    const [error ,setError]=useState({
        errors: {},
        isError: false
    })
    useEffect(()=>{
        console.log(data);
        
    },[data])

    const handleChange=(event,property)=>{
        console.log("name chnged")
        setData({...data,[property]:event.target.value})

        // console.log(data)

    }
    const resetData=()=>{
        setData({

           
            email:'',
            password:'',
           

        })
    }

    const submitData=(event)=>{
       event.preventDefault()
        console.log("submitted");
       
        login(data).then((response)=>{
            console.log(response);
            localStorage.setItem("loggedIn", true);
             toast.success(response.message)
             navigate("/user/dashboard");

        }).catch((error)=>{
            console.log(error.response.data);
            toast.error(error.response.data.message)

            console.log("error");
            
        });
    };

    return(
        <>

<CustomNavbar></CustomNavbar>
<Container>

<Row className="mt-4">
 <Col sm={{size: 6,offset: 3}}>
 <Card
 color="dark"
 inverse
 >
     <CardHeader>Login here !!</CardHeader>
     <CardBody>

         <Form onSubmit={submitData}>

         <FormGroup>
                 <Label for="email">
                     email
                 </Label>
                 <Input
                     id="email"
                     name="email"
                     placeholder="abc@gmail.com"
                     type="email"
                     onChange={(e)=>handleChange(e,'email')}
                     value={data.email}
                 />
             </FormGroup>

             <FormGroup>
                 <Label for="password">
                 password
                 </Label>
                 <Input
                     id="password"
                     name="password"
                     placeholder="password"
                     type="password"
                     onChange={(e)=>handleChange(e,'password')}
                     value={data.password}
                 />
             </FormGroup>
             
             <Container className="text-center">
                 <Button color="light">Login</Button>
                 <Button   color="secondary" type="reset" className="ml-4"> Reset</Button>

             </Container>
             
         </Form>
     </CardBody>
     

 </Card>
 </Col>
 </Row>
</Container>
        </>
        
       

    )

}

export default Login