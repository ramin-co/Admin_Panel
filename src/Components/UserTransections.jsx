import { styled } from "styled-components";
import { rows, columns } from "../data/userTransectionsData";
import {DataGrid} from '@mui/x-data-grid'


const Container = styled.div`
   padding: 20px;
   margin: 10px 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

`;
const Title=styled.h1`
    font-size: 20px;
    font-weight: 500;
    color:gray;
    margin-bottom:20px;
`

const UserTransections = () => {
  return (
    <Container>
        <Title>last 6 month Transections</Title>
      <DataGrid style={{border:'1px solid lightgray', borderRadius:'10px', }}
    
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Container>
  );
};

export default UserTransections;
