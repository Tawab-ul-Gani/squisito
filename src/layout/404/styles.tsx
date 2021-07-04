import styled from "styled-components";

export const Layout = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #321a1a;
  padding: 15px;
  font-family: "Quicksand", sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const Message = styled.div`
  font-size: 3rem;
  display: flex;
  flex-wrap: wrap;
  color: #ecbea5;
  width: 80%;
`;
export const Home = styled.div`
  padding: 5px 20px;
  border-radius: 5px;
  font-size: 1rem;
  margin: 5px;
  background-color: #ecbea5;
  color: #321a1a;
`;
