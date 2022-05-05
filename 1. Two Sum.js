/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 */
/**
 * THIS IS NOT OPTIMAL => O(n)^2 as we used a double for loop 
 * THERE IS 2 ANOTHER SOLUTIONS USING (HASH TABLE "JS OBJECT - SORTING THE ARRAY )
 */
var twoSum = function(nums, target) {
    // We wanna go to the before last value in nums 
    for(var i = 0 ; i< nums.length -1 ; i++){
        // Iterate throgh all the rest of the numbers in the array 
       for (var j = i+1 ; j<nums.length ; j++){
           // Check the condition givin 
           if (nums[i] + nums[j]== target ){
               // if true return the pair 
               return [i , j]
           }
       }
    }
};
