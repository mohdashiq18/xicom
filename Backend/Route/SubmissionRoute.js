const express = require("express");
const submissionAPI = express.Router();
const multer = require('multer');
const fs = require('fs');
const { SubmissionModel } = require("../ModelSchema/Submission");

const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
    
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const extension = file.mimetype.split('/')[1];;
        cb(null, file.originalname+"."+extension);
    }
});

const upload = multer({ 
    storage: storage
});

submissionAPI.post("/", upload.array('documents', 5), async (req, res) => {
    const { fName, lName, email, DOB, rStreet1, rStreet2, pStreet1, pStreet2 } = req.body;
    const documents = req.files.map(file => ({
        path: file.path
    })); 

    try {
      const data= await SubmissionModel({ fName, lName, email, DOB, rStreet1, rStreet2, pStreet1, pStreet2, documents });
      data.save()
      res.send(data)
    } catch (error) {
        console.error('Error handling submission:', error);
        res.status(500).send("Error");
    }
});

module.exports = {submissionAPI};
