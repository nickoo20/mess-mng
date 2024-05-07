import React, { useEffect, useState } from "react";
import MessUtil from "./MessUtil";
import axios from "axios";

const MalviyaMess = () => {
  const [data, setData] = useState(null) ;

  const getData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/auth/get-mess-menu",
        { HostelName: "Malviya" }
      );
      setData(res?.data?.menu);
      console.log(res);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <MessUtil HostelName={"Malviya"} Data={data} />
    </div>
  );
};

export default MalviyaMess;
