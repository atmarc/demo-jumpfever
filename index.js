const express = require('express')
const app = express()

app.use('/static', express.static(__dirname + '/static'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html')
})

app.set('port', (process.env.PORT || 3000))

app.listen(app.get('port'), () => {
	console.log('Server started on port ' + app.get('port'))
})