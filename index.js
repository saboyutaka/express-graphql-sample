const express = require('express');
const { gql } = require('graphql-tag');
const fs = require('fs');
const { join } = require('path');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = gql(fs.readFileSync(join(__dirname, 'schema.graphql'), 'utf8'));
const resolvers = require('./resolvers')
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);

app.listen(4000);
