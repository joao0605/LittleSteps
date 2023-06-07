import BigMenuButton from "@/components/buttons/bigMenuButton";
import Form from "@/components/form/form";
import NavButtonStudent from "@/components/navButton/navButtonStudent";
import NavButton from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function formTest() {
    const router = useRouter()

    useEffect(() => {
        const logged = Boolean(localStorage.getItem('token'))
        if (!logged) {
            router.push('/login')
        }
    }, [])

    const [dadosForm, setDadosForm] = useState(null);
    const data = new Date()
    const formatedDate = `${data.getFullYear()}-${data.getMonth()}-${data.getDate()}`

  useEffect(() => {
    
    async function fetchData() {
      const res = await fetch(`/api/manager/forms/647ec872b2375619cca31e98/${formatedDate}`, {method: "GET"})
      if(res.status != 200 ){
        router.push('/login')
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
            
        {dadosForm && dadosForm.map(form => <div>{<Form edit={true} name={form.studentId} breakfast={form.breakfast} lunch={form.lunch} pee={form.pee} poop={form.poop} nap={form.nap} observations={form.observations}/>}</div>)}
          
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