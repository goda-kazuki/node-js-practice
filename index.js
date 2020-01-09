var express = require('express');
var app = express();

app.use(express.static("web"));

var listener = app.listen(3000, () => console.log(listener.address().port));

app.get('/', function (req, res) {
    res.send('ページが表示されました！');
});

app.get("/api/v1/list",function (req,res) {
    const todoList=[
        {title:"javascriptの勉強",done:true},
        {title:"Node.jsを勉強",done:true},
        {title:"Web APIを作る",done:false},
    ];
    res.json(todoList);
});
