import { userlistfailure, userliststart, userlistsuccess } from "../Action_t/Action_t"

export const getuserlist = (page=1)=>async dispatch =>{
    dispatch(userliststart())
    try{
        const res = await fetch(`https://reqres.in/api/users?page=${page}`)
        const data = await res.json();
        dispatch(userlistsuccess(data.data))
    }catch(error){
        dispatch (userlistfailure(error))
    }
}