const userRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const validateForm = require('../middleware/validateForm');
const validateLogin = require('../middleware/validateLogin');

userRouter.post('/register', validateForm, async (req, res) => {
  try {
    const { login, email, password } = req.body;
    const user = await User.findOne({
      where: { email },
    });

    if (user) {
      res.status(400).send({ error: 'Данный email уже существует' });
    } else {
      const newUser = await User.create({
        login,
        email,
        password: await bcrypt.hash(password, 5),
      });
      req.session.user = newUser;
      req.session.isAuthorized = newUser;
      res.json(newUser.id);
    }
  } catch (error) {
    console.error(error);
    res.status(400).send({ error });
  }
});

userRouter.post('/login', validateLogin, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.user = user;
      req.session.isAuthorized = user;
      res.json(user.id);
    } else {
      res.status(404).send({ error: 'Неправильный email и/или пароль' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

userRouter.get('/session', (req, res) => {
  if (!req.session.user) {
    res.json({});
  } else {
    const user = {
      id: req.session.user.id,
    };
    res.json(user);
  }
});

userRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('MyCookie');
  res.end();
});

module.exports = userRouter;
