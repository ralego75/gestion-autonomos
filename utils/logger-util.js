const dateTimeUtil = require("./../utils/date-time-util")
const environment = require("./../environments/environment").getEnvironment();

var logger = exports;

var INFO_MSG = "INFO "
var ERROR_MSG = "ERROR"

logger.errorLevel = "error"
logger.debugLevel = "debug"
logger.warnLevel = "warn"
logger.infoLevel = "info"

// INFO MESSAGES.
logger.INFO_STARTING_APP_MESSAGE = "Application " + environment.appName + " starting ..."
logger.INFO_INTERFACES_HISTORICO_INTERVAL_TASK_CREATED_MESSAGE = "InterfacesHistorico Interval Task created.!!!"
logger.INFO_INTERFACES_HISTORICO_INTERVAL_TASK_RUNNING_MESSAGE = "InterfacesHistorico Interval Task running ....."
logger.INFO_INTERFACES_HISTORICO_INTERVAL_TASK_FINISHED_MESSAGE = "InterfacesHistorico Interval Task finished."
logger.INFO_INTERFACES_HISTORICO_PROCESS_RUNNING_MESSAGE = "InterfacesHistorico Process running ....."


logger.INFO_FINANCIAL_INCOME_CREATED_SUCESSFULLY_MESSAGE = "Financial income has been created sucessfully."
logger.INFO_FINANCIAL_EXPENSE_CREATED_SUCESSFULLY_MESSAGE = "Financial expense has been created sucessfully."
logger.INFO_FINANCIAL_BENEFIT_CREATED_SUCESSFULLY_MESSAGE = "Financial benefit has been created sucessfully."
logger.INFO_FINANCIAL_INCOME_READ_SUCESSFULLY_MESSAGE = "Financial income has been read sucessfully."
logger.INFO_FINANCIAL_EXPENSE_READ_SUCESSFULLY_MESSAGE = "Financial expense has been read sucessfully."
logger.INFO_FINANCIAL_BENEFIT_READ_SUCESSFULLY_MESSAGE = "Financial benefit has been read sucessfully."
logger.INFO_FINANCIAL_INCOME_UPDATED_SUCESSFULLY_MESSAGE = "Financial income has been updated sucessfully."
logger.INFO_FINANCIAL_EXPENSE_UPDATED_SUCESSFULLY_MESSAGE = "Financial expense has been updated sucessfully."
logger.INFO_FINANCIAL_BENEFIT_UPDATED_SUCESSFULLY_MESSAGE = "Financial benefit has been updated sucessfully."
logger.INFO_FINANCIAL_INCOME_DELETED_SUCESSFULLY_MESSAGE = "Financial income has been deleted sucessfully."
logger.INFO_FINANCIAL_EXPENSE_DELETED_SUCESSFULLY_MESSAGE = "Financial expense has been deleted sucessfully."
logger.INFO_FINANCIAL_BENEFIT_DELETED_SUCESSFULLY_MESSAGE = "Financial benefit has been deleted sucessfully."
logger.INFO_ALL_FINANCIAL_INCOMES_LISTED_SUCESSFULLY_MESSAGE = "All the financial incomes has been listed sucessfully."
logger.INFO_ALL_FINANCIAL_EXPENSES_LISTED_SUCESSFULLY_MESSAGE = "All the financial expense has been listed sucessfully."
logger.INFO_ALL_FINANCIAL_BENEFITS_LISTED_SUCESSFULLY_MESSAGE = "All the financial benefit has been listed sucessfully."
logger.INFO_MONTHLY_FINANCIAL_INCOMES_LISTED_SUCESSFULLY_MESSAGE = "Monthly financial incomes has been listed sucessfully."
logger.INFO_MONTHLY_FINANCIAL_EXPENSES_LISTED_SUCESSFULLY_MESSAGE = "Monthly financial expense has been listed sucessfully."
logger.INFO_MONTHLY_FINANCIAL_BENEFITS_LISTED_SUCESSFULLY_MESSAGE = "Monthly financial benefit has been listed sucessfully."
logger.INFO_QUARTERLY_FINANCIAL_INCOMES_LISTED_SUCESSFULLY_MESSAGE = "Quarterly financial incomes has been listed sucessfully."
logger.INFO_QUARTERLY_FINANCIAL_EXPENSES_LISTED_SUCESSFULLY_MESSAGE = "Quarterly financial expense has been listed sucessfully."
logger.INFO_QUARTERLY_FINANCIAL_BENEFITS_LISTED_SUCESSFULLY_MESSAGE = "Quarterly financial benefit has been listed sucessfully."
logger.INFO_ANNUAL_FINANCIAL_INCOMES_LISTED_SUCESSFULLY_MESSAGE = "Annual financial incomes has been listed sucessfully."
logger.INFO_ANNUAL_FINANCIAL_EXPENSES_LISTED_SUCESSFULLY_MESSAGE = "Annual financial expense has been listed sucessfully."
logger.INFO_ANNUAL_FINANCIAL_BENEFITS_LISTED_SUCESSFULLY_MESSAGE = "Annual financial benefit has been listed sucessfully."

