import * as React from "react"
const Fbicon = (props) => (
  <div id="networks-icons">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#5F5C5D"
      fillOpacity={0.65}
      d="M19.199 0H.8A.8.8 0 0 0 0 .801V19.2A.8.8 0 0 0 .801 20H19.2a.8.8 0 0 0 .801-.801V.8A.8.8 0 0 0 19.199 0Zm-2.31 5.835h-1.598c-1.25 0-1.495.596-1.495 1.47v1.928h2.99l-.39 3.016h-2.6v7.747h-3.12v-7.742H8.069v-3.02h2.609V7.008c0-2.583 1.577-3.988 3.882-3.988 1.105 0 2.052.081 2.33.12V5.84v-.005Z"
    />
  </svg>
  </div>
)
export default Fbicon
