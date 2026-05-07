import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function LoginForm() {
  const [registrationCode, setRegistrationCode] = useState();
  const [password, setPassword] = useState();
  const [registrationError, setRegistrationError] = useState();
  const [passwordError, setPasswordError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!registrationCode) {
      setRegistrationError("Matrícula é obrigatório");
    }

    if (!password) {
      setPasswordError("Senha é obrigatório");
    }
  };

  const changeRegistrationCode = (e) => {
    setRegistrationCode(e.target.value);
    setRegistrationError("");
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        error={registrationError}
        onChange={changeRegistrationCode}
        placeholder="Matrícula"
        name="registrationCode"
      />
      <Input
        error={passwordError}
        onChange={changePassword}
        placeholder="Senha"
        name="password"
      />
      <Button type="submit">Entrar</Button>
    </form>
  );
}
