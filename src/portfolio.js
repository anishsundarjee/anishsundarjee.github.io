/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  // googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Anish Sundarjee",
  logo_name: "Anish.S()",
  nickname: "Ashwathama",
  full_name: "Anish Sundarjee",
  subTitle:
    "Full Stack Applications Developer, Keen for open source 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1DiQQCLB_r91D3X2znhs03Mg2BgRn4I5E/view?usp=sharing",
  mail: "mailto:anishsundarjee25@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/anishsundarjee",
  linkedin: "https://www.linkedin.com/in/anish-sundarjee/",
  gmail: "anishsundarjee25@gmail.com",
  facebook: "https://www.facebook.com/anish.sundarjee/",
  twitter: "https://twitter.com/asundarjee",
  instagram: "https://www.instagram.com/anish_just_/",
};

const skills = {
  data: [
    {
      title: "Application Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive web applications using ReactJS",
        "⚡ Developing mobile applications using React Native and Android",
        "⚡ Creating application backend in Node, Express",
        "⚡ Integrating redux for application level state management",
        "⚡ Integration of third party services such as Facebook SDK/ App center",
        "⚡ Experience working with Push notification, OAuth2 and Google Maps"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Data Analytics",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience managing and working on enterprise Databases",
        "⚡ Integration of third party backend services such as Firebase",
        "⚡ Creating Data Visualization for business needs using Tableau",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:sql",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#f89820",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of the South Pacifc",
      subtitle: "Post Graduate Diploma IT, Majoring in Computer Science",
      logo_path: "USP.png",
      alt_name: "USP",
      duration: "July 2019 - June 2021",
      descriptions: [
        "⚡ I have studied core subjects like Machine Learning, Big Data Analytics, Advanced Software Engineering and Agile Development.",
        "⚡ I worked on multiple projects with a variety of groups and presented in Seminars",
        "⚡ I have implemented several projects based on what I've leart under my Post Graduate Diploma. ",
      ],
      website_link: "https://www.usp.ac.fj/",
    },
    {
      title: "Saurashtra University (Christ College)",
      subtitle: "Bachelors of Computer Applications",
      logo_path: "sau.png",
      alt_name: "SAU",
      duration: "July 2015 - June 2018",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, RDBMS, Networking, Computer Systems.",
        "⚡ I have attained skills in languages like C, C++, Java, Php, Android, SQL",
        "⚡ I have implemented several projects based on what I've leart under my Computer Applocations Degree. ",
      ],
      website_link: "https://www.saurashtrauniversity.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Tableau Essential Training",
      subtitle: "LinkedIn Learning",
      logo_path: "tableau.png",
      certificate_link:
        "https://drive.google.com/file/d/1xnBRnXdSs6k5PAmfYhdOEo_eoQ3YBFU-/view?usp=sharing",
      alt_name: "Tableau Desktop",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Using Tableau to Discover Powerful Business Insights",
      subtitle: "LinkedIn Learning",
      logo_path: "tableau.png",
      certificate_link:
        "https://drive.google.com/file/d/1TfYNEkuKG_4wW7fhObDpeOcS16k7nEMB/view?usp=sharing",
      alt_name: "Tableau Business Analytics",
      color_code: "#E2405F",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "Google Data Analytics Professional Certificate",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Build your personal web page using React and Github pages",
      subtitle: "Coursera Project Work",
      logo_path: "github.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/2WH9M4UYYA37",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "Become a Javascript Pro with these 7 Skilss",
      subtitle: "Coursera Project Work",
      logo_path: "javascript.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/FMRNW3LV3CPK",
      alt_name: "Coursera",
      color_code: "#F0DB4F",
    }
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Professional Work Experience",
  description:
    "Currently working as Senior Applications developer, My preffered skill is Javascript with React for Web and React Native in Mobile Application Development. Actively looking for projects where I can contribute my skills.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior Applications Developer",
          company: "Vodafone Fiji Pte Ltd",
          company_url: "https://www.vodafone.com.fj/",
          logo_path: "vodafone.png",
          duration: "Apr 2020 - Present",
          location: "Office / Work From Home",
          description:
            "Migrated App to React Native and reduced lines of code by 10% which decreased application launch time and increased overall responsiveness of app.",
          description2:
            "Made a Web Version for the mobile POS to cater for merchants without mobile devices",
          description3:
            "Developed Self Sign Up solution via Mobile Wallet App to reduce lines in outlets during Covid",
          description4:
            "Integrated Backend Services like Firebase and AppCenter to get better insights into applications and enable better marketing team to deploy better data driven marketing campaigns",
          color: "#0071C5",
        },
        {
          title: "Graduate Applications Developer",
          company: "Vodafone Fiji Pte Ltd",
          company_url: "https://www.vodafone.com.fj/",
          logo_path: "vodafone.png",
          duration: "Aug 2018 - Mar 2020",
          location: "Office",
          description:
            "Developed Payment solution application to enable 800K+ customers to perfrom contactless payment",
          description2:
            "Conducted UAT and Managed Deployment for Transport solution within strict timelines",
          description3:
            "Developed Mobile POS solution to accept QR payment and decrease service time by 20%",
          color: "#ee3c26",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My skill range is showcased in the projects I have been involved in professionally and personally, I have made use of a variety of latest technologies like Javascript ES6+, React Native, React JS and NodeJS for my backend. Also have attained skills in data visualization using tools like SQL and Tableau, Below are some of my projects, Note that not all are available on my GitHub",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "goodPhoto.jpg",
    description:
      "You can reach me on any of the below social media links or check out my resume below, I will get back to you ASAP!",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "M-PAiSA Wallet App Phase 1",
      url: "https://play.google.com/store/apps/details?id=fj.com.vodafone.mpaisawallet&hl=en",
      description: "M-PAiSA Wallet Mobile App allows customers to make cashless payments using QR technology and other bill services offered by the M-PAiSA platform",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "1",
      name: "M-PAiSA Business App WebPOS",
      url: "https://eftpos.vodafone.com.fj",
      description:
        "Allows merchants to accept QR payment from the closed loop M-PAiSA payment solution leveraging of QR technology",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
      ],
    },
    {
      id: "2",
      name: "MasterCard on M-PAiSA App",
      url: "https://play.google.com/store/apps/details?id=fj.com.vodafone.mpaisawallet&hl=en",
      description:
        "Enable customers to register for MasterCard within the application eco system and control functionalities exposed to customer to manage thier scheme account.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "App Center",
          iconifyClass: "logos-microsoft",
        },
      ],
    },
    {
      id: "3",
      name: "WebPOS and Busines App Upgrade",
      url: "https://eftpos.vodafone.com.fj",
      description:
        "Develop functionality to sell mobile top-up, Accept Payment, Deposit and Withdraw money for M-PAiSA Account holders",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
      ],
    },
    {
      id: "4",
      name: "anishsundarjee.github.io",
      url: "https://github.com/anishsundarjee/anishsundarjee.github.io",
      description:
        "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
