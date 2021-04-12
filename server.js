const express = require('express');
const app = express();
// const bodyparse = require('body-parser')
const mockUserData = [
    {name: 'Mark'},
    {name: 'Jull'}
]
// app.use(bodyparse.json)

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.post('/login', function(res, req) {
    const username = res.body.username
    const password = res.body.password

    const mockUserame = 'biilyThekid'
    const mockPassword = 'supperSecrect'
    if (username===mockUserame && password===mockPassword) {
        req.json({add:ddd})
    } else {
        req.json({:=sss: })
    }
})

app.get('/users/:id',function(req, res) {
    console.log(req.params.id)
    res.json({success: true, message: 'User Mock', users: mockUserData })
})

app.listen(8000 , 'localhost', function(){
    console.log('server runnning')
})