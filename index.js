#!/usr/bin/env node

let fs = require('fs');
let fig=require('figlet');
let chalk=require('chalk');

let parse=require('./lib/ParseArguments');
let GitSetup=require("./lib/GitSetup");
let NpmInit=require("./lib/NpmInit");

async function run(){
    let args=parse();
    let font=(args.ghost?"Ghost":"Standard");
    console.log(chalk.rgb(220,0,255)(fig.textSync("ETI",font)));
    if(args.git)GitSetup();
    NpmInit(args.scope);
}
run();