import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  hover = true,
  accent = null,
  gradient = null,
  padding = 'p-6',
  ...props
}) => {
  const baseClasses = `
    bg-white/5
    backdrop-blur-lg
    border border-white/10
    rounded-2xl
    ${padding}
  `;

  const hoverClasses = hover
    ? 'hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300'
    : '';

  const accentClasses = accent
    ? `border-${accent}-500/30 hover:border-${accent}-500/50 hover:shadow-glow-${accent}`
    : '';

  const gradientClasses = gradient || '';

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${accentClasses} ${gradientClasses} ${className}`}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
