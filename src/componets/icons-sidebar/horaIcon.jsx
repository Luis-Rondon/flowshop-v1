import * as React from "react"
const HoraIcon = (props) => (
  <div className="icon-hora">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={39}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#6335FF"
        d="M39 19.5a19.5 19.5 0 1 1-39 0 19.5 19.5 0 0 1 39 0ZM19.5 8.531a1.219 1.219 0 1 0-2.438 0v13.406a1.219 1.219 0 0 0 .615 1.058l8.531 4.875a1.219 1.219 0 0 0 1.209-2.115L19.5 21.23V8.53Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h39v39H0z" />
      </clipPath>
    </defs>
  </svg>
  </div>
)
export default HoraIcon
