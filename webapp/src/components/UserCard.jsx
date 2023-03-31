import React from "react";
import styled from "styled-components";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <Card>
      <Img>
        <img src={user.avatar} alt="" />
      </Img>
      <div>
        <h2>{user.first_name}</h2>
        <p>{user.email}</p>
      </div>
    </Card>
  );
};

export default UserCard;

const Card = styled.div`
  background-color: #eee;
  max-width: 100%;
  box-shadow: 0 2px -2px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 10px;
`;
const Img = styled.div`
  img {
    width: 100%;
    height: 200px;
    border-radius: 4px;
  }
`;
