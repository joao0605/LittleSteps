import connectDB from '../database/db-mongoose'
import {getMongooseFormModel} from '../models/Form.js';

// Cria um novo formulário já com os dados
async function newForm(req, res) {
    try {
        connectDB()
        const formData = req.body;
        const Form = getMongooseFormModel()
        const newForm = await Form.create(formData);

        return res.status(200).json(newForm);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
// Cria vários formulários já com os dados
async function newForms(req, res) {
    try {
        connectDB()
        const formData = req.body;
        const newForm = await getMongooseFormModel().insertMany(formData)

        return res.status(200).json(newForm);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Apaga todos os formulários
async function deleteForms(req, res) {
    try {
        connectDB()
        const del = await Form.deleteMany();

        return res.status(200).json(del);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Obtém todos os formulários
async function getForms(req, res) {
    try {
        connectDB()
        const Form = getMongooseFormModel();
        const forms = await Form.find().exec();
        res.json(forms);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Atualiza o formulário
async function updateForm(req, res) {
    try {
        connectDB();
        const date = new Date(req.query.date);
        const studentId = req.query.studentId;
        const Student = getMongooseFormModel();

        const updatedForm = await Student.findOneAndUpdate({
            date: { $gte: date, $lt: new Date(date.getTime() + 24 * 60 * 60 * 1000) },
            studentId: studentId

        }, req.body, {
            new: true,
        });


        if (!updatedForm) {
            return res.status(404).json({ error: 'Formulário não atualizado' });
        }

        res.json(updatedForm);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Verifica se o formulário está completo
async function statusForm(req, res) {
    try {
        connectDB();

        const studentId = req.query.studentId;
        const date = new Date(req.query.date);
        const Student = getMongooseFormModel();

        const dailyForms = await Student.find({
            studentId: studentId,
            date: { $gte: date, $lt: new Date(date.getTime() + 24 * 60 * 60 * 1000) }
        })

        if (dailyForms['breakfast'] == null || dailyForms['nap'] == null || dailyForms['lunch'] == null) {
            return res.status(200).json(0);
        }

        res.status(200).json(1);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



export { newForm, deleteForms, newForms, getForms, updateForm, statusForm }