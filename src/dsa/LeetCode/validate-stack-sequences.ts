function validateStackSequences(pushed: number[], popped: number[]): boolean {
    let l=0;
    let stack:number[]=[]
    for(const k of pushed){
        stack.push(k)
        while(stack[stack.length-1]===popped[l] && l<popped.length && stack.length!==0){
            stack.pop();
            l++;
        }
    }
    return stack.length===0;
};