import { useState } from "react";
import styled from "styled-components";
import logo from "../../../../assets/img/gptalk gptalk.jpg";

//const [clicked, setClicked] = useState(false);
const userAvatar =
  "https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png";

export default function Navbar() {
  const [clicked, setClicked] = useState(0);

  return (
    <NavbarContainer>
      <Logo>
        <img alt="gptalk_logo" src={logo}></img>
      </Logo>
      <ContainerWords>
        <div
          onClick={() => setClicked(0)}
          className={`${clicked === 0 ? "clicked" : "not_clicked"}`}
        >
          Aprendendo
        </div>
        <div
          onClick={() => setClicked(1)}
          className={`${clicked === 1 ? "clicked" : "not_clicked"}`}
        >
          Aprendido
        </div>
      </ContainerWords>

      <UserContainer>
        <p>Username</p>
        <ImgUserContainer>
          <img src={userAvatar}></img>
        </ImgUserContainer>
      </UserContainer>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: fixed;
  top: 0px;
  left: 0px;
  background-color: #24263c;
  color: white;
  height: 80px;
  width: 100%;
  z-index: 1;
`;
const Logo = styled.div`
  width: "30px";
  opacity: 0.6;
  //margin-rigth: 200px;
  img {
    height: 80px;
    margin-left: 15px;
  }

  &:hover {
    opacity: 1;
  }
`;
const ContainerWords = styled.div`
  cursor: pointer;
  display: flex;
  background-color: #323445;
  height: 45px;
  width: 400px;
  border-radius: 12px;
  margin: auto;

  .clicked {
    border-radius: 12px;
    height: 40px;
    margin: 2.5px 2.5px auto 2.5px;
    background-color: #6262e4;
    width: 200px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.75;
    }
  }

  .not_clicked {
    margin: auto;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.75;
    &:hover {
      opacity: 1;
    }
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
const ImgUserContainer = styled.div`
  display: flex;
  img {
    margin: 0px 15px;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    opacity: 0.3;
    &:hover {
      opacity: 0.7;
    }
  }
`;
