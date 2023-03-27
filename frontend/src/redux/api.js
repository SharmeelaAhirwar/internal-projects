import axios from "axios";

export const loadUserApi=async()=>{
 
 await axios.get("http://localhost:8080/user/allUser")
}






// export const BASE_URL= "http://localhost:8080";


// export const myAxios=axios.create({
//     baseURL: BASE_URL,
// });