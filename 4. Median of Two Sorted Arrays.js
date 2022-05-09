/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // merging the 2 arrays 
    let mergedArray = [...nums1 , ...nums2 ]
    
    // sort the merged array 
    mergedArray.sort((a,b )=>{return a-b})
    
    console.log(mergedArray)
    // isEven  | isOdd 
    
    if (mergedArray.length % 2 == 0 ){
        
      const sum =   mergedArray[Math.ceil(mergedArray.length / 2)] +                                             mergedArray[Math.ceil(mergedArray.length / 2) -1] 
      //console.log(sum )
      return sum / 2
      
    }else{
       return mergedArray[Math.ceil(mergedArray.length / 2 - 1)]
    }
    
    
};
