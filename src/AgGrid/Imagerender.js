import React from "react";

const Imagerender = (params) => {
  return (
    <>
      <img src={params.data.thumbnailUrl} />
    </>
  );
};

export default Imagerender;
