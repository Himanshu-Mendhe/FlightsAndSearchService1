const express = require ("express");

require ('dotenv') . config();

const SetupAndStartServer = async () => {
    //create express object
    const app = express();
    const PORT = 3000;

    app.listen (PORT , () =>  {
        console.log(`server started on port ${PORT}`);
        console.log(process.env)
    })
}
SetupAndStartServer();