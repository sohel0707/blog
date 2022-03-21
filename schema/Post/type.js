const graphql = require("graphql");
const { Field } = require("pg-protocol/dist/messages");
const UserType = require('../User/type')
const { GraphQLObjectType, GraphQLInt, GraphQLString, link } = graphql;

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    status: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    userId:{type: GraphQLInt}
    // user: {type: UserType}
  }),
});

module.exports = PostType;
