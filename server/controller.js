
module.exports = {
    //using async and await
    getClass: async (req,res) => {
        //req.app.get is the partner function to req.app.set
        const db = req.app.get("db")
        //now we can run db like a function
        const classList = await db.get_class()//returns a promise but, instead of a .then.....
        // console.log(classList)
        //from our database, server, frontend
        res.status(200).send(classList)
    },
    updateClassmate: async (req,res) => {
        const db = req.app.get('db')
        const {phone, address, name} = req.body
        const {id} = req.params
       const updateMate = await db.update_classmate({phone, address, name, id})
        res.status(200).send(updateMate)
    },
    addMate: (req,res) => {
        const db = req.app.get('db')
        const {phone,address,name} = req.body
        db.add_mate([name,phone,address])
        .then(result => {
            res.status(200).send(result)
        })
    },
    deleteMate: 
}