import ButtonPersonalData from "./buttonPersonalData";
import ButtonDailyReport from "./buttonDailyReport";
import ButtonChat from "./buttonChat";
import ButtonStudents from "./buttonStudents";
import BathroomBox from "./bathroomBox";
import ReportBox from "./reportBox";
import BreakfastBox from "./breakfastBox";
import LunchBox from "./lunchBox";
import SleepBox from "./sleepBox";
import CommentBox from "./commentBox";
import { useState } from "react";



export default function Form(props) {

    
    const handleChange = (name, value) => {
        
        props.onChange([name, value]);
      };

    // function handleClick() {
    //     fetch ("/api/maganer/form", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //     if (resposnse.status == 200){
    //         setFormData(
    //             {
    //                 date: new Date(),
    //                 breakfast: 2,
    //                 nap: 3 
    //             }
    //         )
    //     }
    //     return response.json()
    // }




    const relatorio = {
        name: "Joao",
        date: "05/06/23"
    }
    //falta NAV bar que ira substituir os botões
    // ideia de fazer a parte de cima do design como um banner
    return (
        <div>
            
            <ReportBox date={relatorio.date} name={props.name} />
            <div>
                <BreakfastBox value={props.breakfast}/>
               
            </div>
            <div>
                <LunchBox value={props.lunch}/>
            </div>
            <div>
                <BathroomBox numUm={props.pee} numDois={props.poop}/>
            </div>
            <div>
                <SleepBox onChange={e => handleChange('nap', e)} />
            </div>
            <CommentBox onChange={handleChange} value={props.observations} />
          

        </div>
    )
}//  <button onClick={handleClick() }></button>