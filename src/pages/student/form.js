import BigMenuButton from "@/components/buttons/bigMenuButton";
import Form from "@/components/form/form";
import NavButtonStudent from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function formTest() {
    const router = useRouter()
    
    
    const [dadosForm, setDadosForm] = useState(null);
    const [studentId, setStudentId] = useState(null);
    const [studentData, setStudentData] = useState()
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
    
    
    const [message, setMessage] = useState("Formulário ainda não disponível, volte mais tarde!!")
    useEffect(() => {
      const userType = localStorage.getItem('userType')
     
      if(userType  === "userteachers"){

          router.push("/formTeacher")

      } else if( userType !== "userstudents"){

          router.push("/login")
      }

  }, [])
    
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
          setStudentId(data.session.userId);
          
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


    useEffect(()=> {
      console.log(router)
  
      async function fetchData() {
  
        if (studentId !== 'undefined'){
  
          const res = await fetch(
            `/api/student/users/${studentId}`,
            { method: "GET" }
          );
          if (res.status != 200) {
            
          } else {
            const data = await res.json();
            console.log(data)
            setStudentData(data);
          }
        }
      }
  
        fetchData()
  
    
  }, [studentId])

    return (
        <div>
            <TopBar/>
            <NavButtonStudent page="formTest"/>
            
        {!dadosForm ? <p>{message}</p> :   <Form
          key={dadosForm.studentId} // Adicione uma chave única para cada elemento gerado
          name={studentData && studentData.name}
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