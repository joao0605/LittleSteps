export default function SchoolInfo({ name, phoneNumber, address }) {

    return (
        <div>
            <h2><strong>Informações Escola</strong></h2>
            <p>Nome: {name}</p>
            <p>Telefone/Whatsapp: {phoneNumber}</p>
            <p>Endereço: {address}</p>
        </div>
    )
}