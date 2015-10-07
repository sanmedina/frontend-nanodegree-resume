/*
This is empty on purpose! Your code to build the resume will go here.
 */
//var s1 = "jamon queso";
//var s2 = s1.replace("queso", "carne");
//$("#main").append(s1);
//$("#main").append(s2);
//console.log(s1);
//console.log(s2);
var name = "Dev Medina";
var role = "Developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

var bio = {
    "name" : "Dev Medina",
    "role" : "Developer",
    "contactInfo" : { 
        mail : "devmedina@mail.com",
        telephone : "44444444"
    },
    "pictureURL" : "images/fry.jpg",
    "welcomeMessage" : "¡Hola mundo!",
    "skills" : [
        "programming", "eating", "sleeping"
    ]
};
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contactInfo);
$("#main").append(bio.pictureURL);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);