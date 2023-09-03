class MyStack {
    queue1:number[]=[];
    queue2:number[]=[];
    constructor() {
    }

    push(x: number): void {
        this.queue1.push(x)
    }

    pop(): number {
        while(this.queue1.length>1){
            this.queue2.push(this.queue1.shift() as number);
        }
        let num=this.queue1.shift();
        [this.queue1, this.queue2]=[this.queue2,this.queue1];
        return num;
    }

    top(): number {
        while(this.queue1.length>1){
            this.queue2.push(this.queue1.shift() as number)
        }
        let num=this.queue1[0];
        this.queue2.push(this.queue1.shift() as number);
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return num;
        
    }

    empty(): boolean {
        return this.queue1.length===0;
    }
}
