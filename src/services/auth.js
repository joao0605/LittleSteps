const { findUserAuthByEmail, createUserAuth, findUserAuth } = require('../database/auth')
const { findUserSessionByToken, createUserSession } = require("../database/sessions")


//Criar conta
async function addUserAuth(data) {
    const result = await createUserAuth(data)
    return result.insertedId
}

//Verificar se email e pass estão corretos
async function checkUserPassword(email, password) {
    const user = await findUserAuthByEmail(email)
    console.log(user)
    return !!user && (password === user.password) 
}

//Adicionar uma sessão
async function addAuthSession(uid) {
    const result = await createUserSession({ uid, expiresAt: new Date(new Date().valueOf() + 3600 * 1000) })
    return result.insertedId
}

//Devolve todas as sessões ativas
async function validateSession(token) {
    const session = await findUserSessionByToken(token)
    return session
}


//Encontra o utilizador pelo email
async function getUserByEmail(email) {
    
    const result = await findUserAuthByEmail(email)
    
    return result
}
//Encontra o utilizador pelo id
async function getUser(id) {
    const result = await findUserAuth(id)
    console.log(result)
    return result
}
//Encontra o utilizador pelo id
async function getSession(token) {
    const result = await findUserSessionByToken(token)
    return result
}


module.exports = {
    addUserAuth,
    validateSession,
    addAuthSession,
    checkUserPassword,
    getUserByEmail,
    getUser,
    getSession
}