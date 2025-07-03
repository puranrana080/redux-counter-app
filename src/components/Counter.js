import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementBy5Handler = () => {
    dispatch({ type: "incrementBy5" });
  };
  const decrementBy5Handler = () => {
    dispatch({ type: "decrementBy5" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementBy5Handler}>IncrementBy 5</button>
        <button onClick={decrementBy5Handler}>DecrementBy 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
