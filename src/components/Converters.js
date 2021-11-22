/* 노마드 코더 ReactJS로 영화 웹 서비스 만들기 3개정판(2021)
react-router 6 나온 바로 직후에 ( 강의는 버전 5 사용 )
unit convert 에 대해 더 나은 버전이 있는 거 같아서 다음과 같이 작성해봄
*/
import { useState } from "react";

export function MinToHour(props) {
  const { dis } = props;
  const [amount, setAmount] = useState(0);
  const [minOrHour, setMinOrHour] = useState(true);

  const onChangeMin = (event) => {
    setMinOrHour(true);
    setAmount(event.target.value);
  };
  const onChangeHour = (event) => {
    setMinOrHour(false);
    setAmount(event.target.value);
  };

  return (
    <div disable={dis}>
      <label htmlFor="min">Minutes</label>
      <input
        type="number"
        id="min"
        value={minOrHour ? amount : amount * 60}
        onChange={onChangeMin}
      />
      <label htmlFor="hour">Hours</label>
      <input
        type="text"
        id="hour"
        value={minOrHour ? amount / 60 : amount}
        onChange={onChangeHour}
      />
    </div>
  );
}

export function KmToMiles() {
  const [amount, setAmount] = useState(0);
  const [minOrHour, setMinOrHour] = useState(true);

  const onChangeMin = (event) => {
    setMinOrHour(true);
    setAmount(event.target.value);
  };
  const onChangeHour = (event) => {
    setMinOrHour(false);
    setAmount(event.target.value);
  };

  return (
    <div>
      <label htmlFor="min">Km</label>
      <input
        type="number"
        id="min"
        value={minOrHour ? amount : amount * 60}
        onChange={onChangeMin}
      />
      <label htmlFor="hour">Miles</label>
      <input
        type="text"
        id="hour"
        value={minOrHour ? amount / 60 : amount}
        onChange={onChangeHour}
      />
    </div>
  );
}

export function Main() {
  const [index, setIndex] = useState("x");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>super converter</h1>
      <select name="" id="" value={index} onChange={onSelect}>
        <option value="x">Select Converter</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">km & Miles</option>
      </select>
      <MinToHour disable={index !== "0"} />
      <KmToMiles disable={index !== "1"} />
    </div>
  );
}
