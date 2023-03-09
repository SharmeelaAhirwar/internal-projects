import CustomNavbar from "../components/CustomNavbar"
import { Card, CardBody, CardHeader, CardTitle, Container, Form, FormGroup, Label, Input, Row,Col, Button } from "reactstrap"
import { useState } from "react"










const Login=()=>{

 const [data,setData]=useState({
    userName:'',
    email:'',
    password:'',
    firstName:'',
    lastName:'',
    phoneNumber:''

})




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

         <Form>

         <FormGroup>
                 <Label for="email">
                     email
                 </Label>
                 <Input
                     id="email"
                     name="email"
                     placeholder="abc@gmail.com"
                     type="email"
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