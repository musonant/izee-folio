import classNames from 'classnames'
import styles from './logo.module.scss'

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <span className={classNames([styles.text, styles.short])}>IN</span>
      <span className={classNames([styles.text, styles.long])}>Israel Nnaoma</span>
    </div>
  )
}
