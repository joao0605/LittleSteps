import NavButtonStudent from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";
import PersonalDataStudent from "@/components/personalDataStudent/personalDataStudent";
import { useEffect } from "react";

export default function personalDataStudentTest() {

    const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);
    

    //aqui vamos verificar se o perfil é do tipo pai ou responsável e enviar a resposta como props, para modificar o formulario
    return (
        <div>
            <TopBar/>
            <NavButtonStudent/>
           <PersonalDataStudent/>
        </div>
    )
}