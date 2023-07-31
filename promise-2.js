var Category = /** @class */ (function () {
    function Category(CategoryId, CategoryName, BasePrice) {
        this.CategoryId = CategoryId;
        this.CategoryName = CategoryName;
        this.BasePrice = BasePrice;
    }
    return Category;
}());
var DataAccess = /** @class */ (function () {
    function DataAccess() {
    }
    DataAccess.prototype.getCategories = function () {
        return new Promise(function (resolve, reject) {
            var http = new XMLHttpRequest();
            http.onload = function () {
                resolve(http.response);
            };
            http.onerror = function () {
                reject("Some error occurred");
            };
            http.open("GET", "https://catprdapi.azurewebsites.net/api/Category");
            http.send();
        });
    };
    return DataAccess;
}());
var ds = new DataAccess();
ds.getCategories().then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log("Some Error Has Occurred ".concat(error));
});
