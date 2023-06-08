import { getSession, getUser, validateSession } from "@/services/auth"
const { getMongoCollection } = require("../database/db")

async function authorizeAdmin(token) {
    const result = await validateSession(token)
    if (!result) {
        return res.status(401).end()
    }
    const session = await getSession(token)
    req.user = await getUser(session.userId)
    if (req.user.role !== "professor") {
        return res.status(403).json({ m: "unauthorized" })
    }
    return
}

async function authorize(token) {
    const result = await validateSession(token)
    if (!result) {
        return res.status(401).end()
    }
    const session = await getSession(token)
    req.user = await getUser(session.userId)
    if (req.user.role !== "aluno") {
        return res.status(403).json({ m: "unauthorized" })
    }
    return
}


const userTeacher = "userteachers"
const userStudent = "userstudents"

async function validateStudent(email) {
    const collection = await getMongoCollection(userStudent)
    const user = await collection.findOne({ email: email })
    if(user){

        console.log("é estudante")
    }
    return user !== null
}
async function validateTeacher(email) {
    const collection = await getMongoCollection(userTeacher)
    const user = await collection.findOne({ email: email })
    if(user){

        console.log("é professor")
    }
    return user !== null
}

async function validateUser(email) {
    
    const isTeacher = await validateTeacher(email);
    const isStudent = await validateStudent(email);
    console.log(isTeacher)

    if (isTeacher) {
        return userTeacher
    } else if (isStudent) {
        return userStudent
    }
}

module.exports = {
    authorize, 
    authorizeAdmin, 
    validateUser
}