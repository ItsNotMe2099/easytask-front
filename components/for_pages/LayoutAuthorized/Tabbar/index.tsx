import styles from './index.module.scss'
import { Sticky } from 'react-sticky'
import { forwardRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import HomeSvg from '@/components/svg/HomeSvg'
import PersonalSvg from '@/components/svg/PersonalSvg'

interface Props {
  isSticky?: boolean
  restProps?: any
}

const TabBarInner = forwardRef<HTMLDivElement, Props & { style?: any }>((props, ref) => {

  const router = useRouter()

  return (
    <div className={styles.root} ref={ref} style={props.style} {...(props.restProps ?? {})}>
      <div className={styles.menu}>
        <Link href={'/'} className={classNames(styles.link, { [styles.active]: router.asPath === '/' })}>
          <span className={styles.icon}><HomeSvg /></span>
          <span className={styles.text}>Suggestions</span>
        </Link>
        <Link href={'/profile'} className={classNames(styles.link, { [styles.active]: router.asPath === '/profile' })}>
          <span className={styles.icon}><PersonalSvg /></span>
          <span className={styles.text}>Profile</span>
        </Link>
      </div>
    </div>
  )
})

TabBarInner.displayName = 'TabBarInner'
export default function TabBar(props: Props) {

  if (props.isSticky) {
    return <Sticky>{({ style, isSticky, ...rest }) => <TabBarInner {...props} restProps={rest} style={style} />}</Sticky>
  } else {
    return <TabBarInner {...props} />
  }
}
