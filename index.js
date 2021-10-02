const express = require("express");

const getModuleData = require('./utils/module-package')

const app = express();

const startServer = ({ port }) => {
    const moduleData = getModuleData();
    const appPath = `/${moduleData.name}`;

    app.get(appPath, (req, res) => {
        res.send(`Hello, ${moduleData.name}`)
    });

    app.listen(port, () => {
		console.log(`server started at: localhost:${port}${appPath}`);
	});
}

module.exports = startServer;