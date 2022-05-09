 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
   
   // HIGHER ORDER FUNCTION => FUNCTION THAT RETURN ANOTHER FUNCTION
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
     let left = 1 // start from the first version 
     let right = n  // till the end 
     
     // Loop over them 
     while (left < right){
         // Check the middle version 
          let  mid = left + Math.floor((right-left)/2)
          // if its bad so the right pointer should move to the middle 
          // with each iteration we calculate the middle again 
          // if its not bad move the left pointer to the middle 
          if(isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
     }
        return left
    };
};
