const logger = require('./utils/logger-util')

logger.getLogo();
logger.lnprintlnInfo(logger.INFO_STARTING_APP_MESSAGE)

const routePages = require('./environments/environment').getRoutePages()
const environment = require('./environments/environment').getEnvironment()
const router = require("@lme/swagger-ui-http").getRouter(environment.server.host, environment.server.port, routePages, environment)

router.then(r => {
    require(routePages[0]).init(r)
    require(routePages[1]).init(r)
    require(routePages[2]).init(r)
})