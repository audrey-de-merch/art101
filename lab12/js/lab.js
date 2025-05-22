/** 
 * Author: Audrey DeMerchant
 * Date: May 19, 2025 
 * 
*/

let variants = ["Hoth", "Tatooine", "Naboo", "Alderaan"];

function getPlanet(num) {
  let remainder = num % 4;
  let planet = variants[remainder];

  // Append the text
  $("#output").append(" you are from the planet " + planet + ".<br>");

  // Define background image paths
  let backgroundImages = {
    "Hoth": "url('img/hoth.png')",
    "Tatooine": "url('img/tatooine.png')",
    "Alderaan": "url('img/alderaan.png')",
    "Naboo": "url('img/naboo.png')",
    
  };

  // Apply the background image
  $("#output").css({
    "background-image": backgroundImages[planet],
    "background-size": "cover",
    "background-position": "center",
    "color": "white",
    "padding": "0px"
  });
}

function whatHappensOnClick() {
  console.log("click");

  let data = $("#input").val();
  let dataLength = data.length;

  if (data && dataLength <= 50) {
    $("#output").append(data);
    getPlanet(dataLength);
    console.log("There is some data");
  } else if (dataLength > 50) {
    $("#output").append("Too much of a name<br>");
  }
}

$(document).ready(function() {
  $("#button").click(function() {
    whatHappensOnClick();
  });
});

