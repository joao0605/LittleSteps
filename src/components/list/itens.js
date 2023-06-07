export default function Item({name, registration, completed, onClick}) {
  
    return (
        <div>
            <p onClick={onClick}>{name} {registration} {completed} </p>
        </div>
    )
}