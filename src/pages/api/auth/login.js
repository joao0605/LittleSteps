
import { getUserByEmail, checkUserPassword } from '../../../services/auth'

import { createUserSession } from '../../../database/sessions'


export default async function handler(req, res) {

    try {
        if(req.method === "POST") {
            
            console.log(req.body.password)
            const user = await getUserByEmail(req.body.email ?? "");
            console.log(user)
            const isCorrect = await checkUserPassword(req.body.email ?? "", req.body.password ?? "")
            if (isCorrect) {
                //create session
                const token = await createUserSession({userId: user._id})
                return res.status(200).json({ token: token.insertedId })
            }
        }

        return res.status(403).end()
    } catch (err) {
        console.log(err)
    }
}
