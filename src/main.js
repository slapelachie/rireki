const express = require('express')
const path = require('path')

const app = express()
const port = 1110
const root_directory = path.resolve(__dirname, '../')

app.set('views', path.join(root_directory, "views/"))
app.set('view engine', 'pug')

app.use(express.static(path.join(root_directory, 'public')))
app.use('/', require(path.join(root_directory, 'src/routes/root.js')))

// 404
app.get(/^(.+)$/, function(req, resp){
	resp.status(404);
	resp.render('error', {
		code: "404", 
		code_desc: "Page Not Found"
	});
});	

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})