logger.INFO_REFERENCE_INTERFACES_HISTORICO_INTERVAL_TASK_CREATED_MESSAGE = "Reference InterfacesHistorico Interval Task created."
logger.INFO_REFERENCE_INTERFACES_HISTORICO_INTERVAL_TASK_RUNNING_MESSAGE = "Reference InterfacesHistorico Interval Task running ....."
logger.INFO_REFERENCE_INTERFACES_HISTORICO_INTERVAL_TASK_FINISHED_MESSAGE = "Reference InterfacesHistorico Interval Task finished."
logger.INFO_REFERENCE_INTERFACES_HISTORICO_PROCESS_RUNNING_MESSAGE = "Reference InterfacesHistorico Process running ....."
logger.INFO_REFERENCE_INTERFACES_HISTORICO_PROCESS_FINISHED_MESSAGE = "Reference InterfacesHistorico Process finished sucessfully."
logger.INFO_BEFORE_READ_INTERFACES_HISTORICO_TMP_METHOD_MESSAGE = "BEFORE readTableTmp METHOD"
logger.INFO_AFTER_READ_INTERFACES_HISTORICO_TMP_METHOD_MESSAGE = "AFTER readTableTmp_Tmp METHOD"
logger.INFO_BEFORE_DELETE_INTERFACES_HISTORICO_TMP_METHOD_MESSAGE = "BEFORE deleteTableTmp METHOD"
logger.INFO_AFTER_DELETE_INTERFACES_HISTORICO_TMP_METHOD_MESSAGE = "AFTER deleteTableTmp_Tmp METHOD"

