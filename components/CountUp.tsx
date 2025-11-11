import React, { useState, useEffect } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min((progress / duration) * end, end);
      setCount(current);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return <span>{count.toFixed(decimals)}</span>;
};

export default CountUp;