import Logo from "../Logo";
import styles from "./header.module.scss";
import menuIcon from '../../assets/img/menu-icon.svg'

export default function Header() {
  return (
    <div>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <Logo />

          <div>
            <img alt="menu" src={menuIcon} />
          </div>
        </div>
      </header>
    </div>
  )
}
