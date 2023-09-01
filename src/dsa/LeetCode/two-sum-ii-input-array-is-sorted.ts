function twoSum2(numbers: number[], target: number): number[] {
  let map = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    let n = target - numbers[i];
    if (map.has(n)) {
      return [map.get(n)!, i + 1];
    } else {
      map.set(numbers[i], i + 1);
    }
  }
  return [];
}

function twoSum3(numbers: number[], target: number): number[] {
    let i=0,j=numbers.length-1;

    while(i<j){
        
        if(numbers[j]+numbers[i]===target){
            return [i+1,j+1];
        }else if(numbers[j]+numbers[i]>target){
            j--;
        }else{
            i++;
        }
    }

};
