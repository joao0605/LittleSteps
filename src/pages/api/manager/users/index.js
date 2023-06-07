import { addUsers } from "@/controllers/UserController";

export default async function (req, res) {

    if( req.method ==="POST"){
        addUsers(req, res)
    }  
}