exports.getRoutePages = () => { return ['./routes/gestion-ingresos-route.js', './routes/gestion-gastos-route.js', './routes/gestion-beneficios-route.js'] }

exports.getEnvironment = () => {
    var mongoDbServerHostName, mongoDbServerPort, mongoDbServerUser, mongoDbServerPassword, mongoDbServerAuthenticationDatabase
    var databaseServerName, databaseServerSID, databaseServerPort, databaseServerUser, databaseServerPassword, databaseDriver

    if (process.env.NODE_ENV === "production") {
        hostname = "peslmwsrapg01"
        mongoDbServerHostName = "ds125574.mlab.com"
        mongoDbServerPort = 25574
        mongoDbServerUser = "admin"
        mongoDbServerPassword = "2Decimo1"
        mongoDbServerAuthenticationDatabase = "gestion_autonomos"
        databaseServerName = "porascanee"
        databaseServerSID = "PRAPMECO"
        databaseServerPort = 1521
        databaseServerUser = "RAP002"
        databaseServerPassword = "RAP002"
        databaseDriver = "oracle"
    } else {
        hostname = "127.0.0.1"
        mongoDbServerHostName = "ds125574.mlab.com"
        mongoDbServerPort = 25574
        mongoDbServerUser = "admin"
        mongoDbServerPassword = "2Decimo1"
        mongoDbServerAuthenticationDatabase = "gestion_autonomos"
        databaseServerName = "roracle02"
        databaseServerSID = "TRAP"
        databaseServerPort = 1521
        databaseServerUser = "RAP002"
        databaseServerPassword = "RAP002"
        databaseDriver = "oracle"
    }

    var enviroment = {
        appInfo: "Gestión Autónomos",
        appName: "gestion-autonomos",
        appVersion: "1.0.0",
        lmesName: "LegaSoft SLU ™",
        mongoDbServer: {
            databnase: mongoDbServerHostName,
            url: 'mongodb://' + mongoDbServerUser + ':' + mongoDbServerPassword + '@' + mongoDbServerHostName + ':' + mongoDbServerPort + '/' + mongoDbServerAuthenticationDatabase
        },
        databaseServer: {
            driver: databaseDriver,
            hostname: databaseServerName,
            port: databaseServerPort,
            database: databaseServerSID,
            cns: {
                user: databaseServerUser,
                password: databaseServerPassword,
                connectString: databaseServerName + '/' + databaseServerSID
            }
        },
        server: {
            urlCreateIngreso: "/gestion/autonomos/api/ingresos",
            urlCreateNewIngreso: "/gestion/autonomos/api/ingresos/number/:number/suppliername/:suppliername/suppliercif/:suppliercif/incomedate/:incomedate/taxablebase/:taxablebase/vatpercentage/:vatpercentage/vatamount/:vatamount/totalamount/:totalamount/invoice/:invoice/incometype/:incometype",
            urlCreateGasto: "/gestion/autonomos/api/gastos",
            urlCreateNewGasto: "/gestion/autonomos/api/gastos/number/:number/suppliername/:suppliername/suppliercif/:suppliercif/expensedate/:expensedate/taxablebase/:taxablebase/vatpercentage/:vatpercentage/vatamount/:vatamount/totalamount/:totalamount/invoice/:invoice/expensetype/:expensetype",
            urlCreateBeneficio: "/gestion/autonomos/api/beneficios",
            urlCreateNewBeneficio: "/gestion/autonomos/api/beneficio/number/:number/suppliername/:suppliername/suppliercif/:suppliercif/benefitdate/:benefitdate/taxablebase/:taxablebase/vatpercentage/:vatpercentage/vatamount/:vatamount/totalamount/:totalamount/invoice/:invoice/benefittype/:benefittype",
            urlListAllIngresos: "/gestion/autonomos/api/ingresos",
            urlListAllGastos: "/gestion/autonomos/api/gastos",
            urlListAllBeneficios: "/gestion/autonomos/api/beneficios",
            urlListMonthlyIngresos: "/gestion/autonomos/api/ingresos/years/:year/months/:month",
            urlListMonthlyGastos: "/gestion/autonomos/api/gastos/years/:year/months/:month",
            urlListMonthlyBeneficios: "/gestion/autonomos/api/beneficios/years/:year/months/:month",
            urlListQuarterlyIngresos: "/gestion/autonomos/api/ingresos/years/:year/quarters/:quarter",
            urlListQuarterlyGastos: "/gestion/autonomos/api/gastos/years/:year/quarters/:quarter",
            urlListQuarterlyBeneficios: "/gestion/autonomos/api/beneficios/years/:year/quarters/:quarter",
            urlListAnnualIngresos: "/gestion/autonomos/api/ingresos/years/:year",
            urlListAnnualGastos: "/gestion/autonomos/api/gastos/years/:year",
            urlListAnnualBeneficios: "/gestion/autonomos/api/beneficios/years/:year",
            urlReadIngreso: "/gestion/autonomos/api/ingresos/:ingreso",
            urlReadGasto: "/gestion/autonomos/api/gastos/:gasto",
            urlReadBeneficio: "/gestion/autonomos/api/beneficios/:beneficio",
            urlUpdateIngreso: "/gestion/autonomos/api/ingresos/:ingreso",
            urlUpdateGasto: "/gestion/autonomos/api/gastos/:gasto",
            urlUpdateBeneficio: "/gestion/autonomos/api/beneficios/:beneficio",
            urlDeleteIngreso: "/gestion/autonomos/api/ingresos/:ingreso",
            urlDeleteGasto: "/gestion/autonomos/api/gastos/:gasto",
            urlDeleteBeneficio: "/gestion/autonomos/api/beneficios/:beneficio",
            host: hostname,
            port: 3000
        },
    }

    return enviroment;

};