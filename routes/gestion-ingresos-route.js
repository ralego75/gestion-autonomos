const http = require("@lme/swagger-ui-http")
const logger = require('../utils/logger-util')
const ingresosController = require('../controllers/gestion-ingresos-controller')
const environment = require('../environments/environment').getEnvironment()

exports.init = (router) => {
        createIngreso(router)
        createNewIngreso(router)
        readIngreso(router)
        updateIngreso(router)
        deleteIngreso(router)
        listAllIngresos(router)
        listMonthlyIngresos(router)
        listQuarterlyIngresos(router)
        listAnnualIngresos(router)
}

const createIngreso = (router) => {
        /**
         * @swagger
         * /gestion/autonomos/api/ingresos: 
         *   post:
         *     tags:
         *       - FINANCIAL INCOMES
         *     description: Create a financial income.
         *     produces:
         *       - application/json
         *     parameters:
         *       - name: data
         *         in: body
         *         required: true
         *         description: Body with a new income information.
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
         *             incomedate: 
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
         *             incometype:
         *               type: string
         *               required: true
         *     responses:
         *       201:
         *         description: The financial income has been created sucessfully.
         *       400:
         *         description: The financial income could not be created propertly.
         */
        router.post(environment.server.urlCreateIngreso, (req, res) => ingresosController.requestCreateIngreso(req, res).then(
                r => {
                        res.setHeader('Location', '/ingresos/' + r.insertedId.toHexString())
                        res.status(http.getHTTP().STATUS.CODE.CREATED).end()
                },
                e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                        errors: [{
                                userMessage: "The financial income could not be created propertly",
                                internalMessage: "Error inserting element into DDBB: " + e,
                                code: e.code,
                                info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm"
                        }]
                }) ))
}

const createNewIngreso = (router) => {
        /**
         * @swagger
         * /gestion/autonomos/api/ingresos/number/{number}/suppliername/{suppliername}/suppliercif/{suppliercif}/incomedate/{incomedate}/taxablebase/{taxablebase}/vatpercentage/{vatpercentage}/vatamount/{vatamount}/totalamount/{totalamount}/invoice/{invoice}/incometype/{incometype}: 
         *   post:
         *     tags:
         *       - FINANCIAL INCOMES
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
         *         description: Entity's name which we provide the services that generate the income.
         *         required: true
         *         type: string
         *       - name: suppliercif
         *         in: path
         *         description: Entity's cif which we provide the services that generate the income.
         *         required: true
         *         type: string
         *       - name: incomedate
         *         in: path
         *         description: Date on which the income is generated.
         *         required: true
         *         type: string
         *         format: date
         *       - name: taxablebase
         *         in: path
         *         description: Taxable base corresponding to the income.
         *         required: true
         *         type: number
         *       - name: vatpercentage
         *         in: path
         *         description: VAT percentage corresponding to the income.
         *         required: true
         *         type: number
         *       - name: vatamount
         *         in: path
         *         description: VAT amount corresponding to the income.
         *         required: true
         *         type: number
         *       - name: totalamount
         *         in: path
         *         description: Total amount corresponding to the income.
         *         required: true
         *         type: number
         *       - name: invoice
         *         in: path
         *         description: Detemine whether the income is a invoice or not.
         *         required: true
         *         type: boolean
         *       - name: incometype
         *         in: path
         *         description: Define what the income type is.
         *         required: true
         *         type: string
         *     responses:
         *       200:
         *         description: The financial expense has been created sucessfully.
         */
        router.post(environment.server.urlCreateNewIngreso, (req, res) => ingresosController.requestCreateIngreso(req, res, req.params).then(
                r => {
                        res.setHeader('Location', '/ingresos/' + r.insertedId.toHexString())
                        res.status(http.getHTTP().STATUS.CODE.CREATED).end()
                },
                e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                        errors: [{
                                userMessage: "The financial income could not be created propertly",
                                internalMessage: "Error inserting element into DDBB: " + e,
                                code: e.code,
                                info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm"
                        }]
                }) ))
}

