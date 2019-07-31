const collection = 'beneficios'
const mongoDbDao = require('./mongodb-dao')

exports.insertDocument = (document) => mongoDbDao.insertDocument(document, collection)
exports.findDocumentById = (documentId) => mongoDbDao.findDocumentById(documentId, collection)
exports.updateDocumentById = (documentId, document) => mongoDbDao.updateDocumentById(documentId, document, collection)
exports.deleteDocumentById = (documentId) => mongoDbDao.deleteDocumentById(documentId, collectionName)

exports.findAllDocuments = () => mongoDbDao.findAllDocuments(collection)
exports.findDocumentsByYear = (year) => mongoDbDao.findDocumentsByFilters({ year: year }, collection)
exports.findDocumentsByYearAndMonth = (year, month) => mongoDbDao.findDocumentsByFilters({ year: year, month: month }, collection)
exports.findDocumentsByYearAndQuarter = (year, quarter) => mongoDbDao.findDocumentsByFilters({ year: year, quarter: quarter }, collection)