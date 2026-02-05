import { motion } from 'framer-motion';

const SkillBadge = ({ skill, icon: Icon, delay = 0 }) => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        delay,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -2 }}
      className="
        inline-flex items-center gap-2
        px-4 py-2
        bg-white/5
        backdrop-blur-sm
        border border-white/10
        rounded-full
        text-sm text-gray-300
        hover:bg-white/10
        hover:text-white
        hover:border-white/20
        transition-all duration-200
        cursor-default
      "
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{skill}</span>
    </motion.div>
  );
};

export default SkillBadge;
