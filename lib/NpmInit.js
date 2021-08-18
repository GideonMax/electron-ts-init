let cp=require('child_process');
let fs=require('fs');
let chalk=require('chalk');
/**
 * 
 * @param {string|null} scope 
 */
module.exports=function NpmInit(scope){
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
        process.kill();
    }
}