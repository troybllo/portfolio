import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiScala,
  SiCplusplus,
  SiR,
  SiApachespark,
  SiApachekafka,
  SiApachehadoop,
  SiApachehive,
  SiApacheairflow,
  SiDbt,
  SiSnowflake,
  SiDatabricks,
  SiAmazonwebservices,
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiTailwindcss,
  SiGit,
  SiJenkins,
  SiJira,
  SiDocker,
  SiPostgresql,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { TbApi, TbBrandNextjs } from 'react-icons/tb';

export const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'Java', icon: FaJava },
      { name: 'Go', icon: SiGo },
      { name: 'Scala', icon: SiScala },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'C++', icon: SiCplusplus },
      { name: 'R', icon: SiR },
      { name: 'SQL', icon: FaDatabase },
    ],
  },
  {
    title: 'Big Data & Cloud',
    icon: '::',
    skills: [
      { name: 'Apache Spark', icon: SiApachespark },
      { name: 'Kafka', icon: SiApachekafka },
      { name: 'Hadoop', icon: SiApachehadoop },
      { name: 'Hive', icon: SiApachehive },
      { name: 'Airflow', icon: SiApacheairflow },
      { name: 'dbt', icon: SiDbt },
      { name: 'Snowflake', icon: SiSnowflake },
      { name: 'Databricks', icon: SiDatabricks },
      { name: 'AWS', icon: SiAmazonwebservices },
    ],
  },
  {
    title: 'Frameworks',
    icon: '</>',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: TbBrandNextjs },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Tools & Databases',
    icon: '[ ]',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'CI/CD', icon: TbApi },
      { name: 'JIRA', icon: SiJira },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'REST APIs', icon: TbApi },
    ],
  },
];

export default skillCategories;
