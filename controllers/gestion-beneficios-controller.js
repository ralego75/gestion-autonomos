const beneficiosDao = require('../daos/beneficios-dao')

exports.requestCreateBeneficio = (req, res) => new Promise((resolve, reject) => {
    var body = []
    req.on('data', chunk =>
        body.push(chunk)).on('end', () => beneficiosDao.insertDocument(JSON.parse(Buffer.concat(body).toString())).then(
                r => resolve(r),
                e => reject(e)
            )
        )
})

exports.requestReadBeneficio = (params) => { return beneficiosDao.findDocumentById(params.beneficio) }
exports.requestUpdateBeneficio = (documentId, document) => { return beneficiosDao.updateDocumentById(documentId, document) }
exports.requestDeleteBeneficio = (params) => { return beneficiosDao.deleteDocumentById(params.beneficio) }

exports.requestListAllBeneficios = () => { return beneficiosDao.findAllDocuments() }
exports.requestListMonthlyBeneficios = (params) => { return beneficiosDao.findDocumentsByYearAndMonth(params.year, params.month) }
exports.requestListQuarterlyBeneficios = (params) => { return beneficiosDao.findDocumentsByYearAndQuarter(params.year, params.quarter) }
exports.requestListAnnualBeneficios = (params) => { return beneficiosDao.findDocumentsByYear(params.year) }