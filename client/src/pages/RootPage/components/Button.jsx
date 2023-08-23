import React, {useRef} from "react";
import { useButton } from "react-aria";

export default function Button(props) {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  );
}
