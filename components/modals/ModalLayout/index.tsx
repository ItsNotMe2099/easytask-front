import styles from './index.module.scss'
import ModalHeader from '../header'
import ModalBody from '../body'
import { useAppContext } from '@/context/state'


interface Props {
  onRequestClose: () => void
  children: React.ReactNode
  title: string
}

export default function ModalLayout(props: Props) {

  const appContext = useAppContext()

  return (
    <div className={styles.dialog}>
      <ModalHeader onRequestClose={props.onRequestClose} title={props.title} />
      <ModalBody>
        {props.children}
      </ModalBody>
    </div>
  )
}
