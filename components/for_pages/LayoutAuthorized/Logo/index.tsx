import Link from 'next/link'
import styles from './index.module.scss'
import classNames from 'classnames'

interface Props {
  className?: string
}

export default function Logo({ className }: Props) {

  return (
    <Link href={'/'} className={classNames(styles.logo, className)}><span><b>Easy</b><br /></span>Task</Link>
  )
}
