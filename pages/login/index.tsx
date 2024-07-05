//import styles from './index.module.scss'
import Layout from '@/components/for_pages/Layout'
import LoginForm from '@/components/for_pages/login/Form'

interface Props {

}

export default function Login({ }: Props) {

  return (
    <Layout isLogin>
      <LoginForm/>
    </Layout>
  )
}
