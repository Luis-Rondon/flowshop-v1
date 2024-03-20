import * as React from "react"
const paymentsIcons = (props) => (
  <div id="icons-box">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#101040"
      d="M11.79.7a1.474 1.474 0 0 1 1.473 1.474v.737h-4.42a3.684 3.684 0 0 0 0 7.368h4.42v.737a1.474 1.474 0 0 1-1.473 1.474H1.473A1.474 1.474 0 0 1 0 11.016V2.174A1.474 1.474 0 0 1 1.474.7H11.79Zm.736 3.684A1.474 1.474 0 0 1 14 5.858v1.474a1.474 1.474 0 0 1-1.474 1.473H8.842a2.21 2.21 0 0 1 0-4.42h3.684ZM8.842 5.858a.737.737 0 1 0 0 1.474.737.737 0 0 0 0-1.474Z"
    />
  </svg>
  </div>
)
export default paymentsIcons
