function buildArray(target: number[], n: number): string[] {
    let strArr:string[]=[];
    let index=1;
    for(let i=0;i<target.length;i++){
        while(index!==target[i]){
            strArr.push("Push");
            strArr.push("Pop");
            index++
        }
        if(index===target[i]){
            strArr.push("Push")
            index++;
        }
    }
    return strArr
};