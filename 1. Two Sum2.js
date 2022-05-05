// This is the WORST SOLUTION but I insisted to solve all the issues and control all the edge cases 


var twoSum = (nums , target)=>{
    // We will sort the array 
  
    // sort mutate the original array so copy the original using spread operator 
    // sort the copied version of the array 
  
   let sortedNums = [...nums]
   
    //the result of sort() alone as it sorts values as string and 1 is less the 2 less than  7  [ 11, 15, 2, 7 ] --- Stupid javascript sorry()
    sortedNums.sort(function(a, b){return a - b}) //[ 2, 7, 11, 15 ] ASSENDING ORDER
    //console.log(sortedNums)
    //console.log(nums)
    
    
     // initialize 2 pointers at the first element and the last element 
    let left = 0
    let right = nums.length -1
   // console.log(right)
    while (left < right) {
        let currentSum = sortedNums[left] + sortedNums[right]
        // console.log(currentSum)
        if( currentSum == target){
           
           //  console.log(nums)
             let firstNumber = nums.indexOf(sortedNums[left])
                let secondNumber = nums.indexOf(sortedNums[right])
            if(firstNumber == secondNumber){
                //this deals with stupid edge case if we have 2 equal elements
                // this function return all the indexes of all occurences of an element 
                const indexOfAll = (arr, val) => arr.reduce((acc, el, i) =>
                                    (el === val ? [...acc, i] : acc), []);
                const indexes = indexOfAll(nums , sortedNums[right])
                 // return the indexes 
               return indexes
            }else {
                 
                console.log(firstNumber,secondNumber )
              return [firstNumber , secondNumber]
            }
          
        }else if ( currentSum < target){
             left +=1
        }else if (currentSum > target ){
             right -=1
        }    
    }       
}
