import React from "react";
import { forwardRef } from "react";

const Scroll = forwardRef((props, ref) => {
  const style = { position: "absolute", top: "100rem" };
  return (
    <>
      <span style={style} ref={ref}></span>
    </>
  );
});

export default Scroll;
