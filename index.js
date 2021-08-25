#!/usr/bin/env node

let fs = require('fs');
let fig = require('figlet');
let chalk = require('chalk');

const IsGoodNodeVersion=require("./lib/IsGoodNodeVersion");
let parse = require('./lib/ParseArguments');
let GitSetup = require("./lib/GitSetup");
let NpmInit = require("./lib/NpmInit");
let InstallDependencies = require("./lib/InstallDependencies");
const ModifyPackageJson = require('./lib/ModifyPackageJson');
const CopyFiles = require('./lib/CopyFiles');


let titleChalk=chalk.black.bgMagentaBright;
let mainChalk=chalk.whiteBright;
let secondaryChalk=chalk.bgBlackBright;

let instructions = mainChalk("Thanks for using electron-ts-init (eti)\r\n" +
    "to package your project into an installer, run ")+secondaryChalk("npm run package")+
    mainChalk(", the installer will be found in the ")+secondaryChalk("dist")+mainChalk(" folder")+"\r\n"+
    mainChalk("to execute the project regularly, run ")+secondaryChalk("npm start")+"\r\n"+
    mainChalk("If the scripts don't seem to work, make sure that ")+secondaryChalk("ignore-scripts")+
    mainChalk(" is set to false by running ")+secondaryChalk("npm config set ignore-scripts false")+
    mainChalk(" and then reinstalling the packages");
async function run() {
    if(!IsGoodNodeVersion()){
        console.error("MUST HAVE NODE VERSION 12.12.0 OR ABOVE");
    }
    let args = parse();
    let font = (args.ghost ? "Ghost" : "Standard");
    console.log(chalk.rgb(220, 0, 255)(fig.textSync("ETI", font)));
    if (args.git) {
        console.log(titleChalk("Performing git setup"));
        GitSetup();
        console.log(titleChalk("Done performing git setup"));
    }
    if (!fs.existsSync("./package.json")) {
        console.log(titleChalk("Running npm init"));
        NpmInit(args.scope);
    }
    console.log(titleChalk("Installing dependencies"));
    InstallDependencies();

    console.log(titleChalk("Modifying package.json file"));
    await ModifyPackageJson();
    console.log(titleChalk("package.json has been properly set up\n"));
    console.log(titleChalk("Copying files"));
    CopyFiles();
    console.log(titleChalk("DONE"));
    console.log(instructions);
}
run();