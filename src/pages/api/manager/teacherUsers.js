import { deleteTeacherUsers, getTeacherUsers, newTeacherUsers } from "@/controllers/TeacherController";


export default async function (req, res){
    if (req.method === "POST"){
        const userData = req.body;
        const newUser = await newTeacherUsers(userData)
        if (!newUser) {
            return res.status(404).json({ error: 'Usuários não adicionados' });
        }
        return res.status(200).json(newUser)
    } 
    if (req.method === "DELETE"){
        deleteTeacherUsers(req, res)
    } 
    if (req.method === "GET"){
        getTeacherUsers(req, res)
    } 
}