#!/bin/bash
pid=`ps -ef | grep node | grep index-gestion-autonomos.js | awk '{print $2}'`
#echo "If there's not a pid start a new process"
if [ -z "$pid" ]; then
    echo " --- > rotate Log <---";
    cp -a $GESTION_AUTONOMOS_HOME/logs/output.log $GESTION_AUTONOMOS_HOME/logs/output."$(date +%Y%m%d-%H%M%S)".log
    echo "Init gestion-autonomos";
    node $GESTION_AUTONOMOS_HOME/index-gestion-autonomos.js > $GESTION_AUTONOMOS_HOME/logs/output.log 2>&1 &
    echo "gestion-autonomos Started *******************************"
else
	echo "The gestion-autonomos process is already running!"
fi