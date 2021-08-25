let fs = require("fs");
let inq=require('./InquirerQuestions');
let scripts = {
    "compile": "tsc && node ./FixImportTypes.js && copyfiles -f src/html/*.html build/html && copyfiles -f src/css/*.css build/css ",
    "start": "npm run compile && electron --trace-warnings build",
    "package": "npm run compile && node MakePackageFileForBuild.js && electron-builder",
    "postinstall": "electron-builder install-app-deps"
};
/**
 * 
 * @param {string} Name 
 * @param {string} Id 
 */
function MakeBuildSettings(Name,Id){
    return {
        "productName": Name,
        "appId": Id,
        "files": [
          "./*",
          "./**/*"
        ],
        "win": {
          "target": "NSIS"
        },
        "nsis": {
          "runAfterFinish": false
        },
        "directories": {
          "app": "./build"
        }
      };
}


module.exports=async ()=>{
    let AnswersProm=inq.InquireAppNameAndId();
    let Text=fs.readFileSync("./package.json",'utf-8');
    let val=JSON.parse(Text);
    let [name,id]=await AnswersProm;
    let build=MakeBuildSettings(name,id);
    val["scripts"]={ ...( val["scripts"]),...scripts };
    val["build"]=build;
    fs.writeFileSync("./package.json",JSON.stringify(val,null,2));
}