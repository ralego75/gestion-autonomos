pid=`ps -ef | grep node | grep index-gestion-autonomos.js | awk '{print $2}'`
#echo "Pkill process ${pid}..."
if [ -z "$pid" ]; then
	echo "index-gestion-autonomos not running!"
else
	kill $pid
	echo "Process $pid killed."
fi