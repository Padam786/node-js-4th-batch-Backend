
const fs = require('fs');

fs.readFile("students.json", { encoding:"utf-8"},  (err, data) => {

  if (err)  console.error(err);

console.log(data);
  //change this object 
  const student  = JSON.parse(data);
  student.name = "pratik"


  fs.writeFile("students.json", JSON.stringify(student) , (err) => {
    if (err) console.error(err);
    console.log("file updated successfully")  ; 
  })

})

console.log("hello world")