import React from "react";
import styled from "styled-components";

const Navbar = ({ data }) => {
  return (
    <Nav>
      <h1>LGMVIP PERSON</h1>
      <button onClick={data}>Get Users</button>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  width: 100%;
  height: 10vh;
  padding: 5px;
  background-color: #000300;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  h1 {
    background: linear-gradient(to right, #55c57a, transparent);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 36px;
    margin-left: 200px;
  }
  button {
    display: block;
    margin-right: -250px;
    cursor: pointer;
    font-size: 16px;
    padding: 5px;
    border-radius: 5px;
    color: whitesmoke;
    background: linear-gradient(to right, #7ed56f, #28b485);
  }
`;
