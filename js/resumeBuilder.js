// My Bio Object
var bio = {
    "name": "Saidou Traore",
    "role": "Student  at Udacity",
    "contacts": [
     {
       "github": "saidou1",
       "email": "saidoutraore@gmail.com",
       "mobile": "123456532",
       "twitter": "N/A",
       "location": "Phoenix, AZ",
     }

    ],


    "welcomeMessage" : "welcome to my bio" ,
    "skills": [
        "quiet",
        "determine",
        " average",
        " student ",
    ],
    "biopic": "images/saidou.jpg"
};
//My Education Object
var education = {
    "schools": [
        {
            "name": "UOP",
            "location": "Phoenix, AZ",
            "degree": "Bachelor of Business Administration",
            "majors": [
                "English",
                "French",
                "Arabic",
            ],
            "dates": 2014,
            "url": "https://ecampus.phoenix.edu"
        },

    ],
    "online courses": [
        {
            "title": "Front End Web Developer Nanodegree",
            "school": "Udacity",
            "date": 2014,
            "url": "http://udacity.com"
        }
    ]
};
//My Work Experience Object
var work = {
    "jobs": [
        {
            "employer": "MANDING COMMERCIAL CO., LTD",
            "title": "Trading Company",
            "location": "Phoenix, AZ",
            "dates": "2011 upto date",
            "description": "Holds management position"
        },
    ]
};
//My Project Object
var projects = {
    "projects": [
        {
            "title": "saidou website",
            "dates": 2013,
            "description": "company website",
            "images": ["images/manding.jpg", "images/manding2.jpg"
            ]
        },
    ]
};
bio.display = function(){
    for (biograph in bio.contacts) {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
       $("#header").prepend(formattedRole);
       var formattedName = HTMLheaderName.replace("%data%", bio.name);
       $("#header").prepend(formattedName);
       var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[biograph].mobile);
       $("#topContacts").append(formattedMobile);
       var formattedEmail = HTMLemail.replace("%data%", bio.contacts[biograph].email);
       $("#topContacts").append(formattedEmail);
       var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[biograph].github);
       $("#topContacts").append(formattedGithub);
       var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[biograph].twitter);
       $("#topContacts").append(formattedTwitter);
       var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[biograph].location);
       $("#topContacts").append(formattedLocation);
    }
        var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill)
  }
};
bio.display();
 //Finished Bio code
//Start Work code
work.displayWork = function(){
for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var  formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
     var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
     var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}
work.displayWork();
 //Finished work experience
//Project Code
projects.display = function(){
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
     var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
         if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage =  HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();
//End of Projects
//Education Code
education.displayEdu = function(){
    for(edu in education.schools){
         $("#education").append(HTMLschoolStart);
         var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
         $(".education-entry:last").append(formattedSchoolName);
          formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $(".education-entry:last").append(formattedDates);
        formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
         $(".education-entry:last").append(formattedDegree);
         formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
         $(".education-entry:last").append(formattedLocation);
         formattedUrl = HTMLonlineURL.replace("%data%", education.schools[edu].url);
         $(".education-entry:last").append(formattedUrl);

          formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[0]);
        $(".education-entry:last").append(formattedMajors);
         formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[1]);
        $(".education-entry:last").append(formattedMajors);
          formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[2]);
        $(".education-entry:last").append(formattedMajors);
    }
};
education.displayEdu();
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
  
});
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
