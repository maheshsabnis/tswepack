class Category {
    constructor(
        public CategoryId:number,
        public CategoryName:string,
        public BasePrice:number
    ){}
}
class DataAccess {
    getCategories():Promise<Array<Category>> {
        return new Promise<Array<Category>>((resolve,reject)=>{
            let http = new XMLHttpRequest();
            http.onload=()=>{
                resolve(http.response);
            };

            http.onerror=()=>{
                reject("Some error occurred");
            };

            http.open("GET","https://catprdapi.azurewebsites.net/api/Category");
            http.send();
        });
    }   
}


let ds = new DataAccess();

ds.getCategories().then((response:Array<Category>)=>{
    console.log(response);
}).catch((error:any)=>{
    console.log(`Some Error Has Occurred ${error}`);
});