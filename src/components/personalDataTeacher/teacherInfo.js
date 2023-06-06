export default function TeacherInfo({name, birthday, phoneNumber, email, address}) {

    return (
        <div>
            <h2><strong>Informações Professora</strong></h2>
            <p>Nome: {name}</p>
            <p>Data de nascimento: {birthday}</p>
            <p>Telefone/Whatsapp: {phoneNumber}</p>
            <p>Email: {email}</p>
            <p>Endereço: {address}</p>

        </div>
    )
}