import NavButtonStudent from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";
import PersonalDataStudent from "@/components/personalDataStudent/personalDataStudent";
import { useEffect, useState } from "react";

export default function personalDataStudentTest() {

    const [dados, setDados] = useState(null);

  useEffect(() => {
    
    async function fetchData() {
      const res = await fetch('/api/manager/forms', {method: "GET"})
      const data = await res.json();
      setDados(data);
      
    }

    fetchData();
    
  }, []);
    

    //aqui vamos verificar se o perfil é do tipo pai ou responsável e enviar a resposta como props, para modificar o formulario
    return (
      <div>
            <TopBar/>
            <NavButtonStudent/>
           <PersonalDataStudent/>
           
          {dados && dados.filter(form => form.courseId === "primario").map(form => <p>{form.observations}</p>)}
        </div>
    )
}