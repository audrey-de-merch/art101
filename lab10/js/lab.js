/** 
 * Author: Audrey DeMerchant
 * Date: May 12, 2025 
 * 
*/
// button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// click listener 

$('#button-challenge').click(function(){
  $("#challenge").toggleClass("special");


});