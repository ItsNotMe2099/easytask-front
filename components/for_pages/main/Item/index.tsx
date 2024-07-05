import { useAppContext } from '@/context/state'
import { ModalType } from '@/types/enums'
import styles from './index.module.scss'

interface IItem {
  img?: string
  title: string
  price: string
}

interface Props {
  item: IItem
}

export default function Item(props: Props) {

  const appContext = useAppContext()

  return (
    <div className={styles.root} onClick={() => appContext.showModal(ModalType.Special)}>
      <div className={styles.icon}>
        <img src={props.item.img} alt='' />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <span>{props.item.title}</span>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path></svg>
        </div>
      </div>
      <div>
        <div className={styles.actions}>
          <span>{props.item.price}</span>
        </div>
      </div>
    </div>
  )
}

