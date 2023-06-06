import NavButtonStudent from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";
import Chat from "@/components/chat/chat";

export default function ChatTest() {

    //aqui vamos verificar se o perfil é do tipo pai ou responsável e enviar a resposta como props, para modificar o formulario
    return (
        <div>
            <TopBar />
            <NavButtonStudent />
            <div>
                <h1>Chat App</h1>
                <Chat />
            </div>
        </div>
    )
}