/** 
 * Author: Audrey DeMerchant
 * Date: May 19, 2025 
 * 
*/

let variants = ["Hoth", "Tatooine", "Naboo", "Alderaan","Coruscant", "Kamino", "The Death Star"];

function getPlanet(num) {
  let remainder = num % 7;
  let planet = variants[remainder];

  // Append the text
  $("#output").append(" you are from " + planet + ".<br>");

  // Define background image paths
  let backgroundImages = {
    "Hoth": "url('img/hoth.png')",
    "Tatooine": "url('img/tatooine.png')",
    "Alderaan": "url('img/alderaan.png')",
    "Naboo": "url('img/naboo.png')",
    "Coruscant": "url('img/coruscant.png')",
    "Kamino": "url('img/Kamino.png')",
    "The Death Star": "url('img/thedeathstar.png')"
    
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

  if (data && dataLength <= 15) {
    $("#output").append(data);
    getPlanet(dataLength);
    console.log("There is some data");
  } else if (dataLength >= 15) {
    $("#output").append("Just enter your first name<br>");
  }
}

$(document).ready(function() {
  $("#button").click(function() {
    whatHappensOnClick();
  });
});

