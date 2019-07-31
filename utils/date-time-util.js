var dateTime = exports

dateTime.MILISECONDS = 1000
dateTime.SECONDS = 60
dateTime.MINUTES = 60
dateTime.HOURS = 24

const getSecondsInMiliseconds = (seconds) => {
    return seconds * dateTime.MILISECONDS
}

const getMinutesInMiliseconds = (minutes) => {
    return minutes * getSecondsInMiliseconds(dateTime.SECONDS)
}

const getHoursInMiliseconds = (hours) => {
    return hours * getMinutesInMiliseconds(dateTime.MINUTES)
}

const getHoursMinutesSecondsAndMilisecondsInMiliseconds = (hours, minutes, seconds, miliseconds) => {
    return getHoursInMiliseconds(hours) + getMinutesInMiliseconds(minutes) + getSecondsInMiliseconds(seconds) + miliseconds
}

exports.getDateTime = () => {
    var date = new Date()
  
    var hour = date.getHours()
    hour = (hour < 10 ? "0" : "") + hour
  
    var min = date.getMinutes()
    min = (min < 10 ? "0" : "") + min
  
    var sec = date.getSeconds()
    sec = (sec < 10 ? "0" : "") + sec
  
    var year = date.getFullYear()
  
    var month = date.getMonth() + 1
    month = (month < 10 ? "0" : "") + month
  
    var day = date.getDate()
    day = (day < 10 ? "0" : "") + day
  
    return year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec
}

exports.getTime = () => {
    var date = new Date();
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
}

exports.getInitialIntervalMiliseconds = (scheduledTimeInMiliseconds) => {
    var date = new Date()
    var actualTimeInMiliseconds = getHoursMinutesSecondsAndMilisecondsInMiliseconds(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
    if (scheduledTimeInMiliseconds >= actualTimeInMiliseconds) return scheduledTimeInMiliseconds - actualTimeInMiliseconds
    else return scheduledTimeInMiliseconds + getHoursInMiliseconds(dateTime.HOURS) - actualTimeInMiliseconds
}

exports.getHoursMinutesSecondsAndMilisecondsInMiliseconds = (hours, minutes, seconds, miliseconds) => {
    return getHoursMinutesSecondsAndMilisecondsInMiliseconds(hours, minutes, seconds, miliseconds)
}