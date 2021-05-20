import * as React from 'react';
import { Flex, Label, Button, Input, Box, Image, Text } from 'theme-ui';
import { useForm } from 'react-hook-form';

import logo from '../../assets/login.png';

type Fields = {
  email: string;
  password: string;
};

type LoginProps = {
  onSubmit: (data: Fields) => void;
};

const Login = ({ onSubmit }: LoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>();

  const onSubmitForm = (data: Fields) => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Flex
        sx={{
          maxWidth: '400px',
          width: '100%',
          border: 'solid 2px #444',
          padding: '32px',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'text',
          fontFamily: 'Arial',
        }}
      >
        <Image sx={{ width: '160px', marginBottom: '32px' }} src={logo} />

        <Box sx={{ width: '100%', marginBottom: '24px' }}>
          <Label htmlFor="e-mail">E-mail</Label>
          <Input
            {...register('email', {
              required: 'O campo e-mail precisa ser preenchido!',

              pattern: {
                message: 'E-mail inválido!',
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              },
            })}
          />
          {errors.email && (
            <Text sx={{ fontSize: '12px', color: 'red' }}>
              {errors.email.message}
            </Text>
          )}
        </Box>
        <Box sx={{ width: '100%', marginBottom: '24px' }}>
          <Label htmlFor="password">Senha</Label>
          <Input
            {...register('password', {
              required: 'A senha é obrigatória!',
              minLength: {
                value: 4,
                message: 'A senha precisa ter no mínimo 4 caracteres!',
              },
            })}
            type="password"
          />
          {errors.password && (
            <Text sx={{ fontSize: '12px', color: 'red' }}>
              {errors.password.message}
            </Text>
          )}
        </Box>

        <Button
          type="submit"
          sx={{ paddingX: '32px', backgroundColor: '#222', cursor: 'pointer' }}
        >
          Login
        </Button>
      </Flex>
    </form>
  );
};

export default Login;
