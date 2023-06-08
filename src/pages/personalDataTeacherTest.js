import NavButtonTeacher from "@/components/navButton/navButtonTeacher"
import TopBar from "@/components/navButton/topBar"
import PersonalDataTeacher from "@/components/personalDataTeacher/personalDataTeacher"
import { useEffect, useState } from "react";


export default function personalDataTeacherTest() {

    const [dados, setDados] = useState(null);

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
      
 
 /* const [loggedIn, setLoggedIn] = useState(false)
  
 useEffect(() => {
     
    
    /* console.log(localStorage.getItem("userType"))
     console.log(localStorage.getItem("token"))

     async function fetchSession() {
        const res = await fetch('/api/auth/validate', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({token: localStorage.getItem("token")})
        })
        const data = await res.json();
        return data.session.userId
        
      }
      async function fetchData(userId) {
        const res = await fetch(`/api/manager/users/${userId}`, {method: "GET"})
        const data = await res.json();
        setDados(data);
        console.log(data)
        
      }
      const session = fetchSession();
      fetchData(userId);

    
    }, [])
     */
 
  

    //aqui vamos verificar se o perfil é do tipo pai ou responsável e enviar a resposta como props, para modificar o formulario
    return (
        <div>
            <TopBar/>
            <NavButtonTeacher/>
           {!dados ?<p>Ainda sem dados para carregar por aqui!</p> : <PersonalDataTeacher name={dados.name} birthdate={dados.birthdate} phoneNumber={dados.phoneNumber} email={dados.email} address={dados.address}/>}

           
        </div>
    )
}               