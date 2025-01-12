import React from "react";
import styled from "styled-components";
import bg_img from "../assets/IMGS/hero.jpg";

function Hero() {
  return (
    <>
      <Main_hero bg_img={bg_img}>
        <div>
          <h1>
            Turn Your <b> Valuables</b> Into Cash
            <b className="second_bold"> Today</b>
          </h1>
          <p>Quick, Reliable, and Secure Pawning Services</p>
          <button>View More</button>
        </div>
      </Main_hero>
    </>
  );
}
export default Hero;

const Main_hero = styled.div`
  background-image: url(${(props) => props.bg_img});
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  /* margin: 0 auto; */
  justify-content: center;
  align-items: center;
  text-align: center;
  div {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1 {
      margin: 0;
      font-size: 400%;
      b {
        background-color: #ffcb70;
        padding: 0 5px 0 5px;
        color: black;
        border-radius: 1px;
      }
      .second_bold {
        color: #ffcb70;
        padding: 0 5px 0 5px;
        background-color: #383838;
        border-radius: 1px;
      }
    }
    p {
      margin: 0;
      font-size: 150%;
    }
    button {
      font-size: 1rem;
      padding: 5px 14px;
      transition: 0.3s ease;
      background-color: #ffcb70;
      border: none;
      color: black;
      font-weight: 600;
      margin-top: 1rem;
      &:hover {
        transition: 0.3s ease-out;
        background-color: #7d673f;
      }
    }
  }

  @media screen and (max-width: 768px) {
    div {
      h1 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
`;
