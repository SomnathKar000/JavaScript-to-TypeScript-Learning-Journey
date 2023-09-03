function calPoints(operations: string[]): number {
    let arr:number[]=[];
        for(const k of operations){
            if(k==="+"){
                let num=arr[arr.length-1]+arr[arr.length-2];
                arr.push(num);
            }else if(k==="C"){
                let num= arr.pop();
            }else if(k==="D"){
                let num=arr[arr.length-1];
                arr.push(num*2)
    
            }else{
                let num= Number(k);
                arr.push(num);
            }
        }
        return arr.reduce((t,v)=>t+v,0);
    };