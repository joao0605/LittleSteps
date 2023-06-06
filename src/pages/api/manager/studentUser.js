import { deleteStudentUsers, getStudentUsers, newStudentUser } from "@/controllers/StudentController";

export default async function (req, res) {

    if( req.method ==="POST"){
        newStudentUser(req, res)
    }  
    if( req.method ==="DELETE"){
        deleteStudentUsers(req, res)
    }  
    if( req.method ==="GET"){
        getStudentUsers(req, res)
    }  
    
}