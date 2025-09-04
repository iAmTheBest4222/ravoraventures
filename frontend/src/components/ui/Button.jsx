import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-orange text-white hover:bg-orange/90 focus:ring-orange shadow-lg hover:shadow-xl',
    secondary: 'bg-transparent text-orange border-2 border-orange hover:bg-orange hover:text-white focus:ring-orange',
    ghost: 'bg-transparent text-charcoal hover:bg-charcoal/5 focus:ring-charcoal',
    outline: 'bg-transparent text-charcoal border border-soft-gray hover:bg-charcoal hover:text-white focus:ring-charcoal',
    success: 'bg-success-green text-white hover:bg-success-green/90 focus:ring-success-green',
    danger: 'bg-warning-red text-white hover:bg-warning-red/90 focus:ring-warning-red',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {loading && (
        <motion.div
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      )}
      {children}
    </motion.button>
  );
};

export default Button;
