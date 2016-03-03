var bio = {
    'name': 'Justin Harringa',
    'role': 'Senior Full-Stack Developer',
    'contacts': {
        'mobile': '+1 (708) 320-1337',
        'email': 'justin@harringa.com',
        'github': 'https://github.com/justinharringa',
        'twitter': 'https://twitter.com/justinharringa',
        'location': 'Denver, IA'
    },
    'welcomeMessage': 'Established an accomplishments-driven career highlighted by rapid acceleration to increasingly responsible positions while building a vast technical skill set. Loves to learn and automate.',
    'skills': [
        'HTML',
        'CSS',
        'Javascript',
        'Bootstrap',
        'jQuery',
        'AngularJS',
        'Java',
        'Ruby',
        'NodeJS',
        'PHP'
    ],
    'biopic': 'https://en.gravatar.com/userimage/51525264/216335978097e685a6400fd8dced7550?size=300'
};

function replaceDataToken(htmlSnippet, value) {
    return htmlSnippet.replace("%data%", value);
}

bio.display = function () {
    var formattedName = replaceDataToken(HTMLheaderName, bio.name);
    var headerRole = replaceDataToken(HTMLheaderRole, bio.role);
    var headerElement = $("#header");
    headerElement.prepend(headerRole).prepend(formattedName);

    var contactInfo = bio.contacts;
    for (var contactType in contactInfo) {
        if (contactInfo.hasOwnProperty(contactType)) {
            var formattedContactInfo = replaceDataToken(window['HTML' + contactType], contactInfo[contactType]);
            $("#topContacts").append(formattedContactInfo);
        }
    }

    var bioPic = replaceDataToken(HTMLbioPic, bio.biopic);
    headerElement.append(bioPic);

    var welcomeMessage = replaceDataToken(HTMLwelcomeMsg, bio.welcomeMessage);
    headerElement.append(welcomeMessage);

    headerElement.append(HTMLskillsStart);
    bio.skills.forEach(function (skill) {
        $("#skills").append(replaceDataToken(HTMLskills, skill));
    });
};

