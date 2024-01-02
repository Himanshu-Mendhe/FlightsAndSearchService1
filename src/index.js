const express = require ("express");
const bodyParser = require("body-parser")

const { PORT } = require ('./config/serverConfig')
const apiRoutes = require ('./routes/index')

const SetupAndStartServer = async () => {
    //create express object
    const app = express();


    app.use('/api',apiRoutes)

    app.listen (PORT , () =>  {
        console.log(`server started on port ${PORT}`);
    })
}
SetupAndStartServer();