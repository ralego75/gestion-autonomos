const collection = 'ingresos'
const mongoDbDao = require('./mongodb-dao')

exports.insertDocument = (document) => { return mongoDbDao.insertDocument(document, collection) }
exports.findDocumentById = (documentId) => { return mongoDbDao.findDocumentById(documentId, collection) }
exports.updateDocumentById = (documentId, document) => { return mongoDbDao.updateDocumentById(documentId, document, collection) }
exports.deleteDocumentById = (documentId) => { return mongoDbDao.deleteDocumentById(documentId, collection) }

exports.findAllDocuments = () => { return mongoDbDao.findAllDocuments(collection) }
exports.findDocumentsByYear = (year) => { return mongoDbDao.findDocumentsByFilters({ year: year }, collection) }
exports.findDocumentsByYearAndMonth = (year, month) => { return mongoDbDao.findDocumentsByFilters({ year: year, month: month }, collection) }
exports.findDocumentsByYearAndQuarter = (year, quarter) => { return mongoDbDao.findDocumentsByFilters({ year: year, quarter: quarter }, collection) }