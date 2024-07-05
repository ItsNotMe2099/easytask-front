import styles from './index.module.scss'


interface Props {
  children: React.ReactNode
}

export default function ModalBody({ children }: Props) {

  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}
