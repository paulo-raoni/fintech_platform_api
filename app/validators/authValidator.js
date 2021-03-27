const { check, validationResult } = require("express-validator");

const registerValidators = () => [
  check("username").not().isEmpty().withMessage("username is required"),
  check("password").not().isEmpty().withMessage("password is required"),
  check("cpf").not().isEmpty().withMessage("cpf is required"),
];

const validateFields = (req) => {
    const errorList = [];
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.errors.forEach((error, i) => {
        errorList.push({ [`error-${i}`]: `${error.msg}` });
      });     
    }
    return errorList;
}

module.exports = {
    registerValidators,
    validateFields
}