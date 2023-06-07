import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    registration: { type: String, required: true },
    birthdate: { type: Date, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    schoolId: { type: String },
    address: { type: String },
    fathersName: { type: String },
    mothersName: { type: String },
    courseId: { type: String, required: true },
}, { collection: "user" });


export default function getMongooseUserStudentModel() {
    if (mongoose.modelNames().includes("User")) {
        return mongoose.models.User
    } else {
        return mongoose.model("User", userSchema)
    }
} 