import { ModalType } from '@/types/enums'
import { createContext, useContext, useState } from 'react'
import ReactModal from 'react-modal'

interface IState {
  isMobile: boolean
  isDesktop: boolean
  modal: ModalType | null
  showModal: (type: ModalType) => void
  hideModal: () => void
}

const defaultValue: IState = {
  isMobile: false,
  isDesktop: true,
  modal: null,
  showModal: (type) => null,
  hideModal: () => null,
}

const AppContext = createContext<IState>(defaultValue)

interface Props {
  children: React.ReactNode
  isMobile?: boolean
}

export function AppWrapper(props: Props) {

  const [isMobile, setIsMobile] = useState<boolean>(props.isMobile)

  const [modal, setModal] = useState<ModalType | null>(null)

  const value: IState = {
    ...defaultValue,
    isMobile: isMobile,
    isDesktop: !props.isMobile,
    modal,
    showModal: (type, args?: any) => {
      ReactModal.setAppElement('body')
      setModal(type)
    },
    hideModal: () => {
      setModal(null)
    },
  }


  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