logger.INFO_CONNECTING_TO_FTP_SERVER_MESSAGE = "Connecting to the FTP Server."
logger.INFO_FTP_SERVER_CONNECTED_MESSAGE = "FTP Server connected."
logger.INFO_STARTED_APP_MESSAGE = environment.appName + " started.!!!"
logger.INFO_FILES_MOVED_TO_BACKUP_FOLDER_MESSAGE = "Files moved to the backup folder."
logger.INFO_BEFORE_INSERT_PAGED_INTERFACES_HISTORICO_METHOD_MESSAGE = "BEFORE insertPagedInterfacesHistorico METHOD"
logger.INFO_AFTER_INSERT_PAGED_INTERFACES_HISTORICO_METHOD_MESSAGE = "AFTER insertPagedInterfacesHistorico METHOD"
logger.INFO_BEFORE_READ_INTERFACES_HISTORICO_FILE_METHOD_MESSAGE = "BEFORE readInterfacesHistoricoFile METHOD"
logger.INFO_AFTER_READ_INTERFACES_HISTORICO_FILE_METHOD_MESSAGE = "AFTER readInterfacesHistoricoFile METHOD"
logger.INFO_BEFORE_INSERT_INTERFACES_HISTORICO_METHOD_MESSAGE = "BEFORE insertInterfacesHistorico METHOD"
logger.INFO_AFTER_INSERT_INTERFACES_HISTORICO_METHOD_MESSAGE = "AFTER insertInterfacesHistorico METHOD"
logger.INFO_BEFORE_MOVE_FILE_TO_BACKUP_FOLDER_METHOD_MESSAGE = "BEFORE moveFileToBackupFolder METHOD"
logger.INFO_AFTER_MOVE_FILE_TO_BACKUP_FOLDER_METHOD_MESSAGE = "AFTER moveFileToBackupFolder METHOD"
logger.INFO_UPDATE_EXECUTED_IN_REFERENCE_TABLE_MESSAGE = "REFERENCE table has been updated."
logger.INFO_BEFORE_UPDATE_REFERENCE_METHOD_MESSAGE = "BEFORE updateReference METHOD"
logger.INFO_AFTER_UPDATE_REFERENCE_METHOD_MESSAGE = "AFTER updateReference METHOD"
logger.INFO_BEFORE_UPDATE_PAGED_REFERENCE_METHOD_MESSAGE = "       BEFORE updatePagedReference METHOD"
logger.INFO_AFTER_UPDATE_PAGED_REFERENCE_METHOD_MESSAGE = "       AFTER updatePagedReference METHOD"
logger.INFO_BEFORE_EXECUTE_COMMIT_MESSAGE = "               BEFORE EXECUTE COMMIT"
logger.INFO_AFTER_EXECUTE_COMMIT_MESSAGE = "               AFTER EXECUTE COMMIT"
logger.INFO_BEFORE_EXECUTE_QUERY_MESSAGE = "                       BEFORE EXECUTE QUERY"
logger.INFO_AFTER_EXECUTE_QUERY_MESSAGE = "                       AFTER EXECUTE QUERY"
logger.INFO_BEFORE_OPEN_CONNECTION_MESSAGE = "       BEFORE OPEN CONNECTION"
logger.INFO_AFTER_OPEN_CONNECTION_MESSAGE = "       AFTER OPEN CONNECTION"
logger.INFO_BEFORE_CLOSE_CONNECTION_MESSAGE = "       BEFORE CLOSE CONNECTION"
logger.INFO_AFTER_CLOSE_CONNECTION_MESSAGE = "       AFTER CLOSE CONNECTION"

// ERROR MESSAGES.
logger.ERROR_CREATING_FINANCIAL_INCOME_MESSAGE = "Error creating the financial income."
logger.ERROR_CREATING_FINANCIAL_EXPENSE_MESSAGE = "Error creating the financial expense."
logger.ERROR_CREATING_FINANCIAL_BENEFIT_MESSAGE = "Error creating the financial benefit."
logger.ERROR_READING_FINANCIAL_INCOME_MESSAGE = "Error reading the financial income."
logger.ERROR_READING_FINANCIAL_EXPENSE_MESSAGE = "Error reading the financial expense."
logger.ERROR_READING_FINANCIAL_BENEFIT_MESSAGE = "Error reading the financial benefit."
logger.ERROR_UPDATING_FINANCIAL_INCOME_MESSAGE = "Error updated the financial income."
logger.ERROR_UPDATING_FINANCIAL_EXPENSE_MESSAGE = "Error updated the financial expense."
logger.ERROR_UPDATING_FINANCIAL_BENEFIT_MESSAGE = "Error updated the financial benefit."
logger.ERROR_DELETING_FINANCIAL_INCOME_MESSAGE = "Error deleting the financial income."
logger.ERROR_DELETING_FINANCIAL_EXPENSE_MESSAGE = "Error deleting the financial expense."
logger.ERROR_DELETING_FINANCIAL_BENEFIT_MESSAGE = "Error deleting the financial benefit."
logger.ERROR_LISTING_ALL_FINANCIAL_INCOMES_MESSAGE = "Error listing all the financial incomes."
logger.ERROR_LISTING_ALL_FINANCIAL_EXPENSES_MESSAGE = "Error listing all the financial expense."
logger.ERROR_LISTING_ALL_FINANCIAL_BENEFITS_MESSAGE = "Error listing all the financial benefit."
logger.ERROR_LISTING_MONTHLY_FINANCIAL_INCOMES_MESSAGE = "Error listing the monthly financial incomes."
logger.ERROR_LISTING_MONTHLY_FINANCIAL_EXPENSES_MESSAGE = "Error listing the monthly financial expense."
logger.ERROR_LISTING_MONTHLY_FINANCIAL_BENEFITS_MESSAGE = "Error listing the monthly financial benefit."
logger.ERROR_LISTING_QUARTERLY_FINANCIAL_INCOMES_MESSAGE = "Error listing the quarterly financial incomes."
logger.ERROR_LISTING_QUARTERLY_FINANCIAL_EXPENSES_MESSAGE = "Error listing the quarterly financial expense."
logger.ERROR_LISTING_QUARTERLY_FINANCIAL_BENEFITS_MESSAGE = "Error listing the quarterly financial benefit."
logger.ERROR_LISTING_ANNUAL_FINANCIAL_INCOMES_MESSAGE = "Error listing the annual financial incomes."
logger.ERROR_LISTING_ANNUAL_FINANCIAL_EXPENSES_MESSAGE = "Error listing the annual financial expense."
logger.ERROR_LISTING_ANNUAL_FINANCIAL_BENEFITS_MESSAGE = "Error listing the annual financial benefit."


