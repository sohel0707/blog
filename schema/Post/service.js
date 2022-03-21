const PostModel = require("./model");
const auth = require("../../middleware/auth");

module.exports.getAllPost = async (request) => {
  try {
    auth.verifyToken(request);
    let userId = parseInt(request.id.id);

    if (typeof userId == undefined || userId == null)
      throw new Error("User Not Found");
    return await PostModel.findAll();
  } catch (e) {
    throw e;
  }
};

module.exports.getByUserId = async (request) => {
  try {
    auth.verifyToken(request);
    let userId = parseInt(request.id.id);

    if (typeof userId == undefined || userId == null)
      throw new Error("User Not Found");
    return await PostModel.findOne({
      where: {
        userId,
      },
    });
  } catch (e) {
    // console.error(e)
    throw e;
  }
};

module.exports.createPost = async (args, request) => {
  const { title, content, status } = args;
  if (!title || !content || !status) {
    throw new Error("All fields must be provided");
  }
  auth.verifyToken(request);
  let userId = parseInt(request.id.id);

  if (typeof userId == undefined || userId == null)
    throw new Error("User Not Found");

  return await PostModel.create({
    title,
    content,
    status,
    userId,
  });
};
