import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Data from "./Data";
import image from "./200x300.png";
import err from "./error.png";
function mainContent({ userInp, click, setOldData, oldData }) {
  useEffect(() => {
    const filtered = Data.filter((file) => {
      return file.name.toLowerCase().includes(userInp.toLowerCase());
    });

    setOldData(filtered);
  }, [userInp, click]);
  return (
    <>
      <Main_hero_Two>
        <h1>Tending</h1>
        <div className="mainContent">
          {oldData.length == 0 ? (
            <div className="error">
              <img src={err} alt="ERROR" className="errimg" />
              <h3 className="match">Match not found!!</h3>
            </div>
          ) : (
            oldData.map((value, i) => {
              return (
                <CardContainer key={i}>
                  <img src={image} alt="" />
                  <h1>{value.name}</h1>
                  <p>{value.description}</p>
                  <div className="price-avb">
                    <h3>Prise {value.prise}₹</h3>
                    {value.status == "available" ? (
                      <div className="status">
                        <button className="btn_status">{value.status}</button>
                        <button className="buy">Buy</button>
                      </div>
                    ) : value.status == "pending" ? (
                      <button className="pending">{value.status}</button>
                    ) : (
                      <button className="sold">{value.status}</button>
                    )}
                  </div>
                </CardContainer>
              );
            })
          )}
        </div>
      </Main_hero_Two>
    </>
  );
}
export default mainContent;
const Main_hero_Two = styled.div`
  margin-top: 2rem;
  height: fit-content;
  background-color: #9b8864;
  color: black;
  display: flex;
  gap: 2rem;
  /* flex-wrap: wrap; */
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;

  .error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 50%;
      margin: 0 auto;
    }
    h3 {
      /* margin: 0 auto; */
      font-size: 3rem;
    }
    @media screen and (max-width: 768px) {
      .errimg{
        width: 70%;
      }
        .match{
          margin: 0 auto;
          font-size: 2rem;
          text-align: center;
        }

    }
  }
  .mainContent {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 0 0px;
    align-items: center;
    h1,
    h3,
    p {
      margin: 0;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 6rem;
    gap: 0.5rem;
  }
`;
const CardContainer = styled.div`
  /* background-color: #000000; */
  background: linear-gradient(
    135deg,
    ☐ rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 5px 10px 10px 0 rgba(0, 0, 0, 0.7);
  padding: 0.6rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.2rem;
  justify-content: center;
  margin: 0 auto;
  color: white;
  transition: 0.2s ease-in;
  &:hover {
    scale: 1.03;
    transition: 0.2s ease-out;
  }
  h1,
  p,
  h3,
  button {
    margin: 0;
  }
  h1 {
    font-size: 1.5rem;
    color: black;
  }
  p {
    font-size: 1rem;
    color: #242424;
  }
  h3 {
    font-size: 1.2rem;
    color: #2b2929;
  }
  .price-avb {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    button {
      font-size: 1.1rem;
      height: 1.5rem;
      text-transform: uppercase;
      width: 100%;
      margin: 0 auto;
      border: none;
      border-radius: 5px;
    }
    .pending {
      background-color: #f4a100;
      &:hover {
        background-color: #c48508;
      }
    }
    .sold {
      background-color: #e81500;
      &:hover {
        background-color: #a7190c;
      }
    }
  }
  img {
    aspect-ratio: 1;
    object-fit: cover;
    transition: 0.2s ease;
    border-radius: 20px;
  }
  .status {
    display: flex;
    justify-content: center;
    gap: 1rem;
    button {
      width: 90%;
      margin: 0 auto;
      border: none;
      border-radius: 5px;
    }
    .btn_status {
      background-color: #28a745;
      &:hover {
        background-color: #0a7f25;
      }
    }
    .buy {
      background-color: #0061f2;
      &:hover {
        background-color: #08439a;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    h1 {
      font-size: 14px;
    }
    p {
      font-size: 10px;
    }
    h3 {
      font-size: 16px;
    }
    .price-avb button {
      font-size: 0.6rem;
      height: 1.1rem;
      text-transform: uppercase;
      width: 100%;
      margin: 0 auto;
      border: none;
      border-radius: 5px;
    }
  }
`;
