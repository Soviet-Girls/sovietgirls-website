import { FC } from "react"
import s from "./Header.module.scss"

const Header: FC = () => {
  return (
    <header>
      <div className={s.wrapper}>
        <div className={s.link}>
          <a href="https://vk.com/@sovietgirls_nft-about" target="_blank">
            О коллекции
          </a>
        </div>
        <div className={s.link}>
          <a href="https://market.sovietgirls.su" target="_blank">
            Маркетплейс
          </a>
        </div>
        <div className={s.link}>
          <a href="https://auth.sovietgirls.su" target="_blank">
            Закрытый чат
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
