const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request");
//     res.send("This is the homepage");
// })

app.get('/', (req, res) => {
    res.send('This is the homepage');  // This is a message
})

app.get('/add/:a/:b', (req, res) => {
    var a=parseInt(req.params.a);
    var b=parseInt(req.params.b);
    var sum=(a+b).toString()
    res.send(sum)
    
})

app.get('/subtract/:a/:b', (req, res) => {
    var a=parseInt(req.params.a);
    var b=parseInt(req.params.b);
    var sub=(a-b).toString()
    res.send(sub);
})

app.get('/multiply/:a/:b', (req, res) => {
    var a=parseInt(req.params.a);
    var b=parseInt(req.params.b);
    var mul=(a*b).toString()
    res.send(mul);
})

app.get('/divide', (req, res) => {
    var a=parseInt(req.params.a);
    var b=parseInt(req.params.b);
    var div=(a/b).toString()
    res.send(div);
})

app.get('/modulo', (req, res) => {
    var a=parseInt(req.params.a);
    var b=parseInt(req.params.b);
    var mod=(a%b).toString()
    res.send(mod);
})


app.listen(8080, () => {
    console.log("Listening on port 8080");
})
