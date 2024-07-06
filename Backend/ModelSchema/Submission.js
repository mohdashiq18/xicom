const mongoose = require("mongoose")
const SubmissionSchema = mongoose.Schema({
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    email: { type: String, required: true },
    DOB: { type: String, required: true },
    rStreet1:{ type: String, required: true },
    rStreet2:{ type: String, required: true },
    pStreet1: { type: String },
    pStreet2: { type: String },
    documents: [{ path:{type: String,required:true} }]
})

const SubmissionModel = mongoose.model("candidate", SubmissionSchema)
module.exports = { SubmissionModel }