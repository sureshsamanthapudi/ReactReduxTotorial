import { ADD_ARTICLE, FETCH_GITHUB_DATA } from './../constants/action-types';
export function addArticle(payLoad: string){
 console.log("addArticle",payLoad)  
 return {
    type: ADD_ARTICLE,
    payLoad
 }
}

export const fetchData = (data: any) => {
   return {
     type: FETCH_GITHUB_DATA,
     data
   }
 };

 const apiUrl = 'https://api.github.com/users/KrunalLathiya';
 export const fetchGithubData1 = async () => {
   return async (dispatch: any) => {
     return await fetch(apiUrl)
       .then( (response: any) => {
         dispatch(fetchData(response.data))
       })
       .catch(error => {
         throw(error);
       });
   };
 };

 export function fetchGithubData() {
  console.log("fetchGithubData called")
  return async (dispatch: any) => {
   
    return await fetch(apiUrl)
       .then( (response: any) => {
         response.json().then( (res:any) => {
          dispatch(fetchData(res))
         })
         
       })
       .catch(error => {
         throw(error);
       });
};
 }


export async function getUser(name: string){



   const myHeaders = {
     
   }
   const url = 'https://gist.githubusercontent.com/sureshsamanthapudi/aa1e876d59c851475285f6be55a7310d/raw/154e0b2e4813800b983434fa20c9d7f9947700ea/users.json'
   let response = await fetch(url, {
     method: 'GET',
     headers: myHeaders,
     mode: 'cors',
     cache: 'default',
   });
   
   if (response.ok) { 
       let json = await response.json();
       return json;
     } else {
       alert("HTTP-Error: " + response.status);
     }
   }