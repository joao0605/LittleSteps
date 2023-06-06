import ButtonChat from "./buttonChat"
import ButtonDailyReport from "./buttonDailyReport"
import ButtonPersonalData from "./buttonPersonalData"
import ButtonClasse from "./buttonClasse"

//colocar imagem "Mãe e Filho" dentro da div e depois posicionar na parte inferior esquerda da tela no CSS


export default function InicialPageTeacher() {

    return (
        <div>
            <ButtonPersonalData />
            <ButtonDailyReport />
            <ButtonChat />
            <ButtonClasse />
        </div>
    )
}