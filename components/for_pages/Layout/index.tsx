import styles from './index.module.scss'
import Link from 'next/link'

interface Props {
  isLogin: boolean
  children: React.ReactNode
}

export default function Layout({ isLogin, children }: Props) {

  return (
    <div className={styles.root}>
      <main>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.title}>
                {isLogin ? <>Login</> : <>Create account</>}
              </div>
              <div className={styles.subtitle}>
                Tariff changes! Be careful when accessing the service!
              </div>
            </div>
            <div className={styles.inner}>
              {children}
              <small className={styles.bottom}>
                {!isLogin ?
                  <>Already have an account? <Link href={'/login'}>Login</Link></>
                  :
                  <>Need an account? <Link href={'/registration'}>Registration</Link></>}
              </small>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
