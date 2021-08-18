/**
 * @typedef {Object} Arguments
 * @property {string|null} scope
 * @property {boolean} ghost
 * @property {boolean} git
 */

/**
 * @returns {Arguments}
 */
module.exports= function ParseArguments(){
    /**
     * @type {Arguments}
     */
    let ret={
        scope:null,
        ghost:false,
        git:false
    };
    let Args=process.argv.slice(2);
    for (let arg of Args){
        if(arg=='--git'){
            ret.git=true;
            continue;
        }
        if(arg=='--ghost'){
            ret.ghost=true;
            continue;
        }
        let split=arg.split('=');
        if(split.length!==2){
            throw "Invalid Arguments";
        }
        if(split[0]!=='--scope'){
            throw "Invalid Arguments";
        }
        ret.scope=split[1];
    }
    return ret;
}