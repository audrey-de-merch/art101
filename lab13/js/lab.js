/** 
 * Author: Audrey DeMerchant
 * Date: May 26, 2025 
 * 
*/

$(document).ready(function () {
  let oneLongString = "";

  for (let i = 1; i <= 200; i++) {
    let str = "";

    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    if (i % 7 === 0) str += "Boom";

    if (str === "") {
      str = i; 
    }

    oneLongString += str + "<br>";
  }

 
  $("#output").html(oneLongString);
});
