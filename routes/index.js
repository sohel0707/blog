const express = require('express')
const router = express.Router()
const { graphqlHTTP } = require("express-graphql");
const user = require('../schema/User')
const post = require('../schema/Post')

// router.use("/user", user)
// router.use("/post", post)
router.use(
    "/post",
    graphqlHTTP({
      schema:post,
      graphiql: true,
    })
  );

  router.use(
    "/user",
    graphqlHTTP({
      schema:user,
      graphiql: true,
    })
  );
module.exports = router