import styles from './index.module.scss'
import LayoutAuthorized from '@/components/for_pages/LayoutAuthorized'
import PageHeader from '@/components/for_pages/PageHeader'
import ProfileForm from '@/components/for_pages/profile/Form'

interface Props {

}

export default function Profile({ }: Props) {

  return (
    <LayoutAuthorized>
      <PageHeader title='Profile' />
      <div className={styles.inner}>
        <div className={styles.tabs}>
          <div className={styles.badge}>
            <span>Profile</span>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.profile}>
                <div className={styles.login}>
                  Login: some login
                </div>
                <ProfileForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAuthorized>
  )
}
