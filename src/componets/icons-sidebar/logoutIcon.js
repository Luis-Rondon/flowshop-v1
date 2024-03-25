import * as React from "react"
const logoutIcons = (props) => (
  <div id="bottom-icons-box">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props} 
  >
    <path className="icon-logout"
      fill="#F4190B"
      d="M5.996 0v8.096h2.008V0H5.996ZM2.05 2.05a7 7 0 1 0 9.9 0l-1.41 1.41a5.007 5.007 0 1 1-7.08 0L2.05 2.05Z"
    />
  </svg>
  </div>
)
export default logoutIcons
