import { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import { GlobalStyle } from "./GlobalStyles";
import styled from "styled-components";
import { Loader } from "./components/Loader";
function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const usersData = async () => {
    setIsLoading(true);
    const response = await fetch("http://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <GlobalStyle />
      <Navbar data={usersData} />
      <Container>
        {users ? (
          users.map((user, key) => <UserCard user={user} key={key} />)
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 1000px;
  padding: 15px;
  margin: 0 auto;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
`;
