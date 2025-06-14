import { Html } from "@react-three/drei";
import {
  positionGeometry,
  positionLocal,
  positionView,
  positionViewDirection,
} from "three/tsl";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 20, suffix: "+", label: "Coding Projects" },
  { value: 5, suffix: "+", label: "Programming Languages" },
  { value: 3, suffix: "+", label: "Finalists in Competitions" },
  { value: 300, suffix: "+", label: "GitHub Commiting" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/canva-logo.png",
  },
  {
    imgPath: "/images/logos/vscode-logo.png",
  },
  {
    imgPath: "/images/logos/webgl-logo.png",
  },
  {
    imgPath: "/images/logos/figma-logo.png",
  },
  {
    imgPath: "/images/logos/laravel-logo.png",
  },
  {
    imgPath: "/images/logos/threejs.png",
  },
  {
    imgPath: "/images/logos/react-logo.png",
  },
  {
    imgPath: "/images/logos/figma-logo.png",
  },
  {
    imgPath: "/images/logos/laravel-logo.png",
  },
  {
    imgPath: "/images/logos/threejs.png",
  },
  {
    imgPath: "/images/logos/react-logo.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/elephpant.glb",
    scale: 0.9,
    rotation: [0, 5, 0],
  },
  {
    name: "Crypto Analytics",
    modelPath: "/models/crypto.glb",
    scale: 0.3,
    rotation: [0.6, 1, 0],
  },
  {
    name: "ThreeJs Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Commit Conductor",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Fachri demonstrated deep expertise in frontend engineering using tools like VSCode. His commitment to performance and code quality significantly elevated our development workflow.",
    imgPath: "/images/logos/vscode-logo.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2022 - 2024",
    responsibilities: [
      "Built and refined frontend interfaces using modern JavaScript frameworks within VSCode.",
      "Utilized VSCode extensions and debugging tools to streamline development and detect issues efficiently.",
      "Collaborated with design and QA teams to ship pixel-perfect, accessible user experiences.",
    ],
  },

  {
    review:
      "Fachri utilized Laravel to architect scalable and maintainable backend solutions. His ability to blend backend logic with frontend integration was crucial to our project's success.",
    imgPath: "/images/logos/laravel-logo.png",
    logoPath: "/images/logo3.png",
    title: "Full Stack Developer",
    date: "June 2024 - present",
    responsibilities: [
      "Developed robust RESTful APIs and backend logic using Laravel and Eloquent ORM.",
      "Managed authentication, routing, and middleware within Laravel’s ecosystem.",
      "Integrated Laravel backends with Vue/React frontends, ensuring seamless data flow and performance.",
    ],
  },

  {
    review:
      "Fachri built performant mobile experiences using React. His React Native contributions accelerated our app's development while ensuring a smooth and polished UI.",
    imgPath: "/images/logos/react-logo.png",
    logoPath: "/images/logo4.png",
    title: "React Native Developer",
    date: "March 2025 - present",
    responsibilities: [
      "Developed cross-platform mobile applications using React Native and JavaScript.",
      "Utilized React hooks and navigation libraries to deliver a responsive and native-like experience.",
      "Integrated APIs and handled state management with Redux for scalable performance.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo3.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo4.png",
  },
];

const testimonials = [
  {
    name: "Sultan",
    mentions: "@sultan",
    review:
      "I can’t say enough good things about Fachri. He took our complex project requirements and turned them into a seamless, functional website. His problem-solving abilities are truly outstanding.",
    imgPath: "/images/client1.jpeg",
  },
  {
    name: "Alipip",
    mentions: "@alipip",
    review:
      "Working with Fachri was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web development projects.",
    imgPath: "/images/client3.jpeg",
  },
  {
    name: "Kustan",
    mentions: "@Kustan",
    review:
      "Collaborating with Fachri was an absolute pleasure. His professionalism, responsiveness, and dedication to delivering exceptional results were evident throughout the project. Fachri's enthusiasm for development truly stands out. If you're looking to elevate your website and brand, he's the perfect choice.",
    imgPath: "/images/client2.jpeg",
  },
  {
    name: "Dayats",
    mentions: "@dayat",
    review:
      "Fachri was a pleasure to work with. He took our outdated website and turned it into a fresh, intuitive, and modern platform that's easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.jpeg",
  },
  {
    name: "badran",
    mentions: "@badran",
    review:
      "Fachri’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since launch. A true professional!",
    imgPath: "/images/client4.jpeg",
  },
  {
    name: " bumi",
    mentions: "@bumi",
    review:
      "Fachri understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend development are top-notch. A great experience overall.",
    imgPath: "/images/client6.jpeg",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    URL: "https://www.instagram.com/fachri.winata/",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    URL: "https://www.linkedin.com/in/fachri-surya-winata-fatahe-88bba92ba/",
  },
  {
    name: "Github",
    imgPath: "/images/github.png",
    URL: "https://github.com/Xxdrocks",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
