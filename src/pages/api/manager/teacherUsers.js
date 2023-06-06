import { deleteTeacherUsers, getTeacherUsers, newTeacherUsers } from "@/controllers/TeacherController";


export default async function (req, res){
    if (req.method === "POST"){
        newTeacherUsers(req, res)
    } 
    if (req.method === "DELETE"){
        deleteTeacherUsers(req, res)
    } 
    if (req.method === "GET"){
        getTeacherUsers(req, res)
    } 
}