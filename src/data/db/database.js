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
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "Full Stack Developer and Tech Lead",
        company: "GoGuardian",
        details: "Technical lead for the Admin product’s engineering teams both local and overseas. Led design discussions, cross-team collaborations, and acted as the first point of contact for all technical questions related to the product. Performed feasibility analysis and story point estimation for all significant engineering initiatives."
      },
      {
        id: 2,
        year: "2016 - 2018",
        position: "Backend Developer",
        company: "Repost Network",
        details: "Second engineer at a burgeoning tech music startup focused on digital rights management and music distribution for new and upcoming artists. Worked directly with the CTO daily and helped the company grow their userbase 3x, became head of company culture, and performed pivotal hiring duties."
      },
      {
        id: 3,
        year: "2014 - 1016",
        position: "Cloud Security Engineer",
        company: "Cisco Systems",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
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
    phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
    emailAddress: ['admin.sitename@example.com', 'info.sitename@example.com'],
    address: "121 King Street, Melbourne, Victoria 3000, Australia"
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

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
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

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});
