

import testimonial1 from '../public/testimonial1.png';
import testimonial2 from '../public/testimonial2.png';
import ms1 from "..public/ms1.png"


export interface MenuLink {
  id: number;
  title: string;
  url: string;
  dropdownItems?: { label: string; href: string }[]; 
}


export const menuLinks = [
    {
        id: 3,
        title: 'Home',
        url: '/',
    },
    {
        id: 3,
        title: 'About',
        url: '/about',
    },

     {
        id: 5,
        title: 'Work with me',
        url: '/services',
    },
    {
        id: 1,
        title: 'Resources',
        url: '/resources',
        dropdownItems: [
      { label: 'Books', href: '/resources/books' },
      // { label: 'Courses', href: '/resources/courses' },
      { label: 'Testimonial', href: '/resources/testimonial' },
      
    ],
    },

    {
        id: 1,
        title: 'Events',
        url: '/events',
    },
    
];

export const slides = [
  {
    src: '/ms3.jpeg',
    alt: 'The Inter',
    prompt: '',
    title: 'Build Lasting Relationship and Marriage',
    description: 'Transform your inner world and build relationships you truly deserve using proven emotional and connection frameworks. No more chasing validation, sacrificing your peace, or losing your sense of worth.',
    //cta: 'Join the Course',
    // link: '/ai-champions',
    // cta2: 'Contact Us',
    // link2: '/contact',
    cta: 'Explore Services',
    link: '/services',
    cta2: 'Contact Us',
    link2: '/contact',

  },
  {
    src: '/sliderimage.jpeg',
    alt: 'LAB',
    prompt: 'Coming Soon',
    title: 'Love Accelerator Bootcamp (LAB)',
    description: 'The Love Accelerator Bootcamp (LAB) is a transformative 3-day virtual bootcamp designed to uncover the beliefs and patterns that may be limiting your ability to attract and maintain an ideal relationship. ',
    cta: 'Join the Waitlist',
    link: '#',
    cta2: 'Contact Us',
    link2: '/contact',
  },
  {
    src: '/sliderimage2.jpeg',
    alt: '3C Masterclass',
    prompt: 'Coming Soon',
    title: 'Couples Reconnect (3Cs Masterclass)',
    description: 'An in-depth program aimed at helping married couples overcome barriers to deep connection, effective communication, and peaceful conflict resolution.',
    cta: 'Join the Waitlist',
    link: '#',
    cta2: 'Contact Us',
    link2: '/contact',
  },
];

export const footerLinks = [
    {
    title: "Quick Links",
    links: [
      { title: "About", url: "/about" },
      { title: "Work with Me", url: "/services" },
      { title: "Events", url: "/events" },
      { title: "Books", url: "/resources/books" },
      { title: "Contact Us", url: "/contact" },
    ],
  },
  {
    title: "Communities",
    links: [
      { title: "The Singles Tribe", url: "/singlestribe" },
      { title: "The Couples Tribe", url: "/couplestribe" },
      { title: "The Forge", url: "https://tr.ee/moO-e9K5LR" },
     
    ],
  },

  {
    title: "Contact",
    links: [

      { title: "Book a Meeting", url: "#" },
      { title: "+234 706 223 3111", url: "#" },
      { title: "info@askmrzsparkles.com", url: "#" },
      { title: "Send a Message", url: "/contact" },

    ],
  },
// {
//     title: "Subscribe",
//     links: [

       

//     ],
//   },

   
];

export const metrics = [
    {
        id: 1,
        figure: '200+',
        title: 'Happy Clients',
        
    },
    {
        id: 2,
        figure: '40+',
        title: 'Successful Program', 
        
    },
    {
        id: 3,
        figure: '10+',
        title: 'Different Countries',
 
    }
];


export const services = [
  {
    title: "Singles Coaching, Counseling & Therapy",
    subtitle: "(Become Whole, Choose Better, Build Longer)",
    description: "Before building a life with someone else, you must first build one within. Whether you’re single, dating, or engaged, this space is for purpose-driven, ambitious singles who are growth-focused and unwilling to settle. I’m here to walk with you through this phase…",
    image: "/SINGLESPIC1.png",
  },
  {
    title: "Couples Coaching, Counselling & Therapy",
    subtitle: "(Reconnect. Revive. Reinforce)",
    description: "When two lives come together, the journey begins after “I do.” But life, stress, and unmet expectations can dim the spark. Whether you apply alone or with your spouse, I’m here to help you navigate this phase. ",
    image: "/COUPLESPICS1.png",
  },
  {
    title: "Premarital Coaching Program (PCP)",
    subtitle: "(Build a Strong Foundation Before Saying - I Do)",
    description: "Premarital sessions with MrzSparkles aren’t just a box to tick—they’re a life-changing experience designed to help you discover who you truly are, understand your partner and relationship, and equip you with tools and techniques to navigate every season and build a lasting marriage.",
    image: "/PMPCOACHINGPICS.png"
  },
  {
    title: "Marriage Health Check (MCH)",
    subtitle: "(Assess. Adjust. Elevate)",
    description: "Is your marriage thriving or just surviving? A Sparkling marriage needs ongoing care—and growth begins when you pause, reflect, and adjust what’s needed to move forward together.",
    image: "/MHCHECKPICS.png",
  },
 
];

