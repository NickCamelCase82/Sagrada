import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Players.module.css';

export default function Players() {
  return (
    <>
      <div className={classes.topnav}>
        <Link to="/">На главную</Link>
        <Link to="/logout">Выйти</Link>
        <p>id игры</p>
        <p>имя пользователя</p>
      </div>
      <ol className={classes.rounded}>
        <li><p>Лиза</p></li>
        <li><p>Маша</p></li>
        <li><p>Коля</p></li>
        <li><p>Олег</p></li>
      </ol>
      <div className={classes.btnDiv}>
        <button className={classes.btn}>Начать</button>
      </div>
    </>
  )
}

