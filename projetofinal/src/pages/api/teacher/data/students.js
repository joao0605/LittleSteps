// falta implementar com lógica correta

// retornar lista de todos os estudantes
/*app.get("/api/manager/students", async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
    }
})*/

//isso funciona!!!!!
export default function handler(req, res) {
    // Lógica para manipular a requisição e gerar a resposta
    return res.status(200).json({ message: 'Olá, mundo!' });
  }