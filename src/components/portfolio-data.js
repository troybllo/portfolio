import win95 from "../images/Windows 95 icon.png";
import commerce from "../images/clothes.jpeg";
import blog from "../images/blog.webp";
import portfolio from "../images/portfolio2.jpeg";
// TODO: Add spotify-analytics.png and recipe-app.png images to /src/images/
import spotifyPlaceholder from "../images/data.png"; // Temporary placeholder
import recipePlaceholder from "../images/recipe-image.png"; // Temporary placeholder

const portfolio_data = {
  spotify: {
    title: "Spotify Analytics Pipeline",
    thumbnail: spotifyPlaceholder,
    link: "https://github.com/troybllo/spotify-analytics",
    duration: "2025",
    highlight: ["data-engineering", "apache-beam", "airflow", "dbt"],
    description:
      "A production-grade data engineering project that extracts, transforms, and visualizes personal Spotify listening data using modern data stack technologies. Features automated daily data pipeline with Apache Airflow, data orchestration and monitoring, PostgreSQL data warehouse, dbt transformations for analytics-ready models, and Apache Superset interactive dashboards. Fully containerized with Docker for easy deployment and scaling. Technologies: Python, Apache Airflow 2.8, PostgreSQL 15, dbt Core 1.7, Apache Superset 3.0, Docker & Docker Compose.",
  },
  recipe: {
    title: "Feastly - Recipe Discovery App",
    thumbnail: recipePlaceholder,
    link: "https://github.com/troybllo/4P02-Recipe-App",
    duration: "2025",
    highlight: ["react", "java", "javascript"],
    description:
      "Feastly is a social recipe sharing and discovery app that enhances the culinary experience by combining recipe management, social interaction, and AI. Features personalized feed of recipes, like/share/save functionality, recipe discovery, user search and follow system, customizable profiles, and AI-powered recipe search. Built with Java backend, JavaScript and React frontend. Team project with role as Developer and Designer, showcasing collaborative development skills.",
  },
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
};

export default portfolio_data;
