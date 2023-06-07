import connectDB from "@/database/db-mongoose";
import { getMongooseUserModel } from "../models/User.js";

async function addUsers(req, res) {
    connectDB();
    try {
        const userData = req.body;
        const UserModel = getMongooseUserModel();
        const newUser = await UserModel.insertMany(userData)

        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


export { addUsers }