/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Dev Medina";
var role = "Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

//$("#main").append("<br>");

var work = {
    "title" : "",
    "employer" : "",
    "location" : "",
    "yearsWorked" : 0,
    "description" : "",
    "projectImages" : []
};

var works = {
    "works" : []
};

var project = {
    "title" : "",
    "monthsWorked" : 0,
    "description" : "",
    "projectImages" : []
};

var projects = {
    "projects" : []
};

var bio = {
    "name" : "",
    "role" : "",
    "welcomeMessage" : "",
    "contacts" : [],
    "skills" : []
};

var school = {
    "name" : "",
    "location" : "",
    "degree" : "",
    "majors" : [],
    "yearsAttended" : 0,
    "website" : ""
};

var onlineCourse = {
    "title" : "",
    "school" : "",
    "datesAtended" : 0,
    "courseURL" : ""
};

var education = {
    "schools" : [],
    "onlineCourses" : []
};
