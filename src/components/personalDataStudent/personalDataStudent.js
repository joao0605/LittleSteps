import StudentInfo from "./studentInfo"
import ResponsibleInfo from "./responsibleInfo"
import AddInfo from "./addInfo"
import styles from './StudentInfo.module.css'

export default function PersonalDataStudent() {

    const estudante = {
        name: "Nelson Medina",
        date: "12/05/1995"
    }
    const responsavel = {
        name: "Carla Medina",
        phone: "999 999 999",
        email: "cm_lala@hotmail.com",
        address: "Rua Lá Lá do Outro Lado"
    }
    const add = {
        addInfo: "As sextas quem busca é a Avó Jo"
    }



    return (
        <div className={styles.studentAll}>
            <div className={styles.studentInfo}>
                <StudentInfo name={estudante.name} birthday={estudante.date} />
            </div>
            <div className={styles.responsibleInfo}>
                <ResponsibleInfo name={responsavel.name} phoneNumber={responsavel.phone} email={responsavel.email} address={responsavel.address} />
            </div>
            <div className={styles.observacoesInfo}>
                <AddInfo addInfo={add.addInfo}/>
            </div>

        </div>
    )

}