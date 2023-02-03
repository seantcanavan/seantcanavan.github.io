import Mock from "../mock";

const database = {
  information: {
    name: "Sean Canavan",
    aboutContent:
      "A passionate engineering leader focused on culture, technology, and cost with over 15 years of experience and a proven track record leading local, remote, and overseas teams cohesively. Blending a strong set of written and verbal communication skills with a rock-solid technical mindset to build world-class teams and products in highly collaborative and agile environments.",
    experience: 15,
    email: "seantcanavan@gmail.com",
    address: "Tulsa, Oklahoma",
    employer: "Learnfully",
    languages: ["GoLang, TypeScript", "NodeJS", "ReactJS"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/seantcanavan",
      github: "https://github.com/seantcanavan",
    },
    brandImage: "/images/github-avatar.png",
    aboutImage: "/images/750x1089-code.png",
    aboutImageLg: "/images/890x1293-code.png",
    resumeFile: "/files/SeanCanavanResume2022TD.pdf",
  },
  technicalSkills: [
    {
      title: "Web Server Design",
      icon: "code",
      details:
        "An expert at scaling web apps and optimizing back end designs for millions of requests.",
    },
    {
      title: "Web Development",
      icon: "website",
      details:
        "Self-taught React & Angular developer, student, and addict learning more and more every day.",
    },
    {
      title: "Database Design",
      icon: "database",
      details:
        "SQL, NoSQL, indexes, compound keys, transactions, and document store versus key-value.",
    },
  ],
  interpersonalSkills: [
    {
      title: "Team Lead",
      icon: "code",
      details:
        "Experienced at bridging the gap between product and engineering teams to build quality software on time and to spec.",
    },
    {
      title: "Mentoring and Hiring",
      icon: "website",
      details:
        "Passionate teacher, mentor, and hirer. Experienced at hiring for both culture and skill set in order to help companies flourish.",
    },
    {
      title: "Effective Communication",
      icon: "database",
      details:
        "Professionally trained communicator and writer adept at breaking down complex technical issues and distilling them to others.",
    },
  ],
  projects: [
    {
      id: 1,
      content:
        "Successfully migrated an acquired startup's entire tech stack from an on-prem deployment to a full AWS cloud configuration using Elastic BeanStalk and Relational Database Service with zero downtime.",
      about: {
        projectName: "AWS Cloud Migration",
        companyName: "Repost Network",
      },
    },
    {
      id: 2,
      content:
        "Integrated a fully remote development team quickly onboarding them adjusting team code review and merge processes appropriately effectively doubling the teams output.",
      about: {
        projectName: "Remote Team Integration",
        companyName: "GoGuardian",
      },
    },
    {
      id: 3,
      content:
        "Designed limitless network and server infrastructure utilizing AWS serverless technologies Lambda and DynamoDB. Applied standardized infrastructure to quickly spin up new microservices in minutes.",
      about: {
        projectName: "Serverless Infrastructure Design",
        companyName: "Repost Network",
      },
    },
    {
      id: 4,
      content:
        "Optimized the workflow for 125 data entry employees tasked with ingesting millions of lines of movie and tv metadata every month. Principal developer for all custom tooling and associated documentation.",
      about: {
        projectName: "Bulk Data Ingestion",
        companyName: "YouTube, LLC",
      },
    },
    {
      id: 5,
      content:
        "Principal GoLang developer for an on-prem software suite designed to load and manage customer's software while collecting local network data and submitting it to Cisco's cloud for threat analysis.",
      about: {
        projectName: "Private Cloud",
        companyName: "Cisco Systems",
      },
    },
    {
      id: 6,
      content:
        "Technical Architect in charge of rewriting a $2mil/year COVID assistance program in full MEAN stack. Launched on time with zero bugs and no disruption to benefits in only six months.",
      about: {
        projectName: "Kith.care",
        companyName: "GitWit, LLC",
      },
    },
  ],
  proficiencies: [
    {
      title: "GoLang",
      value: 80,
    },
    {
      title: "REST",
      value: 80,
    },
    {
      title: "NodeJS",
      value: 75,
    },
    {
      title: "NestJS",
      value: 60,
    },
    {
      title: "Java",
      value: 60,
    },
    {
      title: "ReactJS",
      value: 60,
    },
    {
      title: "Python",
      value: 50,
    },
    {
      title: "Angular",
      value: 40,
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2022 - Present",
        position: "Director of Engineering, Software Architect, and Full Stack Engineer",
        company: "Learnfully",
        details:
          "Engineering lead in charge of all product design, research, feasibility, estimation, and implementation. Build out the entire Learnfully product portfolio from scratch using the most up-to-date languages, technologies, and cloud-architecture principles. Implement a fully modern and truly future proof tech stack including React 17, MongoDB 6.0, and GoLang 1.18. Utilized serverless technologies at the API and database levels to keep running costs low and totally eliminate operational costs and overhead. Design and implement the entire back end stack and database architecture. Built from the ground up using infrastructure-as-code and CI/CD pipelines to enable rapid development and releases while also following industry best practices.",
      },
      {
        id: 2,
        year: "2021 - 2022",
        position: "Director of Engineering, Software Architect, and Full Stack Engineer",
        company: "GitWit, LLC",
        details:
          "Principal software architect in charge of rewriting a tech-debt ridden codebase to a full MEAN stack project including database migration. Went from concept to launch in 6 months without bugs all-the-while learning MEAN stack on the job. The project in question helps essential workers receive funding for child care and pays out $2mil annually.",
      },
      {
        id: 3,
        year: "2018 - 2021",
        position: "Tech Lead and Full Stack Engineer",
        company: "GoGuardian",
        details:
          "Technical lead for the Admin product’s engineering teams both local and overseas. Led design discussions, cross-team collaborations, and acted as the first point of contact for all technical questions related to the product. Performed feasibility analysis and story point estimation for all significant engineering initiatives.",
      },
      {
        id: 4,
        year: "2017 - 2018",
        position: "Software Engineer",
        company: "Repost Network",
        details:
          "Second engineer at a burgeoning tech music startup focused on digital rights management and music distribution for new and upcoming artists. Worked directly with the CTO daily and helped the company grow their userbase 3x, became head of company culture, and performed pivotal hiring duties.",
      },
      {
        id: 5,
        year: "2016 - 2017",
        position: "Cloud Security Engineer",
        company: "Cisco Systems",
        details:
          "Principal developer on Cisco's on-prem device and private cloud hardware team. Developed a utility for managing customer's software to run directly on Cisco's hardware and offloaded local networking traffic metrics to the cloud for security analysis.",
      },
      {
        id: 6,
        year: "2014 - 2015",
        position: "Software Engineer",
        company: "Vaco for YouTube, LLC",
        details:
          "Onboarded initially onto the Business Intelligence team to directly take charge of a significant scaling issue due to a lack of automation of processing incoming movie and tv studio metadata. Designed custom in-house tooling to automate metadata correction, ingestion, and eventually standardization for 125 data entry employees.",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2009 - 2013",
        graduation: "Bachelor of Science - Software Engineering",
        university: "San Jose State University",
        details: "120/120 units completed",
      },
      {
        id: 2,
        year: "2006 - 2009",
        graduation: "Minor, Mathematics",
        university: "San Jose State University",
        details: "18/18 units completed",
      },
      {
        id: 3,
        year: "2006 - 2008",
        graduation: "Bachelor of Science - Electrical Engineering",
        university: "San Jose State University",
        details: "76/135 units completed",
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "Markdown & Html supported blog.",
      featuredImage: "/images/blog-image-1.jpg",
      fileSource: "../../blog/markdown-html-supported-blog.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 2,
      title: "Installing NodeJS on your device.",
      featuredImage: "/images/blog-image-2.jpg",
      fileSource: "../../blog/installing-nodejs-on-your-device.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 3,
      title: "UI/UX design starter with Adobe XD.",
      featuredImage: "/images/blog-image-3.jpg",
      fileSource: "../../blog/uiux-design-starter-with-adobe-xd.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 4,
      title: "Boost your post for increasing sales.",
      featuredImage: "/images/blog-image-4.jpg",
      fileSource: "../../blog/boost-your-post-for-increasing-sales.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 5,
      title: "Difference between GatsbyJS & NextJS.",
      featuredImage: "/images/blog-image-5.jpg",
      fileSource: "../../blog/difference-between-gatsbyjs-and-nextjs.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 6,
      title: "How to choose javascript framework for project.",
      featuredImage: "/images/blog-image-6.jpg",
      fileSource:
        "../../blog/how-to-choose-javascript-framework-for-project.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 7,
      title: "Web automation with python language.",
      featuredImage: "/images/blog-image-7.jpg",
      fileSource: "../../blog/web-automation-with-python-language.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 8,
      title: "Time to use latest technology for creating a website.",
      featuredImage: "/images/blog-image-8.jpg",
      fileSource:
        "../../blog/time-to-use-latest-technology-for-creating-a-website.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 9,
      title: "Think out of the box.",
      featuredImage: "/images/blog-image-9.jpg",
      fileSource: "../../blog/think-out-of-the-box.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 10,
      title: "Trending designs in 2020.",
      featuredImage: "/images/blog-image-1.jpg",
      fileSource: "../../blog/trending-designs-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 11,
      title: "How to get 10k instagram followers?",
      featuredImage: "/images/blog-image-2.jpg",
      fileSource: "../../blog/how-to-get-10k-instagram-followers.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 12,
      title: "What NodeJS can do?",
      featuredImage: "/images/blog-image-3.jpg",
      fileSource: "../../blog/what-nodejs-can-do.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 13,
      title: "Futures of javascript.",
      featuredImage: "/images/blog-image-4.jpg",
      fileSource: "../../blog/future-of-javascript.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 14,
      title: "Popular javascript library in 2020.",
      featuredImage: "/images/blog-image-5.jpg",
      fileSource: "../../blog/popular-javascript-library-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 15,
      title: "Promrammers must read books.",
      featuredImage: "/images/blog-image-6.jpg",
      fileSource: "../../blog/programmers-must-read-books.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
  ],
  contactInfo: {
    emailAddress: "seantcanavan@gmail.com",
  },
};

Mock.onGet("/api/information").reply(() => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/technical-skills").reply(() => {
  const response = database.technicalSkills;
  return [200, response];
});

Mock.onGet("/api/interpersonal-skills").reply(() => {
  const response = database.interpersonalSkills;
  return [200, response];
});

Mock.onGet("/api/projects").reply(() => {
  const response = database.projects;
  return [200, response];
});

Mock.onGet("/api/proficiencies").reply(() => {
  const response = database.proficiencies;
  return [200, response];
});

Mock.onGet("/api/experience").reply(() => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(() => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contact-info").reply(() => {
  const response = database.contactInfo;
  return [200, response];
});
