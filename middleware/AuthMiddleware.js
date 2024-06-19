const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
async function AuthMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Authentication Invalid" });
  }
  const token = authHeader.split("")[1];
  console.log(authHeader);
  console.log(token);

  try {
    const { username, userid } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { username, userid };
    next();
    // return res.status(StatusCodes.OK).json({ data });
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Authentication Invalid" });
  }
}
module.exports = AuthMiddleware;
