console.log("Hello");

const fs= require('fs');
fs.writeFile('output.txt','writing file',(err)=>{
  if(err) console.log('Error occure');
  else console.log('File written successfully');
});
