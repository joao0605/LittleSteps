import StudentInfo from "./studentInfo"
import ResponsibleInfo from "./responsibleInfo"
import AddInfo from "./addInfo"

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

// Falta a Nav bar e o banner

    return (
        <div>
            <div>
                <StudentInfo name={estudante.name} birthday={estudante.date} />
            </div>
            <div>
                <ResponsibleInfo name={responsavel.name} phoneNumber={responsavel.phone} email={responsavel.email} address={responsavel.address} />
            </div>
            <div>
                <AddInfo addInfo={add.addInfo}/>
            </div>

        </div>
    )

}