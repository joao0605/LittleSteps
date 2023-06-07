import { getDailyForm } from "@/controllers/StudentController";

export default async function (req, res) {
    console.log("OLA")
    if( req.method ==="GET"){
        // const dateInMS = req.query.date
        // console.log(dateInMS)
        // console.log(new Date(Number(dateInMS)))
        getDailyForm(req, res)
    }  
}