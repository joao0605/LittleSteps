import { getDailyForm } from "@/controllers/StudentController";

export default async function (req, res) {

    if( req.method ==="GET"){
        getDailyForm(req, res)
    }  
}