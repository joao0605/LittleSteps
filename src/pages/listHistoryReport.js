import TopBar from "@/components/navButton/topBar"
import List from "@/components/list/list"
import { useRouter } from "next/router"
import { ItemHistory } from "@/components/list/itens"
import NavButtonTeacher from "@/components/navButton/navButtonTeacher"


export default function listHistoryReport() {

    const itens =
        [{
            name: "Nelson Medina",
            registration: "1123",
            date: "21/05/2023"
        },
        {
            name: "Carla Medina",
            registration: "1173"
        },
        {
            name: "Nelson Medina",
            registration: "1123",
            date: "22/05/2023"
        },{
            name: "Nelson Medina",
            registration: "1123",
            date: "23/05/2023"
        },{
            name: "Nelson Medina",
            registration: "1123",
            date: "24/05/2023"
        },{
            name: "Nelson Medina",
            registration: "1123",
            date: "25/05/2023"
        },{
            name: "Nelson Medina",
            registration: "1123",
            date: "26/05/2023"
        },
    ]

    const router = useRouter()
//onClick tem que chamar uma function

    return (
        <div>
            <TopBar page='Teacher' />
            <NavButtonTeacher/>
            <List>
                {itens.map(i => <ItemHistory onClick={() => router.push('/formTeacher')} name={i.name} date={i.date}/>)}
            </List>
            

        </div>
    )
}


