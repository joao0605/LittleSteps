export default function StudentInfo({name, birthday}) {

    return (
        <div>
            <h2><strong>Informações Aluno</strong></h2>
            <p>Nome: {name}</p>
            <p>Data de nascimento: {birthday}</p>
        </div>
    )
}