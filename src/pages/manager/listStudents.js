import TopBar from "@/components/navButton/topBar"
import NavButtonTeacher from "@/components/navButton/navButtonTeacher"
import List from "@/components/list/list"
import styles from '../../components/list/list.module.css'
import { useRouter } from "next/router"

import { ItemStudents } from "@/components/list/itens"



export default function listStudents() {

    function handleClick() {

        router.push("/manager/charTest")

    }


    const router = useRouter()
    const itens =
        [{
            name: "Ettore Pritty",
            registration: "4740"
        },
        {
            name: " Willi Dorricott",
            registration: "1173"
        },
        {
            name: " Alfred O'Farrell",
            registration: "8120"
        }, {
            name: "Kevyn Hawtin",
            registration: "8052"
        }, {
            name: "Jarvis Zecchinelli",
            registration: "1968"
        }, {
            name: "Parry Albertson",
            registration: "1642"
        }, {
            name: "Sandra Bailiss",
            registration: "6938"
        }
        ]

    //onClick tem que chamar uma function


    // dentro da Div junto com LIST colocar a imagem do calendario com onClick que direciona para o historico de relatorios
    // colocar a rota para ao clicar no nome/id ir para a pagina com as informações do aluno



    return (
        <div>
            <TopBar page='Teacher' />
            <NavButtonTeacher page="listStudents" />

            <div className={styles.container}>
                <List >
                    {itens.map(i => <ItemStudents name={i.name} registration={i.registration} />)}
                </List>
            </div>


        </div>
    )
}


