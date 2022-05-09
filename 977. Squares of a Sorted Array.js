/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squaredEl = []
    
   // Iterator Function map( )  : apply function to each element in the array 
  nums.map((el , index  ) =>{
       console.log( el , index )
     return squaredEl.push(el*el )
   })
    // Sort the returned array 
  // Mutator Function : mutate the original array
   return squaredEl.sort((a, b )=> {return a - b })
};
