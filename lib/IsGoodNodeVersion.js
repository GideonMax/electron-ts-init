module.exports=()=>{
    let ver=process.versions.node.split(".").map(parseInt);
    if(ver[0]>12)return true;
    if(ver[0]<12)return false;
    return ver[0]>=12;
}