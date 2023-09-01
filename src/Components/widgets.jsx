import { styled } from "styled-components";
import Widget from "./widget";
import { useEffect, useState } from "react";
import { userRequest } from "../requsetMethod";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const Widgets = () => {

  const [usersStats, setUsersStats] = useState([]);
  const [usersPerc, setUsersPerc] = useState(0);

  const [orderStats, setOrderStats] = useState([]);
  const [orderPerc, setOrderPerc] = useState(0);

  const [earningStats, setEarningStats] = useState([]);
  const [earningPerc, setEarningPerc] = useState(0);

  useEffect(() => {
    const getUserStats = async () => {
      try {
        const res = await userRequest.get("/user/stats");
        console.log("userStats:", res.data);

        if (res.data && res.data.length === 0) {
          setUsersPerc([]);
          setUsersStats(0);
        } else if (res.data && res.data.length === 1) {
          setUsersPerc(100);
          console.log(res.data,'usesrStats when its 1');
          setUsersStats(res.data);
        } else {
          console.log(res.data,'usesrStats when its 2');
          setUsersPerc((res.data[1].total * 100) / res.data[0].total - 100);
          setUsersStats(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserStats();
  }, []);

  useEffect(() => {
    const getOrderStats = async () => {
      try {
        const res = await userRequest.get("/order/stats");

        //test

        if (res.data && res.data.length === 0) {
          setOrderPerc(0);
          setOrderStats(0);
        } else if (res.data && res.data.length === 1) {
          setOrderPerc(100);
          // console.log(res.data[0].total);
          setOrderStats(res.data);
        } else {
          setOrderPerc((res.data[1].total * 100) / res.data[0].total - 100);
          setOrderStats(res.data);
        }



        //teat




        // if (res.data && res.data.length > 1) {
        //   setOrderStats(res.data);
        //   setOrderPerc((res.data[1].total * 100) / res.data[0].total - 100);
        // }
      } catch (error) {
        console.log(error);
      }
    };
    getOrderStats();
  }, []);

  useEffect(() => {
    const getEarningStats = async () => {
      try {
        const res = await userRequest.get("/order/stats/earning");
        // console.log(res.data);
        if (res.data && res.data.length > 1) {
          setEarningPerc((res.data[5].total * 100) / res.data[4].total - 100);
          setEarningStats(res.data.splice(4, 2));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getEarningStats();
  }, []);

  return (
    <Container>
      <Widget
        data={usersStats}
        perc={usersPerc}
        type="users"
        isMoney={false}
        link="Users"
        color="red"
        bg="FEA1A1"
        icon={<i class="bi bi-people"></i>}
      />
      <Widget
        data={orderStats}
        perc={orderPerc}
        type="order"
        isMoney={false}
        link="Orders"
        color="green"
        bg="CCEABB"
        icon={<i class="bi bi-coin"></i>}
      />

      <Widget
        data={earningStats}
        perc={earningPerc}
        type="earning"
        isMoney={true}
        link="Earning"
        color="orange"
        bg="F0EB8D"
        icon={<i class="bi bi-card-list"></i>}
      />
    </Container>
  );
};

export default Widgets;
