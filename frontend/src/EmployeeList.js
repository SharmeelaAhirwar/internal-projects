import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AutoSizer, Column, Table } from "react-virtualized";
import { loadUsersStart } from "./redux/action";
import 'react-virtualized/styles.css';
import './Emp.css';


function EmployeeList() {
    const [employees, setEmployees] = useState([]);
  
    const dispatch=useDispatch();
   
   

   

  const {users}=useSelector(state=>state.data)
   useEffect(()=>{
    dispatch(loadUsersStart());
   },[])
   
  
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowCount={users.length}
            rowGetter={({ index }) => users[index]}
            rowHeight={20} // set the row height as per your need
            headerHeight={30} // set the header row height as per your need
            className="my-table"
           
          >
            <Column label="ID" dataKey="id" width={100}   />
            <Column label="firstName" dataKey="firstName" width={200} />
            <Column label="lastName" dataKey="lastName" width={200} />
            <Column label="phoneNumber" dataKey="phoneNumber" width={200} />
            <Column label="Password" dataKey="password" width={100} />
            <Column label="userName" dataKey="userName" width={200} />
            <Column label="Email" dataKey="email" width={200} />
          </Table>
        )}
      </AutoSizer>
    );
  }
  

  export default EmployeeList;
  