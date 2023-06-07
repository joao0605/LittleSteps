import { newTeacherUser, newTeacherUsers, deleteTeacherUsers, getTeacherUsersById, updateTeachersData } from "@/controllers/TeacherController"
import { getMongooseUserModel } from "@/models/User";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {

    if (req.method === "POST") {
        const {id} = req.query
        if(!ObjectId.isValid(id)) {
            return res.sendStatus(418)
        }
        const updatedForm = await updateTeachersData(id)
        if (!updatedForm) {
            return res.status(404).json({ error: 'Usuário não atualizado' });
        }
        res.status(200).json(updatedForm);
    }

    if (req.method === "GET") {
        const {id} = req.query
        if(!ObjectId.isValid(id)) {
            return res.sendStatus(418)
        }
        const user = await getTeacherUsersById(id)
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        return res.status(200).json(user);
    }

    if (req.method === "DELETE") {

    }



}