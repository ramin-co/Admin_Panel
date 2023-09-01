import { styled } from "styled-components";
import Widgets from "../Components/widgets";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/Sidebar";
import Charts from "../Components/Charts";
import Transactions from "../Components/Transactinos";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;
const HomeContainer = styled.div`
  flex: 14;
  /* background-color:red; */
  min-height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <SideBar />
      <HomeContainer>
        <Navbar />
        <Widgets />
        <Charts />
        <Transactions />
      </HomeContainer>
    </Container>
  );
};

export default Home;
