import BigMenuButton from "@/components/buttons/bigMenuButton";
import Form from "@/components/form/form";
import NavButtonStudent from "@/components/navButton/navButtonStudent";
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
    const date = new Date()
    let day = date.getDate()
    let month = date.getMonth()+1

    if (day < 10){
      day =`0${day}`
    }
    if (month < 10){
      month =`0${month}`
    }
    const formatedDate = `${date.getFullYear()}-${month}-${day}`



    useEffect(() => {
      async function fetchSession() {
        try {
          const res = await fetch("/api/auth/validate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: localStorage.getItem("token") }),
          });
          if (!res.ok) {
            throw new Error("Failed to validate session");
          }
          const data = await res.json();
          console.log(data.session.userId);
          
          return data.session.userId;
        } catch (error) {
          console.error(error);
          // Lida com o erro, se necessário
          return null;
        }
      }
  
      async function fetchData() {
        const userId = await fetchSession();
        console.log("esse é o userID", userId);
        const res = await fetch(
          `/api/manager/forms/${userId}/${formatedDate}`,
          { method: "GET" }
        );
        if (res.status != 200) {
          setMessage("Formulário ainda não disponível, volte mais tarde!!");
        } else {
          const data = await res.json();
          console.log("esse eh o de dados", data);
          setDadosForm(data);
        }
      }
  
      fetchData();
    }, []);

    return (
        <div>
            <TopBar/>
            <NavButtonStudent/>
            
        {!dadosForm ? <p>{message}</p> :   <Form
          key={dadosForm.studentId} // Adicione uma chave única para cada elemento gerado
          name={dadosForm.studentId}
          breakfast={dadosForm.breakfast}
          lunch={dadosForm.lunch}
          pee={dadosForm.pee}
          poop={dadosForm.poop}
          nap={dadosForm.nap}
          observations={dadosForm.observations}
        />}
          
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