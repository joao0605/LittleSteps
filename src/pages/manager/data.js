import NavButtonTeacher from "@/components/navButton/navButtonTeacher"
import TopBar from "@/components/navButton/topBar"
import PersonalDataTeacher from "@/components/personalDataTeacher/personalDataTeacher"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function personalDataTeacherTest() {
  const router = useRouter()
  const [dados, setDados] = useState(null);

    useEffect(() => {
      const userType = localStorage.getItem('userType')
     
      if(userType  === "userstudents"){

          router.push("/student/data")

      } else if( userType !== "userteachers"){

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
            const res = await fetch(`/api/manager/users/${userId}`, { method: "GET" });
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

      
 
    return (
        <div>
            <TopBar page='Teacher'/>
            <NavButtonTeacher page="personalDataTeacherTest"/>
           {!dados ?<p>Ainda sem dados para carregar por aqui!</p> : <PersonalDataTeacher name={dados.name} birthdate={dados.birthdate} phoneNumber={dados.phoneNumber} email={dados.email} address={dados.address}/>}

           
        </div>
    )
}               