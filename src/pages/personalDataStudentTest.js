import NavButton from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";
import PersonalDataStudent from "@/components/personalDataStudent/personalDataStudent";

export default function personalDataStudebtTest() {

    //aqui vamos verificar se o perfil é do tipo pai ou responsável e enviar a resposta como props, para modificar o formulario
    return (
        <div>
            <TopBar/>
            <NavButton/>
           <PersonalDataStudent/>
        </div>
    )
}