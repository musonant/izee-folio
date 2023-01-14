import { Button } from '@mui/material';
import dribbbleIcon from '../../assets/img/dribbble.svg';
import linkedinIcon from '../../assets/img/linkedin.svg';
import instaIcon from '../../assets/img/insta.svg';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.cta}>
            <h3 className={styles.text}>
              Interested in <br />
              Collaborating?
            </h3>
            <Button className={styles.button}>Get in touch</Button>
          </div>

          <div className={styles.contactLinkContainer}>
            <div className={styles.divider}></div>
            <a href="mailto:israelnnaoma@gmail.com" className={styles.contactLink}>israelnnaoma@gmail.com</a>
          </div>

          <div className={styles.copyrightRow}>
            <nav>
              <ul className={styles.linksList}>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/israelnnaomauser/" rel="noreferrer">
                    <img alt="LinkedIn link" src={linkedinIcon} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/halfizee/" rel="noreferrer">
                    <img alt="Instagram link" src={instaIcon} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://dribbble.com/israelizee" rel="noreferrer">
                    <img alt="Dribbble link" src={dribbbleIcon} />
                  </a>
                </li>
              </ul>
            </nav>

            <p className={styles.copyright}>© 2022 Israel Nnaoma</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
