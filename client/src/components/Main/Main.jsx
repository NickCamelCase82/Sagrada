import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Main.module.css';
import img from '../../img/main-page/main.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user.userLogin);

  useEffect(() => {
    fetch('http://localhost:3002/session', {
      credentials: 'include',
    })
      .then((data) => data.json())
      .then((user) => dispatch({ type: 'SET_USER', payload: user }));
  }, []);

  const logoutHandler = async (e) => {
    const toBack = await fetch('http://localhost:3002/logout', {
      method: 'GET',
      credentials: 'include',
    }).then((data) => {
      if (data.status === 200) {
        dispatch({ type: 'SET_USER', payload: {} });
      }
    });
  };

  if (user.userLogin) {
    return (
      <div className={classes.mainPage}>
        <div className={classes.mainImgDiv}>
          <img src={img} alt="sagrada-img" className={classes.mainImg} />
          <Link to="/rules" type="button" className={classes.mainRulesLink}>
            Правила
          </Link>
          <Link to="/login" type="button" className={classes.mainLoginLink}>
            Привет, {user.userLogin}!
          </Link>
          <Link
            to="/"
            type="button"
            onClick={logoutHandler}
            className={classes.mainRegisterLink}
          >
            Выйти
          </Link>
          <Link to="/lobby" type="button" className={classes.mainPlayLink}>
            Играть
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.mainPage}>
        <div className={classes.mainImgDiv}>
          <img src={img} alt="sagrada-img" className={classes.mainImg} />
          <Link to="/rules" type="button" className={classes.mainRulesLink}>
            Правила
          </Link>
          <Link to="/login" type="button" className={classes.mainLoginLink}>
            Логин
          </Link>
          <Link
            to="/register"
            type="button"
            className={classes.mainRegisterLink}
          >
            Регистрация
          </Link>
          <Link
            to="/lobby"
            type="button"
            className={classes.mainPlayLink}
          ></Link>
        </div>
      </div>
    );
  }
};

export default Main;
