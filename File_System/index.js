const express = require('express');
const multer = require('multer');
let fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
app.use(bodyParser.json());

const port = 6000;

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, res, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname  + ".txt")
        }
    })
// }).single("note_file");
// }).fields([{name:"note_file"},{name:"dummy_file"}]);
}).any();

app.post("/uploadfile",upload, (req, res) => {
    res.send("file uploaded");
})


// file merge from upload folder and copy as new file in backup folder
app.post("/merge", (req, res) => {
    const { f1, f2} =req.body;
    const path1 = "./uploads/"+f1;
    const path2 = "./uploads/"+f2;
    const f3 = `abc_${Date.now()}.txt`
    const path3 = "./backup/"+f3;
    fs.readFile(path1, 'utf8', (err, data1) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Data 1 copied")
        fs.writeFile(path3,data1,(err) => {
            if (err) {
                console.error(err);
                return;
            }
        })
    });
    fs.readFile(path2, 'utf8', (err, data2) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Data 2 copied")
        fs.appendFile(path3,data2,(err) => {
            if (err) {
                console.error(err);
                return;
            }
        })
    });
    res.send("Merged data saved in  backup")
});

// file read from backup folder
app.post('/read', (req,res) => {
    const { f1 } =req.body;
    const path1 = "/home/admin446/Desktop/Assignments/File_System/backup/"+f1;
    fs.readFile(path1, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Data read");
        res.send(data);
    });
})

// file delete from upload folder
app.delete('/delete', (req,res) => {
    const { f1 } =req.body;
    const path1 = "/home/admin446/Desktop/Assignments/File_System/uploads/"+f1;
    fs.unlink(path1, (data) => {
        console.log("File deleted");
        res.send(data);
    });
    res.status(200).send("File ")
})



app.listen(port, () => {
    console.log("Listning on port " + port);
})