'use strict';

var bio = {
    "name" : "Rowan",
    "role" : "Developer",
    "contacts" : {
        "mobile" : "888-888-8888",
        "email" : "rowan@example.com",
        "github" : "https://github.com/rowanv",
        "twitter" : "@twitter_account",
        "location" : "Accra, Ghana"
    },
    "welcomeMessage" : "Welcome to my website!",
    "skills" : ["Awesomeness", "programming", "teaching", "JS"],
    "biopic" : "http://k37.kn3.net/99CB9AB91.jpg"
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

/* Bio */

bio.display = function() {
    var formattedName = HTMLheaderName.replace('%data%', bio.name),
        formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    $('#header').append(formattedBioPic);

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    $('#topContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedTwitter);
    $('#topContacts').append(formattedGithub);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#topContacts:last').append(formattedWelcomeMessage);

    $('#topContacts:last').append(HTMLskillsStart);
    for (var i in bio.skills) {
        var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
        $('#topContacts').append(formattedSkill);
    }


}



/*Work */


work.display = function(){

    for (var job in work.jobs){
        $('#workExperience').append(HTMLworkStart);
        //$("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerTitle); //select every object with the class
        //work-entry, and append it to the last element with that class.
        var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        $('.work-entry:last').append(formattedWorkDates);
        var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        $('.work-entry:last').append(formattedWorkLocation);
        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $('.work-entry:last').append(formattedDescription);
    }
}


/* Projects */


projects.display = function() {
    for (var projectIter in projects.projects) {
        $('#projects:last').append(HTMLprojectStart);
        console.log(projects.projects[projectIter]);
        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[projectIter].title);
        var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[projectIter].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[projectIter].description);

        console.log(formattedProjectTitle);
        console.log(formattedProjectDates);
        console.log(formattedProjectDescription);

        $('#projects:last').append(formattedProjectTitle);
        $('#projects:last').append(formattedProjectDates);
        $('#projects:last').append(formattedProjectDescription);
    }console.

}


education.display = function() {

    for (var school in education.schools){
        $('#education').append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
        var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major)
        $('#education:last').append(formattedSchoolName);
        $('#education:last').append(formattedSchoolDegree);
        $('#education:last').append(formattedSchoolDates);
        $('#education:last').append(formattedSchoolMajor);
    }


    for (var course in education.onlineCourses){
        $('#education:last').append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
        var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
        var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
        var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);

        $('#education').append(formattedTitle);

        $('#education:last').append(formattedSchool);
        $('#education:last').append(formattedDates);
        $('#education:last').append(formattedURL);
    }
}

$('#mapDiv').append(googleMap);

bio.display();
work.display();
projects.display();
education.display();


