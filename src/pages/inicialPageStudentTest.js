import InicialPageStudent from "@/components/inicialPage/inicialPageStudent"

import TopBar from "@/components/navButton/topBar"

export default function inicialPage() {

    //aqui vamos verificar se o perfil é do tipo pai ou responsável e enviar a resposta como props, para modificar o formulario
    return (
        <div>
            <TopBar />
            <InicialPageStudent />
        </div>
    )
}