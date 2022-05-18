import React from 'react';
import FormItem from '../FormItem/FormItem';

export default function ResetPassword() {
  return (
    <div>
      ResetPassword
      <FormItem
        title="Восстановление пароля"
        input={{ email: 'Email' }}
        button={{ submit: 'Отправить' }}
        infoText="Срок действия пароля 24 ч."
        formType="reset_password"
        infoTextAdditional="Для получения временного пароля необходимо ввести email, указанный при регистрации"
      />
    </div>
  );
}
