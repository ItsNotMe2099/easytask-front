import styles from './index.module.scss'
import { useFormik, Form, FormikProvider } from 'formik'
import TextField from 'components/fields/TextField'
import Button from 'components/ui/Button'
import CheckBoxField from '@/components/fields/CheckBoxField'
import Link from 'next/link'
import Validator from '@/utils/validator'
import { useState } from 'react'

interface Props {

}

export default function LoginForm({ }: Props) {

  const initialValues = {
    email: '',
    password: '',
    checkbox: false
  }

  const handleSubmit = async () => {
    setLoading(true)

    setLoading(false)
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit
  })

  const [loading, setLoading] = useState(false)

  return (
    <FormikProvider value={formik}>
      <Form className={styles.form}>
        <TextField
          name='login'
          label='E-Mail'
          validate={Validator.combine([Validator.required, Validator.email])} />
        <TextField
          className={styles.key}
          name='password'
          type={'password'}
          label='Password'
          validate={Validator.required} />
        <div className={styles.checkbox}>
          <CheckBoxField name='checkbox' label={'Remember me'} validate={Validator.required} />
          <small><Link className={styles.forgot} href={'/#'}>Forgot password?</Link></small>
        </div>
        <Button type='submit' fluid spinner={loading}>
          Login
        </Button>
      </Form>
    </FormikProvider >
  )
}
