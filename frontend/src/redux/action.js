
import * as types from "./actionType"

export const loadUsersStart=()=>({
    type:types.LOAD_USERS_START
})

export const loadUsersSucces=(users)=>({
    type:types.LOAD_USERS_SUCCESS,
    payload:users
})

export const loadUsersError=(error)=>({
    type:types.LOAD_USERS_ERROR,
    payload:error
})


export const createUsersStart=(users)=>({
    type:types.CREATE_USERS_START,
    payload:users
})

export const createUsersSucces=()=>({
    type:types.CREATE_USERS_SUCCESS
    
})

export const createUsersError=(error)=>({
    type:types.CREATE_USERS_ERROR,
    payload:error
})



export const deleteUsersStart=(id)=>({
    type:types.DELETE_USERS_START,
    payload:id
})

export const deleteUsersSucces=(id)=>({
    type:types.DELETE_USERS_SUCCESS,
    payload: id
    
})

export const deleteUsersError=(error)=>({
    type:types.DELETE_USERS_ERROR,
    payload:error
})


export const updateUsersStart=(userInfo)=>({
    type:types.UPDATE_USERS_START,
    payload:userInfo
})

export const updateUsersSucces=()=>({
    type:types.UPDATE_USERS_SUCCESS,
   
})

export const updateUsersError=(error)=>({
    type:types.UPDATE_USERS_ERROR,
    payload:error
})


