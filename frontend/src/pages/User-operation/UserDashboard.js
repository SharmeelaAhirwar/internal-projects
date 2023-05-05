import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Input } from "reactstrap";
import CustomNavbar from "../../components/CustomNavbar";
import { allUser, deleteUser } from "../../services/UserService";
import { Link, NavLink, NavLink as ReactLink, useHref, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import exportFromJSON from 'export-from-json'
import { useDispatch, useSelector } from "react-redux";

import { deleteUsersStart, loadUsersStart } from "../../redux/action";
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';
import { upload } from "@testing-library/user-event/dist/upload";





const UserDashboard = () => {

  const navigate = useNavigate();
  const addUser = () => navigate('/users/add');

  const uploadFile=()=>navigate('/users/upload');





  // const [users, setUser] = useState([])

  // useEffect(() => {
  //   allUser().then((response) => {
  //     setUser(response.data)
  //    localStorage.setItem("users",response.data)
  //     console.log(response.data);
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }, [])
  const dispatch = useDispatch();


  const { users } = useSelector(state => state.data)
  useEffect(() => {
    dispatch(loadUsersStart());
  }, [])
  const download = () => {
    allUser().then((response) => response.data).then((res) => {
      const fileName = 'download'
      const exportType = exportFromJSON.types.csv
      exportFromJSON({ data: res, fileName, exportType })

    })

  }



  const deleteUserById = (userId) => {

    // deleteUser(userId).then((response) =>{
    //   toast.success("user deleted successfully!!")

    // console.log(response);

    // }).catch(error =>{
    //     console.log(error);
    // })

    // react-saga
    dispatch(deleteUsersStart(userId));




    

  



  }
  return (
    <div>

      {/* <CustomNavbar></CustomNavbar> */}
      <Card
        color="info"
        className="text-center">
        <CardBody>
          <h5>welcome to UserDashboard</h5>
        </CardBody>
      </Card>




      <h2 className="text-center">User Details</h2>

      <button className="btn btn-danger"
        onClick={addUser}
        style={{ textAlign: 'center' }}
      > Add User</button>

<button className="btn btn-primary"
        onClick={uploadFile}
        style={{ textAlign: 'center',marginLeft:'10px' }}
      > Upload Resume</button>

    






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


                    <Link className="btn btn-info " to={`/users/edit/${user.id}`}>update</Link>
                    <button className="btn btn-danger" onClick={() => deleteUserById(user.id)}
                      style={{ marginLeft: "10px" }}> Delete</button>

                  </td>
                </tr>
            )

          }




        </tbody>
      </table>
      <div className="text-center">
        <h3 >download user data</h3>
        <button className="btn btn-danger" onClick={download}>download</button>
      </div>

    </div>


  );

}




export default UserDashboard