var education = {
    'schools': [
        {
            'name': 'University of Iowa',
            'location': 'Iowa City, IA',
            'degree': 'Master',
            'majors': [
                'Business Administration'
            ],
            'dates': 2010,
            'url': 'http://www.uiowa.edu'
        },
        {
            'name': 'University of Northern Iowa',
            'location': 'Cedar Falls, IA',
            'degree': 'Bachelor of Science',
            'majors': [
                'Computer Science'
            ],
            'dates': 2003,
            'url': 'https://www.uni.edu'
        }
    ],
    'onlineCourses': [
        {
            'title': 'Front-End Web Developer Nanodegree',
            'school': 'Udacity',
            'date': '2015',
            'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        },
        {
            'title': 'Desenvolvimento Google Android',
            'school': 'CESAR.EDU',
            'date': 2014,
            'url': 'http://ead.cesar.org.br/curso/android-intermediario/'
        }
    ]
};
education.display = function () {
    var educationElement = $("#education");
    education.schools.forEach(function (school) {
        educationElement.append(HTMLschoolStart);

        var schoolAndDegree = replaceDataToken(HTMLschoolName, school.name) +
            replaceDataToken(HTMLschoolDegree, school.degree);
        schoolAndDegree = schoolAndDegree.replace('#', school.url);
        $(".education-entry:last").append(schoolAndDegree)
            .append(replaceDataToken(HTMLschoolDates, school.dates))
            .append(replaceDataToken(HTMLschoolLocation, school.location))
            .append(replaceDataToken(HTMLschoolMajor, school.majors[0]));
    });

    educationElement.append(HTMLonlineClasses);
    education.onlineCourses.forEach(function (course) {
        educationElement.append(HTMLschoolStart);

        var titleAndSchool = replaceDataToken(HTMLonlineTitle, course.title) +
            replaceDataToken(HTMLonlineSchool, course.school);
        titleAndSchool = titleAndSchool.replace('#', course.url);
        var onlineURL = HTMLonlineURL.replace('#', course.url);
        $(".education-entry:last").append(titleAndSchool)
            .append(replaceDataToken(HTMLonlineDates, course.date))
            .append(replaceDataToken(onlineURL, course.url));
    });
};

var work = {
    'jobs': [
        {
            'employer': 'C.E.S.A.R.',
            'url': 'https://www.cesar.org.br',
            'title': 'Senior Software Developer / Team Lead',
            'location': 'Recife, PE Brazil',
            'dates': '2014-02-03 - Present',
            'description': 'Work with the team to develop innovative solutions for multinational clients while ' +
            'growing together as individuals. Act as member of internal senior engineer team to drive change.',
            'highlights': [
                'Currently working on a critical PHP / AngularJS system for a top multinational tech company which ' +
                'helps track & organize hardware components for their design & build process.',
                'Worked on improving and maintaining a Java-based subscription management solution used to manage ' +
                'mobile phone subscriptions for various carriers in various countries. ',
                'Promote continuous integration and continuous delivery practices within my projects and across ' +
                'projects at CESAR.'
            ]
        },
        {
            'employer': 'John Deere',
            'url': 'https://www.deere.com',
            'title': 'Technology Architect',
            'location': 'Waterloo, IA; Des Moines, IA; Moline, IL',
            'dates': '2001-05-07 - 2014-01-21',
            'description': 'Enterprise-wide responsibilities for steering, guidance, management, and support of: ' +
            'Java development frameworks, continuous integration environment and practices (servers, software, ' +
            'build process, automated testing), enterprise deployment system for Java applications, and version ' +
            'control standards. Gained strengths in managing expectations, requirements, and building support ' +
            'documentation for future maintenance. Regularly promoted starting from developing ' +
            'COBOL/SAS/JCL/VisualBasic/ColdFusion solutions to building Java web applications and services to ' +
            'becoming an integration expert and eventually an enterprise architect responsible for developer ' +
            'enablement across the enterprise. Worked in various locations starting in Waterloo, IA; moving to ' +
            'Des Moines, IA; and finally being promoted to corporate headquarters in Moline, IL.',
            'highlights': [
                'Manage an internal international team of 7 to provide optimal coverage for developers in ' +
                'distributed locations across the globe (primarily US, Germany, & India). Traveled regularly to work ' +
                'with my colleagues in India (both in and outside of my team).',
                'Assist in developing application framework and cloud strategies for global scalability.',
                'Improved productivity and quality for developers by evolving tools, frameworks, and testing ' +
                'methodologies to reduce project cost and time by collaborating with teams across the organization ' +
                'to identify needs, gaps, and areas for improvement.',
                'Considered a subject matter expert in integration at John Deere.',
                'Design/development/implementation of a key system which routed almost all inbound messages from ' +
                'John Deere machinery to various heterogeneous applications with assorted interactions ' +
                '(FTP, JMS, Web Services, REST).',
                'Drove adoption of jUnit and unit/integration/acceptance-testing techniques.'
            ]
        }
    ]
};

work.display = function () {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);

        var employerAndTitle = replaceDataToken(HTMLworkEmployer, job.employer) +
            replaceDataToken(HTMLworkTitle, job.title);
        employerAndTitle = employerAndTitle.replace('#', job.url);

        $(".work-entry:last").append(employerAndTitle)
            .append(replaceDataToken(HTMLworkDates, job.dates))
            .append(replaceDataToken(HTMLworkLocation, job.location))
            .append(replaceDataToken(HTMLworkDescription, job.description));
    });
};

var projects = {
    'projects': [
        {
            'title': 'Pi Temp Monitor',
            'url': 'https://github.com/justinharringa/pi-temp-monitor',
            'dates': '2015-12-08 - Present',
            'description': 'Temperature monitor that runs on a Raspberry Pi using a DS18B20 waterproof temperature ' +
            'sensor. Prints temperature and sends the data to DynamoDB',
            'images': ['https://harringa.com/images/pi-temp-monitor-330.jpg']
        },
        {
            'title': 'My Time',
            'url': 'https://github.com/justinharringa/mytime',
            'dates': '2014-08-10 - Present',
            'description': 'A small, very simple Android app that can be used to track time. This met my initial needs ' +
            'but I have more ideas on how to make this more useful for others and to improve it. It was also a way to ' +
            'experiment with different options in the Google Developer Console and Google Play.',
            'images': ['https://harringa.com/images/my-time-app-330.jpg']
        },
        {
            'title': 'Harringa.com',
            'url': 'https://github.com/justinharringa/harringa.com',
            'dates': '2006-05-04 - Present',
            'description': 'My personal site which generally gets used as a playground. I generally blog there and have' +
            ' more recently been experimenting with Continuous Deployment of the site via SnapCI & Amazon Web Services.',
            'images': ['https://harringa.com/images/harringa.com-arch-330.png']
        }
    ]
};

projects.display = function () {
    projects.projects.forEach(function (project) {
        $("#projects").append(HTMLprojectStart);
        var projectEntry = $(".project-entry:last");
        var titleWithURL = HTMLprojectTitle.replace('#', project.url);
        projectEntry.append(replaceDataToken(titleWithURL, project.title))
            .append(replaceDataToken(HTMLprojectDates, project.dates))
            .append(replaceDataToken(HTMLprojectDescription, project.description));
        project.images.forEach(function (image) {
            projectEntry.append(replaceDataToken(HTMLprojectImage, image));
        });
    });
};

function addGoogleMapLocationHolder() {
    $("#mapDiv").append(googleMap);
}
