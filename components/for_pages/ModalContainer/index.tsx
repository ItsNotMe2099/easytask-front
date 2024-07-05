import styles from './index.module.scss'
import { useAppContext } from 'context/state'
import Modal from 'react-modal'
import { ModalType } from 'types/enums'
import classNames from 'classnames'
import { RemoveScroll } from 'react-remove-scroll'
import { useEffect } from 'react'
import SavedModal from '@/components/modals/SavedModal'
import PasswordChangeModal from '@/components/modals/PasswordChangeModal'
import SpecialModal from '@/components/modals/SpecialModal'

interface Props { }

export default function ModalContainer(props: Props) {
  const appContext = useAppContext()
  const commonSettings = {
    onRequestClose: appContext.hideModal,
    className: styles.modal,
    overlayClassName: classNames([styles.overlay, appContext.modal && styles[appContext.modal]])
  }

  const getModalType = (modal: ModalType) => {
    switch (modal) {
      case ModalType.Saved:
        return ModalType.Saved
      case ModalType.PasswordChange:
        return ModalType.PasswordChange
      case ModalType.Special:
        return ModalType.Special
    }
  }

  return (
    <RemoveScroll enabled={!!appContext.modal}>
      <div aria-hidden="true">
        <Modal isOpen={appContext.modal === getModalType(appContext.modal)} {...commonSettings}>
          {appContext.modal === ModalType.Saved && <SavedModal onRequestClose={commonSettings.onRequestClose} />}
          {appContext.modal === ModalType.PasswordChange && <PasswordChangeModal onRequestClose={commonSettings.onRequestClose} />}
          {appContext.modal === ModalType.Special && <SpecialModal onRequestClose={commonSettings.onRequestClose} />}
        </Modal>
      </div>
    </RemoveScroll>
  )
}

