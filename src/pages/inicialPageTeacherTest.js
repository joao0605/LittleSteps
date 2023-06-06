import InicialPageTeacher from "@/components/inicialPage/inicialPageTeacher"
import NavButtonTeacher from "@/components/navButton/navButtonTeacher"
import TopBar from "@/components/navButton/topBar"

export default function inicialPage() {

    //aqui vamos verificar se o perfil é do tipo pai ou responsável e enviar a resposta como props, para modificar o formulario
    return (
        <div>
            <TopBar />
            <InicialPageTeacher />
        </div>
    )
}