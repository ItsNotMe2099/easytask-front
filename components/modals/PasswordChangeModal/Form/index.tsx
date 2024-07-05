import styles from './index.module.scss'
import { useFormik, Form, FormikProvider } from 'formik'
import TextField from 'components/fields/TextField'
import Button from 'components/ui/Button'
import { useState } from 'react'
import { useAppContext } from '@/context/state'
import Validator from '@/utils/validator'

interface Props {

}

export default function PasswordChangeForm({ }: Props) {

  const initialValues = {
    password: '',
    passwordConfirm: ''
  }

  const handleSubmit = async () => {
    setLoading(true)
    appContext.hideModal()
    setLoading(false)
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit
  })

  const [loading, setLoading] = useState(false)

  console.log('VALUES!!!!', formik.values)

  const appContext = useAppContext()

  return (
    <FormikProvider value={formik}>
      <Form className={styles.form}>
        <TextField
          className={styles.control}
          name='password'
          label='New password'
          type={'password'}
          validate={Validator.required}
        />
        <TextField
          className={styles.control}
          name='passwordConirm'
          label='Confirm password'
          type={'password'}
          validate={Validator.combine([Validator.required, Validator.passwordsMustMatch(formik.values)])}
        />
        <Button fluid type='submit' spinner={loading}>
          Save
        </Button>
      </Form>
    </FormikProvider >
  )
}
