const express = require('express')
const cors = require("cors")
const dotenv = require("dotenv");
const { Connection } = require('./Config/Config');
const { submissionAPI } = require('./Route/SubmissionRoute');
dotenv.config();
const port = process.env.PORT || 3000
const app = express()
app.use(cors(
    {
        origin: "https://66890cbd4250ed700658726e--lovely-granita-96eb46.netlify.app"
    }
))
app.use(express.json());
app.listen(port, async () => {
    try {
       await Connection
        console.log(`server is running PORT ${port}`);
    }
    catch {
        console.log("Connection Error");
    }
})
app.use("/submission",submissionAPI)