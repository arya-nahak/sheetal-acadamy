import React, { useMemo, useState } from "react";

function Using_Memo({ text }) {
    
  const [data, setdata] = useState(false);

  const mydata = () => {
    console.log("data is repeating");
    return text.slice(0, 30).concat("...");
  };

  const truncateText = useMemo(() => {
    console.log("data is not repeating");
    return text.slice(0, 30).concat("...");
  }, [text]);

  return (
    <>
      <div onClick={() => setdata(!data)}>
        {data ? text : truncateText}
        {data ? 'Less' : 'Show more'}
      </div>
    </>
  );
}

export default Using_Memo;
