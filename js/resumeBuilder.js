/*
This is empty on purpose! Your code to build the resume will go here.
*/

/*QuIZ speed of light
speed_of_light_ms = 299792458;
speed_of_light_cn = speed_of_light_ms*100.0/1000000000.0;

$("#main").append([speed_of_light_cn]);
*/

//$("#main").append(["Giacomo Napoli"]);

//var awesomeThoughts = "I am Giacomo and I Am AWESOME!";

//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//$("#main").append(funThoughts);

var name = "Giacomo Napoli";
var role = "Control Systems Engineer";

var formattedName =  HTMLheaderName.replace("%data%", name);
var formattedRole =  HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



