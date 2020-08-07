import Mock from "../mock";
import shuffleArray from "../../utils/shuffleArray";

const database = {
  information: {
    name: 'Sean Canavan',
    aboutContent: "A full stack developer and tech lead with over 10 years of programming experience and a proven track record leading local, remote, and overseas teams cohesively. Blending a strong set of written and verbal communication proficiencies with a rock-solid programming and systems design mindset to build world-class products in highly collaborative and agile environments.",
    experience: 10,
    email: 'seantcanavanpublic@gmail.com',
    address: 'Los Angeles, California',
    employer: 'GoGuardian',
    languages: ['GoLang', 'Java', 'Python', 'ReactJS', 'Node'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/seantcanavan',
      github: 'https://github.com/seantcanavan'
    },
    brandImage: '/images/github-avatar.png',
    aboutImage: '/images/750x1089-code.png',
    aboutImageLg: '/images/890x1293-code.png',
    resumeFile: '/files/SeanCanavanResume2020.pdf'
  },
  technicalSkills: [
    {
      title: "Web Server Design",
      icon: 'code',
      details: "An expert at scaling web apps and optimizing back end designs for millions of requests."
    },
    {
      title: "Web Development",
      icon: 'website',
      details: "Self-taught React developer, student, and addict learning more and more every day."
    },
    {
      title: "Database Design",
      icon: 'database',
      details: "SQL, NoSQL, indexes, compound keys, transactions, and document store versus key-value."
    }
  ],
  interpersonalSkills: [
    {
      title: "Team Lead",
      icon: 'code',
      details: "Experienced at bridging the gap between product and engineering teams to build quality software on time and to spec."
    },
    {
      title: "Mentoring and Hiring",
      icon: 'website',
      details: "Passionate teacher, mentor, and hirer. Experienced at hiring for both culture and skill set in order to preserve company culture."
    },
    {
      title: "Effective Communication",
      icon: 'database',
      details: "Professionally trained communicator and writer adept at breaking down complex technical issues and distilling them to others."
    }
  ],
  projects: [
    {
      id: 1,
      content: "Successfully migrated an acquired startup's entire tech stack from an on-prem deployment to a full AWS cloud configuration using Elastic BeanStalk and Relational Database Service with zero downtime.",
      about: {
        projectName: 'AWS Cloud Migration',
        companyName: 'Repost Network'
      }
    },
    {
      id: 2,
      content: "Integrated a fully remote development team quickly onboarding them adjusting team code review and merge processes appropriately effectively doubling the teams output.",
      about: {
        projectName: 'Remote Team Integration',
        companyName: 'GoGuardian'
      }
    },
    {
      id: 3,
      content: "Designed limitless network and server infrastructure utilizing AWS serverless technologies Lambda and DynamoDB. Applied standardized infrastructure to quickly spin up new microservices in minutes.",
      about: {
        projectName: 'Serverless Infrastructure Design',
        companyName: 'Repost Network'
      }
    },
    {
      id: 4,
      content: "Optimized the workflow for 125 data entry employees tasked with ingesting millions of lines of movie and tv metadata every month. Principal developer for all custom tooling and associated documentation.",
      about: {
        projectName: 'Bulk Data Ingestion',
        companyName: 'YouTube, LLC'
      }
    },
    {
      id: 5,
      content: "Principal GoLang developer for an on-prem software suite designed to load and manage customer's software while collecting local network data and submitting it to Cisco's cloud for threat analysis.",
      about: {
        projectName: "Private Cloud",
        companyName: "Cisco Systems"
      }
    }
  ],
  proficiencies: [
    {
      title: "GoLang",
      value: 80
    },
    {
      title: "REST",
      value: 80
    },
    {
      title: "Java",
      value: 70
    },
    {
      title: "ReactJS",
      value: 70
    },
    {
      title: "Python",
      value: 60
    },
    {
      title: "NodeJS",
      value: 60
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "Full Stack Engineer and Tech Lead",
        company: "GoGuardian",
        details: "Technical lead for the Admin product’s engineering teams both local and overseas. Led design discussions, cross-team collaborations, and acted as the first point of contact for all technical questions related to the product. Performed feasibility analysis and story point estimation for all significant engineering initiatives."
      },
      {
        id: 2,
        year: "2016 - 2018",
        position: "Software Engineer",
        company: "Repost Network",
        details: "Second engineer at a burgeoning tech music startup focused on digital rights management and music distribution for new and upcoming artists. Worked directly with the CTO daily and helped the company grow their userbase 3x, became head of company culture, and performed pivotal hiring duties."
      },
      {
        id: 3,
        year: "2014 - 2016",
        position: "Cloud Security Engineer",
        company: "Cisco Systems",
        details: "Principal developer on Cisco's on-prem device and private cloud hardware team. Developed a utility for managing customer's software to run directly on Cisco's hardware and offloaded local networking traffic metrics to the cloud for security analysis."
      },
      {
        id: 4,
        year: "2012 - 2013",
        position: "Software Engineer",
        company: "Vaco for YouTube, LLC",
        details: "Onboarded initially onto the Business Intelligence team to directly take charge of a significant scaling issue due to a lack of automation of processing incoming movie and tv studio metadata. Designed custom in-house tooling to automate metadata correction, ingestion, and eventually standardization for 125 data entry employees.",
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2009 - 2013",
        graduation: "Bachelor of Science - Software Engineering",
        university: "San Jose State University",
        details: "120/120 units completed"
      },
      {
        id: 2,
        year: "2006 - 2009",
        graduation: "Minor, Mathematics",
        university: "San Jose State University",
        details: "18/18 units completed"
      },
      {
        id: 3,
        year: "2006 - 2008",
        graduation: "Bachelor of Science - Electrical Engineering",
        university: "San Jose State University",
        details: "76/135 units completed"
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      fileSource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      fileSource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      fileSource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      fileSource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      fileSource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      fileSource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      fileSource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      fileSource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      fileSource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      fileSource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      fileSource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      fileSource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      fileSource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      fileSource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      fileSource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    emailAddress: "seantcanavanpublic@gmail.com",
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/technical-skills").reply(config => {
  const response = database.technicalSkills;
  return [200, response];
});

Mock.onGet("/api/interpersonal-skills").reply( config => {
  const response = database.interpersonalSkills;
  return [200, response];
});

Mock.onGet("/api/projects").reply(config => {
  const response = database.projects;
  return [200, response];
});

Mock.onGet("/api/proficiencies").reply(config => {
  const response = database.proficiencies;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contact-info").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});
