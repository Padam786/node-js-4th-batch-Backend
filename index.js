
const fs = require('fs');

const file ="hello";
const data = " hey i am padam"

// fs.writeFileSync(file,data)
//async write file 

// fs.writeFile(file,data, (err,data)=> {
//    if (err) console.error(err);
// })

fs.readFile(file, {
  encoding: 'utf8',

}, callback)



function callback (err,data) {
   if (err) console.error(err);
   console.log(data);


}


console.log(" i am last please console log me")