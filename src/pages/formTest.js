import BigMenuButton from "@/components/buttons/bigMenuButton";
import Form from "@/components/form/form";
import NavButton from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";


export default function formTest() {

    
    //aqui vamos verificar se o perfil é do tipo pai ou responsável e enviar a resposta como props, para modificar o formulario
    return (
        <div>
            <TopBar/>
            <NavButton/>
            <Form/>

           
        </div>
    )
}

export const getServerSideProps = async ({ req, res }) => {
    try {
      const token = getCookie('authorization', { req, res }); 
      if (!token) {
        throw new Error('Token Inválido');
      }
      authorize(token);
  
      return {
        props: {}
      };
    } catch (err) {
      return {
        redirect: {
          permanent: false,
          destination: '/login'
        },
        props: {}
      };
    }
  };