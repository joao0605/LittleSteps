import { useState, useEffect } from "react"

export default function RangeSlider(props){

    const[valor, setValor] = useState(props.value)

    function handleChange(e){
        setValor(e.target.value)
    }

    useEffect(() => {
    
        
        setValor(props.value)
        
      }, []);
    return(
        <div>
            <input type="range" min="0" max="5" value={valor} onChange={(e) => handleChange(e)}/>
            <p>Valor: {valor} </p>

                 </div>
    )
}