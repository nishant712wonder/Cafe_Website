const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const Order = require("./models/base");
require("./db/conn");

const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.json());

app.get("/", (req, res) => {
	res.render("index");
});

app.post("/submit", async (req, res) => {
	const newOrder = new Order(req.body);
	newOrder
		.save()
		.then(data => {
			res.send(data);
		})
		.catch(e => {
			res.status(400).send(e);
		});
});

app.listen(port, () => {
	console.log(`server is running on ${port}`);
});
