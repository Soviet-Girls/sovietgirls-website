import { FC } from "react"
import s from "./Footer.module.scss"

const Footer: FC = () => {
  return (
    <footer>
      <div className={s.wrapper}>
        <div className={s.copyright}>© Soviet Girls 2024</div>
        <div className={s.links}>
          <a href="https://sovietgirls.su/license.pdf" target="_blank">
            Лицензионное соглашение
          </a>
          <a href="https://market.sovietgirls.su" target="_blank">
            Маркетплейс
          </a>
        </div>
        <div className={s.contacts}>
          <div>help@sovietgirls.su</div>
          <a href="https://vk.com/sovietgirls_nft">
            <img src="/images/vk.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
