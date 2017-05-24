import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './schema';

const app = express();

app.use('/api', graphqlHTTP(req => ({
    schema,
    pretty: true
})));

mongoose.connect('mongodb://localhost/server');

const server = app.listen(2810, () => {
    console.log('Restful api server is listening at port', server.address().port);
});
