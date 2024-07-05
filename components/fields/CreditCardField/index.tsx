import styles from './index.module.scss'
import { FieldConfig, useField } from 'formik'
import classNames from 'classnames'
import { IField } from 'types/types'
import ErrorInput from 'components/fields/ErrorInput'
import { useState } from 'react'
import InputMask from 'react-input-mask'

interface Props extends IField<string> {
  className?: string
  onChange?: (val: string) => void
  label: string
}

export default function CreditCardField(props: Props) {
  // @ts-ignore
  const [field, meta, helpers] = useField(props as FieldConfig)
  const showError = meta.touched && !!meta.error
  const [focused, setFocus] = useState<boolean>(false)

  const mask = '9999 9999 9999 9999'

  const handleLabel = () => {
    if (!field.value) {
      setFocus(false)
    }
  }

  const renderInput = (inputProps) => {
    return (<input
      {...inputProps}
      disabled={props.disabled}
      type={props.type}
      className={classNames({
        [styles.input]: true,
        [styles.inputError]: showError,
      })}
      placeholder={props.placeholder}
    />)
  }

  return (
    <div className={classNames(styles.root, props.className)}>
      <div className={styles.label}>
        {props.label}
      </div>
      <InputMask {...field} mask={mask} onChange={(e) => {
          field.onChange(e)
          if (props.onChange) {
            props.onChange(e.currentTarget.value)
          }
        }}
        onBlur={(e) => {
          handleLabel()
          field.onBlur(e)
        }}
        onFocus={() => {
          setFocus(true)
        }}>
        {(inputProps) =>
          renderInput(inputProps)}</InputMask>
      <ErrorInput {...meta} />
    </div>
  )
}

