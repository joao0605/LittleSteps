import BigMenuButton from "@/components/buttons/bigMenuButton";
import Form from "@/components/form/form";
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

  useEffect(() => {
    
    async function fetchData() {
      const res = await fetch('/api/manager/forms', {method: "GET"})
      const data = await res.json();
      setDadosForm(data);
      
    }

    fetchData();
    
  }, []);
    
    return (
        <div>
            <TopBar/>
            <NavButton/>
            
        {dadosForm && dadosForm.map(form => <div>{<Form name={form.studentId} peqAlm={form.breakfast} alm={form.lunch} numUm={form.pee} numDois={form.poop} soneca={form.nap} obs={form.observations}/>}</div>)}
          
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