const readIngreso = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/ingresos/{ingresoId}:
     *   get:
     *     tags:
     *       - FINANCIAL INCOMES
     *     description: Read the financial income given by the ingresoId parameter.
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: ingresoId
     *         in: path
     *         description: Ingreso ID
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: The financial income has been read sucessfully.
     */
    router.get(environment.server.urlReadIngreso, (req, res) => ingresosController.requestReadIngreso(req.params).then(
        r => res.status(http.getHTTP().STATUS.CODE.OK).json(r),
        e => res.status(http.getHTTP().STATUS.CODE.NOT_CONTENT).json({
                errors: [ {
                        userMessage: "The financial income could not be read propertly",
                        internalMessage: "Error reading element from DDBB: " + e,
                        code: http.getHTTP().STATUS.CODE.NOT_FOUND,
                        info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" } ] }) ))
}

const updateIngreso = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/ingresos/{ingresoId}:
     *   patch:
     *     tags:
     *       - FINANCIAL INCOMES
     *     description: Update the financial income given by the ingresoId parameter.
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: ingresoId
     *         in: path
     *         description: Ingreso ID
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: The financial income has been updated sucessfully.
     */
    router.patch(environment.server.urlUpdateIngreso, (req, res) => ingresosController.requestUpdateIngreso(req.params).then(
        r => res.status(http.getHTTP().STATUS.CODE.OK).json(r),
        e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                errors: [{
                        userMessage: "The financial income could not be updated propertly",
                        internalMessage: "Error updating element into DDBB: " + e,
                        code: e.code,
                        info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" }] }) ))
}

const deleteIngreso = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/ingresos/{ingresoId}:
     *   delete:
     *     tags:
     *       - FINANCIAL INCOMES
     *     description: Delete the financial income given by the ingresoId parameter.
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: ingresoId
     *         in: path
     *         description: Ingreso ID
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: The financial income has been deleted sucessfully.
     */
    router.delete(environment.server.urlDeleteIngreso, (req, res) => ingresosController.requestDeleteIngreso(req.params).then(
        r => res.status(http.getHTTP().STATUS.CODE.OK).end(),
        e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                errors: [{
                        userMessage: "The financial income could not be deleted propertly",
                        internalMessage: "Error deleting element into DDBB: " + e,
                        code: e.code,
                        info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" }] }) ))
}

const listAllIngresos = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/ingresos:
     *   get:
     *     tags:
     *       - FINANCIAL INCOMES
     *     description: List all the financial incomes.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: The financial income list has been found sucessfully.
     *       404:
     *         description: No one financial income has been found.
     */
    router.get(environment.server.urlListAllIngresos, (req, res) => ingresosController.requestListAllIngresos().then(
        r => res.status(http.getHTTP().STATUS.CODE.OK).json(r),
        e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                errors: [ {
                        userMessage: "The financial income list could not be read propertly",
                        internalMessage: "Error reading elements from DDBB: " + e,
                        code: e.code,
                        info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" } ] }) ))
}

const listMonthlyIngresos = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/ingresos/years/{year}/months/{month}:
     *   get:
     *     tags:
     *       - FINANCIAL INCOMES
     *     description: List a monthly financial incomes given by the year and the month parameters.
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
     *         description: The monthly financial incomes have been listed sucessfully.
     */
    router.get(environment.server.urlListMonthlyIngresos, (req, res, params) => ingresosController.requestListMonthlyIngresos(params).then(
        r => res.status(http.getHTTP().STATUS.CODE.OK).end(),
        e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                errors: [ {
                        userMessage: "The financial income list could not be read propertly",
                        internalMessage: "Error reading elements from DDBB: " + e,
                        code: e.code,
                        info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" } ] }) ))
}

const listQuarterlyIngresos = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/ingresos/years/{year}/quarters/{quarter}:
     *   get:
     *     tags:
     *       - FINANCIAL INCOMES
     *     description: List a quarterly financial incomes given by the year and quarter parameters.
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
     *         description: The quarter financial incomes have been listed sucessfully.
     */
    router.get(environment.server.urlListQuarterlyIngresos, (req, res, params) => ingresosController.requestListQuarterlyIngresos(params).then(
        r => res.status(http.getHTTP().STATUS.CODE.OK).end(),
        e => res.status(http.getHTTP().STATUS.CODE.BAD_REQUEST).json({
                errors: [ {
                        userMessage: "The financial income list could not be read propertly",
                        internalMessage: "Error reading elements from DDBB: " + e,
                        code: e.code,
                        info: "https://docs.oracle.com/cd/B28359_01/server.111/b28278/toc.htm" } ] }) ))
}

const listAnnualIngresos = (router) => {
    /**
     * @swagger
     * /gestion/autonomos/api/ingresos/years/{year}:
     *   get:
     *     tags:
     *       - FINANCIAL INCOMES
     *     description: List an annual financial incomes given by the year parameter.
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
     *         description: The annual financial incomes have been listed sucessfully.
     */
    router.get(environment.server.urlListAnnualIngresos, (req, res, params) => ingresosController.requestListAnnualIngresos(params).then(
            result => http.sendJSONResponse(res, { status: http.getHTTP().STATUS.CODE.OK, body: { 
                        message: logger.INFO_ANNUAL_FINANCIAL_INCOME_LISTED_SUCESSFULLY_MESSAGE,
                        result: result } }),
            err => http.sendJSONResponse(res, { status: http.getHTTP().STATUS.CODE.OK, body: { error: err.message } })))
}