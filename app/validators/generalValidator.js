const registerValidator = (body) => {
  const validationList = [];
  const errorsList = [];

  if (!body.username) validationList.push("username is required");
  if (!body.password) validationList.push("password is required");
  if (!body.cpf) validationList.push("cpf is required");
  if (!body.name) validationList.push("name is required");

  if (validationList.length)
    validationList.forEach((error, i) =>
      errorsList.push({ [`error-${i}`]: `${error}` })
    );

  return errorsList;
};

module.exports = {
  registerValidator,
};
