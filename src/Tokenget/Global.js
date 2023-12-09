import axios from "axios";

let user_info = JSON.parse(localStorage.getItem("user"))
axios.defaults.headers.common['Accept'] ='Application/json'
axios.defaults.headers.common['Authorization'] = "bearer " + user_info?.jwtToken