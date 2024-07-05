import { CONTACTS, LINKS } from '@/types/constants'
import Link from 'next/link'
import Logo from '../Logo'
import styles from './index.module.scss'

interface Props {

}

export default function Footer({ }: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.logo}><Logo /></div>
          <div className={styles.col}>
            <div className={styles.contact}>
              <div className={styles.title}>
                Контакты
              </div>
              <div className={styles.body}>
                <Link href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</Link>
                <Link href={LINKS.offer}>OFFER CONTRACT</Link>
              </div>
            </div>
          </div>
          <div className={styles.last}>
            <Link href={LINKS.offer}>Offer</Link>
            <Link href={LINKS.privacyPolicy}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
