import styles from './index.module.scss'

interface Props {
  title: string
}

export default function PageHeader({ title }: Props) {

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.subtitle}>
        Tariff changes! Be careful when accessing the service!
      </div>
    </div>
  )
}
