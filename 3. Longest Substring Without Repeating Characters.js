/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     // split the string to array of characters 
        let arr = s.split("")

    // initialize a counter to store the max value
        let max = 0;
    // 2 pointers one at the begining and one at the end
        let i = 0
        let j = 0
    // initialize a SET to contain the unique values
        let set = new Set()
        
    // Loop thourgh the array 
    
    while(j < arr.length){
        if (!set.has(arr[j])){
            set.add(arr[j])
            j++
        
            max = Math.max(set.size, max)
        }else {
            set.delete(arr[i])
            i++
        }
        
    }
  
    console.log( max)
    return max
    // if so pop it out if not push it to the set and update the max vlue 
    
    
};
