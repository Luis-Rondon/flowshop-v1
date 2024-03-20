import * as React from "react"



const Aspect = (props) => (

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path className="AspectFill"
     fill="#fff" 
      d="M12.004 2.656a9.344 9.344 0 0 1 0 18.688V2.656Zm0-2.156a11.5 11.5 0 1 0 0 23 11.5 11.5 0 0 0 0-23Z"
    />
  </svg>
)
export default Aspect;