const express = require("express");

const getModuleData = require('./utils/module-package')

const app = express();

const startServer = ({ port }) => {
    const moduleData = getModuleData();
    const appPath = `/${moduleData.name}`;
    app.listen(port, () => {
		console.log(`server started at localhost with port: ${port}${appPath}`);
	});
}

module.exports = startServer;