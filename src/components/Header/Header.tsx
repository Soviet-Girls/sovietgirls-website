import { FC, useEffect, useState } from "react"
import s from "./Header.module.scss"
import Footer from "../Footer/Footer"

const Header: FC = () => {
  useEffect(() => {
    addEventListener("scroll", handleScroll)
    addEventListener("resize", handleResize)

    return () => {
      removeEventListener("scroll", handleScroll)
      removeEventListener("resize", handleResize)
    }
  }, [])

  const [isHeaderSmall, setIsHeaderSmall] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [viewportHeight, setViewportHeight] = useState(
    Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0,
    ),
  )

  const handleScroll = (): void => {
    if (window.scrollY > 900) {
      setIsHeaderSmall(true)
    } else {
      setIsHeaderSmall(false)
    }
  }

  const handleResize = (): void => {
    setViewportHeight(
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      ),
    )
  }

  return (
    <header
      className={`${isHeaderSmall ? s.small : s.normal} ${isMenuVisible ? s.dark : ""}`}
    >
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
        <button
          className={s.chezbargo}
          onClick={() => setIsMenuVisible((isMenuVisible) => !isMenuVisible)}
        >
          <img src="/images/chezbargo.svg" alt="" />
        </button>
      </div>
      <div
        className={`${s.menu} ${isMenuVisible ? s.visible : s.hidden}`}
        style={{
          height: `${viewportHeight - 50}px`,
        }}
      >
        <div className={s.content}>
          <a href="https://vk.com/@sovietgirls_nft-about" target="_blank">
            О коллекции
          </a>
          <a href="https://market.sovietgirls.su" target="_blank">
            Маркетплейс
          </a>
          <a href="https://auth.sovietgirls.su" target="_blank">
            Закрытый чат
          </a>
        </div>
        <Footer />
      </div>
    </header>
  )
}

export default Header
