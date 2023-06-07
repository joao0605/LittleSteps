import { ObjectId } from 'mongodb';
import connectDB from '../database/db-mongoose'
import { getMongooseUserTeacherModel } from "../models/UserTeacher.js";

// Cria um novo user já com os dados
async function newTeacherUser(req, res) {
    connectDB()
    try {
        const userData = req.body;
        const newUser = await UserTeacher.create(userData)

        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
// Cria vários users já com os dados
async function newTeacherUsers(req, res) {
    connectDB()
    try {
        const userData = req.body;
        const newUser = await UserTeacher.insertMany(userData)

        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Apaga todos os formulários
async function deleteTeacherUsers(req, res) {
    connectDB()
    try {
        const del = await UserTeacher.deleteMany();

        return res.status(200).json(del);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Obtém o user do professor
async function getTeacherUsersById(id) {
    connectDB()
    try {
        const model = getMongooseUserTeacherModel()
        const user = await model.findById({ _id: new ObjectId(id) }).exec();
        return user;
    } catch (error) {
        console.log(error)
    }
}

export { newTeacherUser, newTeacherUsers, deleteTeacherUsers, getTeacherUsersById }
