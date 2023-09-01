import { styled } from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts";
import { useEffect, useState } from "react";
import { userRequest } from "../requsetMethod";

const data = [
  { name: "tir", total: 1000 },
  { name: "mordad", total: 950 },
  { name: "shahrivar", total: 300 },
  { name: "mehr", total: 890 },
  { name: "aban", total: 1100 },
  { name: "azar", total: 1350 },
];

const Title = styled.h1`
  font-size: 20px;
  /* font-weight:bold; */
  margin-bottom: 20px;
  margin-left: 10px;
  color:gray;
  

`;

const Container = styled.div`
  flex: 6;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius:10px;

  
`;
const months = [
  "farvardin",
  "ordibehesht",
  "khorded",
  "tir",
  "mordad",
  "shahrivar",
  "mehr",
  "aban",
  "azar",
  "day",
  "bahman",
  "esfand",
];

const Chart = ({aspect, title}) => {
  const [orderStats, setOrderStats]=useState([]);
  useEffect(()=>{
    const getStats=async()=>{
      const res=await userRequest.get('order/stats/earning');
      // console.log(res.data)
      setOrderStats(res.data.map(order=>{
         order._id=months[order._id-1];
         return order;
      }))
    }
    getStats();
  },[])
  
  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%"  aspect={aspect}>
        <LineChart
          width={'100px'}
          height={'50px'}
          data={orderStats}
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
            <defs>
                <linearGradient id="total" x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset='95%' stopColor="#8884d8" stopOpacity={0}/>

                </linearGradient>
            </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="lightgray"/>
          <XAxis dataKey="_id"  stroke="gray"/>
          <Tooltip />
          <Area      type="monotone"
            dataKey="total"
            stroke="#8884d8" opacity={1} />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Month" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;
