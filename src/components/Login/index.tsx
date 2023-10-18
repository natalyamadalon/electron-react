import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

const Login = (): JSX.Element => {
  return (
    <Box maxW="sm" p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Login
      </Text>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Seu email" />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Senha</FormLabel>
        <Input type="password" placeholder="Sua senha" />
      </FormControl>

      <Button mt={4} colorScheme="teal" width="full">
        Entrar
      </Button>

      <Text mt={2}>
        <Link color="teal.500" href="#">
          Esqueceu a senha?
        </Link>
      </Text>

      <Text mt={2}>
        Ainda não tem uma conta?{" "}
        <Link color="teal.500" href="#">
          Criar novo usuário
        </Link>
      </Text>
    </Box>
  );
};

export default Login;
