const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname + "/data.js")


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.listen("3000", function () {
    console.log("the server is hosted on port 3000");
});




let day = "";
let items = ["Eat Your Protein", " 8 Hours of sleep", "Workout"];
let workList = [];

app.get("/", function (req, res) {


    let day = date.getDay();
    res.render("todolist", { listTitle: day, newListItem: items });

});


app.get("/work", function (req, res) {
    res.render("todolist", { listTitle: "Work List", newListItem: workList });
});

app.get("/about", function (req, res) {
    res.render("about");
});


app.post("/", function (req, res) {
    console.log(req.body);
    let item = req.body.newItem;
    if (req.body.list == "Work") {
        workList.push(item);
        res.redirect("/work")
    }
    else {
        items.push(item);
        res.redirect("/");
    }
});

app.post("/work", function (req, res) {
    let work = req.body.newItem;
    workList.push(work);
    res.redirect("/work");
});

