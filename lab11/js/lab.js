/** 
 * Author: Audrey DeMerchant
 * Date: May 15, 2025 
 * 
*/
$(document).ready(function() {

  // Function to sort the words in a string alphabetically
  function sortString(inputString) {
    return inputString.split("").sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()) || a.localeCompare(b)
  ).join("");
  }

  $("#submit").click(function() {
    const userName = $("#user-name").val();

    const nameSorted = sortString(userName);

    // Append the sorted result to the #output div
    $("#output").append('<div class="text"><p>' + nameSorted + '</p></div>');
  });
})