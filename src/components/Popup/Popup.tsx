import { FC, useState } from "react"
import s from "./Popup.module.scss"

const Popup: FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true)

  return (
    <div
      className={`${s.popupWrapper} ${isPopupOpen ? s.open : s.closed}`}
      onClick={() => setIsPopupOpen(false)}
    >
      <div className={s.popup}>
        <img src="/images/banner.jpg" alt="" />
        <button className={s.cross} onClick={() => setIsPopupOpen(false)}>
          X
        </button>
      </div>
    </div>
  )
}

export default Popup
