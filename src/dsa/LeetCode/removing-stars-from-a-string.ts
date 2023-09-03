function removeStars(s: string): string {
    let stack:string[]=[];
    for(const k of s){
        if(k==='*'){
            stack.pop();
        }else{
            stack.push(k);
        }
    }
    return stack.reduce((t,v)=>t+v,"");
};