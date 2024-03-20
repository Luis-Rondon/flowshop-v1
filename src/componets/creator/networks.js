import React from "react";
import './creator-componets.css';
import Xicon from '../icons-creator/X-icon'
import Instagramicon from "../icons-creator/instagram-icon";
import Yticon from "../icons-creator/yt-icon";
import Fbicon from "../icons-creator/fb-icon";
import Tiktokicon from "../icons-creator/tiktok-icon";

const Networks = () => {

    return(
    <>
        <div className="container-network">
            <span className="network-tittle">Esta publicación es para:</span>
        </div>
        <div className="icons-container">
        <Instagramicon/>
        <Yticon/>
        <Fbicon/>
        <Xicon/>
        <Tiktokicon/>
        </div>

    </>
    )
}

export default Networks