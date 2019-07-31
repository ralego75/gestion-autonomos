const http = require("@lme/swagger-ui-http")
const logger = require('../utils/logger-util')
const beneficiosController = require('../controllers/gestion-beneficios-controller')
const environment = require('../environments/environment').getEnvironment()

exports.init = (router) => {
        createBeneficio(router)
        createNewBeneficio(router)
        readBeneficio(router)
//        updateBeneficio(router)
//        deleteBeneficio(router)
        listAllBeneficios(router)
        listMonthlyBeneficios(router)
        listQuarterlyBeneficios(router)
        listAnnualBeneficios(router)
}

const createBeneficio = (router) => {
        /**
         * @swagger
         * /gestion/autonomos/api/beneficios: 
         *   post:
         *     tags:
         *       - FINANCIAL BENEFITS
         *     description: Create a financial benefit.
         *     produces:
         *       - application/json
         *     parameters:
         *       - name: data
         *         in: body
         *         required: true
         *         description: Body with a new benefit information.
         *         schema:
         *           type: object
         *           properties:
         *             number:
         *               type: string
         *               required: true
         *             provider:
         *               type: object
         *               required: true
         *               properties:
         *                 name:
         *                   type: string
         *                   required: true
         *                 cif:
         *                   type: string
         *                   required: true
         *             benefitdate: 
         *               type: string
         *               format: date
         *               required: true
         *             amount: 
         *               type: object
         *               required: true
         *               properties:
         *                 base:
         *                   type: number
         *                   required: true
         *                 vat:
         *                   type: object
         *                   required: true
         *                   properties:
         *                     percentage:
         *                       type: number
         *                       required: true
         *                     amount:
         *                       type: number
         *                       required: true
         *                 total:
         *                   type: number
         *                   required: true
         *             invoice:
         *               type: boolean
         *               required: true
         *             benefittype:
         *               type: string
         *               required: true
         *     responses:
         *       201:
         *         description: The financial benefit has been created sucessfully.
         *       400:
         *         description: The financial benefit could not be created propertly.
         */
        router.post(environment.server.urlCreateBeneficio, (req, res) => beneficiosController.requestCreateBeneficio(req, res).then(
                r => {
                        res.setHeader('Location', '/beneficios/' + r.insertedId.toHexString())
                        res.status(http.getHTTP().STATUS.CODE.CREATED).end()
                },
                e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                        errors: [{
                                userMessage: "The financial benefit could not be created propertly",
                                internalMessage: "Error inserting element into DDBB: " + e,
                                code: e.code,
                                info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm"
                        }]
                }) ))
}

