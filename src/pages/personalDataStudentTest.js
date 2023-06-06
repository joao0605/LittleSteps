import NavButton from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";
import PersonalDataStudent from "@/components/personalDataStudent/personalDataStudent";
import { useEffect } from "react";

export default function personalDataStudebtTest() {

    useEffect()
    

    //aqui vamos verificar se o perfil é do tipo pai ou responsável e enviar a resposta como props, para modificar o formulario
    return (
        <div>
            <TopBar/>
            <NavButton/>
           <PersonalDataStudent/>
        </div>
    )
}