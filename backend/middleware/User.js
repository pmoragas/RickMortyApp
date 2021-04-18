const jwt = require("jsonwebtoken");

exports.isValidUser = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Access Denied' })

  try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET)
      req.user = verified
      next()
  } catch (error) {
      res.status(400).json({error: 'Invalid token'})
  }
}