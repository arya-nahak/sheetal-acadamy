import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostSlice, { get_post_data } from "../Slice/PostSlice";

function DataPosts() {
  const { list, status } = useSelector((state) => state.posts);
  const dis = useDispatch();

  useEffect(()=>{
    dis(get_post_data({userId:1}))
  },[dis])

  if(status == 'failed'){
    return (<div>Loading..🔃🔃🔃🔃🔃</div>)
  }

  return(
    <>
        <div>
            <ul>
                {
                    list.map((e)=>{
                        return(
                            <li key={e.id}>{e.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default DataPosts;
