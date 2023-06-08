
import getMongoCollection from '../database/db'
import { getMongooseUserStudentModel } from '@/models/UserStudent';
import { getMongooseFormModel } from "../models/Form.js";
import { ObjectId } from 'mongodb';
import connectDB from '@/database/db-mongoose';



// Cria um novo user já com os dados
async function newStudentUser(req, res) {
    connectDB()
    try {
        const userData = req.body;
        const newUser = await UserStudent.create(userData)

        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
// Cria vários users já com os dados
async function newStudentUsers(req, res) {
    connectDB()
    try {
        const userData = req.body;
        const newUser = await UserStudent.insertMany(userData)

        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Apaga todos os formulários
async function deleteStudentUsers(req, res) {
    connectDB()
    try {
        const del = await UserStudent.deleteMany();

        return res.status(200).json(del);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Obtém todos os formulários
async function getStudentUsers(req, res) {
    connectDB()
    try {
        const collection = await getMongoCollection(collectionName)

        const users = await collection.findOne({ email: email })

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Obtém o formulário do dia do aluno
async function getDailyForm(req, res) {
    connectDB();

    try {
        const student = getMongooseFormModel()
        const id = req.query.studentId
        const date = req.query.date
        // console.log(newDate)

        //const date = newDate.valueOf()
        console.log(date)
        console.log(id)

        const findDaily = await student.find({ date: date })


        console.log(findDaily)

        const daily = findDaily.filter(ele => ele.studentId === id)
        console.log(daily)
        res.status(200).json(daily)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getStudentUsersById(id) {
    connectDB()
    try {
        const model = getMongooseUserStudentModel()
        const user = await model.findById({ _id: new ObjectId(id) }).exec();
        return user;
    } catch (error) {
        console.log(error)
    }
}

async function updateStudentData(id) {
    connectDB()
    try {
        const model = getMongooseUserStudentModel()
        const updatedUser = await model.findByIdAndUpdate({ _id: new ObjectId(id) }, req.body, {
            new: true,
        }).exec();

        return updatedUser;
    } catch (error) {
        console.log(error)
    }
}




export { newStudentUser, newStudentUsers, deleteStudentUsers, getStudentUsers, getStudentUsersById, getDailyForm, updateStudentData }