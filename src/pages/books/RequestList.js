import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";
/**
 * books/requests 최근 리퀘스트 리스트를 리턴합니다.
 * books/requests/:id id와 관련된 리퀘스트 리스트를 리턴합니다.
 * books/requests?isbn13=1234567890123 isbn13 과 관련된 리퀴스트 리스트를 리턴합니다.
 * books/request?title=?
 */
export default function RequestList() {
  // const { title, isbn13 } = queryString(useLocation().search);
  // const { id } = useParams();
  const [result, setResult] = useState("");
  useEffect(() => {
    const url = "http://localhost:8000/api/v1/requests";
    async function fetchData() {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setResult(jsonData.reqeusts);
      } catch (err) {
        setResult([]);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {result
        ? result.map((item, idx) => item)
        : "해당하는 검색결과가 존재하지 않습니다."}
    </>
  );
}
