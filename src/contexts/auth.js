import React, { useState, createContext } from "react";
import firebase from "../services/firebaseConnection";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //Cadastrar usuário
  async function signUp(email, password, nome) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .set({ saldo: 0, nome: nome })
          .then(() => {
            let data = { uid: uid, nome: nome, email: value.user.email };
            setUser(data);
          });
      });
  }

  return (
    /* !!user --> converte a propriedade user para booleano, ou seja, se o user receber null ou nada ele vai ser FALSO e mandar para as telas de cadastro ou de login, se receber algum usuario ele vai ser TRUE  */
    <AuthContext.Provider value={{ signed: !!user, user, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
