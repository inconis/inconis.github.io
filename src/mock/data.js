import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Riccardo',
  subtitle: "I'm a management engineering student",
  cta: 'Read more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    ' I`m a management engineering student at the Polytechnic University of Turin, in the north of Italy. ',
  paragraphTwo:
    ' I`m very passionate about technology in general, with a particular focus on servers and cloud services like Docker,  NextCloud, Odoo, OpenLiteSpeed, and many other web services.  I have a true inclination for communication and teamwork because only a group can solve problems with the best approach. ',
  paragraphThree:
    ' I also enjoy meeting people around the world traveling with CouchSurfing because everyone has wonderful experiences and way of life to share, taking pictures and swimming are my hobbies too. ',
  resume: 'https://www.linkedin.com/in/inconisriccardo', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'mipbg.jpg',
    title: 'MIP Business Game 2020',
    info: 'The event is a 10-day competition in which 100 international students compete on real-life business cases',
    info2: '',
    url: 'https://mipbusinessgame.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'google-certification.jpg',
    title: 'Certification - Fundamentals of digital marketing',
    info: 'Proud to announce my new certification in Digital Marketing fundamentals released by Google Digital Garage',
    info2: 'Check the certificate pressing Read ',
    url: 'https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: 'https://url',
    repo: 'https://repo', // if no repo, the button will not show up
  },

  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to contact me? Awesome!',
  btn: 'Write me an e-mail',
  email: 'riccardo.ttinconis@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/inconisriccardo',
    },
    {
      id: uuidv1(),
      name: 'facebook',
      url: 'https://www.facebook.com/inconisriccardo',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/inconisriccardo',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/inconis',
    },
    {
      id: uuidv1(),
      name: 'medium',
      url: 'https://medium.com/@inconisriccardo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
