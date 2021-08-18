const fs=require('fs');

let text= fs.readFileSync("./package.json",'utf-8')
let json= JSON.parse(text);
delete json["build"];
delete json["devDependencies"];
delete json["scripts"];
json["main"]="./index.js";
fs.writeFileSync("./build/package.json",JSON.stringify(json));