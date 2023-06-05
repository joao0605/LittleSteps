import { getCookie } from 'cookies-next'
import { verifica } from '../services/user'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false)
  
  useEffect(() => {
    
    setLoggedIn(Boolean(localStorage.getItem("token")))

    // setInterval(() => {
      
    // }, 1000);
  }, [])                                                     

 
  
  

  
  return (

    <div>
      { <p>Perfil do usuário</p>}
      

    </div>

  )
}


// export const getServerSideProps = async ({ req, res }) => {
//   try {
//     const token = getCookie('authorization', { req, res })
//     if(!token){
//       throw new Error('Token Inválido')
//     }
//     verifica(token)

//     return {
//       props: {}
//     }
//   } catch (err) {
//     return {
//       redirect: {
//         permanent: false, 
//         destination:'/login'
//       },
//       props: {}
//     }
//   }
// }