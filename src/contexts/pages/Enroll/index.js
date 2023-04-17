import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../layouts/Auth";

import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Row, Title, Label } from "../../components/Auth";
import Link from "../../components/Link";

import EventInfoContext from "../../contexts/EventInfoContext";

import useSignUp from "../../hooks/api/useSignUp";

export default function Enroll() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();

  const { eventInfo } = useContext(EventInfoContext);

  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast("As senhas devem ser iguais!");
    } else {
      try {
        await signUp(name, whatsapp, email, password);
        toast("Inscrito com sucesso! Por favor, faça login.");
        navigate("/");
      } catch (error) {
        toast("Não foi possível fazer o cadastro!");
      }
    }
  }

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Cadastro</Label>
        <form onSubmit={submit}>
          <Input
            label="name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="whatsapp"
            type="text"
            fullWidth
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <Input
            label="E-mail"
            type="text"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Repita sua senha"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            fullWidth
            disabled={loadingSignUp}
          ></Button>
        </form>
      </Row>
      <Row>
        <Link to="/">Login</Link>
      </Row>
    </AuthLayout>
  );
}
