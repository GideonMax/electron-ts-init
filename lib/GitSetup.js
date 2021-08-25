let fs=require('fs');
let path=require('path');

/**
 * modifies an already existing gitignore, I will make this better in the future
 * @param {string} Text 
 */
function ModifyGitIgnore(Text){
    let Content=fs.readFileSync(".gitignore",'utf-8').split(/(\r\n|\n)/g);
    let LinesToAppend=Text.split(/(\r\n|\n)/);
    
    fs.appendFileSync(".gitignore","\n"+LinesToAppend.filter(str=>str==""||!Content.includes(str)).join("\n"))
}

module.exports=function SetupGit(){
    let Text=fs.readFileSync(path.join(__dirname,"../AssetFiles/TemplateIgnore"),'utf-8');
    if(!fs.existsSync(".gitignore")){
        fs.writeFileSync(".gitignore",Text);
    }
    else{
        ModifyGitIgnore(Text);
    }
}