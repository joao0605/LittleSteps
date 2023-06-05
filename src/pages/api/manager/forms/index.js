import { newForm } from "@/controllers/FormController";



export default async function (req, res) {

    if( req.method ==="POST"){
        newForm(req, res)
    }


}