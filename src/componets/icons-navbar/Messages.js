import * as React from "react"
const Messages = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path className="messagestroke"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.615 7.676h9.778m-9.778 4.942h7.333m-6.11 6.176H5.17c-.973 0-1.906-.39-2.593-1.085a3.726 3.726 0 0 1-1.074-2.62V5.205c0-.983.386-1.926 1.074-2.62A3.647 3.647 0 0 1 5.17 1.5h14.666c.973 0 1.905.39 2.593 1.085a3.726 3.726 0 0 1 1.074 2.62v9.883c0 .983-.386 1.926-1.074 2.62a3.647 3.647 0 0 1-2.593 1.086h-3.666L12.504 22.5l-3.667-3.706Z"
    />
  </svg>
)
export default Messages