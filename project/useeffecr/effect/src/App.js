import React, { useState, useEffect } from "react";
function App()  {
  const [st, ust] = useState(0);
  const [val, uv] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      ust((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const dec = setInterval(() => {
      uv((prev1) => prev1 - 1);
    }, 1000);
    if (val <= 0) {
      clearInterval(dec);
    }
    return () => clearInterval(dec);
  }, []);
  return (
    <>
      <div className="s">
        <h1>First Counter</h1>
        <p>alsdkjf</p>
        <h1>count: {st} </h1>
        <h1>dec: {val}</h1>
      </div>
    </>
  );
};
export default App;
