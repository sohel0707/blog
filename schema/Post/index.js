const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const PostType = require("./type");
const {getAllPost, getByUserId, createPost} = require("./service");

const postQuery = new GraphQLObjectType({
  name: "PostQueries",
  fields: {
    getAllPost: {
      type: new GraphQLList(PostType),
      async resolve(parent, args, context) {
        return await getAllPost(context);
      },
    },
    getByUserId: {
      type: PostType,
      async resolve(parent, args, context) {
        return await getByUserId(context);
      },
    },
  },
});
const postMutation = new GraphQLObjectType({
  name: "PostMutation",
  fields: {
    createPost: {
      type: PostType,
      args: {
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        status: { type: GraphQLString }
      },
      async resolve(parent, args, context) {
        return await createPost(args, context);
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: postQuery, mutation:postMutation});
