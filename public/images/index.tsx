import { CounterModel } from "../../models/CounterModel";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Counter(counter: CounterModel): JSX.Element {
  const { endCount, duration } = counter;
  const [count, setCount] = useState("0");
  useEffect(() => {
    let start = 0;
    const end = parseInt(endCount.substring(0, 3));
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + endCount.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [endCount, duration]);
  return <div>{count}</div>;
}
