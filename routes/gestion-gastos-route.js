const http = require("@lme/swagger-ui-http")
const logger = require('../utils/logger-util')
const gastosController = require('../controllers/gestion-gastos-controller')
const environment = require('../environments/environment').getEnvironment()

exports.init = (router) => {
        createGasto(router)
        createNewGasto(router)
        readGasto(router)
//        updateGasto(router)
//        deleteGasto(router)
        listAllGastos(router)
        listMonthlyGastos(router)
        listQuarterlyGastos(router)
        listAnnualGastos(router)
}

const createGasto = (router) => {
        /**
         * @swagger
         * /gestion/autonomos/api/gastos: 
         *   post:
         *     tags:
         *       - FINANCIAL EXPENSES
         *     description: Create a financial expense.
         *     produces:
         *       - application/json
         *     parameters:
         *       - name: data
         *         in: body
         *         required: true
         *         description: Body with a new expense information.
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
         *             expensedate: 
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
         *             expensetype:
         *               type: string
         *               required: true
         *     responses:
         *       201:
         *         description: The financial expense has been created sucessfully.
         *       400:
         *         description: The financial expense could not be created propertly.
         */
        router.post(environment.server.urlCreateGasto, (req, res) => gastosController.requestCreateGasto(req, res).then(
                r => {
                        res.setHeader('Location', '/gastos/' + r.insertedId.toHexString())
                        res.status(http.getHTTP().STATUS.CODE.CREATED).end()
                },
                e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                        errors: [{
                                userMessage: "The financial expense could not be created propertly",
                                internalMessage: "Error inserting element into DDBB: " + e,
                                code: e.code,
                                info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm"
                        }]
                }) ))
}

const createNewGasto = (router) => {
        /**
         * @swagger
         * /gestion/autonomos/api/gastos/number/{number}/suppliername/{suppliername}/suppliercif/{suppliercif}/expensedate/{expensedate}/taxablebase/{taxablebase}/vatpercentage/{vatpercentage}/vatamount/{vatamount}/totalamount/{totalamount}/invoice/{invoice}/expensetype/{expensetype}: 
         *   post:
         *     tags:
         *       - FINANCIAL EXPENSES
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
         *         description: Entity's name which we provide the services that generate the expense.
         *         required: true
         *         type: string
         *       - name: suppliercif
         *         in: path
         *         description: Entity's cif which we provide the services that generate the expense.
         *         required: true
         *         type: string
         *       - name: expensedate
         *         in: path
         *         description: Date on which the expense is generated.
         *         required: true
         *         type: string
         *         format: date
         *       - name: taxablebase
         *         in: path
         *         description: Taxable base corresponding to the expense.
         *         required: true
         *         type: number
         *       - name: vatpercentage
         *         in: path
         *         description: VAT percentage corresponding to the expense.
         *         required: true
         *         type: number
         *       - name: vatamount
         *         in: path
         *         description: VAT amount corresponding to the expense.
         *         required: true
         *         type: number
         *       - name: totalamount
         *         in: path
         *         description: Total amount corresponding to the expense.
         *         required: true
         *         type: number
         *       - name: invoice
         *         in: path
         *         description: Detemine whether the expense is a invoice or not.
         *         required: true
         *         type: boolean
         *       - name: expensetype
         *         in: path
         *         description: Define what the expense type is.
         *         required: true
         *         type: string
         *     responses:
         *       200:
         *         description: The financial expense has been created sucessfully.
         */
        router.post(environment.server.urlCreateNewGasto, (req, res) => gastosController.requestCreateGasto(req, res, req.params).then(
                r => {
                        res.setHeader('Location', '/gastos/' + r.insertedId.toHexString())
                        res.status(http.getHTTP().STATUS.CODE.CREATED).end()
                },
                e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                        errors: [{
                                userMessage: "The financial expense could not be created propertly",
                                internalMessage: "Error inserting element into DDBB: " + e,
                                code: e.code,
                                info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm"
                        }]
                }) ))
}

