// components/Motion.jsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Motion = ({ 
  children, 
  direction = "left", // left | right | up | down
  delay = 0,          // Độ trễ animation (giây)
  duration = 1,     // Thời gian animation (giây)
  threshold = 0.1,    // Kích hoạt khi 10% component hiển thị
  once = true,      // Chỉ chạy một lần
  ...props 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    threshold,
    triggerOnce: once
  });

  // Xác định vị trí ban đầu dựa trên hướng
  const getInitialPosition = () => {
    switch (direction) {
      case "left": return { x: -250, opacity: 0 };
      case "right": return { x: 250, opacity: 0 };
      case "up": return { y: 250, opacity: 0 };
      case "down": return { y: -250, opacity: 0 };
      default: return { opacity: 0 };
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { 
          delay,
          duration,
          ease: "easeOut" 
        }
      });
    } else {
      controls.start(getInitialPosition());
    }
  }, [inView, controls, direction, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={controls}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Motion;