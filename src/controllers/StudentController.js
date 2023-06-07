
import getMongoCollection from '../database/db'
import { getMongooseUserStudentModel } from '@/models/User';
import { getMongooseFormModel } from "../models/Form.js";
import { ObjectId } from 'mongodb';

import { format } from "date-fns";
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
    // connectDB();

    try {
        // const form = getMongooseFormModel();
        console.log(req.query.date)
        const id = req.query.id;
        const newDate = new Date(req.query.date);
        console.log(newDate)

        const formattedDate = format(newDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")

        console.log(formattedDate)
        // const studentForm = await form.findById({ _id: new ObjectId(id) });
        // const dailyForm = await studentForm.findOne({ date: formattedDate });

        // if (!dailyForm) {
        //     return res.status(404).json({ error: 'Formulário do aluno não encontrado' });
        // }

        res.status(200).json(dailyForm);
    } catch (error) {
        res.status(500).json({ error: error.message });
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




export { newStudentUser, newStudentUsers, deleteStudentUsers, getStudentUsers, getDailyForm, updateStudentData }