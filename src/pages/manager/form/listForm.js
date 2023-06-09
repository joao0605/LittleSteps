import TopBar from "@/components/navButton/topBar"
import List from "@/components/list/list"
import NavButtonTeacher from "@/components/navButton/navButtonTeacher"
import { Alerta, ItemForm } from "@/components/list/itens"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"




export default function listForm() {

const [forms, setForms] = useState(null)

    useEffect(()=> {
        async function fetchData() {
            
            const res = await fetch(
              `/api/manager/studentUser`,
              { method: "GET" }
            );
            if (res.status != 200) {
              setMessage("Formulários ainda não disponíveis");
            } else {
              const data = await res.json();
              console.log("esse eh o de dados", data);
              setForms(data);
            }
          }

          fetchData()
    }, [])


    

//onClick tem que chamar uma function

// dentro da Div junto com LIST colocar a imagem do status

    return (
        <div>
            <TopBar />
          <NavButtonTeacher/>
          <div >
            <List >
                {forms && forms.map(i => <ItemForm  status={i.status} name={i.name} registration={i.registration} studentId={i._id}/>)}
            </List>
            </div>

            <button onClick={Alerta} > Submeter</button>

        </div>
    )
}

