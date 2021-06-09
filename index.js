// Add your functions here
function map(array, func) {
    let arr = []
    for(let i = 0; i < array.length; i++){
       arr.push(func(array[i]))
    }
    return arr  
}


// function reduce(array, func, value){
//     let accum = value 
//     for(let i = 0; i < array.length; i++){
//       accum = func(array[i], accum) 
//     }
//     return accum 
// } 

function reduce(src, callback, startingValue) {
    let total;
    if (startingValue) {
      total = startingValue;
      for (let i = 0; i < src.length; i++) {
        total = callback(src[i], total);
      }
      return total;
    } else {
      total = src[0];
      for (let i = 1; i < src.length; i++) {
        total = callback(src[i], total);
      }
      return total;
    }
  }