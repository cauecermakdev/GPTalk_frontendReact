import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../layouts/Auth";

import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Row, Title, Label } from "../../components/Auth";
import Link from "../../components/Link";

//import EventInfoContext from "../../contexts/EventInfoContext";
import useSignUp from "../../hooks/api/useSignUp";

const eventInfo = {
  backgroundImageUrl:
    "https://st3.depositphotos.com/3591429/18431/i/600/depositphotos_184311644-stock-photo-white-background-template-for-copy.jpg",
  logoImageUrl: "../../assets/img/gptalk gptalk.jpg",
  title: "",
};

export default function Enroll() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();

  //const { eventInfo } = useContext(EventInfoContext);

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
    <AuthLayout Layout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img
          src={require("../../assets/img/gptalk gptalk.jpg")}
          alt="Event Logo"
          width="160px"
        />
      </Row>
      <Row>
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
          >
            Inscrever
          </Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in">Já está inscrito? Faça login</Link>
      </Row>
    </AuthLayout>
  );
}
