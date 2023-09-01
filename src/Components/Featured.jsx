import { styled } from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import { userRequest } from "../requsetMethod";

const Container = styled.div`
  flex: 3;
  /* border: 1px solid gray; */
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;
const Chart = styled.div`
  width: 200px;
  height: 200px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  text-align: center;
`;
const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: gray;
`;
const Icon = styled.i``;
const Title2 = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: gray;
`;
const Amount = styled.span`
  font-size: 50px;
  font-weight: 300;
`;
const Des = styled.p`
  text-align: center;
  color: gray;
  font-size: 14px;
`;
const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* padding: 10px; */
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
const ItemTitle = styled.span`
  font-size: 16px;
  font-weight: 590;
  color: gray;
`;
const ItemValue = styled.div`
  color: ${(props) => (props.color === "positive" ? "green" : "red")};
  display: flex;
  gap: 5px;
`;

const ItemValueText = styled.span``;

// const Top=styled.div``

const Featured = () => {
  const [stats, setStats] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getStats = async () => {
     try {
      const res = await userRequest.get("order/stats/dayli");
    
      console.log(res.data,'daily')
      if(res.data && res.data.length ===1){
        setPerc(  100) ;
        setStats(res.data[0].total)
      }else if(res.data.length >1){
        setPerc(res.data[1].total*100/res.data[0].total-100);
        setStats(res.data[1].total)
      }else{
        setPerc(0)
      }
     } catch (error) {
      console.log(error)
     }
    };
    getStats();
  },[]);

 

  return (
    <Container>
      <Top>
        <Title>Total Revenue</Title>
        <Icon>
          <i class="bi bi-three-dots-vertical"></i>
        </Icon>
      </Top>
      <Bottom>
        <Chart>
          <CircularProgressbar value={perc} text={`${Math.floor(perc)} %`} strokeWidth={5} />
        </Chart>
        <Title2>Total salles made today</Title2>
        {/* {console.log('ststs:',stats[0].total)} */}
        <Amount>$ { stats }</Amount>
       
        <Des>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
          aspernatur!
        </Des>
        <Items>
          <Item>
            <ItemTitle>Target</ItemTitle>
            <ItemValue color="negative">
              <Icon>
                <i class="bi bi-chevron-down"></i>{" "}
              </Icon>
              <ItemValueText>$ 12.4k</ItemValueText>
            </ItemValue>
          </Item>
          <Item>
            <ItemTitle>Last Week</ItemTitle>
            <ItemValue color="positive">
              <Icon>
                <i class="bi bi-chevron-up"></i>
              </Icon>
              <ItemValueText>$ 12.4k</ItemValueText>
            </ItemValue>
          </Item>
          <Item>
            <ItemTitle>Last Month</ItemTitle>
            <ItemValue color="positive">
              <Icon>
                <i class="bi bi-chevron-up"></i>
              </Icon>
              <ItemValueText>$ 12.4k</ItemValueText>
            </ItemValue>
          </Item>
        </Items>
      </Bottom>
    </Container>
  );
};

export default Featured;
