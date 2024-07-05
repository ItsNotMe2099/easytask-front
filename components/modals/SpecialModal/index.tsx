import styles from './index.module.scss'
import Button from '@/components/ui/Button'
import { useAppContext } from '@/context/state'
import ModalLayout from '../ModalLayout'
import Link from 'next/link'
import { LINKS } from '@/types/constants'


interface Props {
  onRequestClose: () => void
}

interface ListItemProps {
  text: string
}

export default function SpecialModal(props: Props) {

  const appContext = useAppContext()

  const ListItem = ({ text }: ListItemProps) => {
    return (
      <div className={styles.item}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
        {text}
      </div>
    )
  }

  return (
    <ModalLayout onRequestClose={props.onRequestClose} title='SPECIAL OFFER FOR NEW USERS ONLY'>
      <div className={styles.prelend}>
        <div className={styles.title}>
          Promo!
        </div>
        <div className={styles.list}>
          <ListItem text='Access to private tasks' />
          <ListItem text='Increased reward for their implementation' />
          <ListItem text='New tasks' />
          <ListItem text='Automatic payouts' />
          <ListItem text='24/7 support' />
        </div>
        <div className={styles.contentRow}>
          <div className={styles.top}>
            Take it to the next level right now!
          </div>
          <div className={styles.priceNew}>
            <span>2485₽</span>
            <strong>29₽*</strong>
            <small>/per 5 days</small>
          </div>
        </div>
        <Button className={styles.btn} style='orange' fluid>
          Continue
        </Button>
        <div className={styles.police}>
          By continuing, you agree to the subscription to the service, <Link href={LINKS.offer}>the User Agreement, the offer</Link>, <Link href={LINKS.privacyPolicy}>the rules of the service, recurring payments</Link> for the renewal of the subscription
        </div>
      </div>
    </ModalLayout >
  )
}
