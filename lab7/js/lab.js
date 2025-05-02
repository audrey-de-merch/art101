/** 
 * Author: Audrey DeMerchant
 * Date: May 2, 2025 
 * 
*/


// 
const myButton = document.createElement('button')

myButton.textContent ="Click to Sort Name";
myButton.id = 'myButton';
myButton.className = "my-button";
myButton.addEventListener('click', 
  function sortUserName() {

  var userName = window.prompt("Please enter your name")
  console.log("userName =", userName);

  if (userName) {
    console.log("userName =", userName);
  // split string to array because you can't sort strings
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
 
    // sort the array 
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort)
    
    // turn array back into a string 
    var nameSorted = nameArraySort.join(" ");
    console.log("nameSorted =", nameSorted); 
    
    alert("Name Fixed: " + nameSorted);

}
  })

//output

document.body.appendChild(myButton);
