import axios from "axios";
import { Category } from "./category.js";
export  class DataAccess {
    //
    async getCategories():Promise<Array<Category>>{
         let promise = await axios.get( "https://catprdapi.azurewebsites.net/api/Category");
         return promise.data
    }   
}

 function getData(){
    let ds = new DataAccess();
    ds.getCategories().then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    });
}