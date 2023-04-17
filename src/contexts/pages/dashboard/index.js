//import { useEffect } from "react";
//import { useScrollTrigger } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useGetWords from "../../../hooks/api/useWords";
import Navbar from "./navbar";
//import * as wordApi from "../../services/wordsApi";

export default function Dashboard() {
  //const arrayWords = await wordApi.getWords();
  // const { getWordsLoading, getWords } = useGetWords();
  // console.log("\n\n\n\n\n\n\n***********************");
  // console.log(getWordsLoading);
  // //console.log(getWords());
  // const arrayWords = getWords();
  // console.log(arrayWords);
  const { getWordsLoading, getWords } = useGetWords();
  //const arrayWords = [];
  console.log(getWordsLoading);

  const [arrayWords, setArrayWords] = useState([]);

  useEffect(() => {
    async function loadingWords() {
      const arrayWordsLoaded = await getWords();
      console.log(arrayWordsLoaded);
      setArrayWords(arrayWordsLoaded);
      //return arrayWordsLoaded;
    }
    loadingWords();
  }, []);
  //console.log(arrayWords);

  //try{const arrayWords = await getWords()}catch(err){console.log(err.messsage)}

  function renderWords(arrayWords) {
    console.log("entra");
    console.log(arrayWords.length);
    if (arrayWords.length === 0) {
      return;
    }

    const listWords = arrayWords.map((e) => (
      <WordRow>
        <li>{e.word}</li>
        <li>{e.efactor === 2.5 ? "memorized" : "learning"}</li>
      </WordRow>
    ));
    return listWords;
  }

  return (
    <>
      <Navbar />
      <DashboardContainer>
        <MenuLateral>
          <Items>
            <a className="active" href="#">
              My Anki
            </a>
            <a className="not-active" href="#">
              How use
            </a>
            <a className="not-active" href="#">
              Bills
            </a>
          </Items>
        </MenuLateral>
        <TableWordsContainer>
          <h2>
            LEMBRE-SE DA SUA META: <b>Conseguir um trabalho remoto!</b>
          </h2>
          <h2>
            VOCÊ JÁ APRENDEU <b>322 NOVAS PALAVRAS</b>
          </h2>
          <TableWords>
            <WordRow className="title">
              <li>Word/Phrase</li>
              <li>Memorization level</li>
            </WordRow>
            {arrayWords.length > 1 ? renderWords(arrayWords) : ""}
          </TableWords>

          <h3>VER TODAS PALAVRAS</h3>
        </TableWordsContainer>
      </DashboardContainer>
    </>
  );
}

const DashboardContainer = styled.div`
  height: 100%;
  width: 100%;
  //background-color: #44478d;
  background: linear-gradient(to bottom, #00bfff, #fafafa);
  display: flex;
  align-items: start;
`;

const MenuLateral = styled.div`
  margin-top: 50px;
  padding-top: 50px;
  padding-left: 30px;
  width: 200px;
  height: 800px;
  background-color: white;
  color: #6c60d0;
  display: fixed;
  left: 0px;
  bottom: 0px;
  border-radius: 0px 50px 0px 0px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;

  color: #6c60d0;
  a {
    text-decoration: none;
    margin-top: 10px;
  }
  .not-active {
    color: black;
    opacity: 0.66;
  }
  a:hover {
    opacity: 0.5;
  }
`;

const TableWordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  //height: 200px;
  //background-color: yellow;
  margin: 50px auto;

  h2 {
    margin: 20px;
    opacity: 0.5;
  }

  h3 {
    margin: 20px;
    opacity: 0.5;
  }
  h3:hover {
    opacity: 0.8;
  }
`;

const TableWords = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #2f3335;
  width: 100%;
  border-radius: 20px;
`;
const WordRow = styled.li`
  padding: 12px;
  color: white;
  //font-weight: 100;
  opacity: 0.7;
  border: 0.1px solid rgba(255, 255, 255, 0.2);
  justify-content: space-around;
  display: flex;
  &.title {
    padding-top: 15px;
    opacity: 0.9;
  }
  //margin: 10px 0px;
  //background-color: yellow;
`;
