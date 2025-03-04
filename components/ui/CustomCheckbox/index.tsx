import styles from './index.module.scss'
import ReactCheckbox from 'react-custom-checkbox'
import classNames from 'classnames'
import { ReactElement } from 'react'

interface Props {
  label: string | ReactElement
  checked?: boolean
  disabled?: boolean
  onChange: (val: boolean) => void
  color?: string
  shadow?: boolean
  biggerFont?: boolean
  size?: 'small' | 'normal' | 'large'
}

export const CustomCheckbox = (props: Props) => {
  const { label, checked, disabled, onChange } = props

  return (<div className={styles.root}>
    <ReactCheckbox
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      icon=
      {<div className={classNames(styles.icon, { [styles.iconActive]: checked })}><span>&#10003;</span></div>}
      borderColor={props.color}
      borderRadius={2}
      size={15}
      label={label}
      containerClassName={`${styles.checkboxContainer}`}
      labelClassName={classNames(styles.checkboxLabel, {
        [styles.small]: props.size === 'small',
        [styles.normal]: props.size === 'normal',
        [styles.large]: props.size === 'large',
      })}
      labelStyle={{}}
    />
  </div>
  )
}

CustomCheckbox.defaultProps = {
  color: '',
  size: 'normal'
}
