const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getRoutesList } = require('express-routes-lister');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index');

const setupAndStartServer = async () => {

    // Create the express object
    const app = express();

    app.use(morgan('combined'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);

        getRoutesList(app);

        if (process.env.SYNC_DB) {
            db.sequelize.sync({ alter: true })
        }

    });
}

setupAndStartServer();