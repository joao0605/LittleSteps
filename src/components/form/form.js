import BathroomBox from "./bathroomBox";
import ReportBox from "./reportBox";
import BreakfastBox from "./breakfastBox";
import LunchBox from "./lunchBox";
import SleepBox from "./sleepBox";
import CommentBox from "./commentBox";
import { useState } from "react";




export default function Form() {

    // const [formData, setFormData] = useState({
    //     date: new Date(),
    //     breakfast: 2,
    //     nap: 3 
    // })

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
   
    return (
        <div>          
            <ReportBox date={relatorio.date} name={relatorio.name} />
            <div>
                <BreakfastBox />
            </div>
            <div>
                <LunchBox />
            </div>
            <div>
                <BathroomBox />
            </div>
            <div>
                <SleepBox />
            </div>
            <CommentBox />


        </div>
    )
}//  <button onClick={handleClick() }></button>