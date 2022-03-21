const graphql = require("graphql");
const PostType = require('../Post/type')
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLT } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  }),
});

module.exports = UserType;
