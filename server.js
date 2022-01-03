const express = require("express");

const app = express();

const port = 3000;

const timeCtrl = (req, res, next) => {
	var currentDate = new Date();
	if (
		currentDate.getDay() == 0 ||
		currentDate.getDay() == 6 ||
		currentDate.getHours() < 8 ||
		currentDate.getHours() > 17
	) {
		res.send("<h1>the server is out for today check back later</h1>");
	} else next();
};

app.use(timeCtrl);

app.use(express.static("public"));

app.listen(port, console.log("server is running"));
