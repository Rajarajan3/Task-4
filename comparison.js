let obj1 = {name:"Person 1", age:5};
let obj2 = {age:5, name:"Person 1"};

var val = obj1.name;
var val1 = obj2.name;
var solu = obj1.age;
var solu1 = obj2.age;
if(val === val1 && solu === solu1){
    console.log("both objects having same properties");
}
