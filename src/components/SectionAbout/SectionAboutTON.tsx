import { FC } from "react"
import s from "./SectionAboutTON.module.scss"

const SectionAboutTON: FC = () => {
  const paragraph1 = (
    <p>
      <strong>«Soviet Girls TON»</strong> — это новая коллекция в сети The Open
      Network. Там аниме девочки. Она является началом масштабного проекта
      создания инструментов для переноса активов из сети Polygon. Главная цель
      проекта — помочь пользователям перейти из сети Polygon в экосистему TON.
    </p>
  )
  const paragraph2 = (
    <p>
      Планируется запуск моста между Polygon и TON, который позволит переводить
      токены ERC20 в Jetton и обратно между сетями. После запуска моста мы
      добавим поддержку переноса NFT. Комиссии за переводы и последующие продажи
      wNFT будут распределяться между владельцами NFT из коллекции Soviet Girls
      TON.
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
      <img src="/images/girl2.png" alt="" />
    </section>
  )
}

export default SectionAboutTON
