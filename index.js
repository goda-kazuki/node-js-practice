const express = require('express');
const multer = require("multer");
const uuidv4 = require("uuid/v4");

const app = express();

app.use(multer().none());
app.use(express.static("web"));

const todoList = [{title: "タイトル", id: "1234", done: false}];

app.get("/api/v1/list", function (req, res) {
  res.json(todoList);
});

app.post("/api/v1/add", function (req, res) {
  const todoData = req.body;
  const todoTitle = todoData.title;

  const id = uuidv4();

  const todoItem = {
    id,
    title: todoTitle,
    done: false
  };

  todoList.push(todoItem);

  console.log("Add: " + JSON.stringify(todoItem));

  res.json(todoItem);
});

app.delete("/api/v1/item/:id", function (req, res) {
  const index = todoList.findIndex(function (item) {
    return item.id === req.params.id;
  });

  if (index >= 0) {
    const deleted = todoList.splice(index, 1);
    console.log("Delete:" + JSON.stringify(deleted[0]));
  }
  res.sendStatus(200);
});

app.put("/api/v1/item/:id", function (req, res) {

  const index = todoList.findIndex(function (item) {

    return item.id === req.params.id;
  });

  if (index >= 0) {
    const item = todoList[index];

    item.done = req.body.done === "true";
    console.log("PUT:" + JSON.stringify(item))
  }

  res.sendStatus(200);

});

app.listen(3000, () => console.log("サーバー立ち"));