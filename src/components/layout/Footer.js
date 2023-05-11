import {FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
   return (
      <footer className={styles.footer}>
         <ul className={styles.footerList}>
            <li>
               <FaInstagram />
            </li>
            <li>
               <FaLinkedin />
            </li>
            <li>
               <FaYoutube />
            </li>
         </ul>
         <p className={styles.copyRight}><span>Costs </span>&copy; 2023</p>
      </footer>
   )
}

export default Footer