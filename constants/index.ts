

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
    src: '/sliderimage2.jpeg',
    alt: '14-days-challenge',
    prompt: 'Coming Soon',
    title: '14 Days to Peaceful Conversations Challenge',
    description: 'What If One Small Shift Could Change Every Conversation in Your Marriage?',
    cta: 'Join the Challenge',
    link: '/14-days-challenge',
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
    title: "Newletters",
    links: [
      { title: "The Singles Tribe", url: "/singlestribe" },
      { title: "The Couples Tribe", url: "/couplestribe" },

     
    ],
  },

   {
    title: "Communities",
    links: [

      { title: "Sparkling Wives", url: "https://selar.com/theswc" },
      // { title: "Singles Tribe", url: "#" },
      // { title: "Couples", url: "#" },
      

    ],
  },

  {
    title: "Contact",
    links: [

      { title: "Book a Meeting", url: "#" },
      { title: "+234 706 223 3111", url: "#" },
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
        figure: '100+',
        title: 'Happy Clients',
        
    },
    {
        id: 2,
        figure: '10+',
        title: 'Successful Program', 
        
    },
    {
        id: 3,
        figure: '6+',
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

