import win95 from "../images/Windows 95 icon.png";
import commerce from "../images/clothes.jpeg";
import blog from "../images/blog.webp";
import portfolio from "../images/portfolio.png";

const portfolio_data = {
  portfolio: {
    title: "Portfolio",
    thumbnail: portfolio,
    duration: "2023-2024",
    link: "www.google.com",
    highlight: ["data-caching"],
    description:
      "Welcome to my portfolio, where innovation and creativity collide. See how I use design and development to bring ideas to life by looking through my work.",
  },
  commerce: {
    title: "E-Commerce",
    thumbnail: commerce,
    link: "https://github.com/troybllo/Home-page",
    duration: "2024",
    highlight: [],
    description:
      "Explore the e-commerce section, showcasing a mock project designed to highlight my skills in web development and user experience. Discover how I create seamless, engaging shopping experiences through innovative design and functionality.",
  },
  hero: {
    title: "Hero-Page",
    thumbnail: win95,
    link: "https://github.com/troybllo/commerce-app",
    duration: "2024",
    highlight: [],
    description:
      "Here you'll find a showcase of all my projects, each one demonstrating my skills in web development, design, and innovative problem-solving. Explore my diverse body of work to see how I bring ideas to life through creativity and technical expertise.",
  },
  blog: {
    title: "Blog",
    thumbnail: blog,
    link: "https://github.com/troybllo",
    duration: "2023 - Present",
    highlight: [],
    description:
      "WORK IN PROGRESS \n Welcome to my blog, where I share insights, tips, and experiences from my journey in web development and design. Join me as I explore industry trends, discuss innovative techniques, and offer practical advice for fellow creatives and tech enthusiasts.",
  },
};

export default portfolio_data;
