import Link from 'next/link'
import Logo from '../Logo'
import styles from './index.module.scss'

interface Props {

}

export default function Header({ }: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.row}>
          <Logo/>
          <div className={styles.menu}>
            <Link className={styles.link} href={'/'}>Tasks</Link>
          </div>
          <Link href={'/profile'} className={styles.profile}>
            <div className={styles.info}>
              <div className={styles.id}>Profile #706624</div>
              <span></span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
