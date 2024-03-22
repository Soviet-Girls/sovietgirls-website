import { FC, useEffect, useState } from "react"
import s from "./Header.module.scss"

const Header: FC = () => {
  useEffect(() => {
    addEventListener("scroll", handleScroll)

    return () => removeEventListener("scroll", handleScroll)
  }, [])

  const [isHeaderSmall, setIsHeaderSmall] = useState(false)

  const handleScroll = (): void => {
    if (window.scrollY > 900) {
      setIsHeaderSmall(true)
    } else {
      setIsHeaderSmall(false)
    }
  }

  return (
    <header className={isHeaderSmall ? s.small : s.normal}>
      <div className={s.wrapper}>
        <div className={s.logo}>SOVIET GIRLS</div>
        <div className={s.links}>
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
      </div>
    </header>
  )
}

export default Header
