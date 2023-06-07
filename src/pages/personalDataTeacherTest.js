import NavButtonTeacher from "@/components/navButton/navButtonTeacher"
import TopBar from "@/components/navButton/topBar"
import PersonalDataTeacher from "@/components/personalDataTeacher/personalDataTeacher"

export default function personalDataTeacherTest() {

    //aqui vamos verificar se o perfil é do tipo pai ou responsável e enviar a resposta como props, para modificar o formulario
    return (
        <div>
            <TopBar/>
            <NavButtonTeacher/>
           <PersonalDataTeacher/>
        </div>
    )
}               