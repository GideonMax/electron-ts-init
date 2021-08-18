let cp = require('child_process');
let devDependencies = ["builder-util", "electron-builder", "copyfiles", "electron", "typescript"];

module.exports = function InstallDependencies() {
    try {
        cp.execSync("npm i --save-dev " + devDependencies.join(" "), { stdio: "inherit" });
    }
    catch (err) {
        console.error(err);
        process.kill();
    }
}