import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/slice";

const Redux = () => {
    const dispatch=useDispatch()
  const count = useSelector((state) => state.store.count);
  console.log(count, "============");

const handleInc=()=>{
    dispatch(increment())
}
  return (
    <div>
      <h1>{count}</h1>
      <button className=" bg-slate-900 text-white p-4" onClick={handleInc}>Inc</button>
    </div>
  );
};

export default Redux;
