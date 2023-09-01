import { styled } from "styled-components";

const Name = styled.span`
  margin-left: 10px;
  margin-right: 2px;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const Container = styled.div`

  display: flex;
  align-items: center;
`;

const Staus=styled.span`
    color:${props=> props.color==='active' ? 'green' :'gold'};
    background-color:${props=> props.color==='active' ? 'lightgreen' :'#FFF9C9'};
    padding: 3px 7px;
    border-radius:10px;
`

export const rows = [
  {
    id: 1234,
    product: "plastation",
    customer: "ramin",
    img: "/images/users/image1.jpg",
    date: "may",
    amount: 350,
    paymentMethod: "online",
    status: "Approved",
  },
  {
    id: 1234,
    product: "plastation",
    img: "/images/users/image1.jpg",
    customer: "ramin",
    date: "may",
    amount: 350,
    paymentMethod: "online",
    status: "pending",
  },
  {
    id: 1234,
    product: "plastation",
    img: "/images/users/image1.jpg",
    customer: "ramin",
    date: "may",
    amount: 350,
    paymentMethod: "online",
    status: "pending",
  },
  {
    id: 1234,
    product: "plastation",
    img: "/images/users/image1.jpg",
    customer: "ramin",
    date: "may",
    amount: 350,
    paymentMethod: "online",
    status: "Approved",
  },
  {
    id: 1234,
    product: "plastation",
    customer: "ramin",
    date: "may",
    amount: 350,
    paymentMethod: "online",
    status: "pending",
    img: "/images/users/image1.jpg",
  },
  {
    id: 1234,
    product: "plastation",
    img: "/images/users/image1.jpg",
    customer: "ramin",
    date: "may",
    amount: 350,
    paymentMethod: "online",
    status: "Approved",
  },
];

export const columns = [
    { field: "id", headerName: "Tracking Id", width: 150 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <Container>
            <Image src={params.row.img} />
            <Name>{params.row.product }</Name>
          </Container>
        );
      },
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 200,
    },
    { field: "date", headerName: "Date", width: 150 },
    { field: "amount", headerName: "Amount", width: 150 },
    { field: "paymentMethod", headerName: "Payment Method", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell:(params)=>{
          return(<Staus color={params.row.status}>
                  {params.row.status}
          </Staus>)
      }
    },
  ];
  
