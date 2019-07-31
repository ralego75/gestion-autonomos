const mongoClient = require('mongodb').MongoClient
const environment = require('../environments/environment').getEnvironment()

const useNewUlrParse = { useNewUrlParser: true }

const url = environment.mongoDbServer.url
const database = environment.mongoDbServer.database

const insertDocument = (db, document, collectionName, callback) => db.db(database).collection(collectionName).insertOne(document, (err, result) => callback(result)) 
    
const findDocumentById = (db, documentId, collectionName, callback) => 
    db.db(database).collection(collectionName).findOne({ _id : new require('mongodb').ObjectID(documentId) }, (err, result) => callback(result))
const updateDocumentById = (db, documentId, document, collectionName, callback) => 
    db.db(database).collection(collectionName).updateOne({ _id : new require('mongodb').ObjectID(documentId) }, { $set: document }, (err, result) => callback(result))
const deleteDocumentById = (db, documentId, collectionName, callback) => 
    db.db(database).collection(collectionName).deleteOne({ _id : new require('mongodb').ObjectID(documentId) }, (err, result) => callback(result))

const findAllDocuments = (db, collectionName, callback) => db.db(database).collection(collectionName).find({}).toArray((err, result) => callback(result))
const findDocumentsByFilters = (db, filters, collectionName, callback) => db.db(database).collection(collectionName).find(filters).toArray((err, result) => callback(result))


exports.insertDocument = (document, collectionName) => new Promise((resolve, reject) => {
    mongoClient.connect(url, useNewUlrParse, (err, db) => {
        if (err) reject(err)
        else insertDocument(db, document, collectionName, (result) => {
            db.close()
            if (result.insertedCount === 1) resolve(result)
            else reject(result)
        })
    })
})

exports.findDocumentById = (documentId, collectionName) => new Promise((resolve, reject) => {
    mongoClient.connect(url, useNewUlrParse, (err, db) => {
        if (err) reject(err)
        else findDocumentById(db, documentId, collectionName, (result) => {
            db.close()
            if (result) resolve(result)
            else reject(result)
        })
    })
})

exports.updateDocumentById = (documentId, document, collectionName) => Promise((resolve, reject) => {
    mongoClient.connect(url, useNewUlrParse, (err, db) => {
        if (err) reject(err)
        else updateDocumentById(db, documentId, document, collectionName, (result) => {
            db.close()
            if (result.updatedCount === 1) resolve(result)
            else reject(result)
        })
    })
})

exports.deleteDocumentById = (documentId, collectionName) => new Promise((resolve, reject) => {
    mongoClient.connect(url, useNewUlrParse, (err, db) => {
        if (err) reject(err)
        else deleteDocumentById(db, documentId, collectionName, (result) => {
            db.close()
            if (result.deletedCount === 1) resolve(result)
            else reject(result)
        })
    })
})

exports.findAllDocuments = (collectionName) => new Promise((resolve, reject) => {
    mongoClient.connect(url, useNewUlrParse, (err, db) => {
        if (err) reject(err)
        else findAllDocuments(db, collectionName, (result) => {
            db.close()
            if (result.length >= 1) resolve(result)
            else reject(result)
        })
    })
})

exports.findDocumentsByFilters = (filters, collectionName) => new Promise((resolve, reject) => {
    mongoClient.connect(url, useNewUlrParse, (err, db) => {
        if (err) reject(err)
        else findDocumentsByFilters(db, filters, collectionName, (result) => {
            db.close()
            if (result.foundCount >= 1) resolve(result)
            else reject(result)
        })
    })
})