export const fullservices = [
  {
    title: "Singles Coaching, Counseling & Therapy",
    subtitle: "(Become Whole, Choose Better, Build Longer)",
    // description: "Before building a life with someone else, you must first build a life within yourself. Whether you are single and waiting, dating or engaged to be married, I’m here to hold your hand through this phase.If you're a purpose-driven single ambitious....",
    image: "/SINGLESPIC1.png",
  },
  {
    title: "Couples Coaching, Counselling & Therapy",
    subtitle: "(Reconnect. Revive. Reinforce)",
    //description: "When two lives come together, the journey doesn’t stop at the - I do. It’s just the beginning. Even the best of us can lose sight of what brought us together when life, work, and responsibilities take over.Whether you wish to apply alone or with your Spouse...",
    image: "/COUPLESPICS1.png",
  },
  {
    title: "Premarital Coaching Program (PCP)",
    subtitle: "(Build a Strong Foundation Before Saying - I Do)",
    //description: "Premarital sessions with MrzSparkles is not a program taken to tick a box that you have done the premarital classes, it is a life changing experience created to open you up to the reality of who you are, the partner you have chosen for marriage and the kind ....",
    image: "/PMPCOACHINGPICS.png",
  },
  {
    title: "Marriage Health Check (MCH)",
    subtitle: "(Assess. Adjust. Elevate)",
    //description: "Is your marriage thriving or just surviving? A Sparkling marriage needs continuous care and attention to flourish and the best way to achieve growth in marriage is to learn to pause and reflect on where you are, where you want to go, and what needs to be adjusted for growth...",
    image: "/MHCHECKPICS.png",
  },
 
];


export const testimonial = [
    {
        
        id: 1,
        quote: 'I wasnt sure I would get much value from the session, but it turned out to be a good experience. I learnt new things about my partner, especially the importance of understanding her love languages, cultural beliefs, and specific traits I need to pay attention to and improve on.',
        name: 'E.N. Port Harcourt',
       
    },
    {
        id: 2,
        quote: 'I was not sure if counselling would make a difference, but this program turned out to be a real blessing. It taught me so many valuable lessons as I started this new chapter. From financial responsibility to sex education in marriage, setting boundaries with in-laws and friends, embracing godly values, and learning how to work as a team with my partner — every part was impactful. I’ll definitely recommend it to friends and family.',
        name: 'Goodness, Canada',
       
    },

];

export const alltestimonial = [
    {   
        id: 1,
        quote: 'I came in hoping for someone balanced and objective, and my first session with MrzSparkles was a big win. It felt so relieving to talk openly about my marriage without feeling judged. She listened attentively and offered practical, down-to-earth guidance. Since then, there’s been real improvement. My wife and I now appreciate our differences better, and I’ve picked up valuable insights I can apply in our marriage. Sometimes, it just helps to have what you know reaffirmed by someone else.',
        name: 'Paul, UK',
        
       
    },
    {
        id: 2,
        quote: 'I was not sure if counselling would make a difference, but this program turned out to be a real blessing. It taught me so many valuable lessons as I started this new chapter. From financial responsibility to sex education in marriage, setting boundaries with in-laws and friends, embracing godly values, and learning how to work as a team with my partner — every part was impactful. I’ll definitely recommend it to friends and family.',
        name: 'Goodness, Canada',
       
    },
 {
        id: 3,
        quote: 'We didn’t know her before and I’m usually not quick to open up to strangers, but we knew we needed to lay a strong foundation for our marriage. Church counselling hadn’t been enough, so we decided to involve a professional—and that made all the difference. I learned to express my thoughts and feelings more intentionally (even though I thought I was already good at it), and her sessions opened up new perspectives I’d never considered before.',
        name: 'AC, Canada',
        
    },

     {
        id: 4,
        quote: 'I came into the program feeling hopeless, defeated, and scared—convinced my marriage was beyond redemption. I wasn’t sure what to expect, but I’m so glad I took the step. The sessions were practical, direct, and truly addressed the real issues. I felt safe opening up without fear of judgment or it getting back to my spouse. Your expertise is undeniable—you truly know your stuff. I thoroughly enjoyed every session.',
        name: 'C. Lagos',
        
    },
     {
        id: 5,
        quote: 'I wasnt sure I would get much value from the session, but it turned out to be a good experience. I learnt new things about my partner, especially the importance of understanding her love languages, cultural beliefs, and specific traits I need to pay attention to and improve on.',
        name: 'E.N. Port Harcourt',
        
    },


];



