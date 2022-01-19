import heroStyles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <div>
      <h1 className={heroStyles.title}>
        <span>Website</span>Figure
      </h1>
      <p className={heroStyles.description}>Custom Websites</p>
    </div>
  );
};

export default Hero;
