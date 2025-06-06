/** 
 * Author: Audrey DeMerchant
 * Date: Jun 2, 2025 
 * 
*/


let variants = ["Hoth", "Tatooine", "Naboo", "Alderaan","Coruscant", "Kamino"];
function getPlanet(num) {
  let remainder = num % 6;
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

  };

  // Apply the background image
  $("#output").css({
    "background-image": backgroundImages[planet],
    "background-size": "cover",
    "background-position": "center",
    "color": "white",
    "padding": "0px"
  });
  getPlanetInfo(planet);
}
function whatHappensOnClick() {
  console.log("click");
  $("#output").html("");        // Clear previous results
  $("#planetInfo").html("");

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

function getPlanetInfo(planetName, url = "https://swapi.online/api/planets") {
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    success: function(data) {
      const planets = data; 
      const planet = planets.find(p => p.name.toLowerCase() === planetName.toLowerCase());

      if (planet) {
        const info = `
          <h2>${planet.name}</h2>
          <p><strong>Climate:</strong> ${planet.climate}</p>
          <p><strong>Terrain:</strong> ${planet.terrain}</p>
          <p><strong>Gravity:</strong> ${planet.gravity}</p>
          <p><strong>Population:</strong> ${planet.population}</p>
          <p><strong>Orbital Period:</strong> ${planet.orbital_period}</p>
          <p><strong>Rotation Period:</strong> ${planet.rotation_period}</p>
        `;
        $('#planetInfo').html(info);
      } else {
        $('#planetInfo').html(`<p>Could not find information for ${planetName}.</p>`);
      }
    },
    error: function() {
      $('#planetInfo').html('<p>Failed to fetch planet info.</p>');
    }
  });
}

