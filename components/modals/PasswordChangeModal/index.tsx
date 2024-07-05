//import styles from './index.module.scss'
import { useAppContext } from '@/context/state'
import PasswordChangeForm from './Form'
import ModalLayout from '../ModalLayout'


interface Props {
  onRequestClose: () => void
}

export default function PasswordChangeModal(props: Props) {

  const appContext = useAppContext()

  return (
    <ModalLayout onRequestClose={props.onRequestClose} title='come up with new password'>
      <PasswordChangeForm />
    </ModalLayout>
  )
}
