

var bio = {
    "name" : "Rowan",
    "role" : "Developer",
    "contacts" : {
        "mobile" : "888-888-8888",
        "email" : "rowan@example.com",
        "github" : "https://github.com/rowanv",
        "twitter" : "@twitter_account",
        "location" : "Somewhere, ZZ"
    },
    "welcomeMessage" : "Welcome to my website!",
    "skills" : ["Awesomeness", "programming", "teaching", "JS"],
    "biopic" : "http://k37.kn3.net/99CB9AB91.jpg",
    "display" : "some function"
};

bio.display = function() {
    'use strict';
    var formattedName = HTMLheaderName.replace('%data%', bio.name),
        formattedRole = HTMLheaderRole.replace('%data%', bio.role);

    $('#header').prepend(formattedName);
    $('#header').append(formattedRole);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $('#topContacts').prepend(formattedBioPic);
    console.log(formattedBioPic);


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    $("#topContacts").append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedTwitter);
    $('#topContacts').append(formattedGithub);

    $('#header').append(HTMLskillsStart);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(formattedWelcomeMessage);


};


for (skilli in bio['skills']){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skilli]);
    $('#header:last').append(formattedSkill);
};




var education = {
    "schools" : [
        {
            "name": "Baking University",
            "location": "Paris, France",
            "degree" : "Bread Making Master",
            "dates" : "July 2008 to July 2010",
            "url" : "http://www.breadisawesome.com",
            "major": "Breadmaking"
        },
        {
            "name": "Baking University",
            "location": "Paris, France",
            "degree" : "Pastry Making Master",
            "dates" : "July 2010 to July 2011",
            "url" : "http://www.pastriesareawesome.com",
            "major" : "Pastrymaking"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Udacity Nanodegree",
            "school" : "Udacity",
            "dates" : "July 2015 to Present",
            "url" : "http://www.udacity.com"
        }
    ]

};



var work = {
    "jobs" : [
        {
            "title" : "Developer",
            "employer" : "Employer Z",
            "location" : "Remote, OR",
            "dates" : "January 2014 - January 2015",
            "description" : "Developed products for Employer Z"
        },
        {
            "title" : "Developer",
            "employer" : "Employer X",
            "location" : "Remote, OR",
            "dates" : "January 2013 - January 2014",
            "description" : "Developed products for Employer X"
        },
        {
            "title" : "Developer",
            "employer" : "Employer Y",
            "location" : "Remote, OR",
            "dates" : "January 2013 - January 2014",
            "description" : "Developed products for Employer Y"
        }

    ]
};

var projects = {'projects' : [{
            'title' : 'The Art of Bread Making',
            'location' : 'Paris, France',
            'dates' : 'July 2010',
            'description': 'I wrote a book about bread making.'
        },
        {
            'title' : 'The Art of Pastry Making',
            'location' : 'Paris, France',
            'dates' : 'July 2011',
            'description': 'I wrote a book about making pastries.'
        }
    ]

};


/*Work */

$("#workExperience").append(HTMLworkStart);
for (job in work.jobs){
    //$("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle); //select every object with the class
    //work-entry, and append it to the last element with that class.
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
};

/* Projects */

$('#projects').append(HTMLprojectStart);
for (project_iter in projects.projects){
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project_iter].title);
    var formattedProjectDates = HTMLprojectDates.replace('%data', projects.projects[project_iter].title);
    var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project_iter].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project_iter].description);

    $('#projects:last').append(formattedProjectTitle);
    $('#projects:last').append(formattedProjectDates);
    $('#projects:last').append(formattedProjectDescription);
};



work.display = function() {
    'use strict';

    /*var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs.title);
    $("#workExperience").append(HTMLworkStart);*/

};

$('#education').append(HTMLschoolStart);
for (school in education.schools){
    var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
    var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
    var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major)
    $('#education:last').append(formattedSchoolName);
    $('#education:last').append(formattedSchoolDegree);
    $('#education:last').append(formattedSchoolDates);
    $('#education:last').append(formattedSchoolMajor);
};

$('#education:last').append(HTMLonlineClasses);
for (course in education.onlineCourses){
    var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
    var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
    var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);

    $('#education').append(formattedTitle);
    $('#education:last').append(formattedSchool);
    $('#education:last').append(formattedDates);
    $('#education:last').append(formattedURL);
}

bio.display();
work.display();




