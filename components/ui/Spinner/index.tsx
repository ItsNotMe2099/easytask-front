import styles from './index.module.scss'
import { SpinnerCircular } from 'spinners-react'
import classNames from 'classnames'

interface Props {
  size: number
  color?: string
  secondaryColor?: string
  center?: boolean
  thickness?: number
}

export default function Spinner(props: Props) {
  return (
    <div className={classNames({
      [styles.root]: true,
      [styles.center]: props.center,
    })}>
      <SpinnerCircular
        size={props.size}
        color={props.color ?? '#fff'}
        secondaryColor={props.secondaryColor ?? '#fff'}
        thickness={props.thickness ?? 180}
      />
    </div>
  )
}

