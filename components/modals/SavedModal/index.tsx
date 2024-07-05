import styles from './index.module.scss'
import Button from '@/components/ui/Button'
import { useAppContext } from '@/context/state'
import ModalLayout from '../ModalLayout'


interface Props {
  onRequestClose: () => void
}

export default function SavedModal(props: Props) {

  const appContext = useAppContext()

  return (
    <ModalLayout onRequestClose={props.onRequestClose} title='data updated'>
      <Button onClick={appContext.hideModal} className={styles.btn}>
        OK
      </Button>
    </ModalLayout >
  )
}
