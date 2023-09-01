import { Children, useEffect, useMemo, useState } from "react";
import { styled } from "styled-components";
import { userRequest } from "../requsetMethod";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  height: 200px;
  border: 1px solid lightgray;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Rigth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #acaaaa;
`;
const Counter = styled.span`
  font-size: 28px;
  font-weight: 300;
`;
const Visit = styled.div`
  cursor: pointer;
  border-bottom: 1px solid gray;
  width: fit-content;
  font-size: 14px;
`;
const Percentage = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
  gap: 5px;
`;
const Icon = styled.i``;

const UserIcon = styled.i`
  align-self: flex-end;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) => props.color};
  background-color: #${(props) => props.bg};
  padding: 5px;
  border-radius: 10px;
`;

const Span = styled.span``;

const Widget = ({ isMoney, icon, link, color, bg, type, data, perc }) => {
  return (
    <>
      <Container>
        <Left>
          <Title>{type}</Title>
          <Counter>
            {isMoney && "  $"}
            {data.length > 1 && data[1].total }
            {/* {data.length==1 && data[0].total} */}
          </Counter>
          <Visit>
            <Link to={`/${link}`} style={{ textDecoration: "none" }}>
              See all {link}
            </Link>
          </Visit>
        </Left>
        <Rigth>
          <Percentage color={perc > 0 ? "green" : "red"}>
            <Icon>
              {perc >= 0 ? (
                <i class="bi bi-chevron-up"></i>
              ) : (
                <i class="bi bi-chevron-down"></i>
              )}
            </Icon>
            <Span>{Math.floor(perc)}%</Span>
          </Percentage>
          <UserIcon color={color} bg={bg}>
            {icon}
          </UserIcon>
        </Rigth>
      </Container>
    </>
  );
};

export default Widget;
