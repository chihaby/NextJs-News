import heroStyles from '../styles/Hero.module.css';
import Image from 'next/image';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <div>
      {/* <h1 className={heroStyles.title}>
        <span>Website</span>Figure
      </h1>
      <p className={heroStyles.description}>Custom Websites</p> */}
      <div className={heroStyles.image_hero}>
        <Image src={heroImage} alt='Website-Figure' />
      </div>
    </div>
  );
};

export default Hero;
