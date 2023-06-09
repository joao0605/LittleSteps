import NavButtonStudent from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";
import Chat from "@/components/chat/chat";
import styles from '../components/chat/chat.module.css'


// function verificaNav(){
//     if(page="formTeacher" || page == 'listStudents' || page == 'personalDataTeacherTest'){
//         return NavButtonTeacher
//     }
// }

export default function ChatTest() {

    //aqui vamos verificar se o perfil é do tipo pai ou responsável e enviar a resposta como props, para modificar o formulario
    
        
    
    return (
        <div>
            <TopBar />
           <NavButtonStudent page="chatStudent" />
            <div className={styles.chatBody}>
                <h1 className={styles.chatTitle}>Chat App</h1>
                <Chat />
            </div>
        </div>
    )
}