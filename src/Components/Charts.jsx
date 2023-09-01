import { styled } from "styled-components";
import Chart from "./Chart";
import Featured from "./Featured";

const Container = styled.div`
    padding:5px 20px;;
   display: flex;
   /* align-items: center; */
   gap: 10px;
   
`;


const Charts = () => {
  return <Container>
    <Featured/>
    <Chart title='Revenue in 6 month later' aspect={2/1}/>
  </Container>;
};

export default Charts;
