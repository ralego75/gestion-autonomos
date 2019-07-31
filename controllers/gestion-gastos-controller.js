const gastosDao = require('../daos/gastos-dao')

exports.requestCreateGasto = (req, res) => new Promise((resolve, reject) => {
    var body = []
    req.on('data', chunk =>
        body.push(chunk)).on('end', () => gastosDao.insertDocument(JSON.parse(Buffer.concat(body).toString())).then(
                r => resolve(r),
                e => reject(e)
            )
        )
})

exports.requestReadGasto = (params) => { return gastosDao.findDocumentById(params.gasto) }
exports.requestUpdateGasto = (documentId, document) => { return gastosDao.updateDocumentById(documentId, document) }
exports.requestDeleteGasto = (params) => { return gastosDao.deleteDocumentById(params.gasto) }

exports.requestListAllGastos = () => { return gastosDao.findAllDocuments() }
exports.requestListMonthlyGastos = (params) => { return gastosDao.findDocumentsByYearAndMonth(params.year, params.month) }
exports.requestListQuarterlyGastos = (params) => { return gastosDao.findDocumentsByYearAndQuarter(params.year, params.quarter) }
exports.requestListAnnualGastos = (params) => { return gastosDao.findDocumentsByYear(params.year) }