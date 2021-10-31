import React, { useState, useEffect } from 'react';
// Animation
import { motion } from 'framer-motion';

// Variants
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const bannerRowTop = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: 0.4,
    },
  },
};

const bannerRowBottom = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 1,
    },
  },
};

const bannerRowBottomText = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: 1.8,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setPlayMarquee(true);
  }, []);
  return (
    <motion.div className='banner' variants={banner} animate='animate'>
      <BannerRowTop title={'brand'} />
      <BannerRowCenter title={'experience'} playMarquee={playMarquee} />
      <BannerRowBottom title={'studio'} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter) => (
      <motion.span className='row-letter' variants={letterAnimation}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={'banner-row'}>
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        className='row-col'
        variants={bannerRowTop}
        initial='initial'
        animate='animate'
      >
        <span className='row-message'>
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={'banner-row center'}>
      <motion.div
        className='scroll'
        variants={bannerRowBottom}
        initial='initial'
        animate='animate'
      >
        <motion.span
          variants={bannerRowBottomText}
          initial='initial'
          animate='animate'
        >
          scroll
        </motion.span>
        <motion.span
          variants={bannerRowBottomText}
          initial='initial'
          animate='animate'
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && 'animate'}`}>
      <div className='marquee__inner'>
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  );
};

export default Banner;
