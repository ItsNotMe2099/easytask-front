import styles from './index.module.scss'
import { useFormik, Form, FormikProvider } from 'formik'
import TextField from 'components/fields/TextField'
import Button from 'components/ui/Button'
import Validator from '@/utils/validator'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAppContext } from '@/context/state'

interface Props {

}

export default function RegistrationForm({ }: Props) {

  const initialValues = {
    email: '',
    password: '',
  }

  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const appContext = useAppContext()

  const handleSubmit = async () => {
    setLoading(true)
    cookie.set('token', 'authorized', { expires: 365 * 3 })
    router.push('/')
    setLoading(false)
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit
  })

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
        <Button type='submit' fluid spinner={loading}>
          Create account
        </Button>
      </Form>
    </FormikProvider >
  )
}
