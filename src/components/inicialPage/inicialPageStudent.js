import ButtonChat from "./buttonChat"
import ButtonDailyReport from "./buttonDailyReport"
import ButtonPersonalData from "./buttonPersonalData"
import ButtonRecord from "./buttonRecord"
import styles from "./buttonInicialPage.module.css"
import Image from "next/image"
import logosecundario from '../../../public/logotipoSecundario.svg'


export default function InicialPageStudent() {

    return (
        <div>
            <div className={styles.slider}>
                <div><ButtonPersonalData /></div>
                <div><ButtonDailyReport /></div>
            </div>

            <div className={styles.slider}>
                <div><ButtonChat /></div>
                <div><ButtonRecord /></div>
            </div>
            <div className={styles.logosecundario}> <Image
            src={logosecundario}/>
            </div>


        </div>
    )
}