logger.ERROR_REFERENCE_INTERFACES_HISTORICO_INTERVAL_TASK_FINISH_MESSAGE = "Reference insertPagedInterfacesHistorico Interval Task finished with an error."
logger.ERROR_REFERENCE_INTERFACES_HISTORICO_PROCESS_FINISH_MESSAGE = "Reference insertPagedInterfacesHistorico Process finished with an error."
logger.ERROR_READING_INTERFACES_HISTORICO_TMP_MESSAGE = "ERROR reading insertPagedInterfacesHistorico_TMP"
logger.ERROR_INTERFACES_HISTORICO_INTERVAL_TASK_FINISH_MESSAGE = "InterfacesHistorico Interval Task finished with an error."
logger.ERROR_INTERFACES_HISTORICO_PROCESS_FINISH_MESSAGE = "InterfacesHistorico Process finished with an error"
logger.ERROR_MOVING_FILE_TO_BACKUP_FOLDER_MESSAGE = "ERROR moving the file into the Backup folder"
logger.ERROR_INSERTING_INTERFACES_HISTORICO_MESSAGE = "ERROR inserting InterfacesHistorico before prepared"
logger.ERROR_REJECT_READ_INTERFACES_HISTORICO_TMP_METHOD_MESSAGE = "REJECT readInterfacesHistorico_Tmp METHOD"
logger.ERROR_REJECT_DELETE_INTERFACES_HISTORICO_TMP_METHOD_MESSAGE = "REJECT deleteInterfacesHistorico_Tmp METHOD"
logger.ERROR_UPDATING_REFERENCE_MESSAGE = "ERROR updating REFERENCE table"
logger.ERROR_READING_FILE_MESSAGE = "ERROR reading the file"
logger.ERROR_SFTP_SERVER_CONNECTION_ERROR_MESSAGE = "SFTP SERVER CONNECTION ERROR"
logger.ERROR_CLOSE_CONNECTION_MESSAGE = "ERROR CLOSE CONNECTION"
logger.ERROR_CLOSE_CONNECTION_AFTER_ERROR_MESSAGE = "CLOSE CONNECTION AFTER ERROR"
logger.ERROR_WITHOUT_CONNECTION_STABLISHED_MESSAGE = "ERROR WITHOUT CONNECTION STABLISHED"
logger.ERROR_CATCH_MESSAGE = "ERROR CATCH MESSAGE"
logger.ERROR_REJECT_DAO_OPEN_MESSAGE = "REJECT DAO open"
logger.ERROR_REJECT_INSERT_RECURSIVE_PAGED_INTERFACES_HISTORICO_METHOD_MESSAGE = "REJECT insertRecursivePagedInterfacesHistorico METHOD"
logger.ERROR_REJECT_INSERT_PAGED_INTERFACES_HISTORICO_METHOD_MESSAGE = "REJECT insertPagedInterfacesHistorico METHOD"
logger.ERROR_REJECT_READ_INTERFACES_HISTORICO_FILE_MESSAGE = "REJECT reading InterfacesHistorico before prepared file"
logger.ERROR_REJECT_COMMIT_INSIDE_PROMISE_ALL_MESSAGE = "REJECT commit inside promise all"
logger.ERROR_REJECT_INSERT_INTERFACES_HISTORICO_METHOD_MESSAGE = "REJECT insert InterfacesHistorico before prepared METHOD"
logger.ERROR_REJECT_DELETE_INTERFACES_HISTORICO_METHOD_MESSAGE = "REJECT delete InterfacesHistorico before prepared METHOD"
logger.ERROR_REJECT_AFTER_MOVE_FILE_TO_BACKUP_FOLDER_METHOD_MESSAGE = "REJECT AFTER MOVE FILE TO BACKUP FOLDER METHOD"
logger.ERROR_REJECT_UPDATE_REFERENCE_METHOD_MESSAGE = "REJECT update Reference"
logger.ERROR_REJECT_COMMIT_MESSAGE = "REJECT COMMIT"
logger.ERROR_REJECT_EXECUTE_MESSAGE = "REJECT EXECUTE"
logger.ERROR_REJECT_OPEN_MESSAGE = "REJECT OPEN"
logger.ERROR_REJECT_CLOSE_MESSAGE = "REJECT CLOSE"
logger.ERROR_REJECT_CLOSE_CONNECTION_AFTER_ERROR_MESSAGE = "REJECT CLOSE CONNECTION AFTER ERROR"

