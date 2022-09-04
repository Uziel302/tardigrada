const { check, validationResult } = require("express-validator");

exports.signupValidation = [
  check("name", "Name should have at least 3 letters").isLength({ min: 3 }),
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
  },
];

exports.loginValidation = [
  check("name", "Name should have at least 3 letters").isLength({ min: 3 }),
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
  },
];
