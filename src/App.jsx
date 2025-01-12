import styled from "styled-components";
import MainContent from "../src/Component/MainContent";
import Navbar from "./Component/Navbar";
import React, { useState } from "react";
import Data from "./Component/Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from './Component/Hero'

function App() {
  const [userInp, setUserInp] = useState("");
  let [click, setClick] = useState(false);
  const [oldData, setOldData] = useState(Data);

  return (
    <>
      <Main_css>
        <Navbar
          userInp={userInp}
          setUserInp={setUserInp}
          setClick={setClick}
          setOldData={setOldData}
        />

        <Routes>
          <Route
            path="/"
            element={
              <MainContent
                userInp={userInp}
                setClick={setClick}
                oldData={oldData}
                setOldData={setOldData}
                click={click}
              />
            }
          />
          <Route path="/home" element={<Hero />} />
        </Routes>
      </Main_css>
    </>
  );
}

export default App;

const Main_css = styled.div`
  display: flex;
  gap: 0.1px;
  flex-direction: column;
`;
