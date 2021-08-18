let cp=require('child_process');
let fs=require('fs')
/**
 * 
 * @param {string|null} scope 
 */
module.exports=function NpmInit(scope){
    if(fs.existsSync("./package.json"))return;
    try{

        if(scope===null){
            cp.execSync("npm init",{stdio:"inherit"});
        }
        else{
            cp.execSync("npm init --scope="+scope,{stdio:"inherit"});
        }
    }
    catch(err){
        console.error(err);
        process.kill;
    }
}