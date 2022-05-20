function validateLogin(req, res, next) {
  if (!req.body.password || !req.body.login) {
    res.status(400).send({ error: 'Пожалуйста, заполните все данные!' });
    return;
  }
  next();
}

module.exports = validateLogin;
