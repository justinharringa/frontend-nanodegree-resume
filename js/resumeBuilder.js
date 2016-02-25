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
    'biopic': 'some url???'
};
bio.display = function () {

};

var education = {
    'schools': [
        {
            'name': 'University of Northern Iowa',
            'location': 'Cedar Falls, IA',
            'degree': 'Bachelor of Science',
            'majors': [
                'Computer Science'
            ],
            'dates': 2003,
            'url': 'https://www.uni.edu'
        },
        {
            'name': 'University of Iowa',
            'location': 'Iowa City, IA',
            'degree': 'Master',
            'majors': [
                'Business Administration'
            ],
            'dates': 2010,
            'url': 'http://www.uiowa.edu'
        }
    ],
    'onlineCourses': [
        {
            'title': 'Desenvolvimento Google Android',
            'school': 'CESAR.EDU',
            'date': 2014,
            'url': 'http://ead.cesar.org.br/curso/android-intermediario/'
        }
    ]
};
education.display = function () {

};

var work = {
    'jobs': [
        {
            'employer': 'C.E.S.A.R.',
            'title': 'Senior Software Developer / Team Lead',
            'location': 'Recife, PE Brazil',
            'dates': '2014-02-03 - present',
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

};