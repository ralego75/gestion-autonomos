const ingresosDao = require('../daos/ingresos-dao')

exports.requestCreateIngreso = (req, res) => new Promise((resolve, reject) => {
    var body = []
    req.on('data', chunk =>
        body.push(chunk)).on('end', () => ingresosDao.insertDocument(JSON.parse(Buffer.concat(body).toString())).then(
                r => resolve(r),
                e => reject(e)
            )
        )
})

exports.requestReadIngreso = (params) => { return ingresosDao.findDocumentById(params.ingreso) }
exports.requestUpdateIngreso = (documentId, document) => { return ingresosDao.updateDocumentById(documentId, document) }
exports.requestDeleteIngreso = (params) => { return ingresosDao.deleteDocumentById(params.ingreso) }

exports.requestListAllIngresos = () => { return ingresosDao.findAllDocuments() }
exports.requestListMonthlyIngresos = (params) => { return ingresosDao.findDocumentsByYearAndMonth(params.year, params.month) }
exports.requestListQuarterlyIngresos = (params) => { return ingresosDao.findDocumentsByYearAndQuarter(params.year, params.quarter) }
exports.requestListAnnualIngresos = (params) => { return ingresosDao.findDocumentsByYear(params.year) }