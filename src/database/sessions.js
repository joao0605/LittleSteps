const { ObjectId } = require("mongodb")
const { getMongoCollection } = require("./db")

const collectionName = "sessions"

async function findUserSessionByToken(token) {
    const collection = await getMongoCollection(collectionName)
    return collection.findOne({ _id: new ObjectId(token) })
}
async function findUserSessionsByUserId(uid) {
    const collection = await getMongoCollection(collectionName)
    return collection.find({ _id: new ObjectId(token) }).toArray()
}
async function createUserSession(data) {
    const collection = await getMongoCollection(collectionName)
    return collection.insertOne(data)
}

module.exports = {
    createUserSession,
    findUserSessionByToken,
    findUserSessionsByUserId
}