let inq = require("inquirer");



module.exports = {
    /**
     * 
     * @returns {Promise<[string,string]>}
     */
    InquireAppNameAndId: async () => {
        /**
         * @type {string}
         */
        let nameAnswer = (
            await inq.prompt([
                {
                    name: "productName",
                    type: "input",
                    message: "Please enter application name",
                    validate: val => {
                        if (val.length) {
                            return true;
                        }
                        return "You have not entered an application name, please enter one";
                    }
                }
            ]))["productName"];
        let IdAnswer = (
            await inq.prompt([
                {
                    name: "productId",
                    type: "input",
                    message: "Please enter application Id",
                    default: "com.electron."+nameAnswer.split(" ").join("-")
                    ,
                    /**
                     * 
                     * @param {string} val 
                     * @returns 
                     */
                    validate: val => {
                        if (val.length) {
                            if(val.includes(" ")){
                                return "App Id must not have any spaces";
                            }
                            if(!val.includes(".")){
                                return "App Id should include periods, please read https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-102070";
                            }
                            return true;
                        }
                        return "You have not entered an application Id, please enter one";
                    }
                }
            ])
        )["productId"];
        return[nameAnswer,IdAnswer];
    }
}