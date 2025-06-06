/** 
 * Author: Audrey DeMerchant
 * Date: Jun 5, 2025 
 * 
*/
// Define the API endpoint
$.ajax({
  url: "https://api.allorigins.win/get?url=https://xkcd.com/info.0.json",
  type: "GET",
  dataType: "json",
  success: function (response) {
    const data = JSON.parse(response.contents); // this is the actual XKCD data
    console.log("Success!", data);

    let comicHTML = 
    "<h3>" + data.title + "</h3>" +
    "<img src='" + data.img + "' alt='" + data.alt + "' title='" + data.alt + "'>" +
    "<p>" + data.alt + "</p>";

    $("#output").html(comicHTML);
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log("Error:", textStatus, errorThrown);
    $("#output").html("<p>Could not load XKCD comic.</p>");
  }
});
