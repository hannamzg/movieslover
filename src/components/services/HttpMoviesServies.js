//npm i axios
/* import axios from "axios";
 */
 import axios from "axios";

/* 
let config = {
  apiUrll: "http://www.omdbapi.com/?"
}  */

/* axios.defaults.baseURL = config.apiUrll;

  export function setCommonHeaderr(headerName,value){
  axios.defaults.headers.common[headerName]=value;
}   */

const httpServicee = {
  get: axios.get,
   post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,  
  axios,
};

export default httpServicee; 
 



