import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import express from "express";
import {connect } from "./database"

const port = 3001;

const app = express();
connect();

app.get('/', (req, res) => {add
    res.json({
        menssge: 'hola mundo xD'
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}),);

app.listen(port, () => {console.log(`server on port ${port}`)})