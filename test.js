let arr = [1,2,3,5]

if(arr.every((itm)=>{
    if(typeof(itm)=="number"){
        return true;
    }
    else{
        return false;
    }
})){
    console.log("yes")
}
else{
    console.log("No")
}