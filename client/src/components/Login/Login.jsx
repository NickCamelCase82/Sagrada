import React from 'react';
import FormItem from '../FormItem/FormItem';

const Login = () => {
  return (
    <div>
      Login
      <FormItem
        title="Вход"
        input={{ email: 'email', password: 'Пароль' }}
        button={{ submit: 'Войти', redirect: 'Регистрация' }}
        link="/register"
        formType="login"
      />
    </div>
  );
}

export default Login;
