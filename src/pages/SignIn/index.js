import React, { useState, useContext } from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

import {
  Container,
  Background,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from "./styles";

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {}

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : "height"} enable>
        <Logo source={require("../../assets/Logo.png")} />
        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate("SignUp")}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
};

export default SignIn;
