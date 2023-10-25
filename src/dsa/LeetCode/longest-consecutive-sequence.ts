function longestConsecutive(nums: number[]): number {
    let set= new Set<number>(nums);
    let max=0;
    for(let i=0;i<nums.length;i++){
        let num=nums[i];
        if(!set.has(num-1)){
            let count=0;
            while(set.has(num+count)) count++;
            if(count>max)max=count;
        }
    }
    return max;
};