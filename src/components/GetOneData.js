import { useState, useEffect } from "react";
export default function GetOneData({ url }) {
  const [data, setData] = useState(null);
  useState(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.log(constructor.name, err);
      }
    }
    fetchData();
  }, [url]);
  return <>{data}</>;
}
