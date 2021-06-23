import express from "express";

const port = 3001;

const app = express();

app.get('/', (req, res) => {
    res.json({
        menssge: 'hola mundo xD'
    })
})




app.listen(port, () => {console.log(`server on port ${port}`)})