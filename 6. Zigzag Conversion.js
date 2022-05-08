/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) {return s }
    let res = []
    
    // create 2D array of length = numRows
    for(let i = 0 ;i < numRows ; i++){
        res[i] = []
    }
    
    let row =0
    
    let directionIndex = -1
    for (let character in s ){
        //console.log(s)
        //console.log(s[character])
        if (row ==  0 || row == numRows -1){
            directionIndex *= -1
        }
         console.log(row)
       res[row].push(s[character])
       
        row+= directionIndex
    }
    
   let str = ''
    for (let i = 0 ; i <res.length ; i++){
        // concat all the elements in the array 
       // then append them to a string  
       str +=  res[i].join('')
        console.log(str)
        console.log(i)
    }
   return str
};
