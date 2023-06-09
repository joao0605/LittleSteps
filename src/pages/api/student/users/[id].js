
import { getStudentUsersById } from "@/controllers/StudentController"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {



    if (req.method === "GET") {
        const { id } = req.query
        if (!ObjectId.isValid(id)) {
            return res.status(418).json({ error: 'id não válido' });
        }
        const user = await getStudentUsersById(id)
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        return res.status(200).json(user);
    }

    if (req.method === "DELETE") {

    }

}
//falta implementar da forma correta
/*

// retorna os dados pessoais do estudante
app.get("/api/data/:studentId", async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
    }
})

// atualiza os dados do estudante
app.patch("/api/data/:studentId", async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
    }
})*/