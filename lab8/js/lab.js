/** 
 * Author: Audrey DeMerchant
 * Date: May 2, 2025 
 * 
*/


function everyThird(x){
  return x * 3}

document.writeln("Start counting by threes: ", everyThird(1),", ", everyThird(2),", ...",  "<br/>")


everyThird(20)
array = [ 3, 4, 5, 6]

array.map(everyThird)



var mapResults = array.map(everyThird);

document.writeln("Continue counting: ", mapResults, "<br/>" ) 

array2 = [ 1, 2, 3, 4, 5, 6]
var result = array2.map(function(x) {  
  return x * 2;
})
document.writeln("Now let's count by twos: ", result)