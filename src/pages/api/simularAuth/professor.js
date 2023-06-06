import { authorize, authorizeAdmin} from '../../../services/permission'

export default async function (req, res) {
    try {
        console.log(req.headers)
        const token = req.headers.authorzation
        await authorize(token)

       

        res.status(200).json({ nome: req.user.name })

    } catch (error) {
        console.log(error)
    }
}


