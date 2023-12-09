import axios from "axios";

let user_info = JSON.parse(localStorage.getItem("user"))

const authFetch =axios.create({
    baseURL:"https://real-pear-fly-kilt.cyclic.app",
    headers:{
        Accept :'Application/json',
        Authorization :"bearer " + user_info?.jwtToken
    }
})

export default authFetch