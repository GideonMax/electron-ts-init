let fs=require('fs');
let Path=require('path')
function EditRecursively(Directory){
    while(true){
        let dirent=Directory.readSync();
        if(dirent===null)return;
        let path=Path.join(Directory.path,dirent.name);
        if(dirent.isDirectory())EditRecursively(fs.opendirSync(path));
        if(dirent.isFile()){
            if(path.substr(path.length-2)=="js"){
                let content= fs.readFileSync(path,'utf-8');
                content=content.replace(/Object\.defineProperty\(exports, *\"__esModule\", *{ *value: *true *}\);(\r\n|\n)/g,"");
                fs.writeFileSync(path,content,{encoding:'utf-8'});
            }
        }
    }
}

let dir=fs.opendirSync("./build",{encoding:'utf-8'});
EditRecursively(dir)