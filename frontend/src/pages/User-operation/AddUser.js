
import CustomNavbar from "../../components/CustomNavbar"
import { Card, CardBody, CardHeader, CardTitle, Container, Form, FormGroup, Label, Input, Row,Col, Button } from "reactstrap"
import { Link,useHref,useParams } from "react-router-dom"
import { getUserByID, signUp, updateUser } from "../../services/UserService"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from 'react-toastify';



const AddUser=()=>{


    
    
        

    const [firstName, setFirstName] = useState('')
    const [userName, setUserName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmailId] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const history = useHref()
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const user = {firstName, lastName, email,userName,password,phoneNumber}

        if(id){
            
            
            updateUser(user,id).then((response) => {
                toast.success("user updated successfully!!")
            }).catch(error => {
                console.log(error)
            })

        }else{
        
            signUp(user).then((response) =>{
                toast.success("user createdd successfully!!")

                console.log(response.data)
    
                history.push('/user/dashboard');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }
    const resetData=()=>{
       

            console.log("clicked");

        
    }

   
    useEffect(() => {

        
        getUserByID(id).then((response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.email)
            setUserName(response.data.userName)
            setphoneNumber(response.data.phoneNumber)
            setPassword(response.data.password)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h5 className = "text-center">Update Employee</h5>
        }else{
            return <h5 className = "text-center">Add Employee</h5>
        }
    }
    
    
    return(
        <>
        <CustomNavbar></CustomNavbar>
        

        <Container>

<Row className="mt-4">
 <Col sm={{size: 6,offset: 3}}>
 <Card

 >
     <CardHeader>
     <h1>{title()}</h1>
        </CardHeader>
     <CardBody>

         <Form >

         <FormGroup>
                 <Label for="userName">
                     userName
                 </Label>
                 <Input
                     id="userName"
                     name="name"
                     placeholder="username"
                     type="text"
                     value = {userName}
                     onChange = {(e) => setUserName(e.target.value)}
                    
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
                     value = {firstName}
                     onChange = {(e) => setFirstName(e.target.value)}
                     
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
                     value = {lastName}
                     onChange = {(e) => setLastName(e.target.value)}
                     
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
                     value = {email}
                     onChange = {(e) => setEmailId(e.target.value)}
                     
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
                     value = {password}
                     onChange = {(e) => setPassword(e.target.value)}
                    
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
                     value = {phoneNumber}
                 onChange = {(e) => setphoneNumber(e.target.value)}
                    
                 />
             </FormGroup>
             <Container className="text-center">
                 <Button color="success" onClick = {(e) => saveOrUpdateEmployee(e)}> Add</Button>

                 
                 <Button color="secondary" onClick={resetData} type="reset" className="ml-4"
                   style = {{marginLeft:"10px"}}> cancel</Button>

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

export default AddUser