//import styles from './index.module.scss'
import Layout from '@/components/for_pages/Layout'
import RegistrationForm from '@/components/for_pages/registration/Form'
//import { TestComponent } from '@/components/test'

interface Props {

}

export default function Registration({ }: Props) {

  return (
    <Layout isLogin={false}>
      <RegistrationForm/>
      {/*<TestComponent />*/}
    </Layout>
  )
}
