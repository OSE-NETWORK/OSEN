// Components/Navbar.jsx

import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h2>
          <span>OS.</span>
          <span>D</span>evcommunity
        </h2>
      </div>
      <ul className={styles["nav-links"]}>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/About">About us</a>
        </li>
        <li>
          <a href="/Resources">Resources</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="/Communities">Communities</a>
        </li>
      </ul>
      <div className={styles["Login-btn"]}>
        <button>Login</button>
      </div>
    </nav>
     
  );
}

export default Navbar;
