import { ADD_ARTICLE } from './../constants/action-types';
export function addArticle(payLoad: string){
 console.log("addArticle",payLoad)  
 return {
    type: ADD_ARTICLE,
    payLoad
 }
}