export const cta = [
    {
        id: 1,
        title: 'Individual',

        content: 'Who is your Guy?.. Let us be the partner in your journey into Tech, you can trust the process. Work smarter, not harder: Get expert advice on how to increase productivity, inspire creativity, or handle challenges expertly in your current position or one you take on later',

        image: testimonial2,
        buttonTitle: 'Courses',
        url: '/courses',
    },
    {
        id: 2,
        title: 'Corporate/Business',
        content: 'Professional Staff training courses applicable to any corporate organization - We drive a smarter workplace, get expert advice on how to increase productivity at work, inspire creativity and drive innovation within the workplace. ',
        image: testimonial2,
        buttonTitle: 'Explore',
        url:'/community/workforce',
    },
];

// export const learningPath = [
// {
//         id: 1,
//         image: cyb,
//         title: 'Cybersecurity',
//         description: 'Dive into the world of cybersecurity and learn how to protect systems, networks, and data from digital threats.',
//         duration: '12-16 weeks',
//         url: '/courses/cybersecurity',
//     },
//      {
//         id: 3,
//         image: productImage,
//         title: 'School of Products',
//         description: ' Learn the art of building cutting-edge products, explore methodologies, user experience design principles, and agile development practices',
//         duration: '12-14 weeks',
//         url: '/courses/course-product',
//     },
//       {
//         id: 4,
//         image: dataImage,
//         title: 'Data School',
//         description: 'Unlock the power of data, explore data collection, analysis, visualization, and interpretation techniques for decision making. ',
//         duration: '12-14 weeks',
//         url: '/courses/course-data', 
//     },
//     {
//         id: 5,
//         image: swImage,
//         title: 'Software Engineering',
//         description: ' Master the craft of software engineering from design and methodologies to testing and deployment strategies.',
//         duration: '12-14 weeks',
//         url: '/courses/software',
//     },
//     //  {
//     //     id: 7,
//     //     image: AIImage,
//     //     title: 'School of AI',
//     //     description: 'Embark on a journey into the realm of AI, from machine learning to neural networks, delve into the intricacies of AI technology. ',
//     //     duration: 'N/A',
//     //     url: '/courses/ai',
//     // },
//      {
//         id: 8,
//         image: GISIMAGE,
//         title: 'Geographic Information Systems',
//         description: 'Explore the fascinating field of GIS, learn how to capture, store, analyze, and visualize spatial data to solve real-world problems',
//         duration: '12-14 weeks',
//         url: '/courses/course-gis',
//     }, 
   
//     // {
//     //     id: 2,
//     //     image: QAImage,
//     //     title: 'Software Testing (QA)',
//     //     description: 'Master the art of software testing, explore testing methodologies, strategies, and tools used to ensure software quality and reliability.  ',
//     //     duration: '8-10 weeks',
//     //     url: '/courses/software-quality-assurance',
//     // },
   
  
//     // {
//     //     id: 6,
//     //     image: VAImage,
//     //     title: 'Virtual Assistant',
//     //     description: 'Enter the world of virtual assistants and learn how to design, develop, and deploy conversational AI applications. ',
//     //     duration: 'N/A',
//     //     url: '#', //replace # with '/blockchain-school',
//     // },
    
     
// ];

// export const values = [
//     {
//         id: 1,
//         title: 'Compassion',
//         description: 'Supportive, Empathy, Appreciative, Care about mental health.',
//         image: compassionIcon,
//     },
//     {
//         id: 3,
//         title: 'Accountability',
//         description: 'Take ownership, Growth mindset, Role model and Leader.',
//         image: accountabilityIcon,
//     },
//     {
//         id: 2,
//         title: 'Respect',
//         description: 'Self- awareness, Kindness, Equality, Zero bullying, Zero discrimination.',
//         image: respectIcon,
//     },
    
// ];