const createNewBeneficio = (router) => {
        /**
         * @swagger
         * /gestion/autonomos/api/beneficios/number/{number}/suppliername/{suppliername}/suppliercif/{suppliercif}/benefitdate/{benefitdate}/taxablebase/{taxablebase}/vatpercentage/{vatpercentage}/vatamount/{vatamount}/totalamount/{totalamount}/invoice/{invoice}/benefittype/{benefittype}: 
         *   post:
         *     tags:
         *       - FINANCIAL BENEFITS
         *     description: Create a financial expense.
         *     produces:
         *       - application/json
         *     parameters:
         *       - name: number
         *         in: path
         *         required: true
         *         description: Invoice number.
         *         type: string
         *       - name: suppliername
         *         in: path
         *         description: Entity's name which we provide the services that generate the benefit.
         *         required: true
         *         type: string
         *       - name: suppliercif
         *         in: path
         *         description: Entity's cif which we provide the services that generate the benefit.
         *         required: true
         *         type: string
         *       - name: benefitdate
         *         in: path
         *         description: Date on which the benefit is generated.
         *         required: true
         *         type: string
         *         format: date
         *       - name: taxablebase
         *         in: path
         *         description: Taxable base corresponding to the benefit.
         *         required: true
         *         type: number
         *       - name: vatpercentage
         *         in: path
         *         description: VAT percentage corresponding to the benefit.
         *         required: true
         *         type: number
         *       - name: vatamount
         *         in: path
         *         description: VAT amount corresponding to the benefit.
         *         required: true
         *         type: number
         *       - name: totalamount
         *         in: path
         *         description: Total amount corresponding to the benefit.
         *         required: true
         *         type: number
         *       - name: invoice
         *         in: path
         *         description: Detemine whether the benefit is a invoice or not.
         *         required: true
         *         type: boolean
         *       - name: benefittype
         *         in: path
         *         description: Define what the benefit type is.
         *         required: true
         *         type: string
         *     responses:
         *       200:
         *         description: The financial expense has been created sucessfully.
         */
        router.post(environment.server.urlCreateNewBeneficio, (req, res) => beneficiosController.requestCreateBeneficio(req, res, req.params).then(
                r => {
                        res.setHeader('Location', '/beneficios/' + r.insertedId.toHexString())
                        res.status(http.getHTTP().STATUS.CODE.CREATED).end()
                },
                e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                        errors: [{
                                userMessage: "The financial benefit could not be created propertly",
                                internalMessage: "Error inserting element into DDBB: " + e,
                                code: e.code,
                                info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm"
                        }]
                }) ))
}

