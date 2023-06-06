import { updateForm } from "@/controllers/FormController";
//mudar nome de arquivo, antes era um parâmetro [id]

export default async function (req, res) {

    if( req.method ==="POST"){
        updateForm(req, res)
    }  
}