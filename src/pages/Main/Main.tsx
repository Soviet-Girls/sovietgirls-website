import { FC } from "react"
import s from "./Main.module.scss"
import SectionArtwork from "../../components/SectionArtwork/SectionArtwork"
import SectionAboutTON from "../../components/SectionAbout/SectionAboutTON"
import SectionAboutSG from "../../components/SectionAboba/SectionAboutSG"

const Main: FC = () => {
  return (
    <div className={`page ${s.main}`}>
      <SectionArtwork />
      <SectionAboutTON />
      <SectionAboutSG />
    </div>
  )
}

export default Main
