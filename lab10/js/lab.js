/** 
 * Author: Audrey DeMerchant
 * Date: May 15, 2025 
 * 
*/
// button to challenge section

function generateRandomText(){
  const text= "In my head, I play a supercut of usAll the magic we gave offAll the love we had and lost And in my head The visions never stop These ribbons wrap me up But when I reach for you, there's just a supercut In your car, the radio up In your car, the radio up We keep tryin' to talk about us I'm someone, you may be my love I'll be your quiet afternoon crush Be your violent overnight rush Make you crazy over my touch But it's just a supercut of us Supercut of us Oh, it's just a supercut of us Supercut of us So I fall Into continents and cars All the stages and the stars I turn all of it to just a supercut Cause in my head When you call Because ours are the moments I play in the dark We were wild and fluorescent Come home to my heart, uh In your car, the radio up In your car, the radio up We keep tryin' to talk about us Slow motion, I'm watchin' our love I'll be your quiet afternoon crush Be your violent overnight rush Make you crazy over my touch But it's just a supercut of us Supercut of us Oh, it's just a supercut of us Supercut of us But it's just a supercut of us Supercut of us Oh, it's just a supercut of us Supercut of us 'Cause in my head In my head, I do everything right When you call, I'll forgive and not fight All the moments I play in the dark Wild and fluorescent Come home to my heart, uh 'Cause in my head (In my head, I do everything right) When you call  Because ours are the moments I play in the dark We were wild and fluorescent Come home to my heart, uh 'Cause in my head (In my head, I do everything right) When you call (When you call, I'll forgive and not fight) Because ours are the moments I play in the dark We were wild and fluorescent Come home to my heart, uh";
  const min = 10;
  const max = 130;
  const randLen = Math.floor(Math.random()* (max-min +1)) + min;

  let randStart = Math.floor(Math.random()* (text.length - randLen + 1))
  
  while (randStart > 0 && text[randStart - 1] !== ' ') {
    randStart--;
  }
  // Set the end index and adjust to nearest whitespace boundary
  let endIdx = randStart + randLen;
  while (endIdx < text.length && text[endIdx] !== ' ') {
    endIdx++;
  }
  // Generate the random text, breaking at the nearest whitespace boundaries
  let selectedText = text.slice(randStart, endIdx).trim();
  // Capitalize the first letter of the selected text
  return selectedText.charAt(0).toUpperCase() + selectedText.slice(1);



}
$("#make-convo").click(function(){
  const newText = generateRandomText();
$("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
//js failed experiment 
$(document).ready(function () {
const text = "In my head, I play a supercut of us All the magic we gave off All the love we had and lost And in my head The visions never stop These ribbons wrap me up But when I reach for you, there's just a supercut In your car, the radio up In your car, the radio up We keep tryin' to talk about us I'm someone, you may be my love I'll be your quiet afternoon crush Be your violent overnight rush Make you crazy over my touch But it's just a supercut of us Supercut of us Oh, it's just a supercut of us Supercut of us So I fall Into continents and cars All the stages and the stars I turn all of it to just a supercut Cause in my head When you call Because ours are the moments I play in the dark We were wild and fluorescent Come home to my heart, uh In your car, the radio up In your car, the radio up We keep tryin' to talk about us Slow motion, I'm watchin' our love I'll be your quiet afternoon crush Be your violent overnight rush Make you crazy over my touch But it's just a supercut of us Supercut of us Oh, it's just a supercut of us Supercut of us But it's just a supercut of us Supercut of us Oh, it's just a supercut of us Supercut of us 'Cause in my head In my head, I do everything right When you call, I'll forgive and not fight All the moments I play in the dark Wild and fluorescent Come home to my heart, uh 'Cause in my head (In my head, I do everything right) When you call Because ours are the moments I play in the dark We were wild and fluorescent Come home to my heart, uh 'Cause in my head (In my head, I do everything right) When you call (When you call, I'll forgive and not fight) Because ours are the moments I play in the dark We were wild and fluorescent Come home to my heart, uh";

let currentIndex = 0;

function generateOrderedText() {
  const min = 10;
  const max = 130;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

  if (currentIndex >= text.length) {
   return null; // end of text
  }

  let endIdx = currentIndex + randLen;

   //Adjust to nearest space
  while (endIdx < text.length && text[endIdx] !== ' ') {
    endIdx++;
  }

 const snippet = text.slice(currentIndex, endIdx).trim();

  currentIndex = endIdx + 1; // move past space for next snippet

  return snippet.charAt(0).toUpperCase() + snippet.slice(1);
}

$("#make-convo-make-sense").click(function () {
  const newText = generateOrderedText();
 if (newText) {
    $("#outputtwo").append('<div class="text"><p>' + newText + '</p></div>');
 } else {
    $("#outputtwo").append('<div class="text"><p><em>No more text left.</em></p></div>');
  }
});
});