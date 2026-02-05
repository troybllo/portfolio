import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="education" className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-4xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* Education Card */}
        <motion.div variants={itemVariants}>
          <GlassCard padding="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              {/* Left: University Info */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Brock University</h3>
                <p className="text-lg text-blue-400 mb-4">
                  Bachelor of Science, Computer Science & Business (Honours)
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-4 h-4" />
                    <span>Graduated October 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="w-4 h-4" />
                    <span>St. Catharines, ON</span>
                  </div>
                </div>
              </div>

              {/* Right: GPA Badge */}
              <div className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <FiAward className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">GPA</span>
                </div>
                <span className="text-4xl font-bold text-white">3.7</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Data Structures & Algorithms',
                  'Database Systems',
                  'Software Engineering',
                  'Machine Learning',
                  'Distributed Systems',
                  'Business Analytics',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
