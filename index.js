const express = require("express");

const app = express();

const startServer = ({ port }) => {
    app.listen(port, () => {
		console.log(`server started at localhost with port: ${port}`);
	});
}

module.exports = startServer;