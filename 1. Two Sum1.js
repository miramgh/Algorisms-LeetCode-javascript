// THIS SOLUTION RUNS IN O(n) Time and Space which is more optimal than double for loop


var twoSum = (nums , target)=>{
    // initialize the hash table "js objecy " to store the numbers 
   var  hashTable = {}
   // go through the array 
   for(var i = 0 ; i< nums.length ; i++){ 
       // Code that applying the equation target- firstNumber = secondNumber 
       // target = 9  | firstNumber = i | the index of the second number should be j 
       // if the secondNumber is present in the hash plz return it 
        if (target - nums[i] in hashTable ){
            //return [target- nums[i] , nums[i]] this went wrong as it needed the indecies
            // j is the index of the seconedNumber 
            let j = nums.indexOf(target- nums[i])
            return [j , i]
        }else {
            // add the firstNumber to the js object 
           hashTable[nums[i]] = 'true'
        }
   }return []
   
};
//Conclusion : we loop through the array - add all the possible first numbers - check to see if a second number is present in the hash 
