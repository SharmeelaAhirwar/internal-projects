import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import CustomNavbar from "../../components/CustomNavbar";
import { allUser } from "../../services/UserService";





const UserDashboard = () => {


  const [users, setUser] = useState([])

  useEffect(() => {
    allUser().then((response) => {
      setUser(response.data)
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }, [])
  return (
    <div>

      <CustomNavbar></CustomNavbar>
      <Card
        color="info"
        className="text-center">
        <CardBody>
          <h5>welcome to UserDashboard</h5>
        </CardBody>
      </Card>

       

{/* //           // width: '18rem',
//           marginTop: '20px',



//         }}
//       >
//         {
//           users &&
//           users.map((user, index) => (





//             <CardBody>
//               <CardTitle tag="h5">
//                 Card title
//               </CardTitle>
//               <CardSubtitle
//                 className="mb-2 text-muted"
//                 tag="h6"
//               >
//                 {user.userName}

//               </CardSubtitle>

//               <CardText>
//                 Some quick example text to build on the card title and make up the bulk of the card‘s content.
//               </CardText>
//               <Button
//                 color="primary"
//               >
//                 Edit
//               </Button>
//               {' '}
//               <Button
//                 color="danger"
//               >Delete</Button>


//               {' '}
//             </CardBody>
//           ))
//         }
//       </Card>


//     </>






//   );

// } */}



<h2 className="text-center">User Details</h2>

<button className="btn btn-danger" 
style={{textAlign:'center'}}
onClick={() => this.addUser()}> Add User</button>

<table className="table table-striped">
    <thead>
        <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>UserName</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {
            users.map(
        user =>
                    <tr key={user.id}>
                      <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => this.deleteUser(user.id)}> Delete</button>
                            <button className="btn btn-primary" onClick={() => this.editUser(user.id)}> Edit</button>
                        </td>
                    </tr>
            )
        }
    </tbody>
</table>

</div>


);

}




export default UserDashboard