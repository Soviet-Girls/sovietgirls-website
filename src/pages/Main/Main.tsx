import { FC } from "react"
import s from "./Main.module.scss"

const Main: FC = () => {
  const paragraph1 =
    "Коллекция «Soviet Girls» состоит из 300 уникальных NFT, каждый из которых представляет собой уникальное изображение аниме-девочки в советской форме. Каждое изображение было создано с использованием передовых технологий и имеет высокую степень детализации."
  const paragraph2 =
    "Владельцы NFT «Soviet Girls» также получают эксклюзивные возможности, включая доступ в закрытую беседу ВКонтакте с внутренней информацией, прямую связь с авторами коллекции, участие в закрытых розыгрышах и ранний доступ к следующим дропам от авторов коллекции и их партнеров."

  return (
    <div className={`page ${s.main}`}>
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
      <section className={s.about}>
        <div className={s.imageWrapper}>
          <img src="/images/girl.png" alt="" />
        </div>
        <div className={s.info}>
          {/* <p>{splitTextToSpans(paragraph1)}</p>
          <p>{splitTextToSpans(paragraph2)}</p> */}
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <div className={s.buttonContainer}>
            <a href="https://vk.com/@sovietgirls_nft-about" target="_blank">
              Подробнее
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main
