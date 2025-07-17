import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import React from "react";
import "../App.css";
import Footer from "./Footer";

export default function Main() {
  const { isDark } = useTheme();

  const containerStyle = {
    color: isDark ? "white" : "#37393F",
  };

  const textStyle = {
    color: isDark ? "#FFFFFFEB" : "#1A202C",
  };

  return (
    <div className="Jakarta" style={containerStyle}>
      <div
        style={{ height: "calc(80vh)" }}
        className="flex flex-col items-start mt-56 ml-28 mb-32 justify-start gap-32 m-5 sm:ml-20 sm:mt-16 sm:m-0 sm:flex-col md:flex-row lg:flex-row  xl:flex-row xl:mt-72 ml-28 "
      >
        <div className=" font-bold   lg:ml-[76px] flex-col items-start gap-0 w-[500px] text-[64px] sm:text-[64px] md:text-[164px] lg:text-[164px] xl: ml-14 text-[164px] ">
          <h1 className="text-[64px] mb-0 sm:text-[64px] md:text-[164px] lg:text-[164px] xl:text-[164px]">
            Troy
          </h1>
          <h1>Bello</h1>
          <h2 className=" text-gray-500  text-[30px] sm:text-[30px] md:text-[36px] lg:text-[36px] xl:text-[36px]">
            Software Developer
          </h2>
        </div>
        <motion.div
          initial={{ x: 500, opacity: 1 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-[20px] mt-6"
          style={textStyle}
        >
          <div className="block box-border w-[400px] text-[18px] sm:text-[18px] md:text-[20px] lg:text-[20px] sm:w-[400px] md:w-[600px] lg:w-[600px] xl: ml-11 w-[600px]">
            <p className="mb-8 mt-7">
              I have an unquenchable curiosity about the intricate aspects of
              our world and the extraordinary innovations that influence it. I
              approach everything with an engineering mindset, especially in
              software, using curiosity as my guiding principle. Whether I'm
              exploring through the perspective of software engineering or
              adapting to different viewpoints as needed, my aim is always to
              discover the world's ingenious wonders.
            </p>
            <p className="mb-8">
              So far, I have developed a profound connection with electronics,
              mechanical architectures, music, art, philosophy, and others.
              These diverse interests allow me to share a rich tapestry of
              experiences with you in my distinct and unconventional way.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4" style={textStyle}>Technical Skills</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2" style={{ color: isDark ? "#9CA3AF" : "#6B7280" }}>Programming Languages</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>Python</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>Java</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>C++</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>JavaScript</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>TypeScript</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt="R" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>R</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" alt="Scala" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>Scala</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>Go</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>HTML</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>CSS</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>SQL</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2" style={{ color: isDark ? "#9CA3AF" : "#6B7280" }}>Big Data Technologies</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" alt="Hadoop" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>Hadoop</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" alt="Apache Hive" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>Apache Hive</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" alt="Apache Beam" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>Apache Beam</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-50'}`}>
                    <img src="https://www.databricks.com/sites/default/files/2021-05/db-nav-logo.svg" alt="Databricks" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>Databricks</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-50'}`}>
                    <img src="https://logos-world.net/wp-content/uploads/2022/11/Snowflake-Symbol.png" alt="Snowflake" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>Snowflake</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-50'}`}>
                    <img src="https://www.datameer.com/wp-content/uploads/2021/05/datameer-logo.svg" alt="Datameer" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>Datameer</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2" style={{ color: isDark ? "#9CA3AF" : "#6B7280" }}>Development Tools & Frameworks</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>Git</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>Jenkins</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="JIRA" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>JIRA</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                    <span className="text-sm font-medium" style={textStyle}>Agile/Scrum</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                    <span className="text-sm font-medium" style={textStyle}>CI/CD</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                    <span className="text-sm font-medium" style={textStyle}>REST APIs</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>Spring Boot</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>React</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6" />
                    <span className="text-sm font-medium" style={textStyle}>Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <Footer />
      </div>
    </div>
  );
}
