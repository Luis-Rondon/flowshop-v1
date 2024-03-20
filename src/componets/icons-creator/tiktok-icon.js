import * as React from "react"
const Tiktokicon = (props) => (
  <div id="networks-icons">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" opacity={0.5}>
      <path d="M17.291 5.525v7.24a4.525 4.525 0 0 1-4.525 4.526h-7.24A4.525 4.525 0 0 1 1 12.766v-7.24A4.525 4.525 0 0 1 5.525 1h7.24a4.525 4.525 0 0 1 4.526 4.525Z" />
      <path
        strokeWidth={2}
        d="M7.335 9.146a2.715 2.715 0 1 0 2.715 2.715V3.715c.302.905 1.449 2.715 3.62 2.715"
      />
    </g>
  </svg>
  </div>
)
export default Tiktokicon
