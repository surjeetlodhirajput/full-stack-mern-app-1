import axios from "axios";
const url="http://localhost:5000/user";
export const findUser=(email)=>axios.get(`${url}/${email}`);
export const addUser=(user)=>axios.post(url,user);
