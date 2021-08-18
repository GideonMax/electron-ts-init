var fs = require('fs');
var path = require('path');

/**
 * 
 * @param {string} src 
 * @param {string} destination 
 * @param {string} path 
 */
function CopyFiles(src,destination,offsetPath="./"){
    let dirs=fs.readdirSync(path.join(src,offsetPath));
    dirs.forEach(dir=>{
        let newPath=path.join(offsetPath,dir);
        if(fs.lstatSync(path.join(src,newPath)).isDirectory()){
            fs.mkdirSync(path.join(destination,newPath));
            CopyFiles(src,destination,newPath);
        }
        else{
            fs.copyFileSync(path.join(src,newPath),path.join(destination,newPath));
        }
    })
}


module.exports=()=>{
    CopyFiles(path.join(__dirname,"../AssetFiles/FilesToCopy"),"./")   
}