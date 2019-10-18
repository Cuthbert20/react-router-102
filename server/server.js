const express = require('express')
const massive = require('massive')
const app = express()
const PORT = 5005
const ctrl = require("./controller")



app.use(express.json())

app.get('/api/class', ctrl.getClass)
app.put('/api/class/:id', ctrl.updateClassmate)
app.post('/api/class', ctrl.addMate)



//massive is a Promise that is why we get a .then() which means it is async code
//massive is a function that goes out to our database and comes back with some information for us.
massive('postgres://rihgpuzzliroaf:1432f85cb56660b36d0038abb932e2725a4652f2b0bd7b982fabd55da00adf2a@ec2-107-22-160-185.compute-1.amazonaws.com:5432/d7itqrcvbr68mr?ssl=true')
.then((database) => {
    //app.set is part of express it lets us decaire variables that we can access anywhere
    //we are setting db to the database obj.
    app.set('db', database)
    app.listen(PORT, () => console.log(`${PORT} is listening always`))
        console.log('connected to database')
})