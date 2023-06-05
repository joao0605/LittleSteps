import { getSession, getUser, validateSession } from "@/services/auth"

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

module.exports = {
    authorize, 
    authorizeAdmin
}