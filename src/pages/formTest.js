import BigMenuButton from "@/components/buttons/bigMenuButton";
import Form from "@/components/form/form";
import NavButtonStudent from "@/components/navButton/navButtonStudent";
import NavButton from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function formTest() {
    const router = useRouter()
    let message = "Carregando informações"
    useEffect(() => {
        const logged = Boolean(localStorage.getItem('token'))
        if (!logged) {
            router.push('/login')
        }
    }, [])

    const [dadosForm, setDadosForm] = useState(null);
    const [userId, setUserId] = useState(null);
    const data = new Date()
    const formatedDate = `${data.getFullYear()}-${data.getMonth()}-${data.getDate()}`


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
          setUserId(data.session.userId);
        } catch (error) {
          console.error(error);
          // Lida com o erro, se necessário
          return null;
        }
      }
    
      
    
      fetchSession()
       
    }, []);
    

  useEffect(() => {
    
    async function fetchData() {
      const res = await fetch(`/api/manager/forms/${userId}/${formatedDate}`, {method: "GET"})
      if(res.status != 200 ){
        message = "Formulário ainda não disponível, volte mais tarde!!"
      }
      const data = await res.json();
      setDadosForm(data);
      
      
      
    }

    fetchData();
    
  }, []);
    
    return (
        <div>
            <TopBar/>
            <NavButtonStudent/>
            
        {!dadosForm ? <p>{message}</p> : <p>formulario</p>}
        {//{<Form  name={form.studentId} breakfast={form.breakfast} lunch={form.lunch} pee={form.pee} poop={form.poop} nap={form.nap} observations={form.observations}/>}</div>)}
        }  
        </div>
    )
}

// export const getServerSideProps = async ({ req, res }) => {
//     try {
//       const token = getCookie('authorization', { req, res }); 
//       if (!token) {
//         throw new Error('Token Inválido');
//       }
//       authorize(token);
  
//       return {
//         props: {}
//       };
//     } catch (err) {
//       return {
//         redirect: {
//           permanent: false,
//           destination: '/login'
//         },
//         props: {}
//       };
//     }
//   };