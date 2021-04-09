const express = require('express');
const app = express();
const mockUserData = [
    {name: 'Mark'},
    {name: 'Jull'}
]
app.get('/users',function(req, res) {
    res.json({success: true, message: 'User Mock', users: mockUserData })
})
app.listen(8000, function(){
    console.log('server runnning')
})