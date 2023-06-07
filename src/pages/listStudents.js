import TopBar from "@/components/navButton/topBar"
import NavButtonTeacher from "@/components/navButton/navButtonTeacher"
import List from "@/components/list/list"

import { useRouter } from "next/router"

import { ItemStudents } from "@/components/list/itens"



export default function listStudents() {

    const itens =
        [{
            name: "Nelson Medina",
            registration: "1123"
        },
        {
            name: "Carla Medina",
            registration: "1173"
        },
        {
            name: "Nelson Medina",
            registration: "1123"
        },{
            name: "Nelson Medina",
            registration: "1123"
        },{
            name: "Nelson Medina",
            registration: "1123"
        },{
            name: "Nelson Medina",
            registration: "1123"
        },{
            name: "Nelson Medina",
            registration: "1123"
        },
    ]

    const router = useRouter()
//onClick tem que chamar uma function


// dentro da Div junto com LIST colocar a imagem do calendario com onClick que direciona para o historico de relatorios
// colocar a rota para ao clicar no nome/id ir para a pagina com as informações do aluno



    return (
        <div>
            <TopBar />
            <NavButtonTeacher />

            <div>
            <List>
                {itens.map(i => <ItemStudents onClick={() => router.push('/personalDataStudentTest')} name={i.name} registration={i.registration} />)}
            </List>
            </div>


        </div>
    )
}


