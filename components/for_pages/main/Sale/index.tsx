import Button from '@/components/ui/Button'
import { useAppContext } from '@/context/state'
import { ModalType } from '@/types/enums'
import styles from './index.module.scss'

interface Props {
  text: string
}

export default function Sale(props: Props) {

  const appContext = useAppContext()

  return (
    <div className={styles.root}>
      <h2>{props.text}</h2>
      <div>
        <Button onClick={() => appContext.showModal(ModalType.Special)} style='white' >
          details
        </Button>
      </div>
    </div>
  )
}

