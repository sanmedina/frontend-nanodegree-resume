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
    "jobs" : [
        {
            "title" : "WinDev Developer",
            "employer" : "EA-strategy",
            "location" : "Bogotá, D.C.",
            "yearsWorked" : 0.7,
            "description" : "Doing everithing",
            "projectImages" : []
        }
    ]
};

var projects = {
    "projectsW" : [
        {
            "title" : "Trazabilidad",
            "monthsWorked" : 3,
            "description" : "Work controller for a clinic laboratory.",
            "projectImages" : []
        },
        {
            "title" : "MailRoom",
            "monthsWorked" : 2,
            "description" : "Mail control version.",
            "projectImages" : []
        }
    ],
    "display" : function() {
        for( projectIndex in this.projectsW )
        {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projectsW[projectIndex].title);
            var formattedProjectMonthsWorked = HTMLprojectDates.replace("%data%", this.projectsW[projectIndex].monthsWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projectsW[projectIndex].description);
            
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectMonthsWorked);
            $(".project-entry:last").append(formattedProjectDescription);
        }
    }
};

var bio = {
    "name" : "Dev Medina",
    "role" : "Developer",
    "welcomeMessage" : "¡Hola mundo!",
    "contacts" : [
        {
            "mail" : "devsanlizmed@yahoo.com"
        }
    ],
    "skills" : [
        "patience",
        "sleeping",
        "gaming",
        "eating"
    ]
};

var education = {
    "schools" : [
        {
            "name" : "Javeriana",
            "location" : "Bogotá, D.C.",
            "degree" : "Bachelor",
            "majors" : [ "SE" ],
            "yearsAttended" : 6,
            "website" : "http://www.javeriana.edu.co"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Intro to HTML and CSS",
            "school" : "UDacity",
            "datesAtended" : 5,
            "courseURL" : "http://www.udacity.com/"
        },
        {
            "title" : "JavaScript Basics",
            "school" : "UDacity",
            "datesAtended" : 5,
            "courseURL" : "http://www.udacity.com/"
        }
    ]
};

if (bio.skills.length > 0) {
    var formattedSkills;
    var skillIndex;
    
    $("#header").append(HTMLskillsStart);
    for (skillIndex in bio.skills) {
        formattedSkills = HTMLskills.replace("%data%", bio.skills[skillIndex]);
        $("#skills").append(formattedSkills);
    }
}

function displayWork() {
    var jobIndex;
    var formattedWorkEmployer;
    var formattedWorkTitle;
    var formattedWorkLocation;
    var formattedWorkDates;
    var formattedWorkDescription;
    
    for (jobIndex in work.jobs) {
        formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobIndex].employer);
        formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[jobIndex].title);
        formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[jobIndex].location);
        formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[jobIndex].yearsWorked);
        formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[jobIndex].description);
        
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkDescription);
    }
}
displayWork();
$(document).click(function (loc) {
    "use strict";
    var x = loc.pageX, y = loc.pageY;
    
    logClicks(x, y);
});

function inName(name) {
    var spacePos = name.indexOf(" ");
    var upperChar = name.slice(0, 1);
    var firstName = name.slice(1, spacePos);
    var lastName = name.slice(spacePos + 1, name.length);
    
    upperChar = upperChar.toUpperCase();
    firstName = firstName.toLowerCase();
    lastName = lastName.toUpperCase();
    
    return upperChar + firstName + " " + lastName;
}

projects.display();
$("#mapDic").append(googleMap);
