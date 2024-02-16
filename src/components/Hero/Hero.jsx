import HeroText from './HeroText';

import css from './hero.module.css';

const Hero = ({text}) => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>PhoneBOOK</h1>
      <h2 className={css.subtitle}>Welcome to your personal phonebook!</h2>
      <HeroText/>
    </div>
  );
};

export default Hero;
