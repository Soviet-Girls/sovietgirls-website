import { FC } from "react"
import s from "./SectionAboutTON.module.scss"

const SectionAboutTON: FC = () => {
  const paragraph1 = (
    <p>
      <strong>«Soviet Girls TON»</strong> — это масштабный проект в сети The Open Network (TON), 
      реализованный в виде NFT-коллекции, который предоставляет инструменты для переноса цифровых 
      активов из сети Polygon в экосистему TON.
    </p>
  )
  const paragraph2 = (
    <p>
      Коллекция включает в себя 283 уникальных персонажа с разнообразными атрибутами и параметрами, 
      которые могут являться как перспективной инвестицией, так и радующим душу украшением. Средства, 
      полученные от продажи коллекции, мы планируем использовать для запуска и развития собственных 
      сервисов в экосистеме TON. 
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
          <a href="https://telegra.ph/Informaciya-o-kollekcii-Soviet-Girls-TON-05-06" target="_blank">
            Подробнее
          </a>
        </div>
      </div>
      <img src="/images/girl2.png" alt="" />
    </section>
  )
}

export default SectionAboutTON
