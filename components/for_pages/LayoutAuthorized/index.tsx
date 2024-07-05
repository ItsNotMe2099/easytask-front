import Footer from './Footer'
import Header from './Header'
import styles from './index.module.scss'
import TabBar from './Tabbar'
import { StickyContainer } from 'react-sticky'

interface Props {
  children: React.ReactNode
}

export default function LayoutAuthorized({ children }: Props) {

  return (
    <div className={styles.root}>
      <StickyContainer>
        <Header />
        <main>
          <section>
            <div className={styles.container}>
              {children}
            </div>
          </section>
        </main>
        <Footer />
        <TabBar isSticky />
      </StickyContainer>
    </div >
  )
}