function getMessage(msg, option, err) {
  var message = ": [" + dateTimeUtil.getDateTime() + "] ==> "
  if (msg)
    if (err)
      if (err.stack) message += msg + ": " + err.stack
  else message += msg + ": " + err
  else message += msg
  else
  if (err)
    if (err.stack) message += err.stack
  else message += err
  if (option) return message + " <<" + option + ">>"
  else return message
}

function getInfoMessage(msg, option) {
  return INFO_MSG + getMessage(msg, option)
}

function getErrorMessage(msg, option, err) {
  return ERROR_MSG + getMessage(msg, option, err)
}

exports.getLogo = () => {
  console.log(' -----------------------------------------------------------------------')
  console.log('|             ■■■■■■■■■■■■             ' + environment.appInfo + '                |')
  console.log('|          ■■■■■■■■■■■■■■■■■■          App Name: ' + environment.appName + '      | ') 
  console.log('|       ■■■■■■■■■■■■■■■■■■■■■■■■       App Version: ' + environment.appVersion + '               | ')
  console.log('|    ■■■■■  ■■■■■■■■■■      ■■■■■■■    Environment: ' + process.env.NODE_ENV + '           | ')
  console.log('|    ■■■■■  ■■■■■■■■  ■■■■■■■■■■■■■                                     |')
  console.log('|    ■■■■■  ■■■■■■■■■■      ■■■■■■■                                     |')
  console.log('|    ■■■■■  ■■■■■■■■■■■■■■■■  ■■■■■                                     |')
  console.log('|    ■■■■■       ■■■■■       ■■■■■■                                     |')
  console.log('|       ■■■■■■■■■■■■■■■■■■■■■■■■       Node Version: ' + process.version + '            | ')
  console.log('|          ■■■■■■■■■■■■■■■■■■          Start time: ' + dateTimeUtil.getDateTime() + '  |')
  console.log('|             ■■■■■■■■■■■■             ' + environment.lmesName + '                   |')
  console.log(' -----------------------------------------------------------------------')
};

exports.lnprintlnInfo = (msg, option) => {
  console.log("\n" + getInfoMessage(msg, option) + "\n")
}

exports.printlnInfo = (msg, option) => {
  console.log(getInfoMessage(msg, option) + "\n")
}

exports.printInfo = (msg, option) => {
  console.log(getInfoMessage(msg, option))
}

exports.lnprintlnError = (msg, err, option) => {
  console.error("\n" + getErrorMessage(msg, option, err) + "\n")
}

exports.printlnError = (msg, err, option) => {
  console.error(getErrorMessage(msg, option, err) + "\n")
}

exports.printError = (msg, err, option) => {
  console.error(getErrorMessage(msg, option, err))
}

exports.infoStartingAppMessage = () => {
  lnprintlnInfo(environment.appName + " starting ...")
}