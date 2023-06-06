import { deleteForms, getForms, newForm, newForms } from "@/controllers/FormController";



export default async function (req, res) {

    if( req.method ==="POST"){
        newForm(req, res)
        newForms(req, res)
    }  
    
    if( req.method ==="GET"){
        getForms(req, res)
    } 
    
    if( req.method ==="DELETE"){
        deleteForms(req, res)
    }



}