import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getuserlist } from "../../Redux Thunk/Action_async_thunk/AsyncThunk";

function UserT() {
  const sel = useSelector((y) => y.user.data);

  console.log(sel);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getuserlist(1))
  },[])

  return <></>;
}

export default UserT;
