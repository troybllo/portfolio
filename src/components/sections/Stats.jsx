import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';

const Stats = () => {
  const stats = [
    { end: '6', suffix: '+', label: 'Projects Completed' },
    { end: '3.7', suffix: '', label: 'GPA' },
    { end: '10', suffix: '+', label: 'Technologies' },
    { end: '2025', suffix: '', label: 'Graduate' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="stats" className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
