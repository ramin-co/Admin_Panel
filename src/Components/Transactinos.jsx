import { styled } from "styled-components";
import {  } from "../data/data";
import { useEffect, useState } from "react";
import { userRequest } from "../requsetMethod";
import {format} from 'timeago.js'
const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  color: gray;
`;
const Container = styled.div`
  padding: 20px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  color: #4f4557;
  padding: 30px;
`;
const Thead = styled.thead``;
const Row = styled.tr`
  border-bottom: 1px solid lightgray;
  padding: 100px;
`;
const Td = styled.td`
  padding: 20px 0px;
`;
const Th = styled.th`
  padding: 20px 0px;
`;

const Span = styled.span`
  color: ${(props) => (props.color == "pending" ? "goldenrod" : "green")};
  background-color: 
    ${(props) => (props.color == "pending" ? "lightyellow" : "lightgreen")};
  padding: 5px 10px;
  border-radius: 5px;
`;

const ImageName = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Tbody = styled.tbody``;

const Transactions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await userRequest.get("/order/find");
          
        setData(res.data.sort((a,b)=>b.createdAt-a.createdAt));
      } catch (error) {}
    };
    getData();
  }, []);

  return (
    <Container>
      <Title>Latest Transactions</Title>
      <Table>
        <Thead>
          <Row>
            <Th>Tracking id</Th>
            <Th>Product</Th>
            <Th>Customer</Th>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Payment Method</Th>
            <Th>Status</Th>
          </Row>
        </Thead>
        <Tbody>
          
          {data.map((d,index) => (
            
            <Row key={d.id}>
              <Td>{index+1}</Td>
              <Td>
                <ImageName>
                  {d._id}
                </ImageName>
              </Td>
              <Td>{d.customer}</Td>
              <Td>{format(d.createdAt)}</Td>
              <Td>{d.amount}</Td>
              <Td>{d.payment}</Td>
              <Td>
                <Span color={d.status}>{d.status}</Span>
              </Td>
            </Row>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Transactions;
