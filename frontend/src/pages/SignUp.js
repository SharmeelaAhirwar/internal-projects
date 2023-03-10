import { useEffect, useState } from "react"
import { Card, CardBody, CardHeader, CardTitle, Container, Form, FormGroup, Label, Input, Row,Col, Button } from "reactstrap"
import CustomNavbar from "../components/CustomNavbar"
import  {signUp}from "../services/UserService"

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';



const SignUp = () => {



    const [data,setData]=useState({
        userName:'',
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        phoneNumber:''
    
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

            userName:'',
            email:'',
            password:'',
            firstName:'',
            lastName:'',
            phoneNumber:''

        })
    }

    const submitData=(event)=>{
       event.preventDefault()
        console.log("submitted");
       
        signUp(data).then((response)=>{
            console.log(response);
            console.log("succes");
            toast.success("user registered successfully!!")
            setData({

                userName:'',
                email:'',
                password:'',
                firstName:'',
                lastName:'',
                phoneNumber:''
    
            })
        
        }).catch((error)=>{
            console.log(error.data);
            toast.error(error.response.data.message)
            console.log("error");
            
        });
    };
    return (
        <>

            <CustomNavbar></CustomNavbar>

            <Container>

               <Row className="mt-4">
                <Col sm={{size: 6,offset: 3}}>
                <Card
                color="dark"
                inverse
                >
                    <CardHeader>Register here !!</CardHeader>
                    <CardBody>

                        <Form onSubmit={submitData}>

                        <FormGroup>
                                <Label for="userName">
                                    userName
                                </Label>
                                <Input
                                    id="userName"
                                    name="name"
                                    placeholder="username"
                                    type="text"
                                    onChange={(e)=>handleChange(e,'userName')}
                                    value={data.userName}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="firstName">
                                    firstName
                                </Label>
                                <Input
                                    id="firstName"
                                    name="name"
                                    placeholder="firstname"
                                    type="text"
                                    onChange={(e)=>handleChange(e,'firstName')}
                                    value={data.firstName}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastName">
                                    lastName
                                </Label>
                                <Input
                                    id="lastName"
                                    name="name"
                                    placeholder="lastname"
                                    type="text"
                                    onChange={(e)=>handleChange(e,'lastName')}
                                    value={data.lastName}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">
                                    Email
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
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    name="Password"
                                    placeholder="password"
                                    type="password"
                                    onChange={(e)=>handleChange(e,'password')}
                                    value={data.password}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="phoneNumber">
                                phoneNumber
                                </Label>
                                <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="phone number"
                                    type="phone"
                                    onChange={(e)=>handleChange(e,'phoneNumber')}
                                    value={data.phoneNumber}
                                />
                            </FormGroup>
                            <Container className="text-center">
                                <Button color="light"> Register</Button>
                                <Button onClick={resetData}  color="secondary" type="reset" className="ml-4"> Reset</Button>

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

export default SignUp