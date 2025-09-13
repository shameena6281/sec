console.log("===HOUR 1:JSON BASICS");
let student={
    name:"asha",
    age:21,
    marks:[85,90,78]
};
let jsonString=JSON.stringify;(student);
console.log("JSON STRING:",jsonString);
let parsedobj = JSON.parse(jsonString);
console.log("parsed object:",parsedobj);