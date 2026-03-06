import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send("Authorization header missing");
  }

  let token;

  if (authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  } else {
    token = authHeader;
  }



  try {
    const payload = jwt.verify(
      token,
      "p8uh2jjb47bnwUPYka5vSmvxgcyOFmAk858DZqqe+yo=",
    );

    next();
  } catch (err) {
    console.log(err.message);
    return res.status(401).send("Unauthorized");
  }
};

export default jwtAuth;