// export const services1 = [
//     {
//         id: 1,
//         title: 'School of Tech',
//         description: 'Our training programs are designed to help you or your team become proficient in the latest software and hardware technologies. Our courses are available in a variety of formats, including in-person, online, and customized on-site training.',
//         image: dotIcon,
//     },
//     {
//         id: 2,
//         title: 'Talent As a Service(TaaS)',
//         description: 'Providing a flexible and scalable approach to accessing top talent precisely when it is needed. Exploring the benefits, insights, and curated talent network that will transform talent acquisition and management strategies.',
//         image: dotIcon,
//     },
//     {
//         id: 3,
//         title: 'Tech Product Development',
//         description: 'bpurple can see through the development of products for her clients, from the ideation stage to full implementation while sticking to the business requirements and deployment timeline',
//         image: dotIcon,
//     },
//     {
//         id: 4,
//         title: 'Consulting',
//         description: 'Need help implementing new technology solutions or optimizing your existing ones? Our consulting services can provide you with the expert guidance you need to make informed decisions and achieve your goals.',
//         image: dotIcon,
//     },
// ];

// export const courseDetails = [
//     {
//         id: 1,
//         content: '10-30 weeks',
//         title: 'Duration',
//         image: durationIcon,
//     },
//     {
//         id: 2,
//         content: 'Beginner',
//         title: 'Level', 
//         image: levelIcon,
//     },
//     {
//         id: 3,
//         content: 'Laptop, Internet access',
//         title: 'Prerequisites',
//         image: prerequisiteIcon,
//     },
//     {
//         id: 4,
//         content: 'Capstone projects',
//         title: 'Projects',
//         image: projectIcon,
//     },
// ];

// export const generalInfo = [
//     {
//         id: 1,
//         image: locationIcon,
//         title: 'Are the programs onsite or on-line?',
//         content: 'Our programs are 100% remote',
//     },
//     {
//         id: 2,
//         image: pinIcon,
//         title: 'Where are we located?',
//         content: 'We are fully REMOTE',
//     },
//     {
//         id: 3,
//         image: learnIcon,
//         title: 'Do I have access to mentors?',
//         content: 'Yes, every learner is assigned a mentor, who monitors and track growth',
//     },
//     {
//         id: 1,
//         image: scheduleIcon,
//         title: 'Do I have access to community?',
//         content: 'All individuals who registers for our trainings have access to our large tech community',
//     },
// ];

// export const studentProfile = [
//     {
//         id: 1,
//         image: laptopIcon,
//         title: 'Do i need a laptop?',
//         content: 'A functional Laptop is an essential tool for any of our programs',
//     },
//     {
//         id: 2,
//         image: ageIcon,
//         title: 'What is the minimum age to apply?',
//         content: 'We accept individual of any age as long as they ca read, write and understand concepts',
//     },
//     {
//         id: 3,
//         image: paymentPlanIcon,
//         title: 'What is the Training duration?',
//         content: 'Training duration is solely dependent on the path.',
//     },
//     {
//         id: 1,
//         image: linkIcon,
//         title: 'What is the class schedule?',
//         content: 'Class schedule is also dependent on the course and mentors schedule',
//     },
// ];

// export const questions = [
//     {
//         id: 1,
//         image: questionIcon,
//         title: 'Visit FAQ page',
//         content: 'Most of your pressing questions, already been answered.',
//         url: '/faq',
//     },
//     {
//         id: 2,
//         image: mailIcon,
//         title: 'Send an email',
//         content: 'Expect a response from one of our staff within 2 to 3 hours',
//         url: '#',
//     },
//     {
//         id: 3,
//         image: whatsappIcon,
//         title: 'Hello! Whatapp',
//         content: 'You can connect with us if you are already on Telegram.',
//         url: 'https://wa.me/message/3AQABF3PD5HZM1',
//     },
//     {
//         id: 4,
//         image: venueIcon,
//         title: 'We are Social',
//         content: '@bpurplehq on all social media platform',
//         url: '/',
//     },
// ];

// export const communityLink = [
//     {
//         id: 1,
//         title: 'Career',
//         content: 'Break into tech like a PRO, start your journey with us.',
//         url: '/courses',
//     },
//     {
//         id: 2,
//         title: 'Workforce',
//         content: 'Equip you workforce with the right skill.',
//         url: '/community/workforce',
//     },
// ];

// export const workforceCard = [
//     {
//         id: 1,
//         title: 'Continuous Learning and Development:',
//         content: 'Prioritize ongoing learning and professional development initiatives. Encourage employees to upskill and reskill through training programs, certifications, and workshops.  ',
//     },
//     {
//         id: 2,
//         title: 'Embrace Diversity and Inclusion',
//         content: 'Foster a culture that values and embraces diversity in all its forms, including gender, ethnicity, age, and background. Actively seek diverse talent, create inclusive policies. ',
//     },
//     {
//         id: 3,
//         title: 'Stay Current with Emerging Technologies',
//         content: 'Assess the skills required for the future and provide training and resources to equip employees with the necessary knowledge. ',
//     },
// ]
