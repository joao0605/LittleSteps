import TopBar from "@/components/navButton/topBar"
import NavButtonTeacher from "@/components/navButton/navButtonTeacher"
import List from "@/components/list/list"

import { useRouter } from "next/router"
import Item from "@/components/list/itens"

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

    return (
        <div>
            <TopBar />
            <NavButtonTeacher />
            <List>
                {itens.map(i => <Item onClick={() => router.push(i.registration)} name={i.name} registration={i.registration} />)}
            </List>
            

        </div>
    )
}


