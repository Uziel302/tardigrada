const { check, validationResult } = require("express-validator");
const { login, signUp } = require("./controllers/auth.controller");

exports.signupAndValidation = [
  check("firstName", "First name should have at least 3 letters").isLength({
    min: 3,
  }),
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({
        message: errors.errors[0].msg,
      });
    }
    return signUp(req, res);
  },
];

exports.loginAndValidation = [
  check("email", "Email should have at least 3 letters").isLength({ min: 3 }),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({
        message: errors.errors[0].msg,
      });
    }
    return login(req, res);
  },
];
