import ButtonChat from "./buttonChat"
import ButtonDailyReport from "./buttonDailyReport"
import ButtonPersonalData from "./buttonPersonalData"
import ButtonRecord from "./buttonRecord"
import styles from "./buttonInicialPage.module.css"

//colocar imagem "Mãe e Filho" dentro da div e depois posicionar na parte inferior esquerda da tela no CSS

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


        </div>
    )
}