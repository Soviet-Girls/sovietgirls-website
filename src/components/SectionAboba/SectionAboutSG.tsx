import { FC } from "react"
import s from "./SectionAboutSG.module.scss"

const SectionAboutSG: FC = () => {
  const paragraph1 = (
    <p>
      Коллекция «Soviet Girls» состоит из 300 уникальных NFT, каждый из которых
      представляет собой уникальное изображение аниме-девочки в советской форме.
      Каждое изображение было создано с использованием передовых технологий и
      имеет высокую степень детализации. Токены из данной коллекции в скором времени
      будут перенесены в сеть TON.
    </p>
  )
  const paragraph2 = (
    <p>
      Владельцы NFT «Soviet Girls» также получают эксклюзивные возможности,
      включая доступ в закрытую беседу ВКонтакте с внутренней информацией,
      прямую связь с авторами коллекции, участие в закрытых розыгрышах и ранний
      доступ к следующим дропам от авторов коллекции и их партнеров.
    </p>
  )

  return (
    <section className={s.about}>
      <div className={s.info}>
        {/* <p>{splitTextToSpans(paragraph1)}</p>
          <p>{splitTextToSpans(paragraph2)}</p> */}
        {paragraph1}
        {paragraph2}
        <div className={s.buttonContainer}>
          <a href="https://vk.com/@sovietgirls_nft-about" target="_blank">
            Подробнее
          </a>
        </div>
      </div>
      <img src="/images/girl.png" alt="" />
    </section>
  )
}

export default SectionAboutSG
