const express = require("express");

const getModuleData = require('./utils/module-package')

const app = express();

const applyHbs = require('@notverywellc/templates');

const baseUrl = "/static"

const startServer = ({ port }) => {
    const moduleData = getModuleData();
    const appPath = `/${moduleData.name}`;

    applyHbs(app);

    app.get(appPath, (req, res) => {
        res.render('index', {
            baseUrl: '/static',
            fireAppVersion: "2.0.0/dist",
            title: "My app",
            apps: {foo: {version: '1.0.0', name: "foo"}},
            navigation: {'dummy.main': '/dummy'},
            config: {}
        })
    });

    app.use(
		baseUrl,
        (req, res, next) => {
            next();
        },
		express.Router().get(/\/([.-\w]+)\/([.-\w\d]+)\/(.*)/, (req, res) => {
            console.log(req.params)
        })
    )

    app.listen(port, () => {
		console.log(`server started at: http://localhost:${port}${appPath}`);
	});
}

module.exports = startServer;