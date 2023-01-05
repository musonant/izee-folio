import logoImage from '../../assets/img/logo-name.svg'
import styles from './logo.module.scss'

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={logoImage} alt="Israel Nnaoma logo" />
    </div>
  )
}
