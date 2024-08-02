import axios from "axios";
import { useEffect, useState } from "react";

export default function HttpCats() {
  const [data, setData] = useState({
    url: "",
    status: 404,
  });

  useEffect(() => {
    const httpCats = async () => {
      const result = await axios.get(`https://http.dog/${data.status}.jpg`);
      setData({
        url: result.config.url || "",
        status: result.status,
      });
    };
    httpCats();
  }, [data.status]); //Status가 바뀔때마다 실행

  return (
    <div>
      <img src={data.url} alt="" />
    </div>
  );
}
