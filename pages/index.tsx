import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import cookie from 'js-cookie'
import LayoutAuthorized from "@/components/for_pages/LayoutAuthorized"
import styles from './index.module.scss'
import classNames from "classnames"
import Item from "@/components/for_pages/main/Item"
import Sale from "@/components/for_pages/main/Sale"
import PageHeader from "@/components/for_pages/PageHeader"
import { useAppContext } from "@/context/state"
import { ModalType } from "@/types/enums"

export default function IndexPage() {

  const router = useRouter()

  const appContext = useAppContext()

  if (cookie.get('token') === 'authorized') {

    useEffect(() => {
      appContext.showModal(ModalType.Special)
    }, [])

    const [active, setActive] = useState<string>('all')

    const items = [
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      }, {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
      {
        img: 'https://play-lh.googleusercontent.com/Rpuw8GCrKS57Ta_h40o37ASajBpaVjEWWcylF9xwkqDtIIyupdJ5iMNEt9qXyj9atkQ=s180',
        title: 'Otter Ocean - Treasure Hunt', price: '10 ₽'
      },
    ]

    const renderItems = (items: any[], from: number, to: number) => {
      return items.length > from && items.length - 1 > from ? items.slice(from, Math.min(items.length, to)).map((i, index) =>
        <Item item={i} key={index} />
      ) :
        items.length > from && items.length - 1 === from ? items.slice(from).map((i, index) =>
          <Item item={i} key={index} />
        )
          :
          null
    }

    return (
      <LayoutAuthorized>
        <PageHeader title='Tasks' />
        <div className={styles.filter}>
          <div
            onClick={() => setActive('all')}
            className={classNames(styles.switch, { [styles.active]: active === 'all' })}>
            all
          </div>
          <div
            onClick={() => setActive('apps')}
            className={classNames(styles.switch, { [styles.active]: active === 'apps' })}>
            apps
          </div>
        </div>
        <div className={styles.list}>
          {items.slice(0, 4).map((i, index) =>
            <Item item={i} key={index} />
          )}
          {items.length > 4 ? <Sale text='Limited offer!' /> : null}
          {renderItems(items, 4, 14)}
          {items.length > 14 ? <Sale text='Limited offer!' /> : null}
          {renderItems(items, 14, 20)}
          {items.length > 20 ? <Sale text='Limited offer!' /> : null}
          {renderItems(items, 20, 30)}
          {items.length > 30 ? <Sale text='Limited offer!' /> : null}
          {renderItems(items, 30, 46)}
          {items.length > 46 ? <Sale text='Limited offer!' /> : null}
          {renderItems(items, 46, items.length - 1)}
        </div>
      </LayoutAuthorized >
    )

  }
  else {
    useEffect(() => {
      router.push('/registration')
    }, [])
  }
}