const readGasto = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/gastos/{gastoId}:
     *   get:
     *     tags:
     *       - FINANCIAL EXPENSES
     *     description: Read the financial expense given by the gastoId parameter.
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: gastoId
     *         in: path
     *         description: Gasto ID
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: The financial expense has been read sucessfully.
     */
    router.get(environment.server.urlReadGasto, (req, res) => gastosController.requestReadGasto(req.params).then(
        r => res.status(http.getHTTP().STATUS.CODE.OK).json(r),
        e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                errors: [ {
                        userMessage: "The financial expense could not be read propertly",
                        internalMessage: "Error reading element from DDBB: " + e,
                        code: e.code,
                        info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" } ] }) ))
}

//const updateGasto = (router) => {
//     /**
//      * @swagger
//      * /gestion/autonomos/api/gastos/{gastoId}:
//      *   path:
//      *     tags:
//      *       - FINANCIAL EXPENSES
//      *     description: Update the financial expense given by the gastoId parameter.
//      *     produces:
//      *       - application/json
//      *     parameters:
//      *       - name: gastoId
//      *         in: path
//      *         description: Gasto ID
//      *         required: true
//      *         type: string
//      *     responses:
//      *       200:
//      *         description: The financial expense has been updated sucessfully.
//      */
//     router.path(environment.server.urlUpdateGasto, (req, res, params) => gastosController.requestUpdateGasto(params).then(
//         r => res.status(http.getHTTP().STATUS.CODE.OK).end(),
//         e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
//                 errors: [{
//                         userMessage: "The financial expense could not be updated propertly",
//                         internalMessage: "Error updating element into DDBB: " + e,
//                         code: e.code,
//                         info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" }] }) ))
//}

//const deleteGasto = (router) => {
//     /**
//      * @swagger
//      * /gestion/autonomos/api/gastos/{gastoId}:
//      *   delete:
//      *     tags:
//      *       - FINANCIAL EXPENSES
//      *     description: Delete the financial expense given by the gastoId parameter.
//      *     produces:
//      *       - application/json
//      *     parameters:
//      *       - name: gastoId
//      *         in: path
//      *         description: Gasto ID
//      *         required: true
//      *         type: string
//      *     responses:
//      *       200:
//      *         description: The financial expense has been deleted sucessfully.
//      */
//     router.delete(environment.server.urlDeleteGasto, (req, res, params) => gastosController.requestDeleteGasto(params).then(
//         r => res.status(http.getHTTP().STATUS.CODE.OK).end(),
//         e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
//                 errors: [{
//                         userMessage: "The financial expense could not be deleted propertly",
//                         internalMessage: "Error deleting element into DDBB: " + e,
//                         code: e.code,
//                         info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" }] }) ))
//}

const listAllGastos = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/gastos:
     *   get:
     *     tags:
     *       - FINANCIAL EXPENSES
     *     description: List all the financial expenses.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: The financial expense list has been found sucessfully.
     *       404:
     *         description: No one financial expense has been found.
     */
    router.get(environment.server.urlListAllGastos, (req, res) => gastosController.requestListAllGastos().then(
        r => res.status(http.getHTTP().STATUS.CODE.OK).end(),
        e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                errors: [ {
                        userMessage: "The financial expense list could not be read propertly",
                        internalMessage: "Error reading elements from DDBB: " + e,
                        code: e.code,
                        info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" } ] }) ))
}

const listMonthlyGastos = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/gastos/years/{year}/months/{month}:
     *   get:
     *     tags:
     *       - FINANCIAL EXPENSES
     *     description: List a monthly financial expenses given by the year and the month parameters.
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
     *         description: The monthly financial expenses have been listed sucessfully.
     */
    router.get(environment.server.urlListMonthlyGastos, (req, res, params) => gastosController.requestListMonthlyGastos(params).then(
        r => res.status(http.getHTTP().STATUS.CODE.OK).end(),
        e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                errors: [ {
                        userMessage: "The financial expense list could not be read propertly",
                        internalMessage: "Error reading elements from DDBB: " + e,
                        code: e.code,
                        info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" } ] }) ))
}

const listQuarterlyGastos = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/gastos/years/{year}/quarters/{quarter}:
     *   get:
     *     tags:
     *       - FINANCIAL EXPENSES
     *     description: List a quarterly financial expenses given by the year and quarter parameters.
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
     *         description: The quarter financial expenses have been listed sucessfully.
     */
    router.get(environment.server.urlListQuarterlyGastos, (req, res, params) => gastosController.requestListQuarterlyGastos(params).then(
        r => res.status(http.getHTTP().STATUS.CODE.OK).end(),
        e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                errors: [ {
                        userMessage: "The financial expense list could not be read propertly",
                        internalMessage: "Error reading elements from DDBB: " + e,
                        code: e.code,
                        info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" } ] }) ))
}

const listAnnualGastos = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/gastos/years/{year}:
     *   get:
     *     tags:
     *       - FINANCIAL EXPENSES
     *     description: List an annual financial expenses given by the year parameter.
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
     *         description: The annual financial expenses have been listed sucessfully.
     */
    router.get(environment.server.urlListAnnualGastos, (req, res, params) => gastosController.requestListAnnualGastos(params).then(
            result => http.sendJSONResponse(res, { status: http.getHTTP().STATUS.CODE.OK, body: { 
                        message: logger.INFO_ANNUAL_FINANCIAL_EXPENSE_LISTED_SUCESSFULLY_MESSAGE,
                        result: result } }),
            err => http.sendJSONResponse(res, { status: http.getHTTP().STATUS.CODE.OK, body: { error: err.message } })))
}