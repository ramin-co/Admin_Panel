import SideBar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { userRequest } from "../requsetMethod";
import { uploadFile } from "@uploadcare/upload-client";
import { color } from "@mui/system";

const Container = styled.div`
  display: flex;
`;

const NewContainer = styled.div`
  flex: 14;
`;
const Top = styled.div`
  margin: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
const Bottom = styled.div`
  margin: 20px;
  padding: 20px;
  display: flex;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  position: relative;
`;

const SuccesBuild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  color: green;
  width: 50%;
  height: 50%;
  border: 1px solid gray;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  opacity: ${(props) => (props.status ? 1 : 0)};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid lightgray;
  /* justify-content: space-between; */
`;
const Upload = styled.button`
  margin-top: 20px;
  color: gray;
  cursor: pointer;
  background-color: white;
  width: 50%;
  padding: 5px 20px;
  border: 0.5px solid lightgray;
  &:disabled {
    color: red;
    cursor: not-allowed;
  }
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const Title = styled.h1`
  color: gray;
  font-size: 20px;
  font-weight: 500;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;
const InputItem = styled.div`
  width: 40%;
`;
const Icon = styled.i`
  cursor: pointer;
  margin-left: 10px;
`;
const Lable = styled.label`
  color: "red";
`;
const Input = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
`;

const Button = styled.button`
  width: 200px;
  padding: 10px 20px;
  color: white;
  background-color: teal;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  margin-top: 20px;
  &:disabled {
    color: teal;
    cursor: not-allowed;
  }
`;

const Select = styled.select`
  width: 100%;
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 15px;
`;
const Option = styled.option``;
const IconTic = styled.i`
  color: green;
  font-size: 40px;
`;
const SuccesUpload = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
const Text = styled.span`
  font-size: 14px;
`;
const TextUp = styled.span`
  font-size: 14px;
  margin-left: 10px;
  color: teal;
`;
const UpBtn = styled.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const New = ({ title, formData }) => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({});
  const [pic, setPic] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [success, setSuccess] = useState(false);
  // console.log(pic);
  // console.log(data);

  useEffect(() => {
    setData({ ...data, img: pic });
    console.log(data, "fata eFFrct");
  }, [pic]);

  const handleUpload = () => {
    const upload = async () => {
      try {
        const result = await uploadFile(file, {
          publicKey: "5e41750ac24299fe6d90",
          store: "auto",
          metadata: {
            subsystem: "js-client",
            pet: "cat",
          },
        });
        if (result.isImage && result.isStored) {
          setPic(result.cdnUrl);
          setTimeout(() => {
            console.log(pic, "seted images link after upload");
          }, 3000);
          setIsUpload(false);
        } else {
          console.log("there is some problem in upload your image .... ");
        }
      } catch (error) {
        console.log(error);
      }
    };
    file && setIsUpload(true);
    file && upload();
  };

  const handleClick = async () => {
    console.log(data, "before send to server");
    const createUP = async () => {
      try {
        const res = await userRequest.post(
          data.title ? "/product" : "/auth/register",
          data
        );
        if (res.data) {
          setIsFetching(false);
          console.log(res.data, "response");
          setIsFetching(false);
          setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    data.img && setIsFetching(true);
    data.img && createUP();
  };

  const handleChange = (e) => {
    const details = data;
    switch (e.target.name) {
      case "title":
        details.title = e.target.value;
        break;
      case "desc":
        details.desc = e.target.value;
        break;
      case "color":
        details.color = [e.target.value];
        break;
      case "catogeries":
        details.catogeries = [e.target.value];
        break;
      case "size":
        details.size = [e.target.value];
        break;
      case "price":
        details.price = e.target.value;
        break;
      case "stock":
        details.stock = e.target.value;
        break;
      case "name":
        details.name = e.target.value;
        break;
      case "lastname":
        details.lastname = e.target.value;
        break;
      case "username":
        details.username = e.target.value;
        break;
      case "email":
        details.email = e.target.value;
        break;
      case "password":
        details.password = e.target.value;
        break;
      case "address":
        details.address = e.target.value;
        break;
      case "phone":
        details.phone = e.target.value;
        break;

      default:
        break;
    }
    setData(details);
    console.log(data, "data");
  };

  return (
    <Container>
      <SideBar />
      <NewContainer>
        <Navbar />
        <Top>
          <Title>{title}</Title>
        </Top>
        <Bottom>
          {/* <SuccesBuild status={success}>seccecced</SuccesBuild> */}
          <Left>
            <Image src={pic ? pic : "/images/noimage.png"} />
            {!pic ? (
              <Upload onClick={handleUpload} disabled={isUpload}>
                {isUpload ? (
                  "uploading..."
                ) : (
                  <UpBtn>
                    <i
                      class="bi bi-cloud-upload"
                      style={{ fontSize: "20px", color: "teal" }}
                    ></i>{" "}
                    <TextUp>Upload</TextUp>
                  </UpBtn>
                )}
              </Upload>
            ) : (
              <SuccesUpload>
                <IconTic>
                  <i class="bi bi-check-circle"></i>
                </IconTic>
                <Text>UPLOADED YOU PICTURE</Text>
              </SuccesUpload>
            )}
          </Left>

          <Right>
            <InputItem>
              Image:
              <Icon htmlFor="file">
                <i class="bi bi-folder-plus" for="file"></i>
              </Icon>
              <Input
                type="file"
                id="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  setIsFetching(false);
                  setIsUpload(false);
                }}
              />
            </InputItem>
            {formData.map((user) => (
              <InputItem key={user.id}>
                <Lable>{user.lable}</Lable>
                {user.type === "select" ? (
                  <Select
                    name={user.lable.toLowerCase()}
                    onChange={(e) => handleChange(e)}
                  >
                    {user.options.map((value, index) => (
                      <Option key={index}>{value}</Option>
                    ))}
                  </Select>
                ) : (
                  <Input
                    name={user.lable.toLowerCase()}
                    type={user.type}
                    placeholder={user.palceholder}
                    onChange={(e) => handleChange(e)}
                  />
                )}
              </InputItem>
            ))}
            <Button onClick={handleClick} disabled={isFetching || isUpload}>
              Send
            </Button>
          </Right>
        </Bottom>
      </NewContainer>
    </Container>
  );
};

export default New;
