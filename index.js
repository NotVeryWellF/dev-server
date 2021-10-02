const express = require("express");

const getModuleData = require('./utils/module-package')

const app = express();

const applyHbs = require('@notverywellc/templates');

const startServer = ({ port }) => {
    const moduleData = getModuleData();
    const appPath = `/${moduleData.name}`;

    applyHbs(app);

    app.get(appPath, (req, res) => {
        res.render('index', {
            baseUrl: '/static',
            fireAppVersion: "1.0.0",
            title: "My app",
            apps: {foo: {version: '1.0.0', name: "foo"}},
            navigation: {'dummy.main': '/dummy'},
            config: {}
        })
    });

    app.listen(port, () => {
		console.log(`server started at: localhost:${port}${appPath}`);
	});
}

module.exports = startServer;