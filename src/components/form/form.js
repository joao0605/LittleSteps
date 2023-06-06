<<<<<<< HEAD
import RangeSlider from "./rangeSlider";

export default function Form(){
=======
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
    //falta NAV bar que ira substituir os botões
    // ideia de fazer a parte de cima do design como um banner
    return (
        <div>
            <ButtonPersonalData />
            <ButtonDailyReport />
            <ButtonChat />
            <ButtonStudents />
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
          
>>>>>>> 7abcc80fb6517036a53412fc65a1c50b8ec9bb41

    return(
        <div>
            <RangeSlider/>
            <RangeSlider/>
            <RangeSlider/>
            <RangeSlider/>
            <RangeSlider/>
        </div>
    )
}