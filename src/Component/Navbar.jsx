import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import navImg from "../assets/IMGS/nav img.png";
import Data from "./Data";
import { Link } from "react-router-dom";
function Navbar({ setUserInp, setOldData, oldData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let [btn, setBtn] = useState("");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  let inpval = (e) => {
    let Drum = e.target.value;
    setUserInp(Drum);
  };
  // useEffect(() => {
  const filtered = useMemo(() => {
    if (!btn) return Data; // Return all data if no category is selected
    return Data.filter((file) => {
      return file.category.toLowerCase().includes(btn);
    });
  }, [btn]);
  useEffect(() => {
    setOldData(filtered);
  }, [filtered, setOldData]); // Update old data when filtered data changes
  return (
    <Wrapper>
      <nav>
        <img src={navImg} alt="LOGO" className="logo" />
        <div className="search">
          <input type="text" placeholder="search" onChange={inpval} />
          <button>➤</button>
        </div>
        <ul className={isMenuOpen ? "active" : ""}>
          <Link to="/home">
            <li
              onClick={() => {
                setUserInp("");
              }}
            >
              <a>Home</a>
            </li>
          </Link>
          <Link to="/">
            <li
              onClick={() => {
                setBtn("antique");
                setUserInp("");
              }}
            >
              <a>Antiques</a>
            </li>
          </Link>
          <Link to="/">
            <li
              onClick={() => {
                setBtn("jewelry");
                setUserInp("");
              }}
            >
              <a>Jewelry</a>
            </li>
          </Link>
          <Link to="/">
            <li
              onClick={() => {
                setBtn("car");
                setUserInp("");
              }}
            >
              <a>Cars</a>
            </li>
          </Link>
          <Link to="/">
            <li
              onClick={() => {
                setBtn("bike");
                setUserInp("");
              }}
            >
              <a>Bikes</a>
            </li>
          </Link>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </Wrapper>
  );
}
export default Navbar;
const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
  text-align: center;
  color: white;
  height: 8vh;
  margin-bottom: 5px;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    background-color: #000;
    border-bottom: 2px solid var(--border_color);
    padding: 0 1rem;
    position: relative;
  }
  .logo {
    height: 4rem;
  }
  .search {
    background-color: #242424;
    width: 30%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
  }
  .search input {
    border: none;
    outline: none;
    padding: 0.5rem;
    border-radius: 5px;
    width: 90%;
  }
  .search button {
    background-color: #ffcb70;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    color: black;
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    background-color: #ffcb70;
    color: black;
    font-weight: 600;
    font-size: 1rem;
    padding: 5px 14px;
    border-radius: 5px;
    transition: 0.3s ease;
    font-family: "Bebas Neue", serif;
    font-weight: 700;
    &:hover {
      background-color: #d3ad69;
      border-radius: 15px;
    }
  }
  a {
    text-decoration: none;
  }
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    z-index: 10;
  }
  .hamburger span {
    width: 25px;
    height: 3px;
    background-color: white;
    border-radius: 5px;
  }
  /* Media query for tablets and smaller devices */
  /* Media query for mobile devices */
  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      justify-content: flex-start;
      height: auto;
      padding: 0.3rem;
    }
    .search {
      width: 90%;
      margin-bottom: 0.8rem;
    }
    ul {
      background-color: #242424;
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0.5rem;
      width: 100%;
      gap: 1rem;
      border-radius: 10px;
      overflow: scroll;
      overflow-y: scroll;
    }
    .logo {
      height: 4rem;
    }
  }
`;
// const Link= styled.div`
//  li {
//     background-color: #ffcb70;
//     color: black;
//     font-weight: 600;
//     font-size: 1rem;
//     padding: 5px 14px;
//     border-radius: 5px;
//     transition: 0.3s ease;
//     font-family: "Bebas Neue", serif;
//     font-weight: 700;
//     &:hover {
//       background-color: #d3ad69;
//       border-radius: 15px;
//     }
//   }
// `
