import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import egg from './Assets/sponsorsLogos/dapp.png';
import glimpse from './Assets/sponsorsLogos/quine.jpeg';

import ACF from './Assets/sponsorsLogos/febtech.png';
import frnk from './Assets/sponsorsLogos/fORKnFOrGe.jpeg';
import interviewC from './Assets/sponsorsLogos/hack.png';
import pass from './Assets/sponsorsLogos/mlh.png';
import swoc from './Assets/sponsorsLogos/SWOC.png';
import ll from './Assets/sponsorsLogos/xyz.png';
import { default as lyin } from './Assets/teami/lyin.jpg';


/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';
import vikash from './Assets/teami/vikash.jpeg' ;
import sajal from './Assets/teami/sajal.jpeg';
import yash from './Assets/teami/yash.png' ;
import abdul from './Assets/teami/Abdul.png' ;
import khushi from './Assets/teami/khushi.jpeg' ;

const TOP_SECTION = {
  TITLE: 'Join  OSEN ',
  Typed_effect: ['Month long event of creation', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Join us on 20th october 2023 with over 500 students from across the nation for Month long event of creation, innovation, & fun.',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK:
    'https://github.com/OSE-NETWORK/OSEN/blob/main/code-of-conduct.md',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://events.mlh.io/events/10207-getting-started-with-hacktoberfest-2023-in-chandigarh-university-mohali'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/ose_network/',
  discord: 'https://chat.whatsapp.com/B7gpwHuWhRGHxFWm9ACrRp',
  linkedin: 'https://www.linkedin.com/company/osenetwork',
  twitter: 'https://www.twitter.com/osen_official',
  devpost: '',
  email: '',
  mail: ''
};

const MIDDLE_SECTION = {
  TITLE: 'What is CollabCode Carnival',
  LONG_DESCRIPTION:
    'CollabCode Carnival is a month-long open-source program designed to empower contributors and boost open-source projects. With 10 exciting projects open for contributions, diverse sessions, and contests, OSEN is the place to be for all open-source enthusiasts. The best part? The top contributor for each track gets some awesome swag! Join us on this journey of innovation, collaboration, and learning, and lets make a difference in the world of open source!.',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: ''
  },
  JOIN_TEAM: {
    required: true,
    src: ''
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 10,
  year: 2023
};

const schedule = [
  {
    day: '20-10-2023',
    events: [
      {
        title: 'Intro to OSEN',
        timings: '10 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '25-10-2023',
    events: [
      {
        title: 'Intro to Git nd GitHub',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '30-10-2023',
    events: [
      {
        title: 'Sponsor session',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'overall First',
      content:
        'First Overall prize will be given to a project that outstands all other submissions'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'overall Second',
      content:
        'Second Overall prize will be given to the second best project of the contribution'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'Third Second',
      content:
        'Best third overall contribution of the  will win some awesome prizes'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: 'Track 1',
      content:
        'We have included 10 projects in various domains, and contributors can actively participate in these projects. The top contributor for each project will be rewarded with swag.'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: ' Track 2',
      content: 'Share your insights and knowledge by writing blogs on sponsor technologies. Top contributors from each sponsor will receive swag from their respective sponsors'
    },
    {
      icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
      type: 'Track 3 ',
      content: 'Contributors are encouraged to build their own projects using sponsor technologies. The top contributors in this track will be rewarded with swag from the sponsor.'
    }
  ],
  [
    //Array 3
    {
      icon: <i className="fas fa-4x sixth fa-male"></i>,
      type: 'Best Web App with Sponsors',
      content: 'Must use qoom in your project to win this category'
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: 'More prizes',
      content: 'More prizes will be revealed later'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Vikash Kumar Yadav',
      role: 'Founder',
      github: 'https://github.com/Vikash-8090-Yadav',
      linkedin: 'https://www.linkedin.com/in/vikash-kumar-yadav-8090/',
      img: vikash
    },
    {
      Name: 'Sajal Batra',
      role: 'Co-Founder',
      github: 'https://github.com/sajalbatra',
      linkedin: 'https://www.linkedin.com/in/sajal-batra-95314a25b/',
      img: sajal
    },
    {
      Name: 'Yashpreet Singh',
      role: 'Community Advocate',
      github: 'https://github.com/yashpreet2707',
      linkedin: 'https://linkedin.com/in/yashpreet2707',
      img: yash
    }
  ],
  [
    //Array 2
    // {
    //   Name: 'Mahak',
    //   role: 'Community Manager',
    //   github: '',
    //   linkedin: '',
    //   img: Ryah
    // },
    {
      Name: 'Khushi',
      role: 'Event Manager',
      github: 'https://github.com/kanand2003',
      linkedin: 'https://www.linkedin.com/in/khushi-anand-a5826122a/',
      img: khushi
    },
    {
      Name: 'Abdul Kadir',
      role: 'Desginer Lead',
      github: 'https://github.com/AK3847',
      linkedin: 'https://www.linkedin.com/in/abdul-kadir-14164a22b/',
      img: abdul
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Ryah Garcia',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
 
 
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}], //Array 4
  [{src: swoc},{src: frnk}]
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is a 24 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label: 'Who can attend?',
        content:
          'Limbo Hacks is open to all undergraduate, high school students and middle school students from all schools.'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.'
      },
      {
        label: 'How team formation works?',
        content:
          "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need is to fill our form above and join Discord, we will guide you through everything there'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at (rehan@limbohacks.tech or hello@limbohacks.tech) we would happy to help you.'
      },
      {
        label: 'Can i volunteer?',
        content:
          'Yes we are actively looking for volunteers, fill the form (in footer section) we will be glad to have you.'
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! Participants will recieveing Limbo Hacks swag!.'
      }
    ]
  ]
];

export {
  calenderStartingDate, FOOTER, frequentlyAskedQuestions, JudgesInfo, MIDDLE_SECTION, Prizeinfo, schedule, SOCIALS, sponsorLogos,
  TeamInfo, TOP_SECTION
};

