import styles from './index.module.scss'
import { useFormik, Form, FormikProvider } from 'formik'
import TextField from 'components/fields/TextField'
import Button from 'components/ui/Button'
import { useState } from 'react'
import CreditCardField from '@/components/fields/CreditCardField'
import { useAppContext } from '@/context/state'
import { ModalType } from '@/types/enums'

interface Props {

}

export default function ProfileForm({ }: Props) {

  const initialValues = {
    card: '',
    telegram: '',
    country: '',
    city: ''
  }

  const handleSubmit = async () => {
    setLoading(true)
    appContext.showModal(ModalType.Saved)
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
        <CreditCardField
          className={styles.control}
          name='card'
          label='Card number' />
        <strong>This card number will be used to make payments.</strong>
        <TextField
          className={styles.control}
          name='telegram'
          label='Telegram'
        />
        <TextField
          className={styles.control}
          name='country'
          label='Country'
        />
        <TextField
          className={styles.control}
          name='city'
          label='City'
        />
        <Button className={styles.save} type='submit' spinner={loading}>
          Save
        </Button>
        <Button onClick={() => appContext.showModal(ModalType.PasswordChange)} className={styles.change} spinner={loading}>
          Change password
        </Button>
      </Form>
    </FormikProvider >
  )
}
