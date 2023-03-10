import axios from 'axios';
import { myAxios } from './Helper';

 export const signUp=(user)=>{
    return myAxios
    .post('/user/create',user)
    .then((response)=>response.data);

};


export const login=(user)=>{
    return myAxios
    .post('user/login',user)
    .then((response)=>response.data)
}

export const allUser=()=>{
    return myAxios.get('/user/allUser')
    
    // .then((response)=>response.data)
}