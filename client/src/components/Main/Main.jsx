import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Main.module.css';
import img from '../../img/main-page/main.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { setLobby } from '../../store/actions/lobby';

const Main = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user.userLogin);
  const dispatch = useDispatch();

  const onPlayClick = async () => {
    const response = await axios.post(
      'http://localhost:3001/game/lobby/create',
      {},
      {
        withCredentials: true,
      }
    );
    console.log(response);
    dispatch(setLobby(response.data));
    navigate('/lobby/' + response.data.id);
  };

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
        <Link to="/register" type="button" className={classes.mainRegisterLink}>
          Регистрация
        </Link>
        <div onClick={onPlayClick} className={classes.mainPlayLink}>
          Играть
        </div>
        {/* <Link to="/lobby" type="button" className={classes.mainPlayLink}>
          Играть
        </Link> */}
      </div>
    </div>
  );
};

export default Main;
