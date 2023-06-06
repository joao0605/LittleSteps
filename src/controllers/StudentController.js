import connectDB from '../database/db-mongoose'
import UserStudent from "../models/UserStudent.js";
import Form from "../models/Form.js";

// Cria um novo user já com os dados
async function newStudentUser(req, res) {
    connectDB()
    try {
        const userData = req.body;
        const newUser = await UserStudent.create(userData)

        return res.status(200).json(userData);
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
        const users = await UserStudent.find().exec();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Obtém o formulário do dia do aluno
async function getDailyForm(req, res) {
    connectDB()
    const { date, studentId } = req.params;
  
    try {
      const studentForm = await Form.findById(studentId);
      const dailyForm = studentForm.find((form) => form.date === date);
  
      if (!dailyForm) {
        return res.status(404).json({ error: 'Formulário do aluno não encontrado' });
      }
  
      res.status(200).json(dailyForm);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  



export { newStudentUser, newStudentUsers, deleteStudentUsers, getStudentUsers, getDailyForm }