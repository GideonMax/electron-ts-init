#!/usr/bin/env node

let fs = require('fs');
let fig=require('figlet');
let chalk=require('chalk');

let parse=require('./lib/ParseArguments');
let GitSetup=require("./lib/GitSetup");
let NpmInit=require("./lib/NpmInit");
let InstallDependencies=require("./lib/InstallDependencies");
const ModifyPackageJson = require('./lib/ModifyPackageJson');
const CopyFiles = require('./lib/CopyFiles');
async function run(){
    let args=parse();
    let font=(args.ghost?"Ghost":"Standard");
    console.log(chalk.rgb(220,0,255)(fig.textSync("ETI",font)));
    if(args.git){
        console.log(chalk.black.bgMagentaBright("Performing git setup"));
        GitSetup();
    }
    if(!fs.existsSync("./package.json")){
        console.log(chalk.black.bgMagentaBright("Running npm init"));
        NpmInit(args.scope);
    }
    console.log(chalk.black.bgMagentaBright("Installing dependencies"));
    InstallDependencies();
    ModifyPackageJson();
    CopyFiles();
}
run();