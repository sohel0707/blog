const graphql = require("graphql");
const axios = require('axios');
const fetch =require("node-fetch");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const UserType = require("./type");
const { login, signup} = require("./service");

const UserQuery = new GraphQLObjectType({
  name: "UserQueries",
  fields: {
    user: {
      type: GraphQLString,
      async resolve(parent, args, context, info) {
        // hardcoded the string because return tye of method is string and in query we have to pass  the parameters id, name
        let res = await fetch(process.env.HASURA_ENDPOINT,{
                method:"POST",
                body: JSON.stringify({"query":`query my{
                  user{
                    id,
                    name
                  }
                }`}),
                headers: {
                  'Content-Type': 'application/json',
                  'x-hasura-admin-secret':process.env.HASURA_SECRET_KEY
              }
              
        }
        )
        return  JSON.stringify(await res.json())
      },
    },
  },
});

const UserMutation = new GraphQLObjectType({
  name: "UserMutation",
  fields: {
    login: {
      type: GraphQLString,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(parent, args, context) {
        
        return await login(args.email, args.password);
      },
    },
    signup:{
      type: GraphQLString,
      args: {
        name:{ type: GraphQLString},
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(parent, args) {
        return await (await signup(args.name, args.email, args.password));
      },
    }
  },
});

module.exports = new GraphQLSchema({query:UserQuery,  mutation:UserMutation });
