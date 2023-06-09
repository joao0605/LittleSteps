
import Image from "next/image";
import notStart from '../../../public/statusNotStart.png'
import complete from '../../../public/statusComplete.png'
import incomplete from '../../../public/statusIncomplete.png'
import calendario from '../../../public/calendario.png'
import { useRouter } from "next/router";

// pensar no status com um numero de 0 ate 2
//0 status vermelho(sem nenhuma informação)
// 1 status laranja( incomplete)
// 2 status verde(completed)


export function ItemForm({ name, registration, status, studentId }) {

    
    const router = useRouter()


    

    function verificaStatus(status) {
        return status == 2 ? complete : status == 1 ? incomplete : notStart
    }

    return (
        <div>
            <p style={{backgroundColor:"red"}} onClick={() => router.push(`/manager/form/${studentId}`)} >{name} {registration} </p>
            <Image
                src={verificaStatus(status)} />
        </div>
    )
}

// calendario é uma imagem que recebe um onclik que direciona para a lista de historico do aluno
// preciso relacionar o historico do onClick com o id do aluno


export function ItemStudents({ name, registration, onClick }) {
    const router = useRouter()

    return (
        <div>
            <p onClick={onClick}>{name} {registration} </p>
            <Image onClick={() => router.push('/listHistoryReport')}
            src={calendario}/>
        </div>
    )
}

// preciso relacionar o onClick com o id do aluno

export function ItemHistory({ name, date, onClick }) {

    return (
        <div>
            <p onClick={onClick}>{name}- {date} </p>
        </div>
    )
}

export function Alerta() {
    alert("Tem a certeza que quer submeter?");
}



