let fs=require('fs');
let path=require('path');

/**
 * modifies an already existing gitignore, I will make this better in the future
 * @param {string} Text 
 */
function ModifyGitIgnore(Text){
    fs.appendFileSync(".gitignore",Text)
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