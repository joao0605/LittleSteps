import SchoolInfo from "./schoolInfo"
import TeacherInfo from "./teacherInfo"
import AddInfo from "../personalDataStudent/addInfo"
import styles from './TeacherInfo.module.css'

export default function PersonalDataTeacher() {

    const escola = {
        name: "Amanhecer Feliz",
        phone: "999 999 999",
        address: "Rua das Felicidades"
    }
    const professora = {
        name: "Amanda Quaresma",
        date: "28/10/2004",
        phone: "999 999 999",
        email: "aq_amanhecer@hotmail.com",
        address: "Rua Lá Lá desse Lado"
    }
    const add = {
        addInfo: "Alergica a crianças"
    }

  

    return (
        <div className={styles.teacherAll}>
            <div className={styles.escolaInfo}>
                <SchoolInfo name={escola.name} phoneNumber={escola.phone} address={escola.address} />
            </div>
            <div className={styles.professoraInfo}>
                <TeacherInfo name={professora.name} birthday={professora.date} phoneNumber={professora.phone} email={professora.email} address={professora.address} />
            </div>
            <div className={styles.observacoesInfo}>
                <AddInfo addInfo={add.addInfo} />
            </div>

        </div>
    )

}