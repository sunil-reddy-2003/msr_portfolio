import { useEffect, useRef } from 'react';
import './GooeyNav.css';

const noise = (amount = 1) => amount / 2 - Math.random() * amount;

const getXY = (distance, pointIndex, totalPoints) => {
  const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
  return [distance * Math.cos(angle), distance * Math.sin(angle)];
};

const createParticle = ({ index, particleCount, particleDistances, particleR, animationTime, timeVariance, colors }) => {
  const rotate = noise(particleR / 10);
  const start = getXY(particleDistances[0], particleCount - index, particleCount);
  const end = getXY(particleDistances[1] + noise(7), particleCount - index, particleCount);

  return {
    start,
    end,
    time: animationTime * 2 + noise(timeVariance * 2),
    scale: 1 + noise(0.2),
    color: colors[Math.floor(Math.random() * colors.length)],
    rotate: rotate > 0 ? (rotate + particleR / 20) * 10 : (rotate - particleR / 20) * 10
  };
};

const GooeyNav = ({
  containerRef,
  targetElement,
  trigger,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4]
}) => {
  const filterRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const effect = filterRef.current;
    if (!container || !effect || !targetElement || trigger === 0) return undefined;

    const containerRect = container.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();
    Object.assign(effect.style, {
      left: `${targetRect.left - containerRect.left}px`,
      top: `${targetRect.top - containerRect.top}px`,
      width: `${targetRect.width}px`,
      height: `${targetRect.height}px`
    });

    const timeouts = [];
    const bubbleTime = animationTime * 2 + timeVariance;
    effect.style.setProperty('--time', `${bubbleTime}ms`);
    effect.classList.remove('active');
    container.classList.remove('gooey-active');
    void effect.offsetWidth;

    for (let index = 0; index < particleCount; index += 1) {
      const particleData = createParticle({
        index,
        particleCount,
        particleDistances,
        particleR,
        animationTime,
        timeVariance,
        colors
      });

      timeouts.push(window.setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${particleData.start[0]}px`);
        particle.style.setProperty('--start-y', `${particleData.start[1]}px`);
        particle.style.setProperty('--end-x', `${particleData.end[0]}px`);
        particle.style.setProperty('--end-y', `${particleData.end[1]}px`);
        particle.style.setProperty('--time', `${particleData.time}ms`);
        particle.style.setProperty('--scale', `${particleData.scale}`);
        particle.style.setProperty('--color', `var(--color-${particleData.color}, white)`);
        particle.style.setProperty('--rotate', `${particleData.rotate}deg`);
        point.classList.add('point');
        particle.appendChild(point);
        effect.appendChild(particle);

        timeouts.push(window.setTimeout(() => particle.remove(), particleData.time));
      }, 30));
    }

    const animationFrame = requestAnimationFrame(() => {
      effect.classList.add('active');
      container.classList.add('gooey-active');
    });
    timeouts.push(window.setTimeout(() => {
      effect.classList.remove('active');
      container.classList.remove('gooey-active');
    }, bubbleTime));

    return () => {
      cancelAnimationFrame(animationFrame);
      timeouts.forEach(window.clearTimeout);
      effect.replaceChildren();
      effect.classList.remove('active');
      container.classList.remove('gooey-active');
    };
  }, [animationTime, colors, containerRef, particleCount, particleDistances, particleR, targetElement, timeVariance, trigger]);

  return (
    <div className="gooey-nav-container gooey-nav-effect" aria-hidden="true">
      <span className="effect filter" ref={filterRef} />
    </div>
  );
};

export default GooeyNav;
