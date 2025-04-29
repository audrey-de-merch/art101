
// Author: Audrey DeMerchant
// Date: April 28th, 2025 



// Define variables 

myTransport = ["Car", " e-bike", " walking", " the bus", " rides from friends", " Uber"];
  
var myMainRide = {
  make: "Acura",
  model:"TSX",
  color: "Black",
  year: 2014,
  age: function(){
    return 2025 - this.year; 
  }
}

//output 

document.writeln("When I am in Santa Cruz for School I get around mostly by" + myTransport[2]+ " and " + myTransport[3] + ". On occassion I will also take" + myTransport[4] + ", " + myTransport[1]+ ", or " + myTransport[5] + ".<br>" ); 

document.writeln("When I am back in San Diego my main ride is: <pre>", 
  JSON.stringify(myMainRide, null, "\t" ), "</pre>")