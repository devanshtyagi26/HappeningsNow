/**
 *? Scroll Component
 *
 * This component acts as a reference point for scrolling.
 * It uses `forwardRef` to allow parent components to scroll to this position.
 */

import React from "react";
import { forwardRef } from "react";

const Scroll = forwardRef((props, ref) => {
  // Inline styling to position the span element at a specific height
  const style = { position: "absolute", top: "100rem" };

  return (
    <>
      {/* Invisible span element used as a scroll target */}
      <span style={style} ref={ref}></span>
    </>
  );
});

export default Scroll;
