//1
let site = {
  siteName: "W3Docs",
  bookName: "Javascript",

  get fullName() {
    return `Welcome to ${this.siteName}, ${this.bookName} book`;
  },

  set fullName(value) {
    [this.siteName, this.bookName] = value.split(" ");
  }
};

console.log(site.fullName);

//2
site.fullName = "W3 CSS";
console.log(site.siteName); 
console.log(site.bookName); 

//3

Object.defineProperty(site, "getFullName", {
    get : function () {
        return `Welcome to ${this.siteName}, ${this.bookName} book`;
    }
});

Object.defineProperty(site, "changeFullName", {
    set : function (value) {
        [this.siteName, this.bookName] = value.split(" ");
    }
});

site.changeFullName = "W3 CSS";
console.log(site.fullName);
console.log(site.siteName); 
console.log(site.bookName); 


