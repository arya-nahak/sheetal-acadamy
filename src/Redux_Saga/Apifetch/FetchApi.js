// const url = "https://jsonplaceholder.typicode.com/users";
// const url = "http://www.omdbapi.com/?i=tt3896198&apikey=3c340be0";
// const url = "http://www.omdbapi.com/?s=har&apikey=3c340be0&type=movie&page=1";
const url = "https://fakestoreapi.com/products";


const FetchApi = () => {
  return fetch(url, {
    method: "GET",
  })
  .then((response)=>response.json())
  .catch((error)=>{
    throw error
  })

};

export default FetchApi;
