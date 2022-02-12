import Navbar from './Navbar';
import Meta from './Meta';
import Hero from './Hero';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Hero />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
