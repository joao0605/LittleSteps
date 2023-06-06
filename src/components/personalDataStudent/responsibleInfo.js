export default function ResponsibleInfo({name, phoneNumber, email, address}) {

    return (
        <div>
            <h2><strong>Informações Responsável</strong></h2>
            <p>Nome: {name}</p>
            <p>Telefone/Whatsapp: {phoneNumber}</p>
            <p>Email: {email}</p>
            <p>Endereço: {address}</p>
        </div>
    )
}