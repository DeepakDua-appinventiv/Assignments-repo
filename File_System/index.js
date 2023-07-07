const express = require('express');
const multer = require('multer');

const app = express();

const port = 5000;

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, res, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "OR" + ".pdf")
        }
    })
// }).single("note_file");
}).fields([{name:"note_file"},{name:"dummy_file"}]);

app.post("/uploadfile",upload, (req, res) => {
    res.send("file uploaded");
})

app.listen(port, () => {
    console.log("Listning on port " + port);
});