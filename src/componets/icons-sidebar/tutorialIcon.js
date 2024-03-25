import * as React from "react"
const tutorialsIcons = (props) => (
  <div id="bottom-icons-box">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={14}
      height={14}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z"
      />
      <path className=""
        fill="#000"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.8 7V4.922L7.6 5.96 9.4 7 7.6 8.04 5.8 9.077V7Z"
      />
    </mask>
    <g mask="url(#a)">
      <path className="icons-bottom" fill="#101040" d="M-.2-.2h14.4v14.4H-.2V-.2Z" />
    </g>
  </svg>
  </div>
)
export default tutorialsIcons
