import axios from "axios";
import { useState } from "react";
import { publicRequest } from "../requsetMethod";
import { uploadFile } from '@uploadcare/upload-client'

const Upload = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [donloadLink, setDownloadLink] = useState();

  const handleClick = () => {   
   

    const postPic = async () => {
      try {
        const result = await uploadFile(
          file,
          {
            publicKey: '5e41750ac24299fe6d90',
            store: 'auto',
            metadata: {
              subsystem: 'js-client',
              pet: 'cat'
            }
          }
        )
     
        console.log(result,'result');
      } catch (error) {
        console.log(error);
      }
    };
    postPic();
  };

  return (
    <>
      <h1>upload you pic:</h1>
      <div>
        <img
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          src={file ? URL.createObjectURL(file) : "/images/noimage.jpg"}
          alt="there is no image"
        />
        <input
          type="file"
          name="profile"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button onClick={handleClick}>upload</button>

        <div>
          <h1>new </h1>
          <img src="/public/upload/images/profile/newProfile.jps" alt="" />
        </div>
      </div>
    </>
  );
};

export default Upload;
