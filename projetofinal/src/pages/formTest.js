import BigMenuButton from "@/components/buttons/bigMenuButton";
import Form from "@/components/form/form";

export default function formTest() {

    
    //aqui vamos verificar se o perfil é do tipo pai ou responsável e enviar a resposta como props, para modificar o formulario
    return (
        <div>
            <BigMenuButton/>
            <Form/>
        </div>
    )
}