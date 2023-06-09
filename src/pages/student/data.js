import NavButtonStudent from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";
import PersonalDataStudent from "@/components/personalDataStudent/personalDataStudent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function personalDataStudentTest() {


  const [dados, setDados] = useState(null);
  const router = useRouter()

  useEffect(() => {
    const userType = localStorage.getItem('userType')
   
    if(userType  === "userteachers"){

        router.push("/manager/data")

    } else if( userType !== "userstudents"){

        router.push("/login")
    }

}, [])

  useEffect(() => {
      async function fetchSession() {
        try {
          const res = await fetch('/api/auth/validate', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ token: localStorage.getItem("token") })
          });
          if (!res.ok) {
            throw new Error("Failed to validate session");
          }
          const data = await res.json();
          return data.session.userId;
        } catch (error) {
          console.error(error);
          // Lida com o erro, se necessário
          return null;
        }
      }
    
      async function fetchData(userId) {
        try {
          const res = await fetch(`/api/student/users/${userId}`, { method: "GET" });
          if (!res.ok) {
            throw new Error("Failed to fetch user data");
          }
          const data = await res.json();
          setDados(data);
          
        } catch (error) {
          console.error(error);
          // Lida com o erro, se necessário
        }
      }

      
    
      fetchSession()
        .then(userId => {
          if (userId) {
            return fetchData(userId);
          } else {
            // Lida com o caso em que o userId não está disponível
          }
        })
        .catch(error => {
          console.error(error);
          // Lida com o erro, se necessário
        });
    }, []);


    async function fetchData(userId) {
      try {
        const res = await fetch(`/api/student/users/${userId}`, { method: "GET" });
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await res.json();
        setDados(data);
        
      } catch (error) {
        console.error(error);
        // Lida com o erro, se necessário
      }
    }

    useEffect(() => {
      const userType = localStorage.getItem('userType')
     
      if(userType  === "userteachers"){

          router.push("/personalDataTeacherTest")

      } else if( userType !== "userstudents"){

          router.push("/login")
      }

  }, [])
    
    

    //aqui vamos verificar se o perfil é do tipo pai ou responsável e enviar a resposta como props, para modificar o formulario
    return (
      <div>
            <TopBar/>
            <NavButtonStudent page="personalDataStudentTest"/>
          
           {!dados ?<p>Ainda sem dados para carregar por aqui!</p> : <PersonalDataStudent name={dados.name} birthdate={dados.birthdate} phoneNumber={dados.phoneNumber} email={dados.email} address={dados.address} mothersName={dados.mothersName}/>}
           
        </div>
    )
}