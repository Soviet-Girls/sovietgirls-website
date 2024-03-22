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
    </section>
  )
}

export default SectionArtwork
