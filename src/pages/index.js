import { getCookie } from 'cookies-next'
import { verifica } from '../services/user'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {authorize} from '../services/permission'

export default function Home() {

  const router = useRouter();

  useEffect(() => {
      const logged = Boolean(localStorage.getItem('token'))
      if (!logged) {
          router.push('/login')
      }
  }, [])
  
 /* const [loggedIn, setLoggedIn] = useState(false)
  
  useEffect(() => {
    
    setLoggedIn(Boolean(localStorage.getItem("token")))

    // setInterval(() => {
      
    // }, 1000);
  }, [])                                                     
*/
 
  
/* useEffect(() => {
  // Verifique a autenticação do usuário
  const checkAuth = () => {
    if (typeof window !== 'undefined') {
      // Código a ser executado apenas no lado do cliente (navegador)
      const token = localStorage.getItem('token');
      const isAuthenticated = authorize(token);

      // Faça a verificação de autenticação com base no token
      // Retorne true se o usuário estiver autenticado, caso contrário, retorne false
      return isAuthenticated;
    }
    
    // Retorne false por padrão caso o código esteja sendo executado no lado do servidor
    return false;
  };

  // Verifique a autenticação do usuário
  const isAuthenticated = checkAuth();

  // Redirecione para a página de login se o usuário não estiver autenticado
  if (!isAuthenticated) {
    router.push('/login');
  }
}, []); */


  
  return (

    <div>
      { <p>Perfil do usuário</p>}
      

    </div>

  )
}


// export const getServerSideProps = async ({ req, res }) => {
//   try {
//     const token = localStorage.getItem('token'); 
//     console.log(token)
//     if (!token) {
//       throw new Error('Token Inválido');
//     }
//     authorize(token);

//     return {
//       props: {}
//     };
//   } catch (err) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/login'
//       },
//       props: {}
//     };
//   }
// };
