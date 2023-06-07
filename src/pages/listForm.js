import TopBar from "@/components/navButton/topBar"
import List from "@/components/list/list"
import NavButtonTeacher from "@/components/navButton/navButtonTeacher"
import { Alerta, ItemForm } from "@/components/list/itens"
import { useRouter } from "next/router"




export default function listForm() {

    const itens =
        [{
            name: "Nelson Medina",
            registration: "1123",
            historyDate: "21/05/2023",
            status: 2
        },
        {
            name: "Carla Medina",
            registration: "1173",
            status: 0
        },
        {
            name: "Nelson Medina",
            registration: "1123",
            data: "22/05/2023",
            status: 2
        },{
            name: "Nelson Medina",
            registration: "1123",
            data: "23/05/2023",
            status: 1
        },{
            name: "Nelson Medina",
            registration: "1123",
            data: "24/05/2023",
            status: 0
        },{
            name: "Nelson Medina",
            registration: "1123",
            data: "25/05/2023",
            status: 2
        },{
            name: "Nelson Medina",
            registration: "1123",
            data: "26/05/2023",
            status: 2
        },
    ]

       const router = useRouter()
//onClick tem que chamar uma function

// dentro da Div junto com LIST colocar a imagem do status

    return (
        <div>
            <TopBar />
          <NavButtonTeacher/>
          <div>
            <List>
                {itens.map(i => <ItemForm onClick={() => router.push('/formTest')} status={i.status} name={i.name} registration={i.registration} />)}
            </List>
            </div>

            <button onClick={Alerta} > Submeter</button>

        </div>
    )
}