const readBeneficio = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/beneficios/{beneficioId}:
     *   get:
     *     tags:
     *       - FINANCIAL BENEFITS
     *     description: Read the financial benefit given by the beneficioId parameter.
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: beneficioId
     *         in: path
     *         description: Beneficio ID
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: The financial benefit has been read sucessfully.
     */
    router.get(environment.server.urlReadBeneficio, (req, res) => beneficiosController.requestReadBeneficio(req.params).then(
        r => res.status(http.getHTTP().STATUS.CODE.OK).json(r),
        e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                errors: [ {
                        userMessage: "The financial benefit could not be read propertly",
                        internalMessage: "Error reading element from DDBB: " + e,
                        code: e.code,
                        info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" } ] }) ))
}

//const updateBeneficio = (router) => {
//     /**
//      * @swagger
//      * /gestion/autonomos/api/beneficios/{beneficioId}:
//      *   path:
//      *     tags:
//      *       - FINANCIAL BENEFITS
//      *     description: Update the financial benefit given by the beneficioId parameter.
//      *     produces:
//      *       - application/json
//      *     parameters:
//      *       - name: beneficioId
//      *         in: path
//      *         description: Beneficio ID
//      *         required: true
//      *         type: string
//      *     responses:
//      *       200:
//      *         description: The financial benefit has been updated sucessfully.
//      */
//     router.path(environment.server.urlUpdateBeneficio, (req, res, params) => beneficiosController.requestUpdateBeneficio(params).then(
//         r => res.status(http.getHTTP().STATUS.CODE.OK).end(),
//         e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
//                 errors: [{
//                         userMessage: "The financial benefit could not be updated propertly",
//                         internalMessage: "Error updating element into DDBB: " + e,
//                         code: e.code,
//                         info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" }] }) ))
//}

//const deleteBeneficio = (router) => {
//     /**
//      * @swagger
//      * /gestion/autonomos/api/beneficios/{beneficioId}:
//      *   delete:
//      *     tags:
//      *       - FINANCIAL BENEFITS
//      *     description: Delete the financial benefit given by the beneficioId parameter.
//      *     produces:
//      *       - application/json
//      *     parameters:
//      *       - name: beneficioId
//      *         in: path
//      *         description: Beneficio ID
//      *         required: true
//      *         type: string
//      *     responses:
//      *       200:
//      *         description: The financial benefit has been deleted sucessfully.
//      */
//     router.delete(environment.server.urlDeleteBeneficio, (req, res, params) => beneficiosController.requestDeleteBeneficio(params).then(
//         r => res.status(http.getHTTP().STATUS.CODE.OK).end(),
//         e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
//                 errors: [{
//                         userMessage: "The financial benefit could not be deleted propertly",
//                         internalMessage: "Error deleting element into DDBB: " + e,
//                         code: e.code,
//                         info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" }] }) ))
//}

const listAllBeneficios = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/beneficios:
     *   get:
     *     tags:
     *       - FINANCIAL BENEFITS
     *     description: List all the financial benefits.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: The financial benefit list has been found sucessfully.
     *       404:
     *         description: No one financial benefit has been found.
     */
    router.get(environment.server.urlListAllBeneficios, (req, res) => beneficiosController.requestListAllBeneficios().then(
        r => res.status(http.getHTTP().STATUS.CODE.OK).end(),
        e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                errors: [ {
                        userMessage: "The financial benefit list could not be read propertly",
                        internalMessage: "Error reading elements from DDBB: " + e,
                        code: e.code,
                        info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" } ] }) ))
}

const listMonthlyBeneficios = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/beneficios/years/{year}/months/{month}:
     *   get:
     *     tags:
     *       - FINANCIAL BENEFITS
     *     description: List a monthly financial benefits given by the year and the month parameters.
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: year
     *         in: path
     *         description: The requested year.
     *         required: true
     *         type: integer
     *       - name: month
     *         in: path
     *         description: The requested month.
     *         required: true
     *         type: integer
     *     responses:
     *       200:
     *         description: The monthly financial benefits have been listed sucessfully.
     */
    router.get(environment.server.urlListMonthlyBeneficios, (req, res, params) => beneficiosController.requestListMonthlyBeneficios(params).then(
        r => res.status(http.getHTTP().STATUS.CODE.OK).end(),
        e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                errors: [ {
                        userMessage: "The financial benefit list could not be read propertly",
                        internalMessage: "Error reading elements from DDBB: " + e,
                        code: e.code,
                        info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" } ] }) ))
}

const listQuarterlyBeneficios = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/beneficios/years/{year}/quarters/{quarter}:
     *   get:
     *     tags:
     *       - FINANCIAL BENEFITS
     *     description: List a quarterly financial benefits given by the year and quarter parameters.
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: year
     *         in: path
     *         description: The requested year.
     *         required: true
     *         type: integer
     *       - name: quarter
     *         in: path
     *         description: The requested quarter.
     *         required: true
     *         type: integer
     *     responses:
     *       200:
     *         description: The quarter financial benefits have been listed sucessfully.
     */
    router.get(environment.server.urlListQuarterlyBeneficios, (req, res, params) => beneficiosController.requestListQuarterlyBeneficios(params).then(
        r => res.status(http.getHTTP().STATUS.CODE.OK).end(),
        e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                errors: [ {
                        userMessage: "The financial benefit list could not be read propertly",
                        internalMessage: "Error reading elements from DDBB: " + e,
                        code: e.code,
                        info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" } ] }) ))
}

const listAnnualBeneficios = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/beneficios/years/{year}:
     *   get:
     *     tags:
     *       - FINANCIAL BENEFITS
     *     description: List an annual financial benefits given by the year parameter.
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: year
     *         in: path
     *         description: The requested year.
     *         required: true
     *         type: integer
     *     responses:
     *       200:
     *         description: The annual financial benefits have been listed sucessfully.
     */
    router.get(environment.server.urlListAnnualBeneficios, (req, res, params) => beneficiosController.requestListAnnualBeneficios(params).then(
            result => http.sendJSONResponse(res, { status: http.getHTTP().STATUS.CODE.OK, body: { 
                        message: logger.INFO_ANNUAL_FINANCIAL_BENEFIT_LISTED_SUCESSFULLY_MESSAGE,
                        result: result } }),
            err => http.sendJSONResponse(res, { status: http.getHTTP().STATUS.CODE.OK, body: { error: err.message } })))
}