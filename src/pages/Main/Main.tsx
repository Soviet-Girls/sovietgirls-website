import { FC } from "react"
import s from "./Main.module.scss"
import SectionArtwork from "../../components/SectionArtwork/SectionArtwork"
import SectionAbout from "../../components/SectionAbout/SectionAbout"

const Main: FC = () => {
  return (
    <div className={`page ${s.main}`}>
      <SectionArtwork />
      <SectionAbout />
    </div>
  )
}

export default Main
