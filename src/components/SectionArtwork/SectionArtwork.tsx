import { FC } from "react"
import s from "./SectionArtwork.module.scss"

const SectionArtwork: FC = () => {
  return (
    <section className={s.artwork}>
      <div className={s.artworkContainer}>
        <img src="/images/artwork.svg" alt="" />
        <div className={s.caption}>
          <p>Уникальная NFT-коллекция</p>
          <p>из 300 советских</p>
          <p>аниме-девушек</p>
        </div>
      </div>
      <div className={s.artworkContainerMobile}>
        <img src="/images/artwork-mobile.png" alt="" className={s.cover} />
        <img src="/images/arrow-down.svg" alt="" className={s.arrow} />
      </div>
    </section>
  )
}

export default SectionArtwork
