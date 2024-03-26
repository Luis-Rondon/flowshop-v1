import React, { useState, useRef, useEffect } from "react";
import "../creator/creator-componets.css";

const Helpicon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const tooltipRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
    className={`help-button ${isClicked ? 'clicked' : ''}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} fill="none">
        <path
          fill="#6335FF"
          fillOpacity={isHovered || isClicked ? 1 : 0.5}
          d="M6.468 10.4c.227 0 .42-.079.577-.236a.782.782 0 0 0 .235-.576.786.786 0 0 0-.235-.578.781.781 0 0 0-.577-.235.783.783 0 0 0-.577.236.788.788 0 0 0-.236.577c0 .227.079.42.236.577.157.157.35.235.577.235Zm-.585-2.503h1.202c0-.357.04-.639.122-.845.082-.205.312-.487.69-.845.282-.281.504-.55.667-.804.162-.255.243-.56.243-.918 0-.607-.222-1.073-.666-1.398-.444-.325-.97-.487-1.576-.487-.618 0-1.118.163-1.503.487a2.585 2.585 0 0 0-.804 1.17l1.072.423c.054-.195.176-.406.366-.634.19-.227.48-.341.869-.341.347 0 .607.095.78.285.173.19.26.398.26.625 0 .217-.065.42-.195.61s-.293.365-.487.528c-.477.422-.77.742-.878.958-.108.217-.162.612-.162 1.186ZM6.5 13c-.9 0-1.744-.17-2.535-.512a6.552 6.552 0 0 1-2.064-1.39A6.56 6.56 0 0 1 .512 9.036 6.34 6.34 0 0 1 0 6.5c0-.9.17-1.744.512-2.535a6.574 6.574 0 0 1 1.39-2.064A6.56 6.56 0 0 1 3.964.512 6.34 6.34 0 0 1 6.5 0c.9 0 1.744.17 2.535.512.79.342 1.479.805 2.064 1.39a6.568 6.568 0 0 1 1.39 2.063c.34.79.511 1.636.511 2.535 0 .9-.17 1.744-.512 2.535a6.574 6.574 0 0 1-1.39 2.064 6.567 6.567 0 0 1-2.063 1.39A6.318 6.318 0 0 1 6.5 13Z"
        />
      </svg>
      {(isHovered || isClicked) && (
        <div className="help-tooltip" ref={tooltipRef}>
          Lorem ipsum
        </div>
      )}
    </div>
  );
};

export default Helpicon;