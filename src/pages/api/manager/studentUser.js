import { deleteStudentUsers, getStudentUsers, newStudentUser, updateStudentData, updateUsersData } from "@/controllers/StudentController";

export default async function (req, res) {

    if( req.method ==="POST"){
        const {id} = req.query
        if(!ObjectId.isValid(id)) {
            return res.sendStatus(418)
        }
        const updatedUser = await updateStudentData(id)
        if (!updatedUser) {
            return res.status(404).json({ error: 'Usuário não atualizado' });
        }
        res.status(200).json(updatedUser);
    }  
    if( req.method ==="DELETE"){
        deleteStudentUsers(req, res)
    }  
    if( req.method ==="GET"){
        getStudentUsers(req, res)
    